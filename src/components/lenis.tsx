"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroller() {
  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    if (lenis.current) lenis.current.scrollTo(0, { immediate: true });
  }, []);

  useLayoutEffect(() => {
    lenis.current = new Lenis({
      smoothWheel: true,
      autoRaf: true,
    });

    return () => {
      if (lenis.current) {
        lenis.current.destroy();
      }
      lenis.current = null;
    };
  }, []);

  return null;
}
