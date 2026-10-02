import Images from "../assets/index";
import TiltCard3D from "../components/TiltCard3D";

const TrainingServices = () => {
  return (
    <section
      className="
        py-20 
        bg-gradient-to-r from-orange-50/40 via-white/30 to-emerald-50/30
        dark:from-black/60 dark:via-gray-950/60 dark:to-black/60
        backdrop-blur-sm
        transition-colors duration-500
      "
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image wrapped in 3D Card */}
        <TiltCard3D maxTilt={10} scale={1.02}>
          <img
            src={`${Images.itservices}`}
            alt="Training"
            className="
              shadow-2xl dark:shadow-black/60 
              rounded-2xl border-2 border-orange-200/60 dark:border-gray-800
              w-full object-cover
            "
          />
        </TiltCard3D>

        {/* Content */}
        <div className="p-8 rounded-3xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200/70 dark:border-gray-800/80 shadow-xl dark:shadow-black/50">
          <h2 className="
            text-3xl sm:text-4xl font-black mb-6
            text-gray-900 dark:text-white tracking-tight
          ">
            Professional <span className="text-[#ef7b01]">Training Institute</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Industry-oriented courses with live projects, mentorship and real
            IT exposure designed to bridge the college-to-corporate gap.
          </p>

          <ul className="space-y-3.5 text-gray-700 dark:text-gray-200 font-semibold">
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-[#2E7D32] dark:text-emerald-400 flex items-center justify-center text-xs font-black">✓</span>
              Full Stack Development
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-[#2E7D32] dark:text-emerald-400 flex items-center justify-center text-xs font-black">✓</span>
              MERN Stack Specialization
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-[#2E7D32] dark:text-emerald-400 flex items-center justify-center text-xs font-black">✓</span>
              UI/UX & Frontend Architecture
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-[#2E7D32] dark:text-emerald-400 flex items-center justify-center text-xs font-black">✓</span>
              100% Placement & Internship Programs
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default TrainingServices;