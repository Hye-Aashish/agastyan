import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Images from "../assets/index";
import TiltCard3D from "../components/TiltCard3D";

const OurCourses = () => {
  const courses = [
    {
      title: "Frontend Development",
      desc: "HTML, CSS, JavaScript, React. Build responsive websites.",
      img: Images.frontend_softwaredevelopmentprogramming,
      path: "/frontend",
      badge: "Popular Track",
      icon: "🔥",
      type: "Live Project",
      tags: ["HTML5", "CSS3", "JavaScript", "React JS"],
    },
    {
      title: "Backend Development",
      desc: "Node JS, Express, PHP, Laravel.",
      img: Images.backend_development,
      path: "/backend",
      badge: "High Demand",
      icon: "⚡",
      type: "Practical",
      tags: ["Node JS", "Express", "PHP", "Laravel"],
    },
    {
      title: "Full Stack Development",
      desc: "Combine frontend & backend to build complete apps.",
      img: Images.fullstack_development,
      path: "/fullstack",
      badge: "Top Choice",
      icon: "⭐",
      type: "Job Ready",
      tags: ["Frontend", "Backend", "REST API", "Database"],
    },
    {
      title: "Python & Django",
      desc: "Python, Django, Flask, FastAPI.",
      img: Images.python,
      path: "/python-django",
      badge: "Fast Track",
      icon: "🚀",
      type: "In-Demand",
      tags: ["Python", "Django", "Flask", "FastAPI"],
    },
    {
      title: "Database Management",
      desc: "MySQL, MongoDB & optimization.",
      img: Images.database,
      path: "/database",
      badge: "Core Tech",
      icon: "💾",
      type: "Essential",
      tags: ["MySQL", "MongoDB", "SQL Optimization"],
    },
    {
      title: "Tools & APIs",
      desc: "Git, GitHub, Postman, REST APIs.",
      img: Images.api,
      path: "/tools-api",
      badge: "Essential",
      icon: "🛠️",
      type: "Hands-On",
      tags: ["Git", "GitHub", "Postman", "REST APIs"],
    },
  ];

  return (
    <section
      id="courses"
      className="
        py-20 md:py-28 px-4 sm:px-6
        bg-gradient-to-b from-white/90 via-orange-50/40 to-emerald-50/30
        dark:from-black/70 dark:via-gray-950/60 dark:to-black/75
        transition-colors duration-500 relative overflow-hidden
      "
    >
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#ef7b01]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#2E7D32]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-3 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-[#ef7b01]/30 text-[#ef7b01] dark:text-orange-400 text-xs sm:text-sm font-extrabold tracking-wide uppercase shadow-sm"
          >
            Industry-Ready Skillsets
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight"
          >
            Our <span className="text-[#ef7b01] dark:text-orange-400">Courses</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Industry-focused training programs designed to make you job-ready.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="h-full"
            >
              <TiltCard3D
                maxTilt={12}
                scale={1.02}
                className="
                  group relative flex flex-col rounded-3xl overflow-hidden p-6
                  bg-white dark:bg-gray-900
                  backdrop-blur-xl
                  shadow-xl shadow-orange-500/5 dark:shadow-black/60
                  border-2 border-orange-100/80 dark:border-gray-800
                  hover:border-[#ef7b01] dark:hover:border-orange-500
                  hover:shadow-2xl hover:shadow-orange-500/20
                  transition-all duration-300 justify-between h-full
                "
              >
                {/* Top Accent Color Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#ef7b01] via-amber-400 to-[#2E7D32] opacity-80 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Image Container with Badges & 3D Pop */}
                  <div
                    className="relative w-full h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-50/80 via-amber-50/40 to-emerald-50/50 dark:from-gray-800/90 dark:to-gray-900 p-5 flex items-center justify-center mb-6 border border-orange-100/70 dark:border-gray-800 transition-colors"
                    style={{ transform: "translateZ(25px)" }}
                  >
                    
                    {/* Top-Left Badge */}
                    <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 dark:bg-gray-950/90 backdrop-blur-md border border-orange-200/80 dark:border-gray-700 text-[#ef7b01] dark:text-orange-400 text-[11px] font-black shadow-sm tracking-wide flex items-center gap-1.5">
                      <span>{course.icon}</span>
                      <span>{course.badge}</span>
                    </span>

                    {/* Top-Right Tag */}
                    <span className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-[#2E7D32]/10 dark:bg-emerald-500/20 border border-[#2E7D32]/20 dark:border-emerald-500/30 text-[#2E7D32] dark:text-emerald-400 text-[10px] font-black tracking-wider uppercase">
                      {course.type}
                    </span>

                    <img
                      src={course.img}
                      alt={course.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
                    />
                  </div>

                  {/* Course Title */}
                  <h3
                    className="text-xl sm:text-2xl font-black mb-2 text-gray-900 dark:text-white group-hover:text-[#ef7b01] dark:group-hover:text-orange-400 transition-colors leading-snug"
                    style={{ transform: "translateZ(18px)" }}
                  >
                    {course.title}
                  </h3>

                  {/* Course Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5 font-normal">
                    {course.desc}
                  </p>

                  {/* Tech Skill Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {course.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg bg-gradient-to-r from-orange-50/90 to-amber-50/90 dark:from-gray-800 dark:to-gray-800/90 border border-orange-200/60 dark:border-gray-700 text-xs font-bold text-gray-800 dark:text-gray-200 shadow-2xs hover:border-[#ef7b01]/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  to={course.path}
                  style={{ transform: "translateZ(20px)" }}
                  className="
                    w-full text-center
                    bg-[#ef7b01] hover:bg-[#2E7D32]
                    text-white py-3.5 px-6 rounded-xl font-extrabold text-sm
                    shadow-lg shadow-orange-500/25 hover:shadow-emerald-600/30
                    active:scale-[0.98] transition-all duration-300 flex items-center justify-between group/btn
                  "
                >
                  <span>Explore Track</span>
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white group-hover/btn:bg-white group-hover/btn:text-[#2E7D32] transition-all">
                    →
                  </span>
                </Link>
              </TiltCard3D>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default OurCourses;


