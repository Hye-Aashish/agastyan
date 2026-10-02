import TiltCard3D from "../components/TiltCard3D";

const WhyChooseUs = () => {
  return (
    <section
      className="
        py-20
        bg-gradient-to-br from-orange-50/50 via-white/40 to-orange-100/50
        dark:from-gray-900/60 dark:via-gray-950/70 dark:to-black/70
        backdrop-blur-sm
        transition-colors duration-500
      "
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="
          text-3xl md:text-4xl font-black mb-12 tracking-tight
          text-gray-900 dark:text-white
        ">
          Why Choose{" "}
          <span className="text-[#ef7b01] dark:text-orange-400">
            Agastyaan Technology?
          </span>
        </h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Real IT Projects", desc: "Build enterprise-grade applications with full code reviews." },
            { title: "Expert Trainers", desc: "Learn directly from senior engineers working in modern IT." },
            { title: "Modern Tech Stack", desc: "Master Next.js, React, Node, Python, Three.js, and Cloud." },
            { title: "Career Support", desc: "Resume building, mock interviews, and placement assistance." },
          ].map((item, i) => (
            <TiltCard3D key={i} maxTilt={15} scale={1.04} className="h-full">
              <div
                className="
                  p-8 rounded-2xl h-full flex flex-col justify-between
                  bg-white/85 dark:bg-gray-900/80 backdrop-blur-md
                  border border-orange-100/80 dark:border-gray-800/80
                  shadow-lg dark:shadow-black/50
                  hover:border-[#ef7b01] dark:hover:border-orange-500/60
                  transition duration-300 group
                "
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-orange-100/80 dark:bg-orange-500/10 text-[#ef7b01] flex items-center justify-center font-black text-lg">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="
                    text-xl font-bold mb-3
                    text-gray-900 dark:text-white
                    group-hover:text-[#ef7b01] dark:group-hover:text-orange-400
                    transition
                  ">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </TiltCard3D>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;