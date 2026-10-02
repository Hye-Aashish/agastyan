import { useEffect, useRef } from "react";

/**
 * CursorSpotlight - 3D Ambient Volumetric Light Tracker
 * 
 * Casts a smooth, hardware-accelerated 3D light aura around the cursor
 * that highlights card borders, glass surfaces, and creates depth across the viewport.
 */
const CursorSpotlight = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return;

    let targetX = -500;
    let targetY = -500;
    let currentX = -500;
    let currentY = -500;
    let animationFrameId;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const updatePosition = () => {
      // Smooth lerp following
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="fixed top-0 left-0 pointer-events-none z-[2] -ml-48 -mt-48 w-96 h-96 rounded-full blur-[100px] opacity-25 dark:opacity-20 transition-opacity duration-500 will-change-transform"
      style={{
        background:
          "radial-gradient(circle, rgba(239, 123, 1, 0.45) 0%, rgba(46, 125, 50, 0.25) 50%, transparent 75%)",
      }}
      aria-hidden="true"
    />
  );
};

export default CursorSpotlight;
