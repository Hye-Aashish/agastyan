import { motion } from "framer-motion";
import Images from "../assets/index";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import TiltCard3D from "../components/TiltCard3D";

/* ===== Floating Background Boxes ===== */
const bgBoxes = Array.from({ length: 14 });

const ServicesHero = () => {
  return (
    <section
      className="
        relative py-24 md:py-32 overflow-hidden
        bg-gradient-to-b from-orange-50/50 via-white/40 to-emerald-50/20
        dark:from-black/60 dark:via-gray-950/65 dark:to-black/70
        backdrop-blur-sm
        transition-colors duration-500 border-b border-gray-200/60 dark:border-gray-800/80
      "
    >

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Floating Boxes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {bgBoxes.map((_, i) => (
          <motion.div
            key={i}
            className="
              absolute rounded-xl 
              bg-[#ef7b01]/10 border border-[#ef7b01]/20
              dark:bg-orange-400/5 dark:border-orange-400/10
            "
            style={{
              width: 40 + (i % 5) * 25,
              height: 40 + (i % 5) * 25,
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`,
            }}
            animate={{
              y: ["0%", "-120%"],
              rotate: [0, 180],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 22 + i,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Glow Shapes */}
      <div className="
        absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl
        bg-[#ef7b01]/10 pointer-events-none
      " />

      <div className="
        absolute top-40 right-0 w-80 h-80 rounded-full blur-3xl
        bg-[#2E7D32]/10 pointer-events-none
      " />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center">

        {/* LEFT */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 text-center lg:text-left"
        >
          <span className="
            inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
            bg-[#ef7b01]/10 dark:bg-orange-500/20
            border border-[#ef7b01]/30
            text-[#ef7b01] dark:text-orange-400
            text-xs sm:text-sm font-extrabold uppercase tracking-wide mb-5
          ">
            <Sparkles className="w-4 h-4" />
            Enterprise IT Solutions & Training
          </span>

          <h1 className="
            text-3xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight
            text-gray-900 dark:text-white
          ">
            Next-Gen <span className="text-[#ef7b01] dark:text-orange-400">IT Services</span> & <br className="hidden sm:inline" />
            <span className="text-[#2E7D32] dark:text-emerald-400">Industrial Training</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Agastyaan Technology builds custom web apps, mobile solutions, and UI/UX designs while empowering tech aspirants with hands-on industrial training.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" /> Custom Web & Mobile Apps
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" /> Result-Oriented Growth
            </div>
          </div>

          <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
            <Link
              to="/contact"
              className="
                inline-flex items-center gap-2
                bg-[#ef7b01] hover:bg-orange-600
                text-white px-7 py-3.5 rounded-xl font-extrabold
                shadow-lg shadow-orange-500/25 transition-all hover:scale-105 active:scale-95
              "
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/courses"
              className="
                inline-flex items-center gap-2
                bg-white dark:bg-gray-900
                border-2 border-[#2E7D32] text-[#2E7D32]
                dark:text-emerald-400 dark:border-emerald-500
                hover:bg-[#2E7D32] hover:text-white
                dark:hover:bg-emerald-600 dark:hover:text-white
                px-6 py-3.5 rounded-xl font-bold transition-all
              "
            >
              Explore Training Programs
            </Link>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <TiltCard3D maxTilt={12} scale={1.03}>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#ef7b01] to-[#2E7D32] rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500" />
              <img
                src={`${Images.companyworking}`}
                alt="IT Services & Training Studio"
                className="
                  relative w-full shadow-2xl dark:shadow-black/60
                  rounded-2xl border-2 border-orange-200/80 dark:border-gray-800
                "
              />
            </div>

            {/* Floating Badge */}
            <div className="
              absolute -bottom-6 -left-6 p-4 rounded-2xl shadow-xl
              bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl
              border-2 border-[#ef7b01]/40 dark:border-orange-500/30
              hidden sm:flex items-center gap-3
            ">
              <ShieldCheck className="w-6 h-6 text-[#2E7D32]" />
              <div>
                <p className="text-xs font-black text-gray-900 dark:text-white">
                  🚀 100% Client & Student Satisfaction
                </p>
                <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">
                  Verified Quality & Performance
                </span>
              </div>
            </div>
          </TiltCard3D>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesHero;