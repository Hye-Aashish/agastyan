import { motion } from "framer-motion";
import Images from "../assets/index";
import { Link } from "react-router-dom";
import TiltCard3D from "../components/TiltCard3D";

const AboutIntro = () => {
  return (
    <section className="relative overflow-hidden py-24 
    bg-gradient-to-br from-orange-50/60 via-white/50 to-orange-100/40
    dark:from-gray-950/70 dark:via-gray-900/60 dark:to-black/75
    transition-colors duration-500">
      
      {/* ===== Main Content ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span className="inline-block mb-4 px-4 py-1 rounded-full 
          bg-orange-100 dark:bg-orange-500/20
          text-orange-600 dark:text-orange-400 
          text-sm font-semibold">
            About Agastyaan
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6
          text-gray-900 dark:text-white">
            Driving Innovation Through <br />
            <span className="text-[#ef7b01]">
              Technology & Trust
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-8 leading-relaxed">
            Agastyaan Technology is a future-focused IT company delivering
            scalable, secure, and performance-driven digital solutions for
            modern businesses.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-[#ef7b01] hover:bg-orange-700 
              text-white px-7 py-3 rounded-lg 
              font-semibold transition shadow-md"
            >
              Contact Us
            </Link>

            <Link
              to="/services"
              className="border border-[#2E7D32] 
              text-[#2E7D32] 
              dark:text-green-400 dark:border-green-400
              hover:bg-[#2E7D32] hover:text-white 
              dark:hover:bg-green-500 dark:hover:text-black
              px-7 py-3 rounded-lg font-semibold transition"
            >
              Our Services
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center"
          style={{ perspective: 1000 }}
        >
          <TiltCard3D maxTilt={10} scale={1.03} className="relative">
            <img
              src={`${Images.services}`}
              alt="Agastyaan Team"
              className="w-full max-w-md rounded-2xl shadow-2xl"
              style={{ transform: "translateZ(10px)" }}
            />

            {/* Floating Info Card with 3D Pop */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 
              bg-white/95 dark:bg-gray-800/95 
              backdrop-blur-md border border-orange-200/60 dark:border-gray-700
              px-5 py-4 rounded-2xl shadow-2xl"
              style={{ transform: "translateZ(38px)" }}
            >
              <p className="text-xl font-bold text-orange-600 dark:text-orange-400">
                5+ Years
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                Industry Experience
              </p>
            </motion.div>
          </TiltCard3D>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutIntro;