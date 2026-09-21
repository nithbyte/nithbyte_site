"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface MagneticButtonProps {
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  className?: string;
  cursorLabel?: string;
  type?: "button" | "submit" | "reset";
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  showArrow = true,
  className = "",
  cursorLabel = "LET'S BUILD",
  type = "button",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Subtle magnetic strength
    x.set(distanceX * 0.25);
    y.set(distanceY * 0.25);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  }[size];

  const variantClasses = {
    primary: "bg-nb-orange text-nb-white font-medium hover:bg-nb-deep-orange shadow-lg shadow-nb-orange/20 border border-nb-orange",
    secondary: "bg-nb-black text-nb-white font-medium hover:bg-nb-graphite border border-nb-graphite",
    outline: "bg-transparent text-nb-black font-medium border border-nb-black hover:bg-nb-black hover:text-nb-white",
    ghost: "bg-transparent text-nb-black font-medium hover:bg-black/5",
    dark: "bg-nb-soft-black text-nb-white border border-white/10 hover:border-nb-orange/60",
  }[variant];

  const content = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      data-cursor="cta"
      data-cursor-text={cursorLabel}
      className={`relative inline-flex items-center justify-center gap-2 rounded-full transition-colors duration-200 select-none group overflow-hidden ${sizeClasses} ${variantClasses} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2 font-mono-tech tracking-wide">
        {children}
        {showArrow && (
          <motion.span
            animate={isHovered ? { x: 2, y: -2 } : { x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <ArrowUpRight className="w-4 h-4" />
          </motion.span>
        )}
      </span>
      {/* Subtle shine hover effect */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block bg-transparent p-0 border-0 cursor-pointer">
      {content}
    </button>
  );
}
