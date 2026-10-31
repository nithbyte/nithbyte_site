/* eslint-disable */
// Round Carousel — Originkit

"use client";

import React, { useEffect, useRef } from "react";

export interface RoundCarouselImage {
  src: string;
  alt?: string;
  name?: string;
  category?: string;
}

export interface RoundCarouselProps {
  images?: RoundCarouselImage[];
  imageWidth?: number;
  imageHeight?: number;
  spacing?: number;
  speed?: number;
  direction?: "right" | "left";
  drag?: boolean;
  sensitivity?: number;
  tilt?: number;
  perspective?: number;
  cornerRadius?: number;
  innerDim?: number;
  background?: string;
  style?: React.CSSProperties;
}

const DEFAULT_IMAGES: RoundCarouselImage[] = [
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/e60dd7f7-a44f-40a7-df62-095b19cd8700/w=800" },
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/eec164e9-23f8-4f87-b48a-a208fa806100/w=800" },
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/859c75ea-953e-489e-be61-91a03a35d700/w=800" },
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/933a7615-f4b6-4eae-8ed1-705fa0e24400/w=800" },
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/7d4d2641-d6a8-4fef-e85c-b12ed100d500/w=800" },
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/ed7b1c40-3332-43d8-a9eb-4615ef341b00/w=800" },
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/31afae9c-5ba3-4ec3-2534-ed8198ed1100/w=800" },
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/bd541261-75be-469c-7dc0-dae0ce81c400/w=800" },
];

function __OriginkitBase_RoundCarousel({
  images = DEFAULT_IMAGES,
  imageWidth = 338,
  imageHeight = 149,
  spacing = 3,
  speed = 4,
  direction = "right",
  drag = true,
  sensitivity = 3,
  tilt = -6,
  perspective = 3000,
  cornerRadius = 14,
  innerDim = 2,
  background = "transparent",
  style = {},
}: RoundCarouselProps) {
  const items = images.length > 0 ? images : DEFAULT_IMAGES;
  const count = items.length;

  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const rotYRef = useRef(0);
  const velRef = useRef(0);
  const lastRef = useRef(0);
  const dragRef = useRef({ active: false, x: 0 });

  const angle = 360 / count;
  const factor = 1 + spacing * 0.15;
  const radius = (imageWidth * factor) / (2 * Math.tan(Math.PI / count));
  const radiusPx = cornerRadius;
  const degPerSec = speed * 6 * (direction === "left" ? -1 : 1);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;
    const apply = () =>
      (ring.style.transform = `translateZ(${-radius}px) rotateY(${rotYRef.current}deg)`);
    apply();

    const draw = (now: number) => {
      const dt = lastRef.current ? (now - lastRef.current) / 1000 : 0;
      lastRef.current = now;
      const f = Math.min(dt, 0.1);
      const d = dragRef.current;
      if (!d.active) {
        if (Math.abs(velRef.current) > 0.01) {
          rotYRef.current += velRef.current * f;
          velRef.current *= 0.94;
        } else {
          rotYRef.current += degPerSec * f;
        }
      }
      apply();
      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [radius, degPerSec, count]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (!drag) return;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    dragRef.current = { active: true, x: e.clientX };
    velRef.current = 0;
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d.active) return;
    const dx = e.clientX - d.x;
    d.x = e.clientX;
    const k = 0.3 * sensitivity;
    rotYRef.current += dx * k;
    velRef.current = dx * k * 60;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    e.currentTarget.releasePointerCapture?.(e.pointerId);
    dragRef.current.active = false;
  };

  const faceBase: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    borderRadius: radiusPx,
    overflow: "hidden",
    backfaceVisibility: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div
      style={{
        ...style,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background,
        perspective: `${perspective}px`,
        cursor: drag ? "grab" : "default",
        touchAction: "none",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt}deg)`,
        }}
      >
        <div
          ref={ringRef}
          style={{
            position: "relative",
            width: imageWidth,
            height: imageHeight,
            transformStyle: "preserve-3d",
          }}
        >
          {items.map((img, i) => {
            const src = img?.src;
            const indexLabel = String((i % 5) + 1).padStart(2, "0");
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  inset: 0,
                  transform: `rotateY(${i * angle}deg) translateZ(${radius}px)`,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Front Face: High-tech glassmorphic client card */}
                <div
                  style={{
                    ...faceBase,
                    background: "linear-gradient(135deg, rgba(22, 22, 26, 0.96) 0%, rgba(12, 12, 15, 0.98) 100%)",
                    boxShadow: "0 14px 34px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    padding: "16px 20px",
                    userSelect: "none",
                  }}
                >
                  {/* Subtle Top-Right Telemetry Pip */}
                  <div
                    style={{
                      position: "absolute",
                      top: 8,
                      right: 12,
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      opacity: 0.6,
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        backgroundColor: "#FF4D00",
                        display: "inline-block",
                      }}
                    />
                    <span
                      style={{
                        fontSize: 9,
                        fontFamily: "var(--font-mono-tech, monospace)",
                        color: "#A1A1AA",
                        letterSpacing: "0.08em",
                      }}
                    >
                      P-{indexLabel}
                    </span>
                  </div>

                  {/* Centered Client Logo */}
                  {src ? (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingBottom: img?.name ? 14 : 0,
                      }}
                    >
                      <img
                        src={src}
                        alt={img?.alt || img?.name || "Client Partner"}
                        draggable={false}
                        style={{
                          maxWidth: "88%",
                          maxHeight: "76%",
                          width: "auto",
                          height: "auto",
                          objectFit: "contain",
                          filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.45))",
                          pointerEvents: "none",
                        }}
                      />
                    </div>
                  ) : null}

                  {/* Bottom Metadata Bar */}
                  {img?.name ? (
                    <div
                      style={{
                        position: "absolute",
                        bottom: 7,
                        left: 12,
                        right: 12,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: 10,
                        fontFamily: "var(--font-mono-tech, monospace)",
                        color: "#8E8E93",
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                        paddingTop: 4,
                      }}
                    >
                      <span
                        style={{
                          fontWeight: 600,
                          color: "#EDEDED",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {img.name}
                      </span>
                      {img.category ? (
                        <span
                          style={{
                            fontSize: 9,
                            color: "#A1A1AA",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {img.category}
                        </span>
                      ) : null}
                    </div>
                  ) : null}
                </div>

                {/* Back Face (Inside Cylinder Ring) */}
                <div
                  style={{
                    ...faceBase,
                    transform: "rotateY(180deg)",
                    background: "rgba(10, 10, 14, 0.96)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    filter: `brightness(${innerDim / 10})`,
                    padding: "16px 20px",
                    userSelect: "none",
                  }}
                >
                  {src ? (
                    <img
                      src={src}
                      alt=""
                      draggable={false}
                      style={{
                        maxWidth: "75%",
                        maxHeight: "60%",
                        width: "auto",
                        height: "auto",
                        objectFit: "contain",
                        opacity: 0.25,
                        filter: "grayscale(100%)",
                        pointerEvents: "none",
                      }}
                    />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const __originkitPresetProps = {
  imageWidth: 340,
  imageHeight: 156,
  speed: 4,
  tilt: -6,
  cornerRadius: 14,
  innerDim: 2,
  sensitivity: 3,
};

export default function RoundCarousel(props: RoundCarouselProps) {
  return (
    <__OriginkitBase_RoundCarousel
      {...(__originkitPresetProps as Record<string, unknown>)}
      {...props}
    />
  );
}

