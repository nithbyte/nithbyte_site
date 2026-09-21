"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState<string>("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "cta" | "project" | "drag" | "hover" | "hidden">("default");
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for fluid cursor physics
  const springX = useSpring(mouseX, { stiffness: 600, damping: 35 });
  const springY = useSpring(mouseY, { stiffness: 600, damping: 35 });

  useEffect(() => {
    const checkDevice = () => {
      const isFinePointer = window.matchMedia("(pointer: fine)").matches;
      const isWideScreen = window.innerWidth >= 1024;
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      
      const enabled = isFinePointer && isWideScreen && !prefersReduced;
      setIsDesktop(enabled);
      
      if (enabled) {
        document.body.classList.add("has-custom-cursor");
      } else {
        document.body.classList.remove("has-custom-cursor");
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check for data-cursor attributes
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute("data-cursor");
        const customLabel = cursorTarget.getAttribute("data-cursor-text");

        if (type === "cta") {
          setCursorVariant("cta");
          setCursorText(customLabel || "LET'S BUILD");
        } else if (type === "project") {
          setCursorVariant("project");
          setCursorText(customLabel || "EXPLORE ↗");
        } else if (type === "drag") {
          setCursorVariant("drag");
          setCursorText(customLabel || "DRAG");
        } else if (type === "view") {
          setCursorVariant("hover");
          setCursorText(customLabel || "VIEW");
        } else {
          setCursorVariant("hover");
          setCursorText(customLabel || "");
        }
      } else {
        // Check if hover on standard interactive tags
        const isInteractive = target.closest("button, a, input, select, textarea, [role='button']");
        if (isInteractive) {
          setCursorVariant("hover");
          setCursorText("");
        } else {
          setCursorVariant("default");
          setCursorText("");
        }
      }
    };

    const handleMouseLeave = () => {
      setCursorVariant("hidden");
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [mouseX, mouseY]);

  if (!isDesktop || cursorVariant === "hidden") return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center font-mono-tech select-none"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      {cursorVariant === "default" && (
        <div className="w-3 h-3 rounded-full bg-nb-orange shadow-lg shadow-nb-orange/50 transition-transform duration-150" />
      )}

      {cursorVariant === "hover" && !cursorText && (
        <div className="w-8 h-8 rounded-full border border-nb-orange/80 bg-nb-orange/10 backdrop-blur-[2px] transition-all duration-200" />
      )}

      {(cursorVariant === "cta" || cursorVariant === "project" || cursorVariant === "drag" || (cursorVariant === "hover" && cursorText)) && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className={`px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider flex items-center justify-center shadow-xl ${
            cursorVariant === "cta"
              ? "bg-nb-orange text-nb-white shadow-nb-orange/40"
              : cursorVariant === "project"
              ? "bg-nb-black text-nb-white border border-nb-orange/50 shadow-black/50"
              : "bg-nb-soft-black text-nb-orange border border-nb-orange/30"
          }`}
        >
          {cursorText}
        </motion.div>
      )}
    </motion.div>
  );
}
