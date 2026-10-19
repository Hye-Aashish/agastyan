import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, GraduationCap, Briefcase, ArrowRight } from "lucide-react";

const STACK_PRESETS = {
  default: {
    tabName: "CareerEngine.js",
    pillLabel: "Node & Python",
    lines: [
      { id: "01", text: "Initializing Career Engine...", color: "cyan" },
      { id: "02", text: "Loading Frontend Skills: HTML, CSS, JavaScript, React JS", color: "cyan" },
      { id: "03", text: "Loading Backend Skills: Node JS, Express JS, PHP, Laravel", color: "cyan" },
      { id: "04", text: "Loading Database Skills: MySQL, MongoDB Atlas", color: "cyan" },
      { id: "05", text: "Loading Python Stack: Python, Django, Flask, FastAPI", color: "cyan" },
      { id: "06", text: "Loading Tools & APIs: Git, GitHub, REST API, Postman", color: "cyan" },
      { id: "07", text: "Booting Full Stack Environment...", color: "cyan" },
      { id: "08", text: "Connecting to Live Client Projects...", color: "cyan" },
      { id: "09", text: "✓ Career Mode Activated 🚀 🚀", color: "gold", bold: true },
    ],
    status: "Ready for Industry Development",
    successRate: "100% SUCCESS",
  },
  mern: {
    tabName: "MernStack.js",
    pillLabel: "MERN Stack",
    lines: [
      { id: "01", text: "Initializing MERN Stack Pipeline...", color: "cyan" },
      { id: "02", text: "Loading React 19, Next.js, Redux, Tailwind CSS", color: "cyan" },
      { id: "03", text: "Connecting Node.js & Express API Microservices...", color: "cyan" },
      { id: "04", text: "Configuring MongoDB Atlas & Aggregation Pipelines", color: "cyan" },
      { id: "05", text: "Implementing JWT Authentication & WebSockets", color: "cyan" },
      { id: "06", text: "Integrating Stripe, Razorpay & Cloudinary Storage", color: "cyan" },
      { id: "07", text: "Deploying Containerized CI/CD to AWS & Vercel...", color: "cyan" },
      { id: "08", text: "Executing End-to-End Test Suite...", color: "cyan" },
      { id: "09", text: "✓ Full Stack Production Deployed 🚀 🚀", color: "gold", bold: true },
    ],
    status: "Enterprise Full Stack Ready",
    successRate: "100% VERIFIED",
  },
  ai: {
    tabName: "AiPipeline.py",
    pillLabel: "AI & Data Science",
    lines: [
      { id: "01", text: "Starting AI & Machine Learning Runtime...", color: "cyan" },
      { id: "02", text: "Importing NumPy, Pandas, Scikit-Learn & Matplotlib", color: "cyan" },
      { id: "03", text: "Loading Deep Learning: TensorFlow, PyTorch & OpenCV", color: "cyan" },
      { id: "04", text: "Fine-tuning LLM Transformer & HuggingFace Models", color: "cyan" },
      { id: "05", text: "Connecting Vector DBs (ChromaDB / Pinecone) & LangChain", color: "cyan" },
      { id: "06", text: "Optimizing Hyperparameters & Model Inference Engine", color: "cyan" },
      { id: "07", text: "Exposing FastAPI Predictions Endpoint...", color: "cyan" },
      { id: "08", text: "Validating Accuracy Score > 98.6% on Test Dataset...", color: "cyan" },
      { id: "09", text: "✓ AI Model Production Active 🚀 🚀", color: "gold", bold: true },
    ],
    status: "AI & ML Production Ready",
    successRate: "100% ACCURACY",
  },
};

const EQUALIZER_BARS = [
  18, 35, 62, 44, 78, 95, 52, 38, 85, 110, 68, 48, 92, 125, 75, 42,
  88, 115, 64, 40, 72, 98, 55, 32, 80, 105, 60, 45, 90, 120, 70, 36,
  82, 112, 66, 42, 76, 96, 50, 34, 84, 108, 62, 40, 86, 118, 68, 38
];

