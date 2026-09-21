import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "full" | "compact" | "mark";
  className?: string;
  href?: string;
  priority?: boolean;
}

export default function Logo({
  variant = "full",
  className = "",
  href = "/",
  priority = true,
}: LogoProps) {
  const content = (
    <div className={`inline-flex items-center gap-2 select-none group ${className}`}>
      {variant === "mark" ? (
        <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden rounded-md">
          {/* High precision SVG technical mark based on NithByte brand */}
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
            <path
              d="M8 38L20 10H28L16 38H8Z"
              fill="#0B0B0B"
            />
            <path
              d="M20 38L32 10H40L28 38H20Z"
              fill="#FF6A00"
            />
            <rect x="34" y="6" width="5" height="5" rx="1" fill="#FF6A00" />
            <rect x="41" y="13" width="4" height="4" rx="1" fill="#FF6A00" />
          </svg>
        </div>
      ) : (
        <div className="relative flex items-center">
          <div className="relative h-10 w-44">
            <Image
              src="/images/nithbyte-logo.png"
              alt="NithByte - Where Ideas Find Their Code"
              fill
              priority={priority}
              className="object-contain object-left"
              sizes="176px"
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
