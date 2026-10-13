import { useEffect, useRef, useCallback } from "react";

const COURSE_NAMES = [
  "Python",
  "Data Analytics",
  "AI/ML",
  "Web Dev",
  "Full Stack Development",
  "Robotics",
];
const COURSE_HUES = [190, 150, 300, 45, 20, 260];

/**
 * FixedLivingBackground
 * 
 * Single, permanently fixed living canvas background across the entire website.
 * Matches agastyaan-site-fixed-background.html:
 * - Single viewport canvas (position: fixed; inset: 0; z-index: 0)
 * - Persists seamlessly across page scrolling and route transitions (never duplicates)
 * - Renders: Sky, Aurora Borealis, Twinkling Stars, Shooting Stars, Moon/Sun,
 *   Cyberpunk City Skyline, Rolling Hills, Swaying Trees, Perching/Flying Birds,
 *   Hopping Wildlife Rabbits, Shimmering Pond with Water Ripples & Reeds,
 *   Bioluminescent Mushrooms, Futuristic Spacecraft, Reactive Fireflies,
 *   AND Scroll-aware Floating Course Nodes: Python, Data Analytics, AI/ML, Web Dev, Full Stack, Robotics.
 * - Interactive pointer flocking & click burst anywhere on the screen.
 * - Full Web Audio synthesizer ambient soundscape with crickets, owls, and glass chimes.
 */
