import TiltCard3D from "../components/TiltCard3D";

const AboutMissionVision = () => {
  return (
    <section className="py-20 
    bg-gray-50/50 dark:bg-gray-950/60 
    transition-colors duration-500">
      
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">

        {/* Mission */}
        <TiltCard3D maxTilt={12} scale={1.03}>
          <div className="relative 
          bg-white/90 dark:bg-gray-900/90 
          backdrop-blur-xl border border-orange-100 dark:border-gray-800
          p-10 rounded-3xl shadow-xl 
          dark:shadow-black/50 h-full">
            
            <span
              className="absolute -top-4 left-6 
              bg-gradient-to-r from-[#ef7b01] to-amber-500 text-white 
              px-4 py-1.5 rounded-full text-xs font-black shadow-lg"
              style={{ transform: "translateZ(30px)" }}
            >
              MISSION
            </span>

            <h3 className="text-3xl font-black mb-4 
            text-gray-800 dark:text-white"
            style={{ transform: "translateZ(18px)" }}>
              Our Mission
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
              To deliver high-quality digital solutions and industry-standard technical training that empower students and businesses, improve efficiency, and create real global impact through modern technology.
            </p>
          </div>
        </TiltCard3D>

        {/* Vision */}
        <TiltCard3D maxTilt={12} scale={1.03}>
          <div className="relative 
          bg-white/90 dark:bg-gray-900/90 
          backdrop-blur-xl border border-orange-100 dark:border-gray-800
          p-10 rounded-3xl shadow-xl 
          dark:shadow-black/50 h-full">
            
            <span
              className="absolute -top-4 left-6 
              bg-gradient-to-r from-[#2E7D32] to-emerald-500 text-white 
              px-4 py-1.5 rounded-full text-xs font-black shadow-lg"
              style={{ transform: "translateZ(30px)" }}
            >
              VISION
            </span>

            <h3 className="text-3xl font-black mb-4 
            text-gray-800 dark:text-white"
            style={{ transform: "translateZ(18px)" }}>
              Our Vision
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
              To become a globally trusted technology brand and educational pioneer known for high-tier engineering excellence, hands-on live project training, and long-term hiring partnerships.
            </p>
          </div>
        </TiltCard3D>

      </div>
    </section>
  );
};

export default AboutMissionVision;