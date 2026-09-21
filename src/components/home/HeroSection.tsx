"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "../interactions/MagneticButton";
import SignalBadge from "../ui/SignalBadge";
import { ArrowDown, Code2, Sparkles, Cpu, Layers, Box } from "lucide-react";

const STAGES = [
  { id: "idea", label: "01. IDEA", icon: Sparkles, desc: "A singular spark of intent." },
  { id: "logic", label: "02. LOGIC", icon: Cpu, desc: "Architecting domain rules." },
  { id: "code", label: "03. CODE", icon: Code2, desc: "Type-safe precision systems." },
  { id: "system", label: "04. SYSTEM", icon: Layers, desc: "Cohesive cloud infrastructure." },
  { id: "product", label: "05. PRODUCT", icon: Box, desc: "Fluid, high-impact reality." },
];

export default function HeroSection() {
  const [activeStage, setActiveStage] = useState<number>(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Cycle through the generative stages or allow manual click
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % STAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Generative Canvas Visualizer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Stage 0: IDEA - Single vibrant pulsing orange point with radiant waves
      if (activeStage === 0) {
        const pulse = Math.sin(time * 3) * 6 + 12;
        ctx.beginPath();
        ctx.arc(centerX, centerY, pulse, 0, Math.PI * 2);
        ctx.fillStyle = "#FF6A00";
        ctx.shadowColor = "#FF6A00";
        ctx.shadowBlur = 30;
        ctx.fill();

        // Radiating rings
        for (let i = 1; i <= 3; i++) {
          const ringRadius = (pulse + i * 35 + time * 15) % 150;
          const alpha = Math.max(0, 1 - ringRadius / 150);
          ctx.beginPath();
          ctx.arc(centerX, centerY, ringRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 106, 0, ${alpha * 0.4})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }

      // Stage 1: LOGIC - Lines radiating from center to geometric nodes
      else if (activeStage === 1) {
        ctx.shadowBlur = 0;
        const nodeCount = 6;
        const radius = Math.min(width, height) * 0.32;

        for (let i = 0; i < nodeCount; i++) {
          const angle = (i * Math.PI * 2) / nodeCount + time * 0.2;
          const nx = centerX + Math.cos(angle) * radius;
          const ny = centerY + Math.sin(angle) * radius;

          // Connect to center
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.lineTo(nx, ny);
          ctx.strokeStyle = "rgba(255, 106, 0, 0.4)";
          ctx.lineWidth = 1.5;
          ctx.setLineDash([4, 4]);
          ctx.stroke();
          ctx.setLineDash([]);

          // Connect adjacent nodes
          const nextAngle = ((i + 1) * Math.PI * 2) / nodeCount + time * 0.2;
          const nnx = centerX + Math.cos(nextAngle) * radius;
          const nny = centerY + Math.sin(nextAngle) * radius;
          ctx.beginPath();
          ctx.moveTo(nx, ny);
          ctx.lineTo(nnx, nny);
          ctx.strokeStyle = "rgba(11, 11, 11, 0.2)";
          ctx.lineWidth = 1;
          ctx.stroke();

          // Node points
          ctx.beginPath();
          ctx.arc(nx, ny, 5, 0, Math.PI * 2);
          ctx.fillStyle = i % 2 === 0 ? "#FF6A00" : "#151515";
          ctx.fill();
        }

        // Center origin point
        ctx.beginPath();
        ctx.arc(centerX, centerY, 8, 0, Math.PI * 2);
        ctx.fillStyle = "#FF6A00";
        ctx.shadowColor = "#FF6A00";
        ctx.shadowBlur = 20;
        ctx.fill();
      }

      // Stage 2: CODE - Grid matrices and technical syntax vectors
      else if (activeStage === 2) {
        ctx.shadowBlur = 0;
        const cols = 8;
        const rows = 6;
        const spacingX = width / (cols + 1);
        const spacingY = height / (rows + 1);

        for (let x = 1; x <= cols; x++) {
          for (let y = 1; y <= rows; y++) {
            const px = x * spacingX;
            const py = y * spacingY;
            const active = Math.sin(x * 0.8 + y * 0.8 + time * 2) > 0.4;

            ctx.beginPath();
            ctx.rect(px - 3, py - 3, 6, 6);
            ctx.fillStyle = active ? "#FF6A00" : "rgba(11, 11, 11, 0.12)";
            ctx.fill();

            if (active && x < cols) {
              ctx.beginPath();
              ctx.moveTo(px, py);
              ctx.lineTo(px + spacingX, py);
              ctx.strokeStyle = "rgba(255, 106, 0, 0.35)";
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
      }

      // Stage 3: SYSTEM - Multi-layered isometric blocks connected via signal bus
      else if (activeStage === 3) {
        ctx.shadowBlur = 0;
        const layers = 3;
        for (let l = 0; l < layers; l++) {
          const ly = centerY + (l - 1) * 60 + Math.sin(time + l) * 5;
          const size = 180 - l * 25;

          ctx.beginPath();
          ctx.ellipse(centerX, ly, size, size * 0.35, 0, 0, Math.PI * 2);
          ctx.strokeStyle = l === 1 ? "#FF6A00" : "rgba(11, 11, 11, 0.3)";
          ctx.lineWidth = l === 1 ? 2 : 1;
          ctx.stroke();

          // Floating data packets
          const packetAngle = time * 1.5 + l * 2;
          const px = centerX + Math.cos(packetAngle) * size;
          const py = ly + Math.sin(packetAngle) * size * 0.35;

          ctx.beginPath();
          ctx.arc(px, py, 4, 0, Math.PI * 2);
          ctx.fillStyle = "#FF6A00";
          ctx.fill();
        }
      }

      // Stage 4: PRODUCT - Polished interactive viewport with glowing signal
      else if (activeStage === 4) {
        ctx.shadowBlur = 0;
        const boxW = Math.min(width * 0.75, 360);
        const boxH = boxW * 0.65;
        const bx = centerX - boxW / 2;
        const by = centerY - boxH / 2;

        // Container frame
        ctx.beginPath();
        ctx.roundRect(bx, by, boxW, boxH, 12);
        ctx.fillStyle = "#FFFFFF";
        ctx.shadowColor = "rgba(0, 0, 0, 0.08)";
        ctx.shadowBlur = 25;
        ctx.fill();
        ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Top bar
        ctx.beginPath();
        ctx.roundRect(bx, by, boxW, 26, [12, 12, 0, 0]);
        ctx.fillStyle = "#0B0B0B";
        ctx.fill();

        // Window controls
        ctx.beginPath();
        ctx.arc(bx + 16, by + 13, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = "#FF6A00";
        ctx.fill();

        // Content skeleton
        ctx.beginPath();
        ctx.roundRect(bx + 16, by + 40, boxW * 0.5, 12, 4);
        ctx.fillStyle = "#0B0B0B";
        ctx.fill();

        ctx.beginPath();
        ctx.roundRect(bx + 16, by + 60, boxW * 0.8, 8, 3);
        ctx.fillStyle = "#E5E3DC";
        ctx.fill();

        ctx.beginPath();
        ctx.roundRect(bx + 16, by + 74, boxW * 0.6, 8, 3);
        ctx.fillStyle = "#E5E3DC";
        ctx.fill();

        // Active button
        ctx.beginPath();
        ctx.roundRect(bx + 16, by + 95, 75, 20, 10);
        ctx.fillStyle = "#FF6A00";
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeStage]);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Top Meta Line */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-6">
        <SignalBadge label="DIGITAL PRODUCT ENGINEERING" tag="SYSTEM" />
        <div className="flex items-center gap-3 text-xs font-mono-tech text-nb-muted">
          <span className="text-nb-black dark:text-nb-off-white font-semibold">EST. 2026</span>
          <span>/</span>
          <span>GLOBAL DEPLOYMENT</span>
        </div>
      </div>

      {/* Main Headline & Generative Interaction */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto py-8">
        {/* Left Column: Headline */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] text-nb-black dark:text-nb-white">
            IDEAS <br />
            <span className="text-nb-graphite/90 dark:text-nb-muted">NEED A PLACE</span> <br />
            <span className="text-nb-orange">TO BECOME REAL.</span>
          </h1>

          <p className="text-lg sm:text-xl text-nb-graphite/80 dark:text-nb-muted max-w-xl font-normal leading-relaxed">
            We design and engineer digital products, commerce experiences, and intelligent systems for ambitious international businesses.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <MagneticButton href="/contact" variant="primary" size="lg" cursorLabel="LET'S BUILD">
              Start a Project
            </MagneticButton>
            <MagneticButton href="/work" variant="outline" size="lg" cursorLabel="EXPLORE ↗" className="dark:text-nb-white dark:border-white/20 dark:hover:bg-white dark:hover:text-nb-black">
              Explore Our Work
            </MagneticButton>
          </div>

          <div className="pt-6 flex items-center gap-4 text-xs font-mono-tech text-nb-muted">
            <span className="text-nb-orange font-bold">TAGLINE</span>
            <span className="text-nb-black dark:text-nb-off-white font-medium">Where Ideas Find Their Code.</span>
          </div>
        </div>

        {/* Right Column: Generative System Experience */}
        <div className="lg:col-span-5 relative">
          <div className="relative bg-nb-white dark:bg-nb-soft-black rounded-2xl border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden p-6 aspect-square max-w-md mx-auto flex flex-col justify-between transition-colors">
            {/* Top Stage Indicators */}
            <div className="flex items-center justify-between border-b border-black/5 dark:border-white/10 pb-3 z-10">
              <span className="text-[11px] font-mono-tech text-nb-muted uppercase tracking-wider">
                SIGNATURE INTERACTION
              </span>
              <span className="text-[11px] font-mono-tech text-nb-orange font-bold">
                {STAGES[activeStage].label}
              </span>
            </div>

            {/* Interactive Canvas */}
            <div className="relative flex-1 my-2 flex items-center justify-center">
              <canvas ref={canvasRef} className="w-full h-full block" />
            </div>

            {/* Stage Selector Dots */}
            <div className="pt-3 border-t border-black/5 dark:border-white/10 flex items-center justify-between z-10">
              <div className="flex items-center gap-1.5">
                {STAGES.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveStage(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeStage === idx
                        ? "w-6 bg-nb-orange"
                        : "w-2 bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40"
                    }`}
                    aria-label={s.label}
                  />
                ))}
              </div>
              <p className="text-[11px] font-mono-tech text-nb-graphite dark:text-nb-muted text-right truncate max-w-[180px]">
                {STAGES[activeStage].desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono-tech text-nb-muted">
        <div className="flex items-center gap-2">
          <ArrowDown className="w-3.5 h-3.5 text-nb-orange animate-bounce" />
          <span>SCROLL TO TRACE THE SIGNAL</span>
        </div>
        <div className="hidden sm:block">
          <span>IDEA → LOGIC → CODE → SYSTEM → PRODUCT</span>
        </div>
      </div>
    </section>
  );
}
