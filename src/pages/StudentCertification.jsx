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
      bg-transparent
      transition-colors duration-500 relative overflow-hidden
    ">
      {/* Subtle Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#2E7D32]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#ef7b01]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl px-4 sm:px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative p-6 sm:p-10 md:p-14 rounded-3xl overflow-hidden
            bg-white/95 dark:bg-[#080e24]/85
            backdrop-blur-xl
            shadow-xl shadow-orange-500/5 dark:shadow-[0_15px_45px_rgba(0,0,0,0.6),0_0_30px_rgba(239,123,1,0.06)]
            border-2 border-orange-100/90 dark:border-white/[0.12]
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
                  className="relative w-full max-w-[260px] sm:max-w-xs md:max-w-sm rounded-xl object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7">
              <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-[#ef7b01]/10 dark:bg-[#ef7b01]/20 border border-[#ef7b01]/30 text-[#ef7b01] dark:text-orange-400 text-xs sm:text-sm font-extrabold tracking-wide uppercase">
                Recognized Credentials
              </span>

              <h2 className="
                text-3xl sm:text-4xl font-black leading-tight tracking-tight
                text-gray-900 dark:text-white
              ">
                What you will Get at <br />
                <span className="bg-gradient-to-r from-[#ef7b01] via-amber-400 to-[#2E7D32] bg-clip-text text-transparent">
                  Agastyaan Technology?
                </span>
              </h2>

              <p className="mt-4 text-gray-600 dark:text-[#9fb0d9] text-sm sm:text-base leading-relaxed font-normal">
                Top rated course over the years. We have trained over
                <span className="font-extrabold text-[#2E7D32] dark:text-emerald-400">
                  {" "}35,000+ students
                </span>{" "}
                and helped them get their first job in IT sector.
              </p>

              <p className="mt-3 text-gray-600 dark:text-[#9fb0d9]/80 text-sm sm:text-base leading-relaxed font-normal">
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
                    bg-gray-100 dark:bg-[#0c1433]
                    shadow-md dark:shadow-black/40
                    border border-gray-200 dark:border-white/[0.1]
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
              bg-gradient-to-r from-white dark:from-[#080e24] to-transparent pointer-events-none"></div>

            <div className="absolute right-0 top-0 h-full w-16 sm:w-24 
              bg-gradient-to-l from-white dark:from-[#080e24] to-transparent pointer-events-none"></div>

          </div>

          {/* Bottom Stats */}
          <div className="mt-12 text-center pt-8 border-t border-gray-100 dark:border-white/[0.08]">
            <p className="text-3xl font-black bg-gradient-to-r from-[#ef7b01] via-amber-400 to-[#ef7b01] bg-clip-text text-transparent">
              35,000+ Students
            </p>
            <p className="text-sm font-semibold text-gray-600 dark:text-[#9fb0d9] mt-1">
              Completed Their Course Certification from Agastyaan Technology
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default StudentCertification;