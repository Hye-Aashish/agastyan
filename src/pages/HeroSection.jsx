import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import TiltCard3D from "../components/TiltCard3D";
import ThreeHoloCore from "../components/ThreeHoloCore";

const frontendSkills = [
  "HTML","CSS","JavaScript","jQuery","Bootstrap","Tailwind CSS","React JS",
];

const backendSkills = ["Node JS","Express JS","PHP","Laravel","CodeIgniter"];

const databaseSkills = ["MySQL", "MongoDB"];

const pythonSkills = ["Python", "Django", "Flask", "FastAPI"];

const toolsSkills = ["Git", "GitHub", "REST API", "Postman"];

const codeLines = [
  "Initializing Career Engine...",
  `Loading Frontend Skills: ${frontendSkills.join(", ")}`,
  `Loading Backend Skills: ${backendSkills.join(", ")}`,
  `Loading Database Skills: ${databaseSkills.join(", ")}`,
  `Loading Python Stack: ${pythonSkills.join(", ")}`,
  `Loading Tools & APIs: ${toolsSkills.join(", ")}`,
  "Booting Full Stack Environment...",
  "Connecting to Live Projects...",
  "✔ Career Mode Activated 🚀🚀",
];

const HeroSection = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [text, setText] = useState("");
  const [completed, setCompleted] = useState(false);
  const [viewMode, setViewMode] = useState("3d");

  useEffect(() => {
    if (lineIndex >= codeLines.length) {
      setCompleted(true);
      return;
    }

    const timer = setTimeout(() => {
      setText(codeLines[lineIndex].slice(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);

      if (charIndex === codeLines[lineIndex].length) {
        setTimeout(() => {
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
          setText("");
        }, 250);
      }
    }, 10);

    return () => clearTimeout(timer);
  }, [charIndex, lineIndex]);

  return (
    <section
      className="
        relative min-h-[92dvh] overflow-hidden
        bg-gradient-to-br from-orange-50/70 via-white/50 to-emerald-50/60
        dark:from-gray-950/70 dark:via-gray-900/60 dark:to-black/75
        flex items-center
        px-4 sm:px-6 pt-28 pb-16 md:py-24
        transition-colors duration-500
      "
    >
      {/* Background Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ef7b01_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] dark:opacity-[0.07] pointer-events-none" />

      {/* Ambient Glowing Halos */}
      <div className="absolute top-12 left-1/4 w-[32rem] h-[32rem] bg-[#ef7b01]/15 dark:bg-[#ef7b01]/20 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[36rem] h-[36rem] bg-[#2E7D32]/15 dark:bg-[#2E7D32]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center w-full">

        {/* LEFT COLUMN CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 text-left"
        >
          {/* Floating Pill Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 rounded-full 
              bg-[#ef7b01]/10 dark:bg-[#ef7b01]/20
              border border-[#ef7b01]/30 dark:border-orange-500/40
              backdrop-blur-md shadow-lg shadow-orange-500/5 hover:scale-105 transition-all cursor-default"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ef7b01] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ef7b01]"></span>
            </span>
            <span className="text-[#ef7b01] dark:text-orange-400 text-xs sm:text-sm font-extrabold tracking-wide uppercase">
              Industry Ready Training
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="
            text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight
            text-gray-900 dark:text-white leading-[1.12]
          ">
            Build Your Career With <br />
            <span className="bg-gradient-to-r from-[#ef7b01] via-amber-500 to-[#2E7D32] bg-clip-text text-transparent drop-shadow-sm">
              Agastyaan Institute
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-xl mb-6 leading-relaxed font-normal">
            Industry-ready training with live projects, expert mentors and
            placement support.
          </p>

          {/* Feature Highlights Pills */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            <span className="px-3.5 py-1.5 rounded-lg bg-white/80 dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-sm flex items-center gap-1.5">
              <span>⚡</span> Live Projects
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-white/80 dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-sm flex items-center gap-1.5">
              <span>🎓</span> Expert Mentors
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-white/80 dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-sm flex items-center gap-1.5">
              <span>💼</span> 100% Placement Support
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 flex-wrap items-center">
            <Link
              to="/contact"
              className="
                relative group overflow-hidden
                bg-[#ef7b01] hover:bg-[#d96e00]
                text-white px-8 py-4 rounded-xl font-extrabold text-sm sm:text-base
                shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40
                hover:scale-[1.03] active:scale-[0.98] transition-all duration-300
                flex items-center gap-2
              "
            >
              <span>Get Started</span>
              <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </Link>

            <Link
              to="/courses"
              className="
                border-2 border-[#2E7D32] text-[#2E7D32]
                dark:text-emerald-400 dark:border-emerald-400
                hover:bg-[#2E7D32] hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white
                hover:border-transparent
                px-8 py-4 rounded-xl font-extrabold text-sm sm:text-base backdrop-blur-md bg-white/60 dark:bg-gray-900/60
                hover:scale-[1.03] active:scale-[0.98] transition-all duration-300
              "
            >
              View Courses
            </Link>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: DEV STUDIO TERMINAL WINDOW WITH 3D TILT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="lg:col-span-5 w-full relative"
          style={{ perspective: 1200 }}
        >
          <TiltCard3D maxTilt={10} scale={1.02} className="relative">
            {/* Floating Technology Badges around the Terminal with 3D Z-elevation */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -left-4 z-20 px-3.5 py-1.5 rounded-xl bg-white dark:bg-gray-900 border border-orange-200 dark:border-gray-800 shadow-xl text-xs font-bold text-[#ef7b01] flex items-center gap-1.5"
              style={{ transform: "translateZ(38px)" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#ef7b01]"></span>
              React.js
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-2 z-20 px-3.5 py-1.5 rounded-xl bg-white dark:bg-gray-900 border border-emerald-200 dark:border-gray-800 shadow-xl text-xs font-bold text-[#2E7D32] dark:text-emerald-400 flex items-center gap-1.5"
              style={{ transform: "translateZ(38px)" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#2E7D32]"></span>
              Node & Python
            </motion.div>

          {/* IDE Window Frame */}
          <div className="
            relative rounded-2xl overflow-hidden
            bg-[#0a0d14] dark:bg-black/95
            border border-[#ef7b01]/35 dark:border-orange-500/35
            shadow-2xl shadow-orange-950/30 backdrop-blur-2xl
          ">
            {/* Top Bar with Mode Switcher */}
            <div className="flex items-center justify-between bg-[#121722] px-3.5 py-2.5 border-b border-gray-800/80">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1.5 mr-2">
                  <span className="w-2.5 h-2.5 bg-rose-500 rounded-full inline-block" />
                  <span className="w-2.5 h-2.5 bg-amber-400 rounded-full inline-block" />
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full inline-block" />
                </div>

                {/* 3D Holographic Core Tab */}
                <button
                  type="button"
                  onClick={() => setViewMode("3d")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    viewMode === "3d"
                      ? "bg-gradient-to-r from-orange-500/20 to-emerald-500/20 text-orange-400 border border-orange-500/40 shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                  <span>🌐 3D Tech Core</span>
                </button>

                {/* Code Terminal Tab */}
                <button
                  type="button"
                  onClick={() => setViewMode("terminal")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    viewMode === "terminal"
                      ? "bg-gradient-to-r from-orange-500/20 to-emerald-500/20 text-orange-400 border border-orange-500/40 shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>💻 CareerEngine.js</span>
                </button>
              </div>

              <span className="hidden sm:inline-block text-[10px] text-[#ef7b01] font-bold font-mono tracking-wider uppercase bg-[#ef7b01]/10 px-2 py-0.5 rounded border border-[#ef7b01]/20">
                {viewMode === "3d" ? "WEBGL 3D ACTIVE" : "TERMINAL ACTIVE"}
              </span>
            </div>

            {/* Container Body (3D Core or Code Terminal) */}
            {viewMode === "3d" ? (
              <div className="p-3 sm:p-5 flex items-center justify-center min-h-[340px]">
                <ThreeHoloCore />
              </div>
            ) : (
              <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed">
                <div className="space-y-2 min-h-[220px]">
                  {codeLines.slice(0, lineIndex).map((line, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-gray-600 select-none w-5 text-right text-xs">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-amber-500 select-none">$</span>
                      <span className={line.includes("✔") ? "text-[#ef7b01] font-bold" : "text-emerald-400"}>
                        {line}
                      </span>
                    </div>
                  ))}

                  {lineIndex < codeLines.length && (
                    <div className="flex items-start gap-3">
                      <span className="text-gray-600 select-none w-5 text-right text-xs">
                        {String(lineIndex + 1).padStart(2, '0')}
                      </span>
                      <span className="text-amber-500 select-none">$</span>
                      <span className="text-emerald-300">{text}</span>
                      <span className="animate-pulse text-[#ef7b01] font-bold">|</span>
                    </div>
                  )}
                </div>

                {/* Progress Bar & Completion */}
                {completed && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 pt-4 border-t border-gray-800/80"
                  >
                    <div className="h-1.5 bg-gray-900 rounded-full overflow-hidden mb-3 p-[1px]">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#ef7b01] via-amber-400 to-[#2E7D32] rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-amber-400 font-semibold text-xs sm:text-sm">
                      <span className="flex items-center gap-1.5">
                        <span className="animate-bounce">🚀</span> Ready for Industry-Level Development
                      </span>
                      <span className="text-xs text-emerald-400 font-bold">100% SUCCESS</span>
                    </div>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </TiltCard3D>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;

