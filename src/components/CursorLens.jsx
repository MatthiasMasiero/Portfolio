import { useEffect, useRef } from "react";

/**
 * A circular "glass lens" that follows the cursor and warps the background
 * grid beneath it via an SVG displacement filter (#cursorWarp). Sits below the
 * content layer, so it only distorts the background — not the panels or text.
 */
export function CursorLens({ enabled = true }) {
  const ref = useRef(null);
  const raf = useRef(0);
  const target = useRef({ x: 0, y: 0 });
  const cur = useRef({ x: 0, y: 0 });
  const visible = useRef(false);

  useEffect(() => {
    if (
      !enabled ||
      typeof window === "undefined" ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    const el = ref.current;
    cur.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    target.current = { ...cur.current };

    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!visible.current && el) {
        el.style.opacity = "1";
        visible.current = true;
      }
    };
    const onLeave = () => {
      if (el) el.style.opacity = "0";
      visible.current = false;
    };

    const tick = () => {
      // ease toward the pointer for a fluid, slightly laggy "liquid" follow
      cur.current.x += (target.current.x - cur.current.x) * 0.18;
      cur.current.y += (target.current.y - cur.current.y) * 0.18;
      if (el) {
        el.style.transform =
          `translate3d(${cur.current.x}px, ${cur.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      className="cursor-lens"
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 300,
        height: 300,
        borderRadius: "9999px",
        zIndex: 4,
        opacity: 0,
        transition: "opacity 0.3s ease",
        pointerEvents: "none",
        willChange: "transform",
      }}
    />
  );
}
