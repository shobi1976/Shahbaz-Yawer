import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Google Search Grounding API Route using gemini-3.8-flash and googleSearch tool
app.post('/api/search-grounding', async (req, res) => {
  try {
    const { query, category } = req.body;
    if (!query || typeof query !== 'string') {
      return res.status(400).json({ error: 'Query is required and must be a string.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ 
        error: 'GEMINI_API_KEY is not configured in the server environment.' 
      });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const systemInstruction = `You are the official search grounding oracle for "Ludo Emperor 5 Way" (5-player pentagonal dual-dice asymmetric ludo).
Your core ethos: "DON'T LET THE WINNER WIN THE MATCH".
Canonical mechanics:
1. 5-Wing Pentagonal Matrix (72 cells, 5 factions: Blue, Orange, Green, Red, Yellow)
2. Dual-Dice Split Movement (can allocate to 2 separate pawns or sprint 1 pawn)
3. Unlimited Double-Six momentum (no 3-six limit)
4. Lucky 7 Bonus (any dice sum = 7 converts to double-six 6+6 = 12 steps plus free extra roll)
5. Missed Capture Penalty (sparing an enemy pawn sends your own pawn back to base)
6. The Lucky Wish (pre-set secret values summoned once per game; 6+6 sum of 12 restricted)
7. AI Dynamic Leader-Targeting (getMatchLeader() focuses all bot armies on the #1 ranked frontrunner)
8. 90-Second Royal Clock
9. Interactive Guiding Hand (👇)
10. Live Presence, Voice Taunts & Custom Cyber Lounges

Use Google Search grounding to verify, cross-reference with real-world board gaming facts, e-sports benchmarks, tabletop rules, and global localization. Provide concise, high-authority answers with citations where applicable.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: `${systemInstruction}\n\nUser Question / Search Query (${category || 'General'}): ${query}`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || 'No response generated.';
    
    // Extract search grounding metadata if available
    const candidate = response.candidates?.[0];
    const groundingMetadata = candidate?.groundingMetadata;
    const searchQueries = groundingMetadata?.webSearchQueries || [];
    const searchChunks = groundingMetadata?.groundingChunks || [];

    return res.json({
      answer: text,
      searchQueries,
      sources: searchChunks.map((chunk: any) => ({
        title: chunk.web?.title || 'Web Reference',
        url: chunk.web?.uri || '#',
      })).filter((s: any) => s.url !== '#'),
    });
  } catch (error: any) {
    console.error('Search grounding error:', error);
    return res.status(500).json({ 
      error: error.message || 'Failed to execute search grounded query.' 
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Ludo Emperor 5 Way server running on port ${PORT}`);
  });
}

startServer();
