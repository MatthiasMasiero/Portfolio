import React from "react";
import { useIsMobile } from "../hooks/useIsMobile";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { QuantumCard } from "./QuantumCard";

function buildSinePath(W, H, amp, phase, periods = 3, cy = H / 2) {
  const steps = 480;
  const twoPi = Math.PI * 2;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = t * W;
    const y = cy + amp * Math.sin(phase + t * periods * twoPi);
    d += i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
  }
  return d;
}

export function QuantumGrid({ items, effectsEnabled = true, onMeasuredChange, onReset }) {
  const [focused, setFocused] = React.useState(null);
  const [measured, setMeasured] = React.useState(false);
  const [resetTrigger, setResetTrigger] = React.useState(0);
  const isMobile = useIsMobile();
  const prefersReduced = usePrefersReducedMotion();

  React.useEffect(() => {
    if (onReset) {
      setMeasured(false);
      setResetTrigger((prev) => prev + 1);
    }
  }, [onReset]);

  const handleMeasure = () => {
    setMeasured(true);
    if (onMeasuredChange) {
      onMeasuredChange(true);
    }
  };

  const waveCount = prefersReduced
    ? measured
      ? 1
      : 8
    : measured
    ? 1
    : isMobile
    ? 14
    : 28;

  return (
    <div className="relative [perspective:1200px]">
      <style>{`
        @keyframes waveShiftX { 0% { transform: translateX(0); } 100% { transform: translateX(-2400px); } }
      `}</style>

      <svg
        className="pointer-events-none absolute inset-0 -z-30 w-full h-full"
        viewBox="0 0 2400 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {Array.from({ length: waveCount }).map((_, i) => {
          const H = isMobile ? 560 : 800;
          const W = 2400;
          const rowY = ((i + 1) / (waveCount + 1)) * H;
          const baseAmp = measured
            ? isMobile
              ? 34
              : 40
            : isMobile
            ? 22
            : 28;
          const ampJitter = measured ? 0 : (i % 5) * 1.5;
          const amp = baseAmp + ampJitter;
          const periods = measured ? 6 : 6;
          const phase = (i * Math.PI) / 10;
          const d = buildSinePath(W, H, amp, phase + (rowY / H) * Math.PI, periods, rowY);

          const colorsIdle = [
            "rgba(167,139,250,.18)",
            "rgba(110,231,255,.16)",
            "rgba(59,130,246,.14)",
            "rgba(236,72,153,.12)",
            "rgba(14,165,233,.12)",
          ];
          const stroke = measured
            ? "rgba(167,139,250,.32)"
            : colorsIdle[i % colorsIdle.length];
          const strokeWidth = measured ? 2.4 : 1.2 + (i % 3) * 0.2;
          const duration = prefersReduced
            ? 999
            : measured
            ? isMobile
              ? 11
              : 10
            : isMobile
            ? 9.5
            : 8 + (i % 7) * 0.6;
          const delay = (i % 9) * 0.08;

          return (
            <g
              key={i}
              style={
                prefersReduced || !effectsEnabled
                  ? {}
                  : {
                      animation: `waveShiftX ${duration}s linear infinite`,
                      animationDelay: `${delay}s`,
                    }
              }
            >
              <path
                d={d}
                fill="none"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="butt"
              />
              <path
                d={d}
                fill="none"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="butt"
                transform={`translate(${W}, 0)`}
              />
            </g>
          );
        })}
      </svg>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 relative z-10">
        {items.map((p, i) => (
          <QuantumCard
            key={i}
            index={i}
            p={p}
            onHover={() => setFocused(i)}
            onLeave={() => setFocused(null)}
            onMeasure={handleMeasure}
            resetTrigger={resetTrigger}
            effectsEnabled={effectsEnabled}
          />
        ))}
      </div>
    </div>
  );
}

