import React from "react";
import Images from "../assets/index";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Demo = () => {
  return (
    <section className="relative py-20 md:py-28 w-full overflow-hidden flex items-center justify-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 animate-slowZoom"
        style={{
          backgroundImage: `url(${Images.DemoImg})`,
        }}
      ></div>

      {/* Modern Gradient Overlay */}
      <div className="
        absolute inset-0 
        bg-gradient-to-r from-black/85 via-black/75 to-black/85
        backdrop-blur-[2px]
        transition-all duration-500
      "></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          {/* Heading */}
          <h2 className="
            font-black leading-snug
            text-2xl sm:text-4xl md:text-5xl
            text-white tracking-tight
          ">
            Best{" "}
            <span className="text-[#ef7b01] dark:text-orange-400">
              6 Months / 6 Weeks
            </span>{" "}
            Industrial Training in Chandigarh
          </h2>

          {/* Subtitle */}
          <p className="
            mt-6
            text-gray-200 dark:text-gray-300
            text-base sm:text-xl font-medium tracking-wide
            flex items-center justify-center gap-2 flex-wrap
          ">
            <span className="px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold">Live Projects</span>
            <span className="hidden sm:inline text-[#ef7b01]">•</span>
            <span className="px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold">Certifications</span>
            <span className="hidden sm:inline text-[#ef7b01]">•</span>
            <span className="px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold">100% Job Assistance</span>
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">

            {/* Primary Button - Logo Saffron */}
            <Link to="/enquiry?course=6 Months Industrial Training" className="
              w-full sm:w-auto px-8 py-4 rounded-xl
              bg-[#ef7b01] hover:bg-[#2E7D32]
              text-white font-extrabold text-sm sm:text-base
              transition-all duration-300
              hover:scale-105 active:scale-95
              shadow-xl shadow-orange-500/30 text-center
            ">
              FREE DEMO CLASS – ENROLL TODAY
            </Link>

            {/* Secondary Button */}
            <a
              href="tel:+916230466249"
              className="
                w-full sm:w-auto px-8 py-4 rounded-xl
                border-2 border-white/80 text-white font-extrabold text-sm sm:text-base
                backdrop-blur-md bg-white/5
                transition-all duration-300
                hover:bg-white hover:text-black hover:scale-105 active:scale-95
                text-center
              "
            >
              CALL NOW
            </a>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Demo;
