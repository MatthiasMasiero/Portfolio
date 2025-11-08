export function AnimatedBackground() {
  return (
    <>
      <style>{`
        @keyframes driftA {
          0%   { transform: translate3d(-8%, -6%, 0) scale(1.2); }
          50%  { transform: translate3d( 6%,  4%, 0) scale(1.2); }
          100% { transform: translate3d(-4%,  8%, 0) scale(1.2); }
        }
        @keyframes hueCycle {
          0%   { filter: hue-rotate(0deg)    saturate(1.0); }
          25%  { filter: hue-rotate(60deg)   saturate(1.05); }
          50%  { filter: hue-rotate(120deg)  saturate(1.1); }
          75%  { filter: hue-rotate(200deg)  saturate(1.05); }
          100% { filter: hue-rotate(360deg)  saturate(1.0); }
        }
        @keyframes driftB {
          0%   { transform: translate3d(6%, 8%, 0) scale(1.15); }
          50%  { transform: translate3d(-6%, -4%, 0) scale(1.15); }
          100% { transform: translate3d(8%, -6%, 0) scale(1.15); }
        }
      `}</style>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute -inset-[12%] will-change-transform"
          style={{
            animation: "driftA 42s ease-in-out infinite, hueCycle 56s linear infinite",
            opacity: 1,
            mixBlendMode: "screen",
            background:
              `radial-gradient(1100px 800px at 20% 15%, rgba(167,139,250,.28), transparent 62%),` +
              `radial-gradient(1100px 800px at 78% 18%, rgba(110,231,255,.24), transparent 62%),` +
              `radial-gradient(1400px 900px at 50% 88%, rgba(34,197,94,.16), transparent 66%)`,
          }}
        />
        <div
          className="absolute -inset-[14%] will-change-transform"
          style={{
            animation: "driftB 68s ease-in-out infinite, hueCycle 84s linear infinite",
            opacity: 0.85,
            mixBlendMode: "screen",
            background:
              `radial-gradient(900px 700px at 15% 70%, rgba(59,130,246,.22), transparent 65%),` +
              `radial-gradient(900px 700px at 85% 35%, rgba(236,72,153,.18), transparent 65%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(80% 70% at 50% 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,.28) 100%)`,
          }}
        />
      </div>
      <div
        className="fixed inset-0 -z-10 pointer-events-none sm:hidden"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 20%, rgba(29,78,216,.16), transparent 70%)," +
            "radial-gradient(110% 85% at 70% 80%, rgba(139,92,246,.14), transparent 70%)," +
            "radial-gradient(100% 80% at 30% 90%, rgba(16,185,129,.10), transparent 65%)",
        }}
      />
    </>
  );
}