const CareerTerminalSection = () => {
  const [activeStackKey, setActiveStackKey] = useState("default");
  const activeStack = STACK_PRESETS[activeStackKey] || STACK_PRESETS.default;

  const handleOpenEnquiry = () => {
    try {
      window.dispatchEvent(new CustomEvent("open-enquiry-modal"));
    } catch {
      // fallback
    }
  };

  const ActionButtons = ({ className = "" }) => (
    <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full ${className}`}>
      <button
        type="button"
        onClick={handleOpenEnquiry}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-xl font-extrabold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-102 active:scale-98 transition-all duration-300 cursor-pointer text-sm sm:text-base text-center"
      >
        <span>Get Started</span>
        <ArrowRight className="w-4 h-4 shrink-0" />
      </button>

      <a
        href="#courses"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-xl font-extrabold text-emerald-500 dark:text-emerald-400 border-2 border-emerald-500/80 hover:border-emerald-400 hover:bg-emerald-500/10 hover:scale-102 active:scale-98 transition-all duration-300 backdrop-blur-md cursor-pointer text-sm sm:text-base text-center"
      >
        <span>View Courses</span>
      </a>
    </div>
  );

  const FeaturePills = ({ className = "" }) => (
    <div className={`flex flex-wrap items-center gap-2.5 sm:gap-3.5 w-full ${className}`}>
      <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-slate-900/90 dark:bg-[#0c1427]/95 backdrop-blur-md border border-slate-700/70 dark:border-white/10 text-xs sm:text-sm font-semibold text-gray-200 shadow-md">
        <Zap className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
        <span>Live Projects</span>
      </div>

      <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-slate-900/90 dark:bg-[#0c1427]/95 backdrop-blur-md border border-slate-700/70 dark:border-white/10 text-xs sm:text-sm font-semibold text-gray-200 shadow-md">
        <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0" />
        <span>Expert Mentors</span>
      </div>

      <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-slate-900/90 dark:bg-[#0c1427]/95 backdrop-blur-md border border-slate-700/70 dark:border-white/10 text-xs sm:text-sm font-semibold text-gray-200 shadow-md">
        <Briefcase className="w-4 h-4 text-amber-400 shrink-0" />
        <span>100% Placement Support</span>
      </div>
    </div>
  );

  return (
    <section className="relative w-full pt-4 sm:pt-6 md:pt-8 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent z-10 font-sans select-none">
      
      {/* Background Equalizer Wave */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 dark:opacity-30 overflow-hidden -z-10"
      >
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-amber-500/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-emerald-500/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] sm:w-[40rem] h-80 bg-purple-600/15 rounded-full blur-[140px]" />

        <div className="flex items-end justify-center gap-1 sm:gap-1.5 h-36 sm:h-44 w-full max-w-5xl px-4">
          {EQUALIZER_BARS.map((height, idx) => {
            const isPurple = idx % 3 === 0;
            const isCyan = idx % 3 === 1;
            const barBg = isPurple
              ? "from-purple-500/70 to-pink-500/80"
              : isCyan
              ? "from-cyan-400/70 to-blue-500/80"
              : "from-fuchsia-500/70 to-indigo-500/80";

            return (
              <div
                key={idx}
                style={{
                  height: `${height}%`,
                  animationDuration: `${1.2 + (idx % 5) * 0.3}s`,
                  animationDelay: `${(idx % 7) * 0.15}s`,
                }}
                className={`w-1 sm:w-1.5 rounded-t-full bg-gradient-to-t ${barBg} transition-all duration-500 animate-pulse`}
              />
            );
          })}
        </div>
      </div>

      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">

        {/* ======================================================== */}
        {/* TOP / LEFT COLUMN: HEADING & INTRO */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 xl:col-span-6 text-left flex flex-col items-start w-full"
        >
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/35 text-amber-500 dark:text-amber-400 text-xs sm:text-sm font-black tracking-widest uppercase mb-4 sm:mb-5 shadow-sm shadow-amber-500/10">
            <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b] animate-pulse" />
            <span>INDUSTRY READY TRAINING</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-[2.65rem] xl:text-[3.15rem] font-black text-gray-900 dark:text-white leading-[1.2] sm:leading-[1.18] tracking-tight mb-3 sm:mb-4">
            Build Your Career With
            <span className="block mt-1 sm:mt-1.5">
              <span className="text-[#f59e0b] dark:text-amber-400 drop-shadow-sm">
                Agastyaan
              </span>{" "}
              <span className="text-[#10b981] dark:text-emerald-400 drop-shadow-sm">
                Institute
              </span>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 font-normal max-w-xl mb-4 lg:mb-8 leading-relaxed">
            Industry-ready training with live projects, expert mentors and placement support.
          </p>

          {/* DESKTOP ONLY: Pills & Buttons (Inside Left Column on lg+) */}
          <div className="hidden lg:flex flex-col items-start w-full">
            <FeaturePills className="mb-8" />
            <ActionButtons />
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* RIGHT / MIDDLE: CAREER-TERMINAL V2.0 WINDOW */}
        {/* On mobile, this comes immediately below the heading */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-6 xl:col-span-6 w-full"
        >
          {/* Main Terminal Window Card */}
          <div className="relative rounded-2xl bg-[#080d1e]/98 dark:bg-[#060a17]/98 border border-slate-800/90 dark:border-slate-700/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_35px_rgba(245,158,11,0.08)] backdrop-blur-2xl p-3.5 sm:p-5 md:p-6 overflow-hidden text-left font-mono">
            
            {/* Top Bar with Mac Dots, File Tab, and Terminal Version */}
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-800/80 gap-2">
              
              {/* Left: Mac Window Controls */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
              </div>

              {/* Center: Active File Tab */}
              <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md bg-[#0e172e] border border-slate-700/60 text-[11px] sm:text-xs text-slate-300 shadow-inner max-w-[170px] sm:max-w-none truncate">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_6px_#f59e0b] animate-pulse shrink-0" />
                <span className="font-semibold tracking-wide truncate">{activeStack.tabName}</span>
              </div>

              {/* Right: CAREER-TERMINAL V2.0 Badge */}
              <div className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded border border-amber-500/70 bg-amber-500/10 text-amber-400 text-[9px] sm:text-[11px] font-bold tracking-wider uppercase shrink-0">
                TERMINAL V2.0
              </div>
            </div>

            {/* Terminal Body: Code Lines */}
            <div className="py-3 sm:py-4 space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs md:text-[13px] leading-relaxed overflow-x-auto min-h-[240px] sm:min-h-[270px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {activeStack.lines.map((line) => {
                const isGold = line.color === "gold";

                return (
                  <div key={line.id} className="flex items-baseline gap-1.5 sm:gap-2 group hover:bg-white/[0.02] rounded px-1 -mx-1 transition-colors">
                    {/* Line Number */}
                    <span className="text-slate-500 select-none w-4 sm:w-5 text-right shrink-0 font-medium text-[10px] sm:text-xs">
                      {line.id}
                    </span>

                    {/* Terminal Prompt Symbol */}
                    <span className="text-amber-400 font-black shrink-0 select-none text-[11px] sm:text-xs">
                      $
                    </span>

                    {/* Line Text */}
                    <span
                      className={`break-words tracking-tight ${
                        isGold
                          ? "text-amber-300 font-bold drop-shadow-[0_0_8px_rgba(252,211,77,0.3)] flex items-center gap-1 flex-wrap"
                          : "text-cyan-400 font-medium"
                      }`}
                    >
                      {line.text}
                      {isGold && (
                        <span className="inline-block w-1.5 sm:w-2 h-3 sm:h-3.5 bg-amber-400 ml-1 animate-pulse" />
                      )}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Terminal Footer: Progress Bar & Success Status */}
            <div className="pt-2.5 sm:pt-3 border-t border-slate-800/80">
              
              {/* Progress Bar with Glowing Gradient */}
              <div className="w-full h-1.5 rounded-full bg-slate-900 border border-slate-800/80 overflow-hidden p-0.5">
                <div className="h-full w-full rounded-full bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300 shadow-[0_0_12px_rgba(245,158,11,0.65)]" />
              </div>

              {/* Status Indicators */}
              <div className="flex items-center justify-between mt-2.5 text-[11px] sm:text-xs md:text-[13px] gap-2">
                <div className="text-amber-400 font-bold flex items-center gap-1.5 drop-shadow-sm truncate">
                  <span>🚀</span>
                  <span className="truncate">{activeStack.status}</span>
                </div>

                <div className="text-emerald-400 font-bold tracking-wider drop-shadow-[0_0_6px_rgba(52,211,153,0.3)] shrink-0">
                  {activeStack.successRate}
                </div>
              </div>
            </div>

          </div>

          {/* Stack Switcher Pills */}
          <div className="flex items-center justify-start sm:justify-end gap-1.5 sm:gap-2 mt-3 flex-wrap">
            {Object.entries(STACK_PRESETS).map(([key, data]) => {
              const isActive = activeStackKey === key;

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveStackKey(key)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-semibold transition-all cursor-pointer backdrop-blur-md ${
                    isActive
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/60 shadow-[0_0_10px_rgba(16,185,129,0.25)]"
                      : "bg-slate-900/70 text-slate-400 border border-slate-700/50 hover:text-slate-200 hover:border-slate-600"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-emerald-400 shadow-[0_0_6px_#10b981]" : "bg-slate-500"}`} />
                  {data.pillLabel}
                </button>
              );
            })}
          </div>

          {/* ======================================================== */}
          {/* MOBILE ONLY: BUTTONS & PILLS (BELOW THE TERMINAL BOX) */}
          {/* As requested: "us box ko upar karo aur button neeche karo" */}
          {/* ======================================================== */}
          <div className="flex flex-col lg:hidden w-full mt-6 space-y-4">
            <ActionButtons />
            <FeaturePills />
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default CareerTerminalSection;
