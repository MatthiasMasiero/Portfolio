import { useState, useEffect, useRef } from "react";

export function CursorRipples() {
  const [ripples, setRipples] = useState([]);
  
  const lastPos = useRef({ x: 0, y: 0 });
  const lastTime = useRef(Date.now());
  const lastRippleTime = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const now = Date.now();
      const newPos = { x: e.clientX, y: e.clientY };
      const deltaTime = now - lastTime.current;
      
      // Calculate velocity
      const dx = newPos.x - lastPos.current.x;
      const dy = newPos.y - lastPos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const newVelocity = deltaTime > 0 ? (distance / deltaTime) * 1000 : 0;
      
      // Create ripples at intervals - more frequent like before
      const baseInterval = 180;
      const minInterval = 120;
      const velocityFactor = Math.min(newVelocity / 200, 1);
      const easeOutFactor = 1 - Math.pow(1 - velocityFactor, 2);
      const dynamicInterval = baseInterval - (easeOutFactor * (baseInterval - minInterval));
      const rippleInterval = Math.max(Math.min(dynamicInterval, 350), minInterval);
      
      if (now - lastRippleTime.current > rippleInterval) {
        const rippleId = Math.random();
        const newRipple = {
          id: rippleId,
          x: newPos.x,
          y: newPos.y,
          timestamp: now,
          velocity: newVelocity,
        };
        
        setRipples((prev) => {
          // Keep more ripples for smoother effect
          const maxRipples = newVelocity > 200 ? 6 : 5;
          const updated = [...prev.slice(-maxRipples), newRipple];
          return updated;
        });
        
        lastRippleTime.current = now;
        
        // Remove ripple after animation
        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r.id !== rippleId));
        }, 2200);
      }
      
      lastPos.current = newPos;
      lastTime.current = now;
    };

    // Only enable on non-touch devices (desktop)
    if (typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <>
      <style>{`
        @keyframes ripple {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.5;
          }
          20% {
            opacity: 0.45;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.75);
            opacity: 0;
          }
        }
        @keyframes rippleSecondary {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.4;
          }
          30% {
            opacity: 0.3;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }
      `}</style>
      <div className="fixed inset-0 z-[5] pointer-events-none" style={{ overflow: "visible" }}>
        {/* Main ripple layer */}
        {ripples.map((ripple) => {
          const velocityFactor = Math.min(ripple.velocity / 300, 1);
          const baseSize = 240;
          const sizeVariation = velocityFactor * 20;
          const rippleSize = baseSize + sizeVariation;
          
          return (
            <div
              key={ripple.id}
              className="absolute rounded-full"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: `${rippleSize}px`,
                height: `${rippleSize}px`,
                background:
                  "radial-gradient(circle, rgba(167,139,250,0.14) 0%, rgba(110,231,255,0.1) 25%, rgba(59,130,246,0.06) 45%, transparent 70%)",
                animation: "ripple 2.2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
                mixBlendMode: "screen",
                willChange: "transform, opacity",
                transform: "translate(-50%, -50%) scale(0)",
                opacity: 0.5,
              }}
            />
          );
        })}
        
        {/* Secondary ripple layer for depth */}
        {ripples.map((ripple) => {
          const velocityFactor = Math.min(ripple.velocity / 300, 1);
          const baseSize = 280;
          const sizeVariation = velocityFactor * 25;
          const rippleSize = baseSize + sizeVariation;
          
          return (
            <div
              key={`secondary-${ripple.id}`}
              className="absolute rounded-full"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: `${rippleSize}px`,
                height: `${rippleSize}px`,
                background:
                  "radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(236,72,153,0.08) 20%, rgba(14,165,233,0.05) 40%, transparent 65%)",
                animation: "rippleSecondary 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
                mixBlendMode: "overlay",
                willChange: "transform, opacity",
                transform: "translate(-50%, -50%) scale(0)",
                opacity: 0.4,
                animationDelay: "0.1s",
              }}
            />
          );
        })}
      </div>
    </>
  );
}
