import React from "react";
import { motion } from "framer-motion";
import Images from "../assets/index";

const students = [
  Images.gallery_1,
  Images.gallery_3,
  Images.gallery_4,
  Images.gallery_5,
  Images.gallery_6,
  Images.gallery_7,
  Images.gallery_8,
];

const StudentCertification = () => {
  return (
    <section className="
      w-full flex justify-center py-20 md:py-28
      bg-gradient-to-b from-gray-100/80 via-white/90 to-orange-50/30
      dark:from-gray-950/70 dark:via-black/60 dark:to-gray-950/70
      transition-colors duration-500 relative overflow-hidden
    ">
      <div className="w-full max-w-7xl px-4 sm:px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative p-6 sm:p-10 md:p-14 rounded-3xl overflow-hidden
            bg-white/90 dark:bg-gray-900/90
            backdrop-blur-xl
            shadow-2xl shadow-gray-200/50 dark:shadow-black/60
            border border-orange-100 dark:border-gray-800
          "
        >

          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Certificate Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#ef7b01] to-[#2E7D32] rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500" />
                <img
                  src={Images.certificate}
                  alt="Certificate"
                  className="relative w-72 md:w-88 rounded-xl object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7">
              <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-[#ef7b01]/30 text-[#ef7b01] dark:text-orange-400 text-xs sm:text-sm font-bold">
                Recognized Credentials
              </span>

              <h2 className="
                text-3xl sm:text-4xl font-black leading-tight tracking-tight
                text-gray-900 dark:text-white
              ">
                What you will Get at <br />
                <span className="text-[#ef7b01] dark:text-orange-400">
                  Agastyaan Technology?
                </span>
              </h2>

              <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                Top rated course over the years. We have trained over
                <span className="font-extrabold text-[#2E7D32] dark:text-emerald-400">
                  {" "}35,000+ students
                </span>{" "}
                and helped them get their first job in IT sector.
              </p>

              <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                We offer 100% job-oriented courses for professionals,
                entrepreneurs, college students and job seekers at
                affordable fees.
              </p>
            </div>
          </div>

          {/* Students Slider */}
          <div className="mt-14 relative overflow-hidden rounded-2xl p-2">

            <div className="flex gap-6 animate-autoScroll hover:[animation-play-state:paused]">

              {[...students, ...students].map((img, index) => (
                <div
                  key={index}
                  className="
                    min-w-[260px] rounded-2xl overflow-hidden
                    bg-gray-100 dark:bg-gray-800
                    shadow-md dark:shadow-black/40
                    border border-gray-200 dark:border-gray-700
                    hover:shadow-orange-500/20 hover:scale-105
                    transition-all duration-300
                  "
                >
                  <img
                    src={img}
                    alt="Student Certificate"
                    className="w-full h-56 object-cover"
                  />
                </div>
              ))}

            </div>

            {/* Fade Effect */}
            <div className="absolute left-0 top-0 h-full w-16 sm:w-24 
              bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none"></div>

            <div className="absolute right-0 top-0 h-full w-16 sm:w-24 
              bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none"></div>

          </div>

          {/* Bottom Stats */}
          <div className="mt-12 text-center pt-8 border-t border-gray-100 dark:border-gray-800">
            <p className="text-3xl font-black text-[#ef7b01] dark:text-orange-400">
              35,000+ Students
            </p>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">
              Completed Their Course Certification from Agastyaan Technology
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default StudentCertification;
