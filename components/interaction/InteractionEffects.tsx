"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
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

  return <CustomCursor enabled={enabled} />;
}

function CustomCursor({ enabled }: { enabled: boolean }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useSpring(mouseX, { damping: 34, stiffness: 420, mass: 0.28 });
  const cursorY = useSpring(mouseY, { damping: 34, stiffness: 420, mass: 0.28 });
  const [hoveringView, setHoveringView] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const move = (event: PointerEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const updateViewState = (target: EventTarget | null, active: boolean) => {
      if (!(target instanceof Element)) return;
      if (target.closest("[data-cursor='view']")) {
        setHoveringView(active);
      }
    };

    const over = (event: PointerEvent) => updateViewState(event.target, true);
    const out = (event: PointerEvent) => updateViewState(event.target, false);

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    window.addEventListener("pointerout", out, { passive: true });

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerout", out);
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[120] hidden md:block"
      style={{ x: cursorX, y: cursorY }}
    >
      <motion.div
        className="absolute -left-1.5 -top-1.5 h-3 w-3 rounded-full bg-foreground"
        animate={{ scale: hoveringView ? 0 : 1, opacity: hoveringView ? 0 : 1 }}
        transition={{ type: "spring", damping: 28, stiffness: 360 }}
      />
      <motion.div
        className="absolute left-0 top-0 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/35 bg-foreground/10 text-[10px] font-semibold tracking-[0.2em] text-foreground"
        animate={{ scale: hoveringView ? 1 : 0, opacity: hoveringView ? 1 : 0 }}
        transition={{ type: "spring", damping: 26, stiffness: 320 }}
      >
        VIEW
      </motion.div>
    </motion.div>
  );
}
