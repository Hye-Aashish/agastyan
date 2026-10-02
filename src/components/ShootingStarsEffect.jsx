import { useEffect, useRef } from "react";

/**
 * Ultra-Aesthetic Shooting Stars & Celestial Cosmos Effect
 * 
 * Features:
 * 1. Realistic Meteor Streaks:
 *    - Accurate aerodynamic trajectory (30° - 45° angle)
 *    - Radiant nucleus head with 4-point micro starburst & radial aura
 *    - Hyper-smooth multi-stop plasma tail (White Core -> Cyan/Amber/Emerald -> Transparent)
 *    - Dynamic stardust spark wake (falling embers shedding along the streak)
 * 2. Cosmic Background Twinkling Stars:
 *    - Multi-layered depth (distant micro-stars vs bright constellation stars)
 *    - Organic sine-wave twinkle oscillations
 * 3. Event Diversity:
 *    - Regular meteors
 *    - Occasional radiant Fireballs (Bolides) with luminous tail flares
 *    - Synchronized meteor showers (2-3 stars streaking together)
 * 4. Interactive Magic:
 *    - Clicking or tapping anywhere summons a customized shooting star!
 * 5. Theme Responsive:
 *    - MutationObserver monitors 'dark' class changes in real-time to adjust
 *      palette contrast between dark space and clean daylight aesthetics.
 * 6. High-Performance & Battery-Friendly:
 *    - HTML5 Canvas with requestAnimationFrame & DPR scaling
 *    - Pauses completely when tab is inactive (document.visibilityState)
 */
const ShootingStarsEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let isDark = document.documentElement.classList.contains("dark");
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Handle high-DPI crisp rendering
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

    // Watch dark mode changes dynamically
    const observer = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains("dark");
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // ----------------------------------------------------
    // 1. COSMIC BACKGROUND TWINKLING STARS
    // ----------------------------------------------------
    const STAR_COUNT = Math.min(130, Math.max(60, Math.floor((width * height) / 14000)));
    const stars = [];

    class TwinkleStar {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.4;
        this.baseAlpha = Math.random() * 0.5 + 0.2;
        this.twinkleSpeed = 0.015 + Math.random() * 0.035;
        this.twinklePhase = Math.random() * Math.PI * 2;
        this.hue = Math.random() < 0.25 ? "amber" : Math.random() < 0.2 ? "cyan" : "white";
        this.hasCrossGlint = this.size > 1.6 && Math.random() < 0.35;
      }

      draw(time) {
        const twinkle = Math.sin(time * this.twinkleSpeed + this.twinklePhase);
        // Alpha modulation
        let alpha = this.baseAlpha + twinkle * 0.35;
        alpha = Math.max(0.08, Math.min(1, alpha));

        // Adjust for light mode readability
        if (!isDark) {
          alpha *= 0.4;
        }

        ctx.save();
        ctx.globalAlpha = alpha;

        let fillColor = "rgba(255, 255, 255, 0.9)";
        if (this.hue === "amber") {
          fillColor = isDark ? "rgba(251, 191, 36, 0.95)" : "rgba(245, 158, 11, 0.7)";
        } else if (this.hue === "cyan") {
          fillColor = isDark ? "rgba(125, 211, 252, 0.95)" : "rgba(14, 165, 233, 0.7)";
        }

        ctx.fillStyle = fillColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // 4-point micro glint on select bright stars
        if (this.hasCrossGlint && alpha > 0.65) {
          const arm = this.size * 2.8;
          ctx.strokeStyle = fillColor;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(this.x - arm, this.y);
          ctx.lineTo(this.x + arm, this.y);
          ctx.moveTo(this.x, this.y - arm);
          ctx.lineTo(this.x, this.y + arm);
          ctx.stroke();
        }

        ctx.restore();
      }
    }

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push(new TwinkleStar());
    }

    // ----------------------------------------------------
    // 2. STARDUST SPARK PARTICLES (EMITTED BY METEORS)
    // ----------------------------------------------------
    const sparks = [];

    class StardustSpark {
      constructor(x, y, color, sizeMultiplier = 1) {
        this.x = x + (Math.random() - 0.5) * 6;
        this.y = y + (Math.random() - 0.5) * 6;
        this.vx = (Math.random() - 0.5) * 0.9;
        this.vy = (Math.random() - 0.5) * 0.9 + 0.3; // gentle gravity
        this.size = (Math.random() * 1.5 + 0.6) * sizeMultiplier;
        this.alpha = 1;
        this.decay = 0.02 + Math.random() * 0.035;
        this.color = color;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.96;
        this.vy *= 0.96;
        this.alpha -= this.decay;
        return this.alpha > 0;
      }

      draw() {
        if (this.alpha <= 0) return;
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.alpha * (isDark ? 0.9 : 0.65));
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // ----------------------------------------------------
    // 3. SHOOTING STARS (METEORS)
    // ----------------------------------------------------
    const shootingStars = [];

    // Distinct celestial color schemes reflecting Agastyaan brand accents:
    // Gold/Orange (Agastyaan Orange), Emerald/Mint, Celestial Ice Cyan, Diamond White
    const COLOR_SCHEMES = [
      {
        name: "amber-gold",
        core: "rgb(255, 255, 255)",
        mid: "rgb(255, 170, 0)",
        outer: "rgba(249, 115, 22, 0.4)",
        glow: "#f59e0b",
        spark: "#fbbf24",
      },
      {
        name: "emerald-glow",
        core: "rgb(255, 255, 255)",
        mid: "rgb(52, 211, 153)",
        outer: "rgba(16, 185, 129, 0.4)",
        glow: "#10b981",
        spark: "#6ee7b7",
      },
      {
        name: "cyan-starlight",
        core: "rgb(255, 255, 255)",
        mid: "rgb(56, 189, 248)",
        outer: "rgba(14, 165, 233, 0.4)",
        glow: "#38bdf8",
        spark: "#93c5fd",
      },
      {
        name: "fireball-solar",
        core: "rgb(255, 255, 255)",
        mid: "rgb(255, 115, 0)",
        outer: "rgba(239, 68, 68, 0.5)",
        glow: "#ff5722",
        spark: "#f97316",
        isBolide: true,
      },
    ];

    class ShootingStar {
      constructor(customOptions = {}) {
        this.isCustom = !!customOptions.isCustom;

        // Choose color scheme
        const randScheme = COLOR_SCHEMES[Math.floor(Math.random() * COLOR_SCHEMES.length)];
        this.scheme = customOptions.scheme || randScheme;
        this.isBolide = this.scheme.isBolide || customOptions.isBolide || Math.random() < 0.12;

        // Trajectory: 30° to 45° downward diagonal streak
        this.angle = customOptions.angle ?? ((32 + Math.random() * 12) * Math.PI) / 180;
        this.cos = Math.cos(this.angle);
        this.sin = Math.sin(this.angle);

        // Velocity & Length
        this.speed = this.isBolide
          ? 22 + Math.random() * 8
          : 17 + Math.random() * 11;
        this.length = this.isBolide
          ? 240 + Math.random() * 130
          : 140 + Math.random() * 110;
        this.headRadius = this.isBolide ? 3.5 : 2.2;
        this.trailWidth = this.isBolide ? 3.8 : 2.4;

        // Spawn position: across upper top border or upper left
        if (customOptions.startX !== undefined && customOptions.startY !== undefined) {
          this.x = customOptions.startX;
          this.y = customOptions.startY;
        } else {
          // Spread spawns across top and upper left
          const spawnFromLeft = Math.random() < 0.4;
          if (spawnFromLeft) {
            this.x = -50;
            this.y = Math.random() * (height * 0.45);
          } else {
            this.x = Math.random() * (width * 0.95);
            this.y = -60;
          }
        }

        // Distance & Life
        const maxTravel = Math.max(width, height) * 0.85;
        this.totalDistance = Math.min(maxTravel, 650 + Math.random() * 550);
        this.traveled = 0;
        this.alive = true;
      }

      update() {
        if (!this.alive) return false;

        // Advance position
        this.x += this.cos * this.speed;
        this.y += this.sin * this.speed;
        this.traveled += this.speed;

        // Spawn trailing stardust sparks in the wake
        if (Math.random() < 0.65) {
          const sparkCount = this.isBolide ? 2 : 1;
          for (let s = 0; s < sparkCount; s++) {
            // Drop along the recent tail section
            const trailOffset = Math.random() * Math.min(this.length * 0.4, 50);
            sparks.push(
              new StardustSpark(
                this.x - this.cos * trailOffset,
                this.y - this.sin * trailOffset,
                this.scheme.spark,
                this.isBolide ? 1.4 : 1
              )
            );
          }
        }

        // Check if out of bounds or distance exceeded
        if (
          this.traveled >= this.totalDistance ||
          this.x > width + this.length ||
          this.y > height + this.length
        ) {
          this.alive = false;
        }

        return this.alive;
      }

      draw() {
        if (!this.alive) return;

        // Envelope fade: Quick ease-in, sustained burn, gentle fade-out
        const progress = this.traveled / this.totalDistance;
        let alpha = 1;
        if (progress < 0.15) {
          alpha = progress / 0.15;
        } else if (progress > 0.7) {
          alpha = Math.max(0, (1 - progress) / 0.3);
        }

        // Light mode adaptation: slightly reduce tail blinding opacity
        const themeAlpha = isDark ? alpha : alpha * 0.75;
        if (themeAlpha <= 0.01) return;

        const tailX = this.x - this.cos * this.length;
        const tailY = this.y - this.sin * this.length;

        ctx.save();
        ctx.lineCap = "round";

        // 1. SOFT OUTER GLOW BEAM (Halo around tail)
        const outerGrad = ctx.createLinearGradient(tailX, tailY, this.x, this.y);
        outerGrad.addColorStop(0, "rgba(0,0,0,0)");
        outerGrad.addColorStop(0.6, "rgba(0,0,0,0)");
        outerGrad.addColorStop(0.9, this.scheme.outer.replace(/[\d.]+\)$/, `${0.28 * themeAlpha})`));
        outerGrad.addColorStop(1, this.scheme.outer.replace(/[\d.]+\)$/, `${0.65 * themeAlpha})`));

        ctx.strokeStyle = outerGrad;
        ctx.lineWidth = this.trailWidth * 2.6;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();

        // 2. CRISP MULTI-STOP PLASMA TAIL
        const coreGrad = ctx.createLinearGradient(tailX, tailY, this.x, this.y);
        coreGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
        coreGrad.addColorStop(0.4, "rgba(255, 255, 255, 0.05)");
        coreGrad.addColorStop(0.75, this.scheme.mid.replace("rgb", "rgba").replace(")", `, ${0.75 * themeAlpha})`));
        coreGrad.addColorStop(0.95, `rgba(255, 255, 255, ${0.95 * themeAlpha})`);
        coreGrad.addColorStop(1, `rgba(255, 255, 255, ${1 * themeAlpha})`);

        ctx.strokeStyle = coreGrad;
        ctx.lineWidth = this.trailWidth;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();

        // 3. RADIANT NUCLEUS (HEAD OF THE METEOR)
        const glowRadius = this.headRadius * (this.isBolide ? 5 : 3.5);
        const headGrad = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          glowRadius
        );
        headGrad.addColorStop(0, `rgba(255, 255, 255, ${1 * themeAlpha})`);
        headGrad.addColorStop(0.3, this.scheme.mid.replace("rgb", "rgba").replace(")", `, ${0.85 * themeAlpha})`));
        headGrad.addColorStop(0.7, this.scheme.outer.replace(/[\d.]+\)$/, `${0.35 * themeAlpha})`));
        headGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = headGrad;
        ctx.beginPath();
        ctx.arc(this.x, this.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Solid brilliant center
        ctx.fillStyle = `rgba(255, 255, 255, ${themeAlpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.headRadius * 0.9, 0, Math.PI * 2);
        ctx.fill();

        // 4. MICRO STARBURST CROSS (Lens flare diffraction on head)
        if (themeAlpha > 0.4) {
          const crossSize = this.headRadius * (this.isBolide ? 4.2 : 2.8);
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.85 * themeAlpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(this.x - crossSize, this.y);
          ctx.lineTo(this.x + crossSize, this.y);
          ctx.moveTo(this.x, this.y - crossSize);
          ctx.lineTo(this.x, this.y + crossSize);
          ctx.stroke();
        }

        ctx.restore();
      }
    }

    // ----------------------------------------------------
    // 4. AUTOMATIC CELESTIAL METEOR SPAWNER
    // ----------------------------------------------------
    let nextMeteorTime = 0;

    const scheduleNextMeteor = (currentTime) => {
      // Natural cadence: Every 1.6s to 3.8s
      const delay = 1600 + Math.random() * 2200;
      nextMeteorTime = currentTime + delay;
    };

    const triggerMeteorEvent = (currentTime) => {
      // 15% chance of a "Meteor Shower" (2-3 shooting stars simultaneously or staggered)
      const isShower = Math.random() < 0.16;

      if (isShower) {
        const showerCount = 2 + Math.floor(Math.random() * 2);
        for (let i = 0; i < showerCount; i++) {
          setTimeout(() => {
            if (canvasRef.current) {
              shootingStars.push(new ShootingStar());
            }
          }, i * (180 + Math.random() * 220));
        }
      } else {
        shootingStars.push(new ShootingStar());
      }

      scheduleNextMeteor(currentTime);
    };

    // ----------------------------------------------------
    // 5. INTERACTIVE SUMMON: CLICK / TAP METEOR
    // ----------------------------------------------------
    const handlePointerDown = (e) => {
      // Spawn a shooting star traveling towards or from the click position
      const clickX = e.clientX;
      const clickY = e.clientY;

      // Start from upper-left relative to cursor
      const offsetDistance = 220 + Math.random() * 120;
      const angle = ((34 + (Math.random() - 0.5) * 10) * Math.PI) / 180;
      const startX = clickX - Math.cos(angle) * offsetDistance;
      const startY = clickY - Math.sin(angle) * offsetDistance;

      shootingStars.push(
        new ShootingStar({
          isCustom: true,
          startX,
          startY,
          angle,
          isBolide: Math.random() < 0.3,
        })
      );
    };

    window.addEventListener("pointerdown", handlePointerDown, { passive: true });

    // Initial burst so user immediately sees stars when page loads
    shootingStars.push(
      new ShootingStar({
        startX: width * 0.25,
        startY: -30,
        isBolide: true,
      })
    );
    setTimeout(() => {
      if (canvasRef.current) {
        shootingStars.push(new ShootingStar());
      }
    }, 700);

    // ----------------------------------------------------
    // 6. MAIN RENDER LOOP (60FPS)
    // ----------------------------------------------------
    let lastTime = performance.now();
    scheduleNextMeteor(lastTime);

    const render = (time) => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Draw background cosmic stars
      for (let i = 0; i < stars.length; i++) {
        stars[i].draw(time);
      }

      // Check automatic meteor spawner
      if (time >= nextMeteorTime) {
        triggerMeteorEvent(time);
      }

      // Update & render stardust sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const alive = sparks[i].update();
        if (alive) {
          sparks[i].draw();
        } else {
          sparks.splice(i, 1);
        }
      }

      // Update & render shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const alive = shootingStars[i].update();
        if (alive) {
          shootingStars[i].draw();
        } else {
          shootingStars.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Pause animation when tab is hidden to save 100% CPU/GPU
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        lastTime = performance.now();
        scheduleNextMeteor(lastTime);
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    animationFrameId = requestAnimationFrame(render);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.disconnect();
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

export default ShootingStarsEffect;
