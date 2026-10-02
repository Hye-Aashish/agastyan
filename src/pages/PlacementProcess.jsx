import { motion } from "framer-motion";
import Images from "../assets/index";
import TiltCard3D from "../components/TiltCard3D";

const steps = [
  {
    title: "Course Program",
    desc: "Our expert counselors will help you find the ideal course.",
    img: Images.Course_Program,
  },
  {
    title: "Experts Mentors",
    desc: "All trainers are working professionals with experience.",
    img: Images.ExpertsMentors,
  },
  {
    title: "Project Preparation",
    desc: "Programs include live projects for real experience.",
    img: Images.ProjectPreparation,
  },
  {
    title: "Assignment Process",
    desc: "Students get multiple assignments for practice.",
    img: Images.AssignmentProcess,
  },
  {
    title: "Grooming Session",
    desc: "We prepare you for interviews with grooming sessions.",
    img: Images.GroomingSession,
  },
  {
    title: "Interview Calls",
    desc: "Placement team shares job opportunities.",
    img: Images.InterViewCalls,
  },
  {
    title: "Student Placed",
    desc: "30k+ students placed in top IT companies.",
    img: Images.OnerTrust,
  },
];

const PlacementProcess = () => {
  return (
    <section
      className="
        py-20 md:py-28
        bg-gradient-to-b from-emerald-50/20 via-white/90 to-orange-50/30
        dark:from-gray-950/70 dark:via-black/60 dark:to-gray-950/70
        transition-colors duration-500 relative overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-3 px-4 py-1.5 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/30 text-[#2E7D32] dark:text-emerald-400 text-xs sm:text-sm font-bold tracking-wide"
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
            PLACEMENT <span className="text-[#ef7b01] dark:text-orange-400">PROCESS</span>
          </motion.h2>
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
              className="w-[270px] h-full"
            >
              <TiltCard3D
                maxTilt={12}
                scale={1.03}
                className="
                  group relative w-full p-6 text-center rounded-3xl
                  bg-white/90 dark:bg-gray-900/90
                  backdrop-blur-md
                  border border-orange-100 dark:border-gray-800
                  shadow-lg dark:shadow-black/50
                  hover:shadow-2xl hover:shadow-orange-500/10 hover:border-[#ef7b01]/40 dark:hover:border-[#ef7b01]/40
                  transition-all duration-300
                  flex flex-col items-center justify-between h-full
                "
              >
                {/* Step Number Badge - Logo Orange with 3D Z-elevation */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-[#ef7b01] text-white text-xs font-extrabold shadow-md"
                  style={{ transform: "translateZ(30px)" }}
                >
                  Step 0{index + 1}
                </div>

                {/* Image */}
                <div
                  className="w-full h-[140px] flex items-center justify-center mt-2 mb-4 group-hover:scale-105 transition-transform duration-300"
                  style={{ transform: "translateZ(20px)" }}
                >
                  <img
                    src={step.img}
                    alt={step.title}
                    className="h-full object-contain drop-shadow-sm"
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold mb-2 text-[#2E7D32] dark:text-emerald-400 group-hover:text-[#ef7b01] dark:group-hover:text-orange-400 transition-colors"
                  style={{ transform: "translateZ(15px)" }}
                >
                  {step.title}
                </h3>

                {/* Desc */}
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                  {step.desc}
                </p>

                {/* Dots */}
                <div className="flex justify-center gap-1.5 mt-auto">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="
                        w-2 h-2 rounded-full
                        bg-[#ef7b01] dark:bg-orange-500
                        opacity-60 group-hover:opacity-100 transition-opacity
                      "
                    ></span>
                  ))}
                </div>
              </TiltCard3D>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PlacementProcess;
