import { useState, useEffect } from "react";

export function ClickRipple({ enabled = true }) {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    if (!enabled) return;

    const handleClick = (e) => {
      // Ignore clicks on interactive elements and quantum cards
      const target = e.target;
      const isInteractive =
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select');

      // Ignore clicks on the dropdown menu
      const isOnDropdown = target.closest('[data-dropdown-menu]');

      // Ignore clicks on quantum project cards (but allow clicks on empty space in quantum section)
      const quantumSection = target.closest('#quantum');
      const isOnQuantumCard = quantumSection && (
        target.closest('[class*="Card"]') ||
        target.closest('[class*="rounded-2xl"]')
      );

      if (isInteractive || isOnDropdown || isOnQuantumCard) return;

      const clickX = e.clientX;
      const clickY = e.clientY;
      const rippleId = Math.random();

      // Create visual ripple
      const newRipple = {
        id: rippleId,
        x: clickX,
        y: clickY,
        timestamp: Date.now(),
      };

      setRipples((prev) => [...prev, newRipple]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== rippleId));
      }, 3000);

      // Animate elements
      animateElements(clickX, clickY);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [enabled]);

  const animateElements = (clickX, clickY) => {
    // Get all animatable elements - targeting specific content, not containers
    const selectors = [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span',
      'button:not([class*="fixed"])',
      'a:not([class*="fixed"])',
      'img',
      '[class*="Card"]',
      '[class*="Chip"]',
      'div.font-semibold',
      'div.text-xs',
      'div.text-sm',
      'ul',
      'li'
    ];

    const elements = document.querySelectorAll(selectors.join(', '));

    elements.forEach((element) => {
      // Skip fixed position elements and very large containers
      const computedStyle = window.getComputedStyle(element);
      if (computedStyle.position === 'fixed' || computedStyle.position === 'sticky') {
        return;
      }

      // Skip if it's a large container
      const rect = element.getBoundingClientRect();
      if (rect.height > 500 || rect.width > 1000) return;

      const elementX = rect.left + rect.width / 2;
      const elementY = rect.top + rect.height / 2;

      // Calculate distance from click point
      const distance = Math.sqrt(
        Math.pow(elementX - clickX, 2) + Math.pow(elementY - clickY, 2)
      );

      // Wave speed (pixels per millisecond)
      const waveSpeed = 0.8;
      const delay = distance / waveSpeed;

      // Skip if element is too far or already animating
      if (distance > 3000 || element.dataset.animating === 'true') return;

      // Mark as animating
      element.dataset.animating = 'true';

      // Store original transform if any
      const originalTransform = element.style.transform || '';

      // Calculate wave intensity based on distance (closer = stronger)
      const maxDistance = 2000;
      const intensity = Math.max(0, 1 - distance / maxDistance);
      const translateY = -20 * intensity; // Max 20px up

      // Apply animation
      setTimeout(() => {
        element.style.willChange = 'transform';
        element.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
        element.style.transform = `${originalTransform} translateY(${translateY}px)`.trim();

        // Return to original position
        setTimeout(() => {
          element.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
          element.style.transform = originalTransform;

          // Clean up
          setTimeout(() => {
            element.style.transition = '';
            element.style.willChange = '';
            if (!originalTransform) {
              element.style.transform = '';
            }
            delete element.dataset.animating;
          }, 400);
        }, 300);
      }, delay);
    });
  };

  if (!enabled) return null;

  return (
    <>
      <style>{`
        @keyframes clickRipple {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.9;
          }
          100% {
            transform: translate(-50%, -50%) scale(15);
            opacity: 0;
          }
        }
      `}</style>
      <div className="fixed inset-0 z-[15] pointer-events-none" style={{ overflow: "visible" }}>
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="absolute rounded-full"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: '400px',
              height: '400px',
              border: '8px solid rgba(167,139,250,0.7)',
              boxShadow: '0 0 30px rgba(110,231,255,0.5), inset 0 0 30px rgba(59,130,246,0.4)',
              animation: "clickRipple 4.5s linear forwards",
              mixBlendMode: "screen",
              willChange: "transform, opacity",
              transform: "translate(-50%, -50%) scale(0)",
              opacity: 0.9,
            }}
          />
        ))}
      </div>
    </>
  );
}
