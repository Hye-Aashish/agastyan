import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Award, Sparkles, Code2, CheckCircle2 } from "lucide-react";
import TiltCard3D from "../components/TiltCard3D";

const courses = [
  {
    title: "Full Stack Development",
    subtitle: "MERN Stack Mastery",
    desc: "Complete end-to-end web engineering with React, Node.js, Express, MongoDB & cloud deployment.",
    duration: "6 Months",
    level: "Zero to Pro",
    badge: "🔥 Hot Career Track",
    skills: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind", "REST API"],
    link: "/fullstack"
  },
  {
    title: "Frontend Development",
    subtitle: "React.js & UI Engineering",
    desc: "Design and build fast, interactive, responsive web applications using React 19 & Tailwind CSS.",
    duration: "3 Months",
    level: "Beginner",
    badge: "⚡ High Demand",
    skills: ["HTML5", "CSS3", "JavaScript ES6+", "React.js", "Tailwind", "Vite"],
    link: "/frontend"
  },
  {
    title: "Backend Development",
    subtitle: "Node.js & Microservices",
    desc: "Build secure, scalable RESTful APIs, JWT authentication systems, and server architecture.",
    duration: "3 Months",
    level: "Intermediate",
    badge: "🚀 High Growth",
    skills: ["Node.js", "Express", "REST APIs", "JWT Auth", "Postman", "Linux"],
    link: "/backend"
  },
  {
    title: "Python & Django",
    subtitle: "Backend & Web Framework",
    desc: "Master Python programming, Django ORM, REST framework, and robust backend systems.",
    duration: "4 Months",
    level: "Beginner to Advanced",
    badge: "⭐ Top Rated",
    skills: ["Python 3", "Django", "Django REST", "PostgreSQL", "ORM", "Git"],
    link: "/python-django"
  },
  {
    title: "Database Architecture",
    subtitle: "SQL & NoSQL Systems",
    desc: "Design, query, and optimize MongoDB & MySQL databases for enterprise web applications.",
    duration: "2 Months",
    level: "All Levels",
    badge: "🛠️ Core Skill",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Mongoose", "Indexing", "Redis"],
    link: "/database"
  },
  {
    title: "Developer Tools & APIs",
    subtitle: "DevOps & Integration",
    desc: "Master Git, GitHub, Postman, REST API integrations, cloud hosting, and CI/CD pipelines.",
    duration: "2 Months",
    level: "All Levels",
    badge: "⚡ Essential",
    skills: ["Git", "GitHub Actions", "Postman", "Docker", "Vercel", "Linux"],
    link: "/tools-api"
  },
];

const CoursesCardsSection = () => {
  return (
    <section
      id="courses-grid"
      className="
        py-24 
        bg-gray-50/60 dark:bg-gray-950/65 backdrop-blur-sm
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
            Skill-Based Curriculum
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white tracking-tight">
            Industry-Oriented <span className="text-[#ef7b01]">Software Programs</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            Structured modules with 100% practical live project building, code reviews, and career guidance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <TiltCard3D key={course.title} maxTilt={10} scale={1.02} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="
                  group rounded-3xl overflow-hidden h-full
                  bg-white/90 dark:bg-gray-900/80 backdrop-blur-md
                  border-2 border-gray-100/80 dark:border-gray-800/80
                  hover:border-[#ef7b01] dark:hover:border-orange-500/80
                  shadow-xl shadow-gray-200/50 dark:shadow-black/70
                  transition-all duration-500 flex flex-col justify-between
                "
              >
                <div>
                  {/* Top Banner Accent Line */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-[#ef7b01] to-[#2E7D32]" />

                  <div className="p-6 sm:p-8">
                    {/* Badge & Subtitle */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-black px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-500/10 text-[#ef7b01] dark:text-orange-400 border border-orange-200 dark:border-orange-500/20">
                        {course.badge}
                      </span>
                      <span className="text-xs font-bold text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#ef7b01]" /> {course.duration}
                      </span>
                    </div>

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

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {course.desc}
                    </p>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {course.skills.map((skill) => (
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
                <div className="p-6 pt-0 sm:p-8 sm:pt-0">
                  <Link
                    to={course.link}
                    className="
                      w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 font-extrabold text-sm
                      bg-[#ef7b01] hover:bg-orange-600
                      text-white rounded-xl shadow-lg shadow-orange-500/20
                      transition-all duration-300 group-hover:scale-[1.02]
                    "
                  >
                    Explore Course Curriculum
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </Link>
                </div>

              </motion.div>
            </TiltCard3D>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoursesCardsSection;