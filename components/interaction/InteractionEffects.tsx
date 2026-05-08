"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

function useFinePointer() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setEnabled(media.matches && !reduced.matches);
    update();

    media.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      media.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  return enabled;
}

export function InteractionEffects() {
  const enabled = useFinePointer();

  useEffect(() => {
    if (!enabled) return;

    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.1,
      smoothWheel: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);
    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [enabled]);

  return null;
}
