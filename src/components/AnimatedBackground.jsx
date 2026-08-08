export function AnimatedBackground() {
  return (
    <>
      <style>{`
        @keyframes driftA {
          0%   { transform: translate3d(-8%, -6%, 0) scale(1.2); }
          50%  { transform: translate3d( 6%,  4%, 0) scale(1.2); }
          100% { transform: translate3d(-4%,  8%, 0) scale(1.2); }
        }
        @keyframes driftB {
          0%   { transform: translate3d(6%, 8%, 0) scale(1.15); }
          50%  { transform: translate3d(-6%, -4%, 0) scale(1.15); }
          100% { transform: translate3d(8%, -6%, 0) scale(1.15); }
        }
        @keyframes hueCycle {
          0%   { filter: hue-rotate(0deg)   saturate(1.15); }
          50%  { filter: hue-rotate(140deg) saturate(1.25); }
          100% { filter: hue-rotate(360deg) saturate(1.15); }
        }
        /* pan exactly one grid tile (52px) so the loop is seamless */
        @keyframes gridPan {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-52px, -52px, 0); }
        }
        @keyframes gridPulse {
          0%, 100% { opacity: 0.5; }
          50%      { opacity: 0.85; }
        }
      `}</style>

      <div
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        style={{ background: "var(--bg)" }}
      >
        {/* ---- Cool color blooms (the light the glass refracts) ---- */}
        <div
          className="absolute -inset-[12%] will-change-transform"
          style={{
            animation: "driftA 42s ease-in-out infinite, hueCycle 60s linear infinite",
            mixBlendMode: "screen",
            background:
              `radial-gradient(900px 700px at 18% 14%, rgba(139,92,246,.42), transparent 58%),` +
              `radial-gradient(950px 720px at 82% 20%, rgba(56,189,248,.38), transparent 58%),` +
              `radial-gradient(1200px 820px at 50% 92%, rgba(59,130,246,.30), transparent 62%)`,
          }}
        />
        <div
          className="absolute -inset-[14%] will-change-transform"
          style={{
            animation: "driftB 66s ease-in-out infinite, hueCycle 84s linear infinite",
            opacity: 0.9,
            mixBlendMode: "screen",
            background:
              `radial-gradient(760px 620px at 12% 72%, rgba(45,212,191,.30), transparent 60%),` +
              `radial-gradient(820px 640px at 88% 62%, rgba(168,85,247,.30), transparent 60%)`,
          }}
        />

        {/* ---- Refraction grid: straight lines that warp through the glass ---- */}
        <div
          className="absolute -inset-[16%] will-change-transform"
          style={{
            animation: "gridPan 26s linear infinite, gridPulse 12s ease-in-out infinite",
            backgroundImage:
              `linear-gradient(rgba(150,200,255,.14) 1px, transparent 1px),` +
              `linear-gradient(90deg, rgba(150,200,255,.14) 1px, transparent 1px)`,
            backgroundSize: "52px 52px",
            // fade the grid toward the edges so light pools in the center
            WebkitMaskImage:
              "radial-gradient(120% 100% at 50% 42%, #000 32%, transparent 82%)",
            maskImage:
              "radial-gradient(120% 100% at 50% 42%, #000 32%, transparent 82%)",
          }}
        />
        {/* fainter, larger grid for depth/parallax */}
        <div
          className="absolute -inset-[16%] will-change-transform"
          style={{
            animation: "gridPan 60s linear infinite reverse",
            opacity: 0.5,
            backgroundImage:
              `linear-gradient(rgba(130,170,255,.10) 1px, transparent 1px),` +
              `linear-gradient(90deg, rgba(130,170,255,.10) 1px, transparent 1px)`,
            backgroundSize: "156px 156px",
            WebkitMaskImage:
              "radial-gradient(130% 110% at 50% 40%, #000 20%, transparent 78%)",
            maskImage:
              "radial-gradient(130% 110% at 50% 40%, #000 20%, transparent 78%)",
          }}
        />

        {/* ---- Center glow lift + edge vignette for contrast ---- */}
        <div
          className="absolute inset-0"
          style={{
            background:
              `radial-gradient(60% 50% at 50% 38%, rgba(90,130,255,.10), transparent 60%)`,
            mixBlendMode: "screen",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              `radial-gradient(85% 75% at 50% 45%, rgba(0,0,0,0) 45%, rgba(0,0,0,.55) 100%)`,
          }}
        />
      </div>

      {/* Lighter static fallback for small screens */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none sm:hidden"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 18%, rgba(139,92,246,.20), transparent 70%)," +
            "radial-gradient(110% 85% at 75% 80%, rgba(56,189,248,.16), transparent 70%)",
        }}
      />
    </>
  );
}