const FixedLivingBackground = () => {
  const canvasRef = useRef(null);
  const audioCtxRef = useRef(null);
  const masterGainRef = useRef(null);
  const epochRef = useRef(0);
  const soundOnRef = useRef(false);

  // Animation & simulation ref container
  const simRef = useRef({
    stars: [],
    flies: [],
    shoot: null,
    t: 0,
    courses: [],
    pond: null,
    mush: [],
    birds: [],
    rabbits: [],
    city: [],
    trees: [],
    bushes: [],
    pointer: { x: -999, y: -999, on: false },
    sel: -1,
    W: 0,
    H: 0,
    dpr: 1,
    reduce: false,
    animId: null,
    lastTime: performance.now(),
    isDark: true,
  });

  // Helper: White noise buffer for the night wind (matches the HTML sample exactly)
  const createNatureNoiseBuffer = (ac) => {
    const bufferSize = ac.sampleRate * 3;
    const buffer = ac.createBuffer(1, bufferSize, ac.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    return buffer;
  };

  // Sound Engine Functions
  // 1. Magical Firefly Glass Chime (soft pure tone for clicks)
  const bell = useCallback((freq = 520) => {
    if (!soundOnRef.current || !audioCtxRef.current || !masterGainRef.current) return;
    const ac = audioCtxRef.current;
    if (ac.state === "suspended") return;
    const now = ac.currentTime;

    const o = ac.createOscillator();
    const g = ac.createGain();

    o.type = "sine";
    o.frequency.value = freq;

    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.06, now + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

    o.connect(g);
    g.connect(masterGainRef.current);

    o.start(now);
    o.stop(now + 1.3);
  }, []);

  // 2. Night Crickets ("trr-trr-trr" chirp)
  const chirp = useCallback((ep) => {
    if (!soundOnRef.current || ep !== epochRef.current || !audioCtxRef.current || !masterGainRef.current)
      return;
    const ac = audioCtxRef.current;
    if (ac.state === "suspended") return;
    const now = ac.currentTime;

    const f = 3900 + Math.random() * 700;
    const n = 3 + Math.floor(Math.random() * 2);

    for (let k = 0; k < n; k++) {
      const o = ac.createOscillator();
      o.type = "sine";
      o.frequency.value = f;

      const g = ac.createGain();
      o.connect(g);
      g.connect(masterGainRef.current);

      const st = now + k * 0.075;
      g.gain.setValueAtTime(0, st);
      g.gain.linearRampToValueAtTime(0.006, st + 0.015);
      g.gain.linearRampToValueAtTime(0, st + 0.05);

      o.start(st);
      o.stop(st + 0.06);
    }

    setTimeout(() => {
      chirp(ep);
    }, 500 + Math.random() * 1800);
  }, []);

  // 3. Soft Nocturnal Owl Hoot
  const hoot = useCallback((st, f) => {
    if (!audioCtxRef.current || !masterGainRef.current) return;
    const ac = audioCtxRef.current;
    const o = ac.createOscillator();
    o.type = "sine";
    o.frequency.setValueAtTime(f, st);
    o.frequency.linearRampToValueAtTime(f * 0.88, st + 0.4);

    const lp = ac.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 900;

    const g = ac.createGain();
    g.gain.setValueAtTime(0, st);
    g.gain.linearRampToValueAtTime(0.05, st + 0.08);
    g.gain.linearRampToValueAtTime(0, st + 0.45);

    o.connect(g);
    g.connect(lp);
    lp.connect(masterGainRef.current);
    o.start(st);
    o.stop(st + 0.5);
  }, []);

  const owl = useCallback(
    (ep) => {
      if (!soundOnRef.current || ep !== epochRef.current || !audioCtxRef.current)
        return;
      const now = audioCtxRef.current.currentTime;
      hoot(now, 390);
      hoot(now + 0.6, 350);
      setTimeout(() => {
        owl(ep);
      }, 12000 + Math.random() * 14000);
    },
    [hoot]
  );

  // 4. Main Nature Night Soundscape Synthesizer
  const startAudio = useCallback(() => {
    if (audioCtxRef.current) return true;
    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return false;
    const ac = new AudioContextClass();
    audioCtxRef.current = ac;

    const master = ac.createGain();
    master.gain.value = 0;
    master.connect(ac.destination);
    masterGainRef.current = master;

    // --- Warm A-Minor Nocturnal Atmosphere Pad ---
    const padG = ac.createGain();
    padG.gain.value = 0.05;
    const padLp = ac.createBiquadFilter();
    padLp.type = "lowpass";
    padLp.frequency.value = 700;
    padG.connect(padLp);
    padLp.connect(master);

    // Warm organic chord (A2, E3, A3, C#4)
    [110, 164.81, 220, 277.18].forEach((f, i) => {
      const o = ac.createOscillator();
      o.type = i % 2 ? "sine" : "triangle";
      o.frequency.value = f;
      o.detune.value = (i - 1.5) * 6;
      const g = ac.createGain();
      g.gain.value = 0.25;
      o.connect(g);
      g.connect(padG);
      o.start();
    });

    const padLfo = ac.createOscillator();
    padLfo.frequency.value = 0.07;
    const padLfoGain = ac.createGain();
    padLfoGain.gain.value = 0.025;
    padLfo.connect(padLfoGain);
    padLfoGain.connect(padG.gain);
    padLfo.start();

    // --- Gentle Night Wind ---
    const natureBuffer = createNatureNoiseBuffer(ac);
    const windSource = ac.createBufferSource();
    windSource.buffer = natureBuffer;
    windSource.loop = true;

    const windFilter = ac.createBiquadFilter();
    windFilter.type = "lowpass";
    windFilter.frequency.value = 380;

    const windGain = ac.createGain();
    windGain.gain.value = 0.03;

    windSource.connect(windFilter);
    windFilter.connect(windGain);
    windGain.connect(master);
    windSource.start();

    // Wind breathing LFO
    const windLfo = ac.createOscillator();
    windLfo.frequency.value = 0.11;
    const windLfoGain = ac.createGain();
    windLfoGain.gain.value = 0.02;
    windLfo.connect(windLfoGain);
    windLfoGain.connect(windGain.gain);
    windLfo.start();

    return true;
  }, []);

  const toggleSound = useCallback(() => {
    if (!soundOnRef.current) {
      if (!startAudio()) return;
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }
      soundOnRef.current = true;
      epochRef.current++;
      masterGainRef.current.gain.setTargetAtTime(
        0.9,
        audioCtxRef.current.currentTime,
        0.8
      );
      const ep = epochRef.current;
      chirp(ep);
      setTimeout(() => chirp(ep), 700);
      setTimeout(() => owl(ep), 4000);
      window.dispatchEvent(
        new CustomEvent("ambient-sound-status", { detail: { soundOn: true } })
      );
    } else {
      soundOnRef.current = false;
      epochRef.current++;
      if (masterGainRef.current && audioCtxRef.current) {
        masterGainRef.current.gain.setTargetAtTime(
          0,
          audioCtxRef.current.currentTime,
          0.4
        );
      }
      window.dispatchEvent(
        new CustomEvent("ambient-sound-status", { detail: { soundOn: false } })
      );
    }
  }, [startAudio, chirp, owl]);

  // Handle global sound events & course card selection
  useEffect(() => {
    const handleToggle = () => toggleSound();
    const handleBell = (e) => {
      const freq = (e && e.detail && e.detail.freq) || 600;
      bell(freq);
    };
    const handleCardSelection = (e) => {
      if (e && e.detail && e.detail.courseIndex !== undefined) {
        simRef.current.sel = e.detail.courseIndex;
      }
    };
    window.addEventListener("toggle-ambient-sound", handleToggle);
    window.addEventListener("play-bell-sound", handleBell);
    window.addEventListener("course-card-selected", handleCardSelection);
    return () => {
      window.removeEventListener("toggle-ambient-sound", handleToggle);
      window.removeEventListener("play-bell-sound", handleBell);
      window.removeEventListener("course-card-selected", handleCardSelection);
    };
  }, [toggleSound, bell]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const sim = simRef.current;
    sim.reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function hillY(x, layer) {
      const b = layer ? sim.H * 0.86 : sim.H * 0.78;
      return (
        b -
        Math.sin((x / sim.W) * 3.2 + layer * 1.7) * sim.H * 0.05 -
        Math.sin((x / sim.W) * 7.1 + layer) * sim.H * 0.02
      );
    }

    function makeFly(bx, by) {
      return {
        x: bx !== undefined ? bx : Math.random() * sim.W,
        y: by !== undefined ? by : sim.H * 0.45 + Math.random() * sim.H * 0.5,
        vx: 0,
        vy: 0,
        a: Math.random() * 6.28,
        ph: Math.random() * 6.28,
        sp: 0.6 + Math.random() * 1.2,
        sz: 1.6 + Math.random() * 1.6,
      };
    }

    function addFlies(n) {
      const isMobile = sim.W > 0 && sim.W < 768;
      const maxFlies = isMobile ? 24 : 140;
      for (let i = 0; i < n; i++) sim.flies.push(makeFly());
      if (sim.flies.length > maxFlies) {
        sim.flies.splice(0, sim.flies.length - maxFlies);
      }
    }

    function hitCourse(x, y) {
      for (let i = 0; i < sim.courses.length; i++) {
        const c = sim.courses[i];
        if (Math.hypot(x - c.x, y - (c.dy || c.y)) < 36) return i;
      }
      return -1;
    }

    function resize() {
      const newW = window.innerWidth;
      const newH = window.innerHeight;

      // On mobile browsers, scrolling hides/shows the address bar which changes window.innerHeight by 50-90px.
      // If width hasn't changed and height difference is small, ignore it!
      // This stops the whole background from moving at the bottom and prevents canvas stutter/freezing.
      if (sim.W > 0 && Math.abs(newW - sim.W) <= 4 && Math.abs(newH - sim.H) < 140) {
        return;
      }

      // Cap the pixel ratio on phones so the heavy canvas keeps scrolling smooth.
      const isMobile = newW < 768;
      sim.dpr = isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 2);
      sim.W = newW;
      sim.H = newH;
      canvas.width = sim.W * sim.dpr;
      canvas.height = sim.H * sim.dpr;
      ctx.setTransform(sim.dpr, 0, 0, sim.dpr, 0, 0);

      // Stars
      sim.stars = [];
      const n = Math.round((sim.W * sim.H) / 2600);
      for (let i = 0; i < n; i++) {
        sim.stars.push({
          x: Math.random() * sim.W,
          y: Math.random() * sim.H * 0.75,
          r: Math.random() * 1.2 + 0.2,
          p: Math.random() * 6.28,
          s: Math.random() * 1.5 + 0.4,
        });
      }

      // Futuristic City Skyline
      sim.city = [];
      let cx = sim.W * 0.02;
      while (cx < sim.W * 0.98) {
        const bw = 8 + Math.random() * 14;
        let bh = sim.H * (0.05 + Math.random() * 0.09);
        const kind = Math.random();
        const tall = Math.random() < 0.1;
        if (tall) bh *= 1.9;
        sim.city.push({
          x: cx,
          w: bw,
          h: bh,
          hue: Math.random() < 0.65 ? 190 : 290,
          kind: kind < 0.3 ? "spire" : kind < 0.6 ? "slant" : "block",
          ring: tall,
          ph: Math.random() * 6.28,
        });
        cx += bw + 1 + Math.random() * 5;
      }

      // Trees
      sim.trees = [];
      const tn = Math.max(6, Math.round(sim.W / 110));
      for (let q = 0; q < tn; q++) {
        const side =
          q % 2 ? Math.random() * 0.22 : 0.78 + Math.random() * 0.22;
        const tx = (Math.random() < 0.75 ? side : Math.random()) * sim.W;
        sim.trees.push({
          x: tx,
          h: sim.H * (0.12 + Math.random() * 0.12),
          pine: Math.random() < 0.5,
          ph: Math.random() * 6.28,
        });
      }

      // Bushes
      sim.bushes = [];
      for (let k = 0; k < Math.round(sim.W / 38); k++) {
        sim.bushes.push({
          x: Math.random() * sim.W,
          r: 9 + Math.random() * 16,
          ph: Math.random() * 6.28,
          g: Math.random(),
        });
      }

      // Birds
      sim.birds = [];
      if (sim.trees.length > 1) {
        for (let bi = 0; bi < Math.min(5, sim.trees.length); bi++) {
          const ti = (bi * 2 + 1) % sim.trees.length;
          sim.birds.push({
            tree: ti,
            off: (Math.random() - 0.5) * sim.trees[ti].h * 0.25,
            state: "perch",
            wait: 1 + Math.random() * 4,
            dir: Math.random() < 0.5 ? 1 : -1,
            s: 6 + Math.random() * 2,
            ph: Math.random() * 6.28,
            ft: 0,
            dur: 1,
            fx: 0,
            fy: 0,
            tx: 0,
            ty: 0,
            x: 0,
            y: 0,
          });
        }
      }

      // Wildlife Rabbits
      sim.rabbits = [
        { x: sim.W * 0.3, dir: 1, hopT: -1, wait: 1.2 },
        { x: sim.W * 0.68, dir: -1, hopT: -1, wait: 2.4 },
      ];

      // Floating Courses (Positioned with clear breathing room below the hero text)
      const narrow = sim.W < 900;
      const cxs = narrow
        ? [0.26, 0.74, 0.26, 0.74, 0.26, 0.74]
        : [0.15, 0.29, 0.43, 0.57, 0.71, 0.85];
      const cys = narrow
        ? [0.38, 0.38, 0.5, 0.5, 0.62, 0.62]
        : [0.5, 0.5, 0.5, 0.5, 0.5, 0.5];
      sim.courses = [];
      for (let ci = 0; ci < 6; ci++) {
        sim.courses.push({
          name: COURSE_NAMES[ci],
          hue: COURSE_HUES[ci],
          x: sim.W * cxs[ci],
          y: sim.H * cys[ci],
          ph: ci * 1.7,
        });
      }

      // Pond & Bioluminescent Mushrooms
      sim.pond = {
        cx: sim.W * 0.74,
        cy: sim.H * 0.945,
        rx: Math.min(sim.W * 0.22, 240),
        ry: sim.H * 0.03,
      };
      sim.mush = [];
      for (let mi = 0; mi < 10; mi++) {
        const mxp = Math.random() * sim.W;
        if (Math.abs(mxp - sim.pond.cx) < sim.pond.rx * 1.15) continue;
        sim.mush.push({
          x: mxp,
          s: 3 + Math.random() * 3.5,
          hue: Math.random() < 0.55 ? 170 : 300,
          ph: Math.random() * 6.28,
          dy: 12 + Math.random() * 10,
        });
      }
    }

    function drawSky() {
      const isDark = sim.isDark;
      const g = ctx.createLinearGradient(0, 0, 0, sim.H);
      if (isDark) {
        g.addColorStop(0, "#050716");
        g.addColorStop(0.55, "#0b1330");
        g.addColorStop(1, "#16244a");
      } else {
        g.addColorStop(0, "#bae6fd");
        g.addColorStop(0.45, "#fef3c7");
        g.addColorStop(0.85, "#fed7aa");
        g.addColorStop(1, "#ffedd5");
      }
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, sim.W, sim.H);

      const mx = sim.W * 0.78;
      const my = sim.H * 0.2;
      const mr = Math.min(sim.W, sim.H) * 0.065;

      if (isDark) {
        // Glowing Moon
        const mg = ctx.createRadialGradient(
          mx,
          my,
          mr * 0.6,
          mx,
          my,
          mr * 5
        );
        mg.addColorStop(0, "rgba(220,230,255,.28)");
        mg.addColorStop(1, "rgba(220,230,255,0)");
        ctx.fillStyle = mg;
        ctx.fillRect(mx - mr * 5, my - mr * 5, mr * 10, mr * 10);

        ctx.beginPath();
        ctx.arc(mx, my, mr, 0, 6.283);
        ctx.fillStyle = "#eef2ff";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(mx + mr * 0.35, my - mr * 0.15, mr * 0.9, 0, 6.283);
        ctx.fillStyle = "#0b1330";
        ctx.globalCompositeOperation = "destination-out";
        ctx.globalCompositeOperation = "source-over";
      } else {
        // Radiant Daylight Sun
        const sg = ctx.createRadialGradient(
          mx,
          my,
          mr * 0.2,
          mx,
          my,
          mr * 4.5
        );
        sg.addColorStop(0, "rgba(251,191,36,0.5)");
        sg.addColorStop(0.4, "rgba(253,224,71,0.2)");
        sg.addColorStop(1, "rgba(254,243,199,0)");
        ctx.fillStyle = sg;
        ctx.fillRect(mx - mr * 5, my - mr * 5, mr * 10, mr * 10);

        ctx.beginPath();
        ctx.arc(mx, my, mr * 0.9, 0, 6.283);
        ctx.fillStyle = "#fef08a";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(mx, my, mr * 0.65, 0, 6.283);
        ctx.fillStyle = "#f59e0b";
        ctx.fill();
      }
    }

    function drawStars() {
      if (!sim.isDark) return;
      for (let i = 0; i < sim.stars.length; i++) {
        const s = sim.stars[i];
        const a =
          0.45 +
          0.55 * Math.sin(sim.t * s.s + s.p) * (sim.reduce ? 0 : 1) +
          (sim.reduce ? 0.3 : 0);
        ctx.globalAlpha = Math.max(0.1, Math.min(1, a));
        ctx.fillStyle = "#f4f7ff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 6.283);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function drawShoot() {
      if (!sim.isDark || sim.reduce) return;
      if (!sim.shoot && Math.random() < 0.002) {
        sim.shoot = {
          x: Math.random() * sim.W * 0.6,
          y: Math.random() * sim.H * 0.25,
          l: 0,
        };
      }
      if (sim.shoot) {
        sim.shoot.l += 1;
        const x = sim.shoot.x + sim.shoot.l * 9;
        const y = sim.shoot.y + sim.shoot.l * 4;
        const a = 1 - sim.shoot.l / 40;
        const g = ctx.createLinearGradient(x, y, x - 70, y - 30);
        g.addColorStop(0, "rgba(255,255,255," + Math.max(a, 0) + ")");
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - 70, y - 30);
        ctx.stroke();
        if (sim.shoot.l > 40) sim.shoot = null;
      }
    }

    function drawHills(layer) {
      const isDark = sim.isDark;
      ctx.beginPath();
      ctx.moveTo(0, sim.H);
      for (let x = 0; x <= sim.W; x += 8) {
        ctx.lineTo(x, hillY(x, layer));
      }
      ctx.lineTo(sim.W, sim.H);
      ctx.closePath();
      if (isDark) {
        ctx.fillStyle = layer ? "#04070f" : "#0a1226";
      } else {
        ctx.fillStyle = layer ? "#15803d" : "#4ade80";
      }
      ctx.fill();
    }

    function drawCity() {
      const isDark = sim.isDark;
      for (let i = 0; i < sim.city.length; i++) {
        const b = sim.city[i];
        const base = hillY(b.x + b.w / 2, 0) + 3;
        const top = base - b.h;
        const mx = b.x + b.w / 2;
        const c = isDark
          ? "hsla(" + b.hue + ",90%,65%,"
          : "hsla(" + b.hue + ",90%,42%,";
        ctx.fillStyle = isDark ? "#111f45" : "#065f46";
        ctx.beginPath();
        if (b.kind === "slant") {
          ctx.moveTo(b.x, base);
          ctx.lineTo(b.x, top + b.h * 0.15);
          ctx.lineTo(b.x + b.w, top);
          ctx.lineTo(b.x + b.w, base);
        } else if (b.kind === "spire") {
          ctx.moveTo(b.x, base);
          ctx.lineTo(b.x + b.w * 0.2, top + b.h * 0.3);
          ctx.lineTo(mx, top - b.h * 0.3);
          ctx.lineTo(b.x + b.w * 0.8, top + b.h * 0.3);
          ctx.lineTo(b.x + b.w, base);
        } else {
          ctx.rect(b.x, top, b.w, b.h);
        }
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = c + ".85)";
        ctx.fillRect(b.x, top, b.w, 1.2);
        ctx.fillStyle = c + ".6)";
        ctx.fillRect(mx - 0.5, top + b.h * 0.15, 1, b.h * 0.75);
        ctx.fillStyle = c + ".3)";
        for (let wy = top + 6; wy < base - 4; wy += 5) {
          ctx.fillRect(b.x + 2, wy, b.w - 4, 1);
        }
        if (b.ring) {
          const pulse = sim.reduce
            ? 0.8
            : 0.5 + 0.5 * Math.sin(sim.t * 1.6 + b.ph);
          ctx.globalCompositeOperation = isDark ? "lighter" : "source-over";
          ctx.strokeStyle = c + (0.3 + 0.4 * pulse) + ")";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.ellipse(mx, top - 4, b.w * 1.6, 2.2, 0, 0, 6.283);
          ctx.stroke();
          const g = ctx.createRadialGradient(mx, top - 4, 0, mx, top - 4, 8);
          g.addColorStop(0, c + 0.7 * pulse + ")");
          g.addColorStop(1, c + "0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(mx, top - 4, 8, 0, 6.283);
          ctx.fill();
          ctx.globalCompositeOperation = "source-over";
        }
      }
      const hg = ctx.createLinearGradient(
        0,
        sim.H * 0.6,
        0,
        sim.H * 0.82
      );
      if (isDark) {
        hg.addColorStop(0, "rgba(22,36,74,0)");
        hg.addColorStop(0.7, "rgba(22,50,90,.2)");
        hg.addColorStop(1, "rgba(10,18,38,.45)");
      } else {
        hg.addColorStop(0, "rgba(254,243,199,0)");
        hg.addColorStop(0.7, "rgba(187,247,208,.25)");
        hg.addColorStop(1, "rgba(74,222,128,.45)");
      }
      ctx.fillStyle = hg;
      ctx.fillRect(0, sim.H * 0.6, sim.W, sim.H * 0.24);
    }

    function drawTrees() {
      const isDark = sim.isDark;
      for (let i = 0; i < sim.trees.length; i++) {
        const T = sim.trees[i];
        const y = hillY(T.x, 1) + 6;
        const h = T.h;
        const sw = sim.reduce ? 0 : Math.sin(sim.t * 0.7 + T.ph) * 2;
        const tc = isDark ? "#03060d" : "#064e3b";
        ctx.fillStyle = tc;
        ctx.strokeStyle = tc;
        ctx.lineWidth = Math.max(3, h * 0.05);
        ctx.beginPath();
        ctx.moveTo(T.x, y);
        ctx.lineTo(T.x + sw * 0.3, y - h * 0.45);
        ctx.stroke();

        if (T.pine) {
          for (let l = 0; l < 4; l++) {
            const ly = y - h * (0.22 + l * 0.2);
            const lw = h * (0.3 - l * 0.06);
            ctx.beginPath();
            ctx.moveTo(T.x + sw * (l / 4) - lw, ly);
            ctx.lineTo(T.x + sw * (l / 3 + 0.3), ly - h * 0.28);
            ctx.lineTo(T.x + sw * (l / 4) + lw, ly);
            ctx.closePath();
            ctx.fill();
          }
        } else {
          const cx = T.x + sw;
          const cy = y - h * 0.62;
          ctx.beginPath();
          ctx.arc(cx, cy, h * 0.3, 0, 6.283);
          ctx.arc(cx - h * 0.24, cy + h * 0.1, h * 0.22, 0, 6.283);
          ctx.arc(cx + h * 0.24, cy + h * 0.1, h * 0.22, 0, 6.283);
          ctx.arc(cx, cy - h * 0.16, h * 0.22, 0, 6.283);
          ctx.fill();
        }
      }
    }

    function drawBushes() {
      const isDark = sim.isDark;
      for (let i = 0; i < sim.bushes.length; i++) {
        const B = sim.bushes[i];
        const y = hillY(B.x, 1) + 8;
        const r = B.r;
        const sw = sim.reduce ? 0 : Math.sin(sim.t + B.ph) * 1.2;
        if (isDark) {
          ctx.fillStyle = B.g > 0.5 ? "#040a14" : "#03060d";
        } else {
          ctx.fillStyle = B.g > 0.5 ? "#14532d" : "#166534";
        }
        ctx.beginPath();
        ctx.arc(B.x + sw, y - r * 0.6, r, Math.PI, 0);
        ctx.arc(B.x + r * 0.9 + sw, y - r * 0.4, r * 0.75, Math.PI, 0);
        ctx.arc(B.x - r * 0.9 + sw, y - r * 0.4, r * 0.7, Math.PI, 0);
        ctx.lineTo(B.x + r * 1.7, y);
        ctx.lineTo(B.x - r * 1.6, y);
        ctx.closePath();
        ctx.fill();
      }
    }

    function updateRabbit(dt) {
      if (sim.reduce) return;
      const dur = 0.62;
      const dist = sim.W * 0.05;
      for (let i = 0; i < sim.rabbits.length; i++) {
        const rabbit = sim.rabbits[i];
        if (rabbit.hopT < 0) {
          rabbit.wait -= dt;
          if (rabbit.wait <= 0) {
            rabbit.hopT = 0;
            if (rabbit.x < sim.W * 0.06) rabbit.dir = 1;
            else if (rabbit.x > sim.W * 0.94) rabbit.dir = -1;
            else if (Math.random() < 0.15) rabbit.dir *= -1;
          }
        } else {
          rabbit.hopT += dt / dur;
          rabbit.x += (rabbit.dir * dist * dt) / dur;
          if (rabbit.hopT >= 1) {
            rabbit.hopT = -1;
            rabbit.wait = 0.4 + Math.random() * 1.6;
          }
        }
      }
    }

    function drawRabbit() {
      const isDark = sim.isDark;
      for (let ri = 0; ri < sim.rabbits.length; ri++) {
        const rabbit = sim.rabbits[ri];
        const u = Math.max(9, sim.H * 0.03);
        const air = rabbit.hopT >= 0;
        const hp = air ? rabbit.hopT : 0;
        const lift = air ? Math.sin(Math.PI * hp) * sim.H * 0.06 : 0;
        const gy = hillY(rabbit.x, 1) + 6;
        ctx.save();
        ctx.translate(rabbit.x, gy - lift);
        ctx.scale(rabbit.dir, 1);
        ctx.rotate(air ? -Math.cos(Math.PI * hp) * 0.3 : 0);
        ctx.fillStyle = isDark ? "rgba(2,4,9,.6)" : "rgba(120,53,15,.85)";
        function el(x, y, rx, ry, r) {
          ctx.beginPath();
          ctx.ellipse(x, y, rx, ry, r || 0, 0, 6.283);
          ctx.fill();
        }
        el(-u * 1.05, -u * 1.0, u * 0.26, u * 0.26);
        el(0, -u * 0.85, u * 1.1, u * 0.7, -0.1);
        if (air) {
          el(-u * 0.9, -u * 0.25, u * 0.75, u * 0.22, 0.25);
          el(u * 0.8, -u * 0.35, u * 0.5, u * 0.16, -0.5);
        } else {
          el(-u * 0.6, -u * 0.2, u * 0.55, u * 0.28);
          el(u * 0.7, -u * 0.15, u * 0.3, u * 0.15);
        }
        el(u * 1.15, -u * 1.35, u * 0.5, u * 0.42);
        el(u * 0.95, -u * 2.25, u * 0.16, u * 0.6, -0.25);
        el(u * 1.3, -u * 2.2, u * 0.16, u * 0.58, 0.1);
        ctx.restore();
      }
    }

    function perchPos(b) {
      const T = sim.trees[b.tree];
      return {
        x: T.x + b.off,
        y: hillY(T.x, 1) + 6 - T.h * (T.pine ? 0.5 : 0.62) + b.off * 0.3,
      };
    }

    function drawBirds(dt) {
      const isDark = sim.isDark;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      for (let i = 0; i < sim.birds.length; i++) {
        const b = sim.birds[i];
        const pp = perchPos(b);
        if (b.state === "perch") {
          b.x = pp.x;
          b.y = pp.y;
          if (!sim.reduce) {
            b.wait -= dt;
            if (b.wait <= 0 && sim.trees.length > 1) {
              const cand = [];
              for (let k = 0; k < sim.trees.length; k++) {
                if (k !== b.tree)
                  cand.push({
                    k: k,
                    d: Math.abs(sim.trees[k].x - sim.trees[b.tree].x),
                  });
              }
              cand.sort((a, c) => a.d - c.d);
              const pick =
                cand[Math.floor(Math.random() * Math.min(3, cand.length))].k;
              b.fx = b.x;
              b.fy = b.y;
              b.tree = pick;
              b.off = (Math.random() - 0.5) * sim.trees[pick].h * 0.25;
              const np = perchPos(b);
              b.tx = np.x;
              b.ty = np.y;
              const dist = Math.hypot(b.tx - b.fx, b.ty - b.fy);
              b.dur = Math.max(0.7, dist / 110);
              b.ft = 0;
              b.state = "fly";
              b.dir = b.tx >= b.fx ? 1 : -1;
            }
          }
        } else {
          b.ft += dt / b.dur;
          const e = Math.min(b.ft, 1);
          const dd = Math.hypot(b.tx - b.fx, b.ty - b.fy);
          b.x = b.fx + (b.tx - b.fx) * e;
          b.y = b.fy + (b.ty - b.fy) * e - Math.sin(Math.PI * e) * dd * 0.15;
          if (b.ft >= 1) {
            b.state = "perch";
            b.wait = 3 + Math.random() * 6;
          }
        }
        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.scale(b.dir, 1);
        const s = b.s;
        if (b.state === "fly") {
          const flap = Math.sin(sim.t * 18 + b.ph);
          ctx.beginPath();
          ctx.moveTo(-s, flap * s * 0.9);
          ctx.quadraticCurveTo(-s * 0.45, -s * 0.55, 0, 0);
          ctx.quadraticCurveTo(s * 0.45, -s * 0.55, s, flap * s * 0.9);
          ctx.strokeStyle = isDark ? "rgba(190,210,255,.3)" : "rgba(255,255,255,.6)";
          ctx.lineWidth = 3.6;
          ctx.stroke();
          ctx.strokeStyle = isDark ? "#02030a" : "#0f172a";
          ctx.lineWidth = 2;
          ctx.stroke();
        } else {
          ctx.fillStyle = isDark ? "#02030a" : "#0f172a";
          ctx.strokeStyle = isDark ? "rgba(190,210,255,.28)" : "rgba(255,255,255,.5)";
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.ellipse(0, -s * 0.5, s * 0.6, s * 0.42, -0.3, 0, 6.283);
          ctx.fill();
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(s * 0.5, -s * 0.95, s * 0.3, 0, 6.283);
          ctx.fill();
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(-s * 0.4, -s * 0.35);
          ctx.lineTo(-s * 1.1, -s * 0.05);
          ctx.lineTo(-s * 0.3, -s * 0.6);
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
      }
    }

    function drawAurora() {
      if (!sim.isDark) return;
      const tt = sim.reduce ? 0 : sim.t;
      const cols = [
        ["0,255,170", "60,170,255"],
        ["120,255,200", "170,90,255"],
        ["60,255,220", "0,200,255"],
      ];
      ctx.globalCompositeOperation = "lighter";
      const hg = sim.H * 0.22;
      const aStep = sim.W < 768 ? 14 : 6;
      for (let r = 0; r < 3; r++) {
        const g = ctx.createLinearGradient(0, 0, 0, hg);
        g.addColorStop(0, "rgba(" + cols[r][0] + ",0)");
        g.addColorStop(0.45, "rgba(" + cols[r][0] + ",.9)");
        g.addColorStop(0.8, "rgba(" + cols[r][1] + ",.35)");
        g.addColorStop(1, "rgba(" + cols[r][1] + ",0)");
        ctx.fillStyle = g;
        for (let x = 0; x < sim.W; x += aStep) {
          const w =
            Math.sin(x * 0.004 + tt * 0.15 + r * 2) +
            Math.sin(x * 0.011 - tt * 0.22 + r) * 0.5;
          const top = sim.H * (0.05 + r * 0.06) + w * sim.H * 0.04;
          ctx.globalAlpha =
            Math.max(
              0,
              0.07 + 0.04 * Math.sin(x * 0.01 + tt * 0.4 + r * 1.7)
            ) * (r === 2 ? 0.7 : 1);
          ctx.fillRect(x, top, aStep, hg);
        }
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    }

    function drawPond() {
      if (!sim.pond) return;
      const isDark = sim.isDark;
      const cx = sim.pond.cx;
      const cy = sim.pond.cy;
      const rx = sim.pond.rx;
      const ry = sim.pond.ry;
      const mx = sim.W * 0.78;
      let i;
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, 0, 0, 6.283);
      ctx.clip();
      const g = ctx.createLinearGradient(0, cy - ry, 0, cy + ry);
      if (isDark) {
        g.addColorStop(0, "#123056");
        g.addColorStop(1, "#050a1c");
      } else {
        g.addColorStop(0, "#38bdf8");
        g.addColorStop(1, "#0369a1");
      }
      ctx.fillStyle = g;
      ctx.fillRect(cx - rx, cy - ry, rx * 2, ry * 2);

      // Moon/Sun reflection
      for (i = 0; i < 9; i++) {
        const y = cy - ry + i * ((ry * 2) / 9) + 1;
        const wd =
          (8 + i * 4) * (1 + 0.35 * Math.sin(sim.t * 2 + i * 1.3));
        if (isDark) {
          ctx.fillStyle = "rgba(225,236,255," + (0.55 - i * 0.05) + ")";
        } else {
          ctx.fillStyle = "rgba(254,240,138," + (0.75 - i * 0.06) + ")";
        }
        ctx.fillRect(mx - wd / 2 + Math.sin(sim.t * 1.5 + i) * 3, y, wd, 1.7);
      }

      // Ripples
      ctx.lineWidth = 1;
      for (i = 0; i < 3; i++) {
        const p = ((sim.reduce ? 0.3 : sim.t * 0.22) + i / 3) % 1;
        if (isDark) {
          ctx.strokeStyle = "rgba(180,220,255," + 0.3 * (1 - p) + ")";
        } else {
          ctx.strokeStyle = "rgba(255,255,255," + 0.5 * (1 - p) + ")";
        }
        ctx.beginPath();
        ctx.ellipse(
          cx - rx * 0.25,
          cy + ry * 0.1,
          rx * 0.55 * p + 2,
          ry * 0.8 * p + 0.5,
          0,
          0,
          6.283
        );
        ctx.stroke();
      }
      ctx.restore();

      ctx.strokeStyle = isDark ? "rgba(120,170,255,.2)" : "rgba(14,165,233,.4)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, 0, 0, 6.283);
      ctx.stroke();

      // Reeds along the back edge
      for (i = 0; i < 16; i++) {
        const a = Math.PI + ((i + 0.5) / 16) * Math.PI;
        const rxp = cx + Math.cos(a) * rx * 1.02;
        const ryp = cy + Math.sin(a) * ry * 0.95;
        const n =
          Math.abs(Math.sin(i * 12.9898) * 43758.5453) % 1;
        const h = 16 + n * 24;
        const sw = sim.reduce ? 0 : Math.sin(sim.t * 1.3 + i) * 2.5;
        ctx.strokeStyle = isDark ? "#02040a" : "#14532d";
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(rxp, ryp + 2);
        ctx.quadraticCurveTo(
          rxp + sw * 0.5,
          ryp - h * 0.5,
          rxp + sw,
          ryp - h
        );
        ctx.stroke();
        if (n > 0.4) {
          ctx.fillStyle = isDark ? "#02040a" : "#14532d";
          ctx.beginPath();
          ctx.ellipse(rxp + sw, ryp - h + 3, 1.8, 5, 0, 0, 6.283);
          ctx.fill();
        }
      }
    }

    function drawMush() {
      const isDark = sim.isDark;
      ctx.globalCompositeOperation = isDark ? "lighter" : "source-over";
      for (let i = 0; i < sim.mush.length; i++) {
        const m = sim.mush[i];
        const y = hillY(m.x, 1) + m.dy;
        const pu = sim.reduce
          ? 0.8
          : 0.55 + 0.45 * Math.sin(sim.t * 1.4 + m.ph);
        const c = isDark
          ? "hsla(" + m.hue + ",100%,65%,"
          : "hsla(" + m.hue + ",90%,48%,";
        const g = ctx.createRadialGradient(
          m.x,
          y - m.s,
          0,
          m.x,
          y - m.s,
          m.s * 5
        );
        g.addColorStop(0, c + (isDark ? 0.5 * pu : 0.35 * pu) + ")");
        g.addColorStop(1, c + "0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(m.x, y - m.s, m.s * 5, 0, 6.283);
        ctx.fill();
        ctx.fillStyle = c + (0.55 + 0.4 * pu) + ")";
        ctx.beginPath();
        ctx.arc(m.x, y - m.s * 0.9, m.s, Math.PI, 0);
        ctx.fill();
        ctx.fillStyle = isDark ? c + ".5)" : "#0f172a";
        ctx.fillRect(m.x - m.s * 0.2, y - m.s * 0.9, m.s * 0.4, m.s * 0.9);
      }
      ctx.globalCompositeOperation = "source-over";
    }

    function drawCourses() {
      const isDark = sim.isDark;
      const sy = window.scrollY || window.pageYOffset || 0;
      ctx.textAlign = "center";
      for (let i = 0; i < sim.courses.length; i++) {
        const c = sim.courses[i];
        const by =
          c.y - sy + (sim.reduce ? 0 : Math.sin(sim.t * 0.9 + c.ph) * 6);
        c.dy = by;

        // Only draw while the hero (and its course portals) is still on screen,
        // so the rings scroll away with the hero instead of floating over content.
        if (by < -70 || by > sim.H + 70) continue;

        const col = isDark
          ? "hsla(" + c.hue + ",100%,68%,"
          : "hsla(" + c.hue + ",95%,45%,";
        const on = i === sim.sel;
        const pu = sim.reduce ? 0.8 : 0.6 + 0.4 * Math.sin(sim.t * 1.6 + c.ph);

        ctx.globalCompositeOperation = isDark ? "lighter" : "source-over";
        const g = ctx.createRadialGradient(
          c.x,
          by,
          0,
          c.x,
          by,
          on ? 46 : 34
        );
        g.addColorStop(0, col + (0.55 * pu + (on ? 0.25 : 0)) + ")");
        g.addColorStop(1, col + "0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(c.x, by, on ? 46 : 34, 0, 6.283);
        ctx.fill();

        ctx.fillStyle = col + ".95)";
        ctx.beginPath();
        ctx.arc(c.x, by, 5, 0, 6.283);
        ctx.fill();

        ctx.strokeStyle = col + (0.5 + 0.3 * pu) + ")";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(c.x, by, 13, 0, 6.283);
        ctx.stroke();

        if (!sim.reduce) {
          const a = sim.t * 0.8 + c.ph;
          ctx.fillStyle = col + "1)";
          ctx.beginPath();
          ctx.arc(
            c.x + Math.cos(a) * 13,
            by + Math.sin(a) * 13,
            1.8,
            0,
            6.283
          );
          ctx.fill();
        }
        ctx.globalCompositeOperation = "source-over";

        if (isDark) {
          ctx.font = "600 12px system-ui,-apple-system,Segoe UI,Roboto,sans-serif";
          ctx.fillStyle = "rgba(233,238,252,.92)";
          ctx.fillText(c.name, c.x, by + 30);
        } else {
          ctx.font = "bold 13px system-ui,-apple-system,Segoe UI,Roboto,sans-serif";
          const tw = ctx.measureText(c.name).width;
          ctx.fillStyle = "rgba(255,255,255,0.9)";
          ctx.beginPath();
          if (ctx.roundRect) {
            ctx.roundRect(c.x - tw / 2 - 8, by + 16, tw + 16, 20, 10);
          } else {
            ctx.rect(c.x - tw / 2 - 8, by + 16, tw + 16, 20);
          }
          ctx.fill();
          ctx.strokeStyle = "rgba(234,88,12,0.3)";
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.fillStyle = "#0f172a";
          ctx.fillText(c.name, c.x, by + 30);
        }
      }
      ctx.textAlign = "start";
    }

    function drawCraft() {
      const isDark = sim.isDark;
      const span = sim.W + 240;
      const x = sim.reduce
        ? sim.W * 0.4
        : ((sim.t * 38) % span) - 120;
      const y =
        sim.H * 0.3 + (sim.reduce ? 0 : Math.sin(sim.t * 0.9) * 8);
      ctx.globalCompositeOperation = isDark ? "lighter" : "source-over";
      const tg = ctx.createLinearGradient(x, y, x - 110, y);
      if (isDark) {
        tg.addColorStop(0, "rgba(0,230,255,.5)");
        tg.addColorStop(1, "rgba(0,230,255,0)");
      } else {
        tg.addColorStop(0, "rgba(234,88,12,.55)");
        tg.addColorStop(1, "rgba(234,88,12,0)");
      }
      ctx.strokeStyle = tg;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - 110, y);
      ctx.stroke();

      const g = ctx.createRadialGradient(x, y, 0, x, y, 26);
      if (isDark) {
        g.addColorStop(0, "rgba(120,240,255,.6)");
        g.addColorStop(1, "rgba(0,200,255,0)");
      } else {
        g.addColorStop(0, "rgba(251,191,36,.6)");
        g.addColorStop(1, "rgba(234,88,12,0)");
      }
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, 26, 0, 6.283);
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";

      ctx.fillStyle = isDark ? "#cfefff" : "#ffedd5";
      ctx.beginPath();
      ctx.ellipse(x, y, 11, 3.2, 0, 0, 6.283);
      ctx.fill();
      ctx.fillStyle = isDark ? "#0b1330" : "#0f172a";
      ctx.beginPath();
      ctx.ellipse(x, y - 1.5, 5, 2, 0, Math.PI, 0);
      ctx.fill();
      ctx.fillStyle = isDark ? "#ff4fd8" : "#ef4444";
      ctx.beginPath();
      ctx.arc(x + 8, y + 0.5, 1.2, 0, 6.283);
      ctx.fill();
    }

    function drawGrass() {
      const isDark = sim.isDark;
      const isMobile = sim.W < 768;
      const rows = isDark
        ? [
            { step: isMobile ? 8 : 3, hmin: 10, hmax: 22, col: "#08132a", tip: "rgba(120,255,200,.22)", off: -6, lw: 1 },
            { step: isMobile ? 9 : 3, hmin: 14, hmax: 30, col: "#050b18", tip: "rgba(150,255,120,.18)", off: -2, lw: 1.3 },
            { step: isMobile ? 11 : 4, hmin: 20, hmax: 44, col: "#03060d", tip: null, off: 6, lw: 1.8 },
          ]
        : [
            { step: isMobile ? 8 : 3, hmin: 10, hmax: 22, col: "#15803d", tip: "rgba(250,204,21,.85)", off: -6, lw: 1 },
            { step: isMobile ? 9 : 3, hmin: 14, hmax: 30, col: "#166534", tip: "rgba(253,224,71,.75)", off: -2, lw: 1.3 },
            { step: isMobile ? 11 : 4, hmin: 20, hmax: 44, col: "#14532d", tip: null, off: 6, lw: 1.8 },
          ];

      for (let r = 0; r < rows.length; r++) {
        const R = rows[r];
        ctx.strokeStyle = R.col;
        ctx.lineWidth = R.lw;
        for (let x = (r * 2) % R.step; x < sim.W; x += R.step) {
          const n =
            Math.abs(
              Math.sin(x * 12.9898 + r * 78.233) * 43758.5453
            ) % 1;
          const y = hillY(x, 1) + R.off + r * 4;
          const h = R.hmin + n * (R.hmax - R.hmin);
          const sw = sim.reduce
            ? 0
            : Math.sin(sim.t * 1.2 + x * 0.05 + r) * (2 + h * 0.06);
          const ex = x + sw * 2 + (n * 6 - 3);
          const ey = y - h;
          ctx.beginPath();
          ctx.moveTo(x, y + 4);
          ctx.quadraticCurveTo(x + sw, y - h * 0.5, ex, ey);
          ctx.stroke();
          if (R.tip && n > 0.55) {
            ctx.fillStyle = R.tip;
            ctx.fillRect(ex - 0.6, ey - 0.6, 1.4, 1.4);
          }
        }
      }
      ctx.fillStyle = isDark ? "#03060d" : "#14532d";
      ctx.beginPath();
      ctx.moveTo(0, sim.H);
      for (let gx = 0; gx <= sim.W; gx += 8) {
        ctx.lineTo(gx, hillY(gx, 1) + 10);
      }
      ctx.lineTo(sim.W, sim.H);
      ctx.closePath();
      ctx.fill();
    }

    function drawFlies(dt) {
      const isDark = sim.isDark;
      if (!isDark) return;

      ctx.globalCompositeOperation = "lighter";
      if (sim.pointer.on) {
        const pg = ctx.createRadialGradient(
          sim.pointer.x,
          sim.pointer.y,
          0,
          sim.pointer.x,
          sim.pointer.y,
          90
        );
        pg.addColorStop(0, "rgba(214,255,122,.22)");
        pg.addColorStop(1, "rgba(214,255,122,0)");
        ctx.fillStyle = pg;
        ctx.beginPath();
        ctx.arc(sim.pointer.x, sim.pointer.y, 90, 0, 6.283);
        ctx.fill();
      }
      for (let i = 0; i < sim.flies.length; i++) {
        const f = sim.flies[i];
        if (!sim.reduce) {
          f.a += (Math.random() - 0.5) * 0.35;
          let ax = Math.cos(f.a) * 0.03;
          let ay = Math.sin(f.a) * 0.03;
          if (sim.pointer.on) {
            const dx = sim.pointer.x - f.x;
            const dy = sim.pointer.y - f.y;
            const d = Math.sqrt(dx * dx + dy * dy) + 1;
            if (d < 520) {
              const k = 1 - d / 520;
              ax +=
                (dx / d) * 0.35 * k -
                (dy / d) * 0.12 * k * (f.ph > 3.1 ? 1 : -1);
              ay +=
                (dy / d) * 0.35 * k +
                (dx / d) * 0.12 * k * (f.ph > 3.1 ? 1 : -1);
              if (d < 45) {
                ax -= (dx / d) * 0.25;
                ay -= (dy / d) * 0.25;
              }
              f.near = k;
            } else f.near = 0;
          } else f.near = 0;
          f.vx = (f.vx + ax) * 0.97;
          f.vy = (f.vy + ay) * 0.97;
          const spd = Math.sqrt(f.vx * f.vx + f.vy * f.vy);
          if (spd > 5) {
            f.vx *= 5 / spd;
            f.vy *= 5 / spd;
          }
          f.x += f.vx * dt * 60;
          f.y += f.vy * dt * 60;
          if (f.x < -20) f.x = sim.W + 20;
          if (f.x > sim.W + 20) f.x = -20;
          if (f.y < sim.H * 0.35) f.vy += 0.02;
          if (f.y > hillY(f.x, 1) - 6) f.vy -= 0.05;
        }
        let b = sim.reduce ? 0.8 : Math.max(0, Math.sin(sim.t * f.sp + f.ph));
        b = b * b;
        if (f.near) b = Math.max(b, f.near * 0.9);

        const r = f.sz * (6 + b * 10);
        const g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, r);
        g.addColorStop(0, "rgba(226,255,140," + (0.15 + b * 0.85) + ")");
        g.addColorStop(0.25, "rgba(190,255,90," + b * 0.35 + ")");
        g.addColorStop(1, "rgba(150,255,60,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(f.x, f.y, r, 0, 6.283);
        ctx.fill();
        ctx.fillStyle = "rgba(255,255,220," + (0.35 + b * 0.65) + ")";
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.sz * 0.6, 0, 6.283);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
    }

    function frame(now) {
      const dt = Math.min((now - sim.lastTime) / 1000, 0.05);
      sim.lastTime = now;
      sim.t += dt;
      sim.isDark = document.documentElement.classList.contains("dark");

      drawSky();
      drawAurora();
      drawStars();
      drawShoot();
      drawCraft();
      drawHills(0);
      drawCity();
      drawCourses();
      drawFlies(dt);
      drawHills(1);
      drawTrees();
      drawBirds(dt);
      drawBushes();
      updateRabbit(dt);
      drawRabbit();
      drawGrass();
      drawPond();
      drawMush();

      sim.animId = requestAnimationFrame(frame);
    }

    function setP(e) {
      const p = e.touches ? e.touches[0] : e;
      sim.pointer.x = p.clientX;
      sim.pointer.y = p.clientY;
      sim.pointer.on = true;
    }

    function handlePointerEnd() {
      sim.pointer.on = false;
    }

    function handlePointerDown(e) {
      const target = e.target;
      const isInteractive = target && target.closest && target.closest('a, button, input, select, textarea, [role="button"], #card, .card');
      
      const p = e.touches ? e.touches[0] : e;
      const bx = p.clientX;
      const by = p.clientY;

      // Check if clicking on a course portal orb (ONLY when viewing the hero section)
      const sy = window.scrollY || window.pageYOffset || 0;
      if (!isInteractive && sy < 250) {
        const hc = hitCourse(bx, by);
        if (hc >= 0) {
          window.dispatchEvent(new CustomEvent("open-course-card", { detail: { courseIndex: hc } }));
          bell(520 + hc * 90);
          return;
        }
      }

      if (!sim.isDark) return;
      const isMobile = sim.W < 768;
      const burstCount = isMobile ? 3 : 14;
      const maxFlies = isMobile ? 24 : 140;
      for (let i = 0; i < burstCount; i++) {
        const f = makeFly(bx, by);
        const an = Math.random() * 6.283;
        const sp = 1.5 + Math.random() * 3;
        f.vx = Math.cos(an) * sp;
        f.vy = Math.sin(an) * sp;
        sim.flies.push(f);
      }
      if (sim.flies.length > maxFlies) {
        sim.flies.splice(0, sim.flies.length - maxFlies);
      }
    }

    const handleAddCustom = (e) => {
      const count = (e && e.detail && e.detail.count) || 8;
      addFlies(count);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", setP, { passive: true });
    window.addEventListener("touchstart", setP, { passive: true });
    window.addEventListener("touchmove", setP, { passive: true });
    window.addEventListener("touchend", handlePointerEnd);
    window.addEventListener("mouseleave", handlePointerEnd);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("add-fireflies", handleAddCustom);

    resize();
    addFlies(sim.W < 768 ? 16 : Math.round(Math.min(70, Math.max(28, sim.W / 14))));
    sim.animId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(sim.animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", setP);
      window.removeEventListener("touchstart", setP);
      window.removeEventListener("touchmove", setP);
      window.removeEventListener("touchend", handlePointerEnd);
      window.removeEventListener("mouseleave", handlePointerEnd);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("add-fireflies", handleAddCustom);

      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
    };
  }, [bell]);

  return (
    <canvas
      ref={canvasRef}
      id="c"
      aria-hidden="true"
      className="fixed inset-0 w-full h-full block pointer-events-none z-0 touch-manipulation"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
};

export default FixedLivingBackground;
