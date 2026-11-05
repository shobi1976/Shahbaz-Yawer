import React, { Suspense, useEffect, useRef, useState } from 'react';

interface DeferredSectionProps {
  children: React.ReactNode;
  id?: string;
  minHeightClass?: string;
  rootMargin?: string;
}

/**
 * Defers mounting & code-split chunk execution of below-the-fold sections
 * until the visitor scrolls within `rootMargin` of the section (or jumps via anchor).
 * Eliminates initial DOM bloat and main-thread layout/backdrop-filter work.
 */
export const DeferredSection: React.FC<DeferredSectionProps> = ({
  children,
  id,
  minHeightClass = 'min-h-[320px]',
  rootMargin = '420px 0px',
}) => {
  const placeholderRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    // Render immediately if URL hash targets a below-the-fold section
    if (window.location.hash && window.location.hash.length > 1) return true;
    return typeof IntersectionObserver === 'undefined';
  });

  useEffect(() => {
    if (shouldRender) return;
    const node = placeholderRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);

    const handleHashJump = () => {
      setShouldRender(true);
      observer.disconnect();
    };
    window.addEventListener('hashchange', handleHashJump, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashJump);
    };
  }, [shouldRender, rootMargin]);

  if (!shouldRender) {
    return <div id={id} ref={placeholderRef} className={`w-full ${minHeightClass}`} aria-hidden="true" />;
  }

  return (
    <Suspense fallback={<div id={id} className={`w-full ${minHeightClass}`} aria-busy="true" />}>
      {children}
    </Suspense>
  );
};
