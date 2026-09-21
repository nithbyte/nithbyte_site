"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../theme/ThemeProvider";

interface LogoProps {
  variant?: "auto" | "full" | "white" | "mark";
  className?: string;
  href?: string;
  priority?: boolean;
}

export default function Logo({
  variant = "auto",
  className = "",
  href = "/",
  priority = true,
}: LogoProps) {
  const { theme } = useTheme();

  const isWhite = variant === "white" || (variant === "auto" && theme === "dark");
  const imageSrc = isWhite
    ? "/images/nithbyte-logo-white.png"
    : "/images/nithbyte-logo.png";

  const content = (
    <div className={`inline-flex items-center select-none group ${className}`}>
      {variant === "mark" ? (
        <div className="relative h-9 w-9 flex items-center justify-center">
          <Image
            src="/images/nithbyte-mark.png"
            alt="NithByte Mark"
            fill
            priority={priority}
            className="object-contain"
            sizes="36px"
          />
        </div>
      ) : (
        <div className="relative flex items-center">
          <div className="relative h-11 w-48 sm:h-12 sm:w-52">
            <Image
              src={imageSrc}
              alt="NithByte - Where Ideas Find Their Code"
              fill
              priority={priority}
              className="object-contain object-left"
              sizes="(max-width: 768px) 192px, 208px"
            />
          </div>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block transition-transform duration-200 hover:opacity-90">
        {content}
      </Link>
    );
  }

  return content;
}
