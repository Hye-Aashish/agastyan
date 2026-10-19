import { motion } from "framer-motion";
import Images from "../assets/index";

const steps = [
  {
    title: "Course Program",
    desc: "Our expert counselors will help you find the ideal course.",
    img: Images.Course_Program,
  },
  {
    title: "Experts Mentors",
    desc: "All trainers are working professionals with real experience.",
    img: Images.ExpertsMentors,
  },
  {
    title: "Project Preparation",
    desc: "Programs include live projects for hands-on experience.",
    img: Images.ProjectPreparation,
  },
  {
    title: "Assignment Process",
    desc: "Students get multiple practical assignments for industry mastery.",
    img: Images.AssignmentProcess,
  },
  {
    title: "Grooming Session",
    desc: "We prepare you for interviews with dedicated grooming sessions.",
    img: Images.GroomingSession,
  },
  {
    title: "Interview Calls",
    desc: "Our placement cell connects you directly with top tech companies.",
    img: Images.InterViewCalls,
  },
  {
    title: "Student Placed",
    desc: "30k+ students placed successfully across IT organizations.",
    img: Images.OnerTrust,
  },
];

const PlacementProcess = () => {
  return (
    <section
      className="
        py-20 md:py-28
        bg-transparent
        transition-colors duration-500 relative overflow-hidden
      "
    >
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#2E7D32]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#ef7b01]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-3 px-4 py-1.5 rounded-full bg-[#2E7D32]/10 dark:bg-emerald-500/10 border border-[#2E7D32]/30 text-[#2E7D32] dark:text-emerald-400 text-xs sm:text-sm font-extrabold tracking-wide uppercase"
          >
            Step-by-Step Success Roadmap
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight"
          >
            PLACEMENT <span className="bg-gradient-to-r from-[#ef7b01] via-amber-400 to-[#2E7D32] bg-clip-text text-transparent">PROCESS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-600 dark:text-[#9fb0d9] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal"
          >
            From your very first lesson to landing your dream IT job.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="
                group relative w-[min(100%,280px)] sm:w-[270px] p-6 text-center rounded-3xl
                bg-white/95 dark:bg-[#080e24]/85
                backdrop-blur-xl
                border-2 border-orange-100/90 dark:border-white/[0.12]
                shadow-xl shadow-orange-500/5 dark:shadow-[0_10px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(239,123,1,0.05)]
                hover:shadow-2xl hover:shadow-orange-500/15 dark:hover:shadow-[0_15px_40px_rgba(239,123,1,0.15)]
                hover:border-[#ef7b01] dark:hover:border-[#ef7b01]
                hover:-translate-y-2.5 transition-all duration-300
                flex flex-col items-center justify-between
              "
            >
              {/* Step Number Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-[#ef7b01] to-amber-500 text-white text-xs font-black shadow-md tracking-wider">
                Step 0{index + 1}
              </div>

              {/* Image Container */}
              <div className="w-full h-[140px] flex items-center justify-center mt-2 mb-4 p-3 rounded-2xl bg-orange-50/50 dark:bg-[#0c1433]/80 border border-orange-100/60 dark:border-white/[0.06] group-hover:scale-105 transition-all duration-300">
                <img
                  src={step.img}
                  alt={step.title}
                  className="h-full object-contain drop-shadow-sm"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-black mb-2 text-[#2E7D32] dark:text-emerald-400 group-hover:text-[#ef7b01] dark:group-hover:text-orange-400 transition-colors">
                {step.title}
              </h3>

              {/* Desc */}
              <p className="text-xs sm:text-sm text-gray-600 dark:text-[#9fb0d9] leading-relaxed mb-4 flex-1 font-normal">
                {step.desc}
              </p>

              {/* Indicator Dots */}
              <div className="flex justify-center gap-1.5 mt-auto">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="
                      w-2 h-2 rounded-full
                      bg-[#ef7b01] dark:bg-orange-400
                      opacity-50 group-hover:opacity-100 transition-opacity
                    "
                  ></span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PlacementProcess;