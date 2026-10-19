import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Code2, Rocket, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

const courseCategories = [
  { name: "Full Stack Development", path: "/fullstack", count: "6 Months", badge: "Hot Track" },
  { name: "Data Science & ML", path: "/data-science", count: "4 - 6 Months", badge: "Top Career" },
  { name: "Web Designing", path: "/web-designing", count: "3 Months", badge: "Creative UI" },
  { name: "Flutter & Dart Mobile", path: "/flutter", count: "3 - 6 Months", badge: "Cross-Platform" },
  { name: "PHP, Laravel, WordPress", path: "/php-laravel-wordpress", count: "4 - 6 Months", badge: "High Demand" },
  { name: "AutoCAD (2D & 3D)", path: "/autocad", count: "2 - 3 Months", badge: "CAD Standard" },
  { name: "Power BI & Analytics", path: "/power-bi", count: "2 - 3 Months", badge: "Executive BI" },
  { name: "AI & Machine Learning", path: "/ai-ml", count: "6 Months", badge: "Cutting Edge" },
];

const OurCoursesHero = () => {
  return (
    <section
      className="
        relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28
        bg-transparent
        transition-colors duration-500 border-b border-orange-200/40 dark:border-gray-800/40
      "
    >
      {/* Background SVG Grid Pattern & Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#ef7b01]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2E7D32]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content */}
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
            Industry-Ready Training Programs
          </span>

          <h1 className="
            text-3xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight
            text-gray-900 dark:text-white
          ">
            Learn Coding Skills <br className="hidden sm:inline" />
            That <span className="text-[#ef7b01] dark:text-orange-400">Companies Hire For</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            Hands-on, job-oriented software development training with live projects, expert mentorship, resume optimization, and 100% placement support.
          </p>

          {/* Key Value Points */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 dark:bg-[#080e24]/90 backdrop-blur-md border border-orange-200/80 dark:border-gray-800 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" /> Live Industrial Projects
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 dark:bg-[#080e24]/90 backdrop-blur-md border border-orange-200/80 dark:border-gray-800 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" /> 1-on-1 Mentor Guidance
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 dark:bg-[#080e24]/90 backdrop-blur-md border border-orange-200/80 dark:border-gray-800 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" /> Placement Assistance
            </div>
          </div>

          <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
            <a
              href="#courses-grid"
              className="
                inline-flex items-center gap-2
                bg-[#ef7b01] hover:bg-orange-600
                text-white px-7 py-3.5 rounded-xl font-extrabold
                shadow-lg shadow-orange-500/25 transition-all hover:scale-105 active:scale-95
              "
            >
              Explore All Courses
              <ArrowRight className="w-5 h-5" />
            </a>

            <Link
              to="/enquiry"
              className="
                inline-flex items-center gap-2
                bg-white/90 dark:bg-[#080e24]/90 backdrop-blur-md
                border-2 border-[#2E7D32] text-[#2E7D32]
                dark:text-emerald-400 dark:border-emerald-500
                hover:bg-[#2E7D32] hover:text-white
                dark:hover:bg-emerald-600 dark:hover:text-white
                px-6 py-3.5 rounded-xl font-bold transition-all
              "
            >
              Book Free Demo Class
            </Link>
          </div>
        </motion.div>

        {/* RIGHT: INTERACTIVE TRACK SELECTOR */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="
            p-6 sm:p-8 rounded-3xl
            bg-white/90 dark:bg-[#080e24]/90
            backdrop-blur-xl
            border-2 border-orange-200/80 dark:border-gray-800
            shadow-2xl shadow-orange-500/10 dark:shadow-black/60
            relative overflow-hidden
          ">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
              <div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white">
                  Trending Career Tracks
                </h3>
                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                  Select a track to view curriculum
                </span>
              </div>
              <span className="p-2 rounded-xl bg-orange-50 dark:bg-orange-500/10 text-[#ef7b01]">
                <Code2 className="w-5 h-5" />
              </span>
            </div>

            {/* Track Items List */}
            <div className="space-y-3">
              {courseCategories.map((item, i) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="
                    flex items-center justify-between p-3.5 rounded-2xl
                    bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm
                    hover:bg-orange-50/90 dark:hover:bg-orange-500/10
                    border border-orange-100/90 dark:border-gray-700/60
                    hover:border-[#ef7b01]/40
                    transition-all duration-300 group
                  "
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#ef7b01]" />
                    <span className="text-sm font-extrabold text-gray-800 dark:text-gray-200 group-hover:text-[#ef7b01] transition">
                      {item.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                      {item.count}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#ef7b01] group-hover:translate-x-1 transition" />
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default OurCoursesHero;