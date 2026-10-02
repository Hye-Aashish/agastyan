import { useEffect, useRef } from "react";

/**
 * Aesthetic Tiny Fireflies (Photinus / Meadow Lightning Bugs)
 * 
 * Key Features:
 * 1. Small & Subtle:
 *    - Microscopic photophore lantern (0.8px - 1.5px core light)
 *    - Soft warm luciferase glow (golden amber & lime chartreuse)
 *    - Balanced population (~20-28 fireflies on desktop, ~14 on mobile)
 * 2. Mouse Attraction:
 *    - Fireflies sense the cursor and are gently attracted towards it
 *    - Organic swirling orbit so they flutter playfully *around* the cursor
 *    - Excite flash: light pulses brighter when near the mouse
 * 3. Strict Background Integration:
 *    - pointer-events-none and z-0 so it stays entirely in the background
 * 4. 60 FPS & Battery Efficient:
 *    - requestAnimationFrame + DPR scaling
 *    - Auto-pauses when tab is hidden
 */
const FireflyEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const resizeCanvas = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });

    // Mouse tracking state
    const mouse = {
      x: -2000,
      y: -2000,
      active: false,
      idleTimer: null,
    };

    const handlePointerMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;

      // Keep active for 3 seconds after mouse stops moving
      if (mouse.idleTimer) clearTimeout(mouse.idleTimer);
      mouse.idleTimer = setTimeout(() => {
        // Still active if mouse stays inside window, just neutral
      }, 3000);
    };

    const handlePointerLeave = () => {
      mouse.active = false;
      mouse.x = -2000;
      mouse.y = -2000;
    };

    const handlePointerDown = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      // Pulse attract nearby fireflies on click
      for (let i = 0; i < fireflies.length; i++) {
        const dx = fireflies[i].x - mouse.x;
        const dy = fireflies[i].y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 350) {
          fireflies[i].attractBurst(mouse.x, mouse.y);
        }
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave);
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });

    // Controlled population: small count, never crowded
    const count = Math.max(16, Math.min(28, Math.floor((width * height) / 48000)));

    class Firefly {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.z = 0.35 + Math.random() * 0.65; // depth
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + 10;

        // Tiny delicate sizes: Pinpoint photophore (0.8px to 1.5px)
        this.lightRadius = 0.7 + this.z * 0.7;
        this.glowRadius = 3.5 + this.z * 5.0; // tight, soft micro-halo

        // Orbit direction when dancing around cursor (-1 or 1)
        this.orbitDir = Math.random() < 0.5 ? 1 : -1;
        this.orbitRadius = 35 + Math.random() * 65;

        // Physics
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = -(0.1 + Math.random() * 0.3); // gentle upward drift
        this.heading = Math.random() * Math.PI * 2;
        this.targetHeading = this.heading;

        // Organic wandering
        this.wanderTimer = Math.floor(Math.random() * 60);
        this.bobPhase = Math.random() * Math.PI * 2;
        this.bobSpeed = 0.03 + Math.random() * 0.03;

        // Bioluminescent flashing state:
        // 'DARK' -> 'IGNITE' -> 'GLOW' -> 'FADE' -> 'DARK'
        this.flashState = Math.random() < 0.5 ? "GLOW" : "DARK";
        this.darkDuration = 70 + Math.floor(Math.random() * 140);
        this.igniteDuration = 10 + Math.floor(Math.random() * 10);
        this.glowDuration = 20 + Math.floor(Math.random() * 30);
        this.fadeDuration = 16 + Math.floor(Math.random() * 20);
        this.stateCounter = Math.floor(Math.random() * 50);

        this.restingGlow = 0.05 + Math.random() * 0.08;
        this.currentGlow = this.flashState === "DARK" ? this.restingGlow : 0.75;
        this.excited = 0;
      }

      attractBurst(targetX, targetY) {
        const dx = targetX - this.x;
        const dy = targetY - this.y;
        const angle = Math.atan2(dy, dx);
        this.vx += Math.cos(angle) * 1.5 * this.z;
        this.vy += Math.sin(angle) * 1.5 * this.z;
        this.excited = 1.0;
        this.flashState = "IGNITE";
        this.stateCounter = 0;
      }

      update() {
        this.stateCounter++;
        this.bobPhase += this.bobSpeed;

        // 1. FLASHING CYCLE
        switch (this.flashState) {
          case "DARK":
            this.currentGlow = this.restingGlow;
            if (this.stateCounter >= this.darkDuration) {
              this.flashState = "IGNITE";
              this.stateCounter = 0;
            }
            break;

          case "IGNITE": {
            const t = Math.min(1, this.stateCounter / this.igniteDuration);
            this.currentGlow = this.restingGlow + (0.85 - this.restingGlow) * (t * t);
            if (this.stateCounter >= this.igniteDuration) {
              this.flashState = "GLOW";
              this.stateCounter = 0;
            }
            break;
          }

          case "GLOW": {
            const shimmer = 0.92 + Math.sin(this.stateCounter * 0.45) * 0.08;
            this.currentGlow = (0.75 + this.z * 0.25) * shimmer;
            if (this.stateCounter >= this.glowDuration && this.excited <= 0.1) {
              this.flashState = "FADE";
              this.stateCounter = 0;
            }
            break;
          }

          case "FADE": {
            const t = Math.min(1, this.stateCounter / this.fadeDuration);
            this.currentGlow =
              this.restingGlow + (0.85 - this.restingGlow) * Math.pow(1 - t, 2);
            if (this.stateCounter >= this.fadeDuration) {
              this.flashState = "DARK";
              this.stateCounter = 0;
              this.darkDuration = 60 + Math.floor(Math.random() * 150);
            }
            break;
          }
        }

        // 2. MOUSE ATTRACTION DYNAMICS
        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);
          const attractRadius = 260; // attraction zone

          if (dist < attractRadius && dist > 1) {
            const normDist = dist / attractRadius; // 0 (at mouse) to 1 (at border)
            const pullForce = (1 - normDist) * 0.45 * this.z;

            // Direct angle towards mouse
            const angleToMouse = Math.atan2(dy, dx);

            // Orbit/Swirl component so they dance gracefully around the cursor
            const swirlAngle = angleToMouse + this.orbitDir * (Math.PI * 0.4);

            if (dist > this.orbitRadius) {
              // Pulled towards cursor with slight swirl
              this.vx += (Math.cos(angleToMouse) * 0.65 + Math.cos(swirlAngle) * 0.35) * pullForce;
              this.vy += (Math.sin(angleToMouse) * 0.65 + Math.sin(swirlAngle) * 0.35) * pullForce;
            } else {
              // Gently orbit around cursor at close range (cushioned fairy ring)
              this.vx += Math.cos(swirlAngle) * pullForce * 0.8;
              this.vy += Math.sin(swirlAngle) * pullForce * 0.8;
              // Gentle soft cushion if too close (< 25px)
              if (dist < 25) {
                this.vx -= Math.cos(angleToMouse) * 0.25;
                this.vy -= Math.sin(angleToMouse) * 0.25;
              }
            }

            // Excite firefly glow near cursor
            this.excited = Math.max(this.excited, 1 - normDist);
            if (this.flashState === "DARK" && normDist < 0.7) {
              this.flashState = "IGNITE";
              this.stateCounter = 0;
            }
          }
        }

        // 3. ORGANIC DRIFT & WANDERING
        this.wanderTimer--;
        if (this.wanderTimer <= 0) {
          this.targetHeading += (Math.random() - 0.5) * 1.0;
          this.wanderTimer = 35 + Math.floor(Math.random() * 55);
        }

        const headingDiff = this.targetHeading - this.heading;
        this.heading += headingDiff * 0.05;

        // Base flight thrust
        const baseSpeed = 0.28 * this.z;
        this.vx += Math.cos(this.heading) * baseSpeed * 0.08;
        this.vy += Math.sin(this.heading) * baseSpeed * 0.08;

        // Gentle natural vertical bobbing
        this.vy += Math.sin(this.bobPhase) * 0.03 * this.z;

        // Friction / drag
        this.vx *= 0.95;
        this.vy *= 0.95;

        // Apply position
        this.x += this.vx;
        this.y += this.vy;

        // Decay excitement
        this.excited *= 0.96;

        // Screen boundary wrap
        const margin = 20;
        if (this.x < -margin) this.x = width + margin;
        if (this.x > width + margin) this.x = -margin;
        if (this.y < -margin) this.y = height + margin;
        if (this.y > height + margin) this.y = -margin;
      }

      draw() {
        // Boost glow when excited by mouse
        const effectiveGlow = Math.min(1.0, this.currentGlow + this.excited * 0.4);
        if (effectiveGlow < 0.04) return;

        ctx.save();
        ctx.translate(this.x, this.y);

        // 1. SOFT WARM HALO (LUCIFERASE GLOW)
        const currentHalo = this.glowRadius * (0.8 + effectiveGlow * 0.35);
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, currentHalo);

        // Warm luminous palette: White-gold core -> chartreuse lime -> amber edge
        grad.addColorStop(0, `rgba(255, 255, 245, ${Math.min(1, effectiveGlow * 1.1)})`);
        grad.addColorStop(0.2, `rgba(217, 249, 110, ${effectiveGlow * 0.9})`);
        grad.addColorStop(0.55, `rgba(245, 158, 11, ${effectiveGlow * 0.35})`);
        grad.addColorStop(1, "rgba(245, 158, 11, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, currentHalo, 0, Math.PI * 2);
        ctx.fill();

        // 2. PINPOINT INTENSE CENTER (TINY GLOWING EMBER)
        ctx.beginPath();
        ctx.arc(0, 0, this.lightRadius * (0.8 + effectiveGlow * 0.25), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, effectiveGlow * 1.25)})`;
        ctx.fill();

        ctx.restore();
      }
    }

    const fireflies = Array.from({ length: count }, () => new Firefly());

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < fireflies.length; i++) {
        fireflies[i].update();
        fireflies[i].draw();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
      window.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (mouse.idleTimer) clearTimeout(mouse.idleTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
      aria-hidden="true"
    />
  );
};

export default FireflyEffect;
