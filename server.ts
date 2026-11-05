import express, { Request, Response, NextFunction } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import zlib from 'zlib';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.disable('x-powered-by');
app.use(express.json());

const COMPRESSIBLE_MIME_RE = /^(text\/|application\/(javascript|json|manifest\+json|xml|xhtml\+xml)|image\/svg\+xml)/i;

function edgeCacheHeaders(req: Request, res: Response, next: NextFunction) {
  const urlPath = req.path;
  if (urlPath.startsWith('/assets/')) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (/\.(webp|avif|mp4|webm|woff2?|png|jpe?g|svg|ico)$/i.test(urlPath)) {
    res.setHeader('Cache-Control', 'public, max-age=604800, stale-while-revalidate=86400');
  }
  next();
}

function productionCompressionMiddleware(req: Request, res: Response, next: NextFunction) {
  const acceptEncoding = req.headers['accept-encoding'] || '';
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return next();
  }

  const supportsBrotli = /\bbr\b/.test(acceptEncoding);
  const supportsGzip = /\bgzip\b/.test(acceptEncoding);
  if (!supportsBrotli && !supportsGzip) {
    return next();
  }

  const origWrite = res.write.bind(res);
  const origEnd = res.end.bind(res);
  let stream: zlib.BrotliCompress | zlib.Gzip | null = null;
  let initialized = false;

  const initCompressionIfEligible = () => {
    if (initialized) return;
    initialized = true;

    if (res.getHeader('Content-Encoding')) return;
    const contentType = String(res.getHeader('Content-Type') || '');
    if (!COMPRESSIBLE_MIME_RE.test(contentType)) return;

    res.removeHeader('Content-Length');
    res.setHeader('Vary', 'Accept-Encoding');

    if (supportsBrotli) {
      res.setHeader('Content-Encoding', 'br');
      stream = zlib.createBrotliCompress({
        params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 4 },
      });
    } else {
      res.setHeader('Content-Encoding', 'gzip');
      stream = zlib.createGzip({ level: 6 });
    }

    stream.on('data', (chunk) => origWrite(chunk));
    stream.on('end', () => origEnd());
  };

  res.write = ((chunk: unknown, encoding?: BufferEncoding | ((error: Error | null | undefined) => void), cb?: (error: Error | null | undefined) => void) => {
    initCompressionIfEligible();
    if (stream) {
      return stream.write(chunk as Buffer, encoding as BufferEncoding, cb);
    }
    return origWrite(chunk as Buffer, encoding as BufferEncoding, cb);
  }) as typeof res.write;

  res.end = ((chunk?: unknown, encoding?: BufferEncoding | (() => void), cb?: () => void) => {
    initCompressionIfEligible();
    if (stream) {
      if (chunk) {
        stream.end(chunk as Buffer, encoding as BufferEncoding, cb);
      } else {
        stream.end(cb as (() => void) | undefined);
      }
      return res;
    }
    return origEnd(chunk as Buffer, encoding as BufferEncoding, cb);
  }) as typeof res.end;

  next();
}

async function startServer() {
  app.use(edgeCacheHeaders);

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(productionCompressionMiddleware);
    const distDir = path.resolve(process.cwd(), 'dist');

    app.use(
      '/assets',
      express.static(path.join(distDir, 'assets'), {
        maxAge: '1y',
        immutable: true,
        etag: true,
      })
    );

    app.use(
      express.static(distDir, {
        maxAge: '7d',
        etag: true,
        setHeaders: (res, filePath) => {
          if (filePath.endsWith('index.html')) {
            res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
          }
        },
      })
    );

    app.get('*', (_req, res) => {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
