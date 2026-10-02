import Images from "../assets/index";
import TiltCard3D from "../components/TiltCard3D";

const features = [
  {
    title: "Expert Developers",
    desc: "Skilled professionals with deep technical expertise.",
  },
  {
    title: "Modern Technology",
    desc: "We use latest frameworks & scalable architectures.",
  },
  {
    title: "Client-Centric",
    desc: "Your success is our top priority.",
  },
];

const AboutWhyChoose = () => {
  return (
    <section className="py-24 
    bg-white/80 dark:bg-gray-950/60 
    transition-colors duration-500">
      
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">

        {/* Image with 3D Tilt */}
        <TiltCard3D maxTilt={10} scale={1.02}>
          <div className="relative">
            <img
              src={`${Images.about_team}`}
              alt="Office"
              className="rounded-3xl shadow-xl w-full"
            />
            <div className="absolute inset-0 
            bg-orange-500/20 dark:bg-orange-500/10 
            rounded-3xl"></div>
          </div>
        </TiltCard3D>

        {/* Content */}
        <div>
          <h2 className="text-4xl font-bold mb-8 
          text-gray-800 dark:text-white">
            Why Choose Us
          </h2>

          <div className="space-y-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 
                bg-gray-50 dark:bg-gray-900 
                rounded-xl 
                hover:bg-orange-50 dark:hover:bg-gray-800 
                transition duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center 
                bg-orange-500 text-white 
                rounded-full font-bold shadow-md">
                  {index + 1}
                </div>

                <div>
                  <h4 className="font-semibold text-lg 
                  text-gray-800 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutWhyChoose;