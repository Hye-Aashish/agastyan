import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Award, Sparkles } from "lucide-react";
import { ALL_COURSES } from "../data/courses";

const CoursesCardsSection = () => {
  return (
    <section
      id="courses-grid"
      className="
        py-24 
        bg-transparent
        transition-colors duration-500 relative
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="
            inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full 
            bg-[#ef7b01]/10 dark:bg-orange-500/20
            text-[#ef7b01] dark:text-orange-400
            text-xs sm:text-sm font-extrabold uppercase tracking-wide
          ">
            <Sparkles className="w-4 h-4" />
            Complete Curriculum Overview
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white tracking-tight">
            Comprehensive <span className="text-[#ef7b01]">Software & Engineering Programs</span>
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
            Structured modules with 100% practical live project building, code reviews, and dedicated career guidance.
          </p>
        </div>

        {/* Grid of All Courses */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_COURSES.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (i % 6) * 0.08, duration: 0.4 }}
              viewport={{ once: true }}
              className="
                group rounded-3xl overflow-hidden
                bg-white/95 dark:bg-[#080e24]/90
                backdrop-blur-xl
                border-2 border-orange-100/90 dark:border-white/10
                hover:border-[#ef7b01] dark:hover:border-orange-500
                shadow-xl shadow-orange-500/5 dark:shadow-black/60
                hover:shadow-2xl hover:-translate-y-2
                transition-all duration-500 flex flex-col justify-between
              "
            >
              <div>
                {/* Media Image Banner */}
                <div className="relative w-full h-44 overflow-hidden bg-slate-900">
                  <img
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Top-Left Badge */}
                  <span className="absolute top-3 left-3 text-xs font-black px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-orange-300 border border-white/20 flex items-center gap-1.5 z-10">
                    <Award className="w-3.5 h-3.5 text-[#ef7b01]" />
                    <span>{course.badge}</span>
                  </span>

                  {/* Top-Right Duration */}
                  <span className="absolute top-3 right-3 text-xs font-bold text-white px-2.5 py-1 rounded-full bg-emerald-700/85 backdrop-blur-md border border-emerald-400/30 flex items-center gap-1 z-10">
                    <Clock className="w-3.5 h-3.5" /> {course.duration}
                  </span>
                </div>

                <div className="p-6 sm:p-7">
                  {/* Title */}
                  <h3 className="
                    text-2xl font-black mb-1
                    text-gray-900 dark:text-white
                    group-hover:text-[#ef7b01] dark:group-hover:text-orange-400
                    transition-colors duration-300
                  ">
                    {course.title}
                  </h3>

                  <p className="text-xs font-bold text-[#2E7D32] dark:text-emerald-400 mb-3">
                    {course.subtitle}
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3">
                    {course.desc}
                  </p>

                  {/* Tech Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {course.tags.slice(0, 5).map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Footer Action */}
              <div className="p-6 pt-0 sm:p-7 sm:pt-0">
                <Link
                  to={course.path}
                  className="
                    w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 font-extrabold text-sm
                    bg-[#ef7b01] hover:bg-orange-600
                    text-white rounded-xl shadow-lg shadow-orange-500/20
                    transition-all duration-300 group-hover:scale-[1.02] cursor-pointer
                  "
                >
                  Explore Course Curriculum
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoursesCardsSection;