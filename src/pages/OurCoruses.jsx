import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ALL_COURSES } from "../data/courses";
import { Sparkles, ArrowRight, Clock, Award, Code2, Search, CheckCircle2 } from "lucide-react";

const CATEGORIES = [
  "All Courses",
  "Web & Full Stack",
  "Data & AI",
  "Engineering & Mobile",
];

const OurCourses = () => {
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter((course) => {
      const matchesCategory =
        activeCategory === "All Courses" || course.category === activeCategory;
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="courses"
      className="
        py-20 md:py-28 px-4 sm:px-6
        bg-transparent
        transition-colors duration-500 relative overflow-hidden
      "
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#ef7b01]/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#2E7D32]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-[#ef7b01]/10 dark:bg-[#ef7b01]/20 border border-[#ef7b01]/30 text-[#ef7b01] dark:text-orange-400 text-xs sm:text-sm font-extrabold tracking-wide uppercase shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            Job-Ready Career Programs
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight"
          >
            Industry-Oriented{" "}
            <span className="bg-gradient-to-r from-[#ef7b01] via-amber-400 to-[#2E7D32] bg-clip-text text-transparent">
              Training Courses
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-600 dark:text-[#9fb0d9] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal"
          >
            From Web Development & Full Stack to Data Science, AI/ML, AutoCAD, Power BI & Robotics. Learn with 100% practical live projects and dedicated mentorship.
          </motion.p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 max-w-5xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/80 dark:bg-[#080e24]/80 backdrop-blur-md border border-orange-200/80 dark:border-white/10 shadow-sm">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs md:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#ef7b01] text-white shadow-md shadow-orange-500/20 scale-102"
                    : "text-gray-700 dark:text-gray-300 hover:text-[#ef7b01] dark:hover:text-orange-400 hover:bg-orange-50/50 dark:hover:bg-white/[0.04]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses or skills..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-white/80 dark:bg-[#080e24]/80 backdrop-blur-md border border-orange-200/80 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#ef7b01] transition"
            />
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <AnimatePresence>
            {filteredCourses.map((course, idx) => {
              return (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="
                    group relative flex flex-col rounded-3xl overflow-hidden p-5 sm:p-6
                    bg-white/95 dark:bg-[#080e24]/90
                    backdrop-blur-xl
                    shadow-xl shadow-orange-500/5 dark:shadow-[0_10px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(239,123,1,0.05)]
                    border-2 border-orange-100/90 dark:border-white/[0.12]
                    hover:border-[#ef7b01] dark:hover:border-[#ef7b01]
                    hover:shadow-2xl hover:shadow-orange-500/20 dark:hover:shadow-[0_15px_40px_rgba(239,123,1,0.2)] hover:-translate-y-2
                    transition-all duration-500 justify-between
                  "
                >
                  {/* Top Accent Color Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#ef7b01] via-amber-400 to-[#2E7D32] opacity-80 group-hover:opacity-100 transition-opacity z-20" />

                  <div>
                    {/* Visual Card Media with High-Resolution Tech Photo */}
                    <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-5 border border-orange-100/70 dark:border-white/[0.08] shadow-inner bg-slate-900">
                      {/* Top-Left Badge */}
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-orange-300 text-[11px] font-black shadow-md tracking-wide flex items-center gap-1.5 z-10">
                        <Award className="w-3.5 h-3.5 text-[#ef7b01]" />
                        <span>{course.badge}</span>
                      </span>

                      {/* Top-Right Duration */}
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-700/85 backdrop-blur-md border border-emerald-400/30 text-white text-[10px] font-black tracking-wider uppercase shadow-md flex items-center gap-1 z-10">
                        <Clock className="w-3 h-3" />
                        {course.duration}
                      </span>

                      {/* Tech Photo */}
                      <img
                        src={course.image}
                        alt={course.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                      />

                      {/* Vignette Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                      {/* Bottom Category Tag over image */}
                      <span className="absolute bottom-2.5 left-3 text-[11px] font-bold text-white/95 px-2.5 py-0.5 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10">
                        {course.category}
                      </span>
                    </div>

                    {/* Course Title */}
                    <h3 className="text-xl sm:text-2xl font-black mb-1.5 text-gray-900 dark:text-white group-hover:text-[#ef7b01] dark:group-hover:text-orange-400 transition-colors leading-snug">
                      {course.title}
                    </h3>

                    {/* Subtitle / Level */}
                    <div className="flex items-center gap-2 mb-3 text-xs font-bold text-[#2E7D32] dark:text-emerald-400">
                      <span>{course.subtitle}</span>
                      <span>•</span>
                      <span className="text-gray-500 dark:text-gray-400 font-medium">{course.level}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-[#9fb0d9] text-sm leading-relaxed mb-5 font-normal line-clamp-3">
                      {course.desc}
                    </p>

                    {/* Tech Skill Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {course.tags.slice(0, 5).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-orange-50/90 dark:bg-[#0f1a3e] border border-orange-200/60 dark:border-white/[0.1] text-xs font-bold text-gray-800 dark:text-[#e9eefc] shadow-2xs hover:border-[#ef7b01]/40 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                      {course.tags.length > 5 && (
                        <span className="px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-[11px] font-bold text-gray-500">
                          +{course.tags.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Link Button */}
                  <Link
                    to={course.path}
                    className="
                      w-full text-center
                      bg-[#ef7b01] hover:bg-[#2E7D32]
                      text-white py-3.5 px-6 rounded-xl font-extrabold text-sm
                      shadow-lg shadow-orange-500/25 hover:shadow-emerald-600/30
                      active:scale-[0.98] transition-all duration-300 flex items-center justify-between group/btn
                    "
                  >
                    <span>Explore Track & Syllabus</span>
                    <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white group-hover/btn:bg-white group-hover/btn:text-[#2E7D32] transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-gray-500 dark:text-gray-400">
              No courses found matching &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All Courses");
                setSearchQuery("");
              }}
              className="mt-4 px-6 py-2 rounded-xl bg-[#ef7b01] text-white font-bold text-sm cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default OurCourses;