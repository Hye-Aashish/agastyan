import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code,
  Monitor,
  Smartphone,
  PenTool,
  Megaphone,
  Search,
} from "lucide-react";
import TiltCard3D from "../components/TiltCard3D";

const services = [
  {
    title: "Industry Oriented Training",
    desc: "Job-ready courses with live projects, expert mentors and placement support.",
    icon: Monitor,
    tag: "Institute",
    link: "/courses"
  },
  {
    title: "Web Development",
    desc: "High-performance websites and web applications using modern tech stacks.",
    icon: Code,
    tag: "IT Services",
    link: "/web-development"
  },
  {
    title: "Mobile App Development",
    desc: "Android & iOS applications with smooth UI and powerful backend.",
    icon: Smartphone,
    tag: "IT Services",
    link: "/app-development"
  },
  {
    title: "UI / UX Design",
    desc: "Beautiful, intuitive interfaces that provide the best user experience.",
    icon: PenTool,
    tag: "IT Services",
    link: "/ui-ux-design"
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven marketing strategies to grow your brand and reach your audience.",
    icon: Megaphone,
    tag: "IT Services",
    link: "/digital-marketing"
  },
  {
    title: "SEO Optimization",
    desc: "Improve your website ranking and visibility on search engines.",
    icon: Search,
    tag: "IT Services",
    link: "/seo-optimization"
  },
];

const ServicesSection = () => {
  return (
    <section
      className="
        py-24 
        bg-gradient-to-b from-white/60 via-orange-50/40 to-white/60
        dark:from-gray-950/70 dark:via-gray-900/60 dark:to-black/75
        backdrop-blur-sm
        transition-colors duration-500
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="
            inline-block mb-3 px-4 py-1 rounded-full
            bg-orange-100 dark:bg-orange-500/10
            text-orange-600 dark:text-orange-400
            text-sm font-semibold
          ">
            What We Offer
          </span>

          <h2 className="
            text-3xl md:text-4xl font-extrabold mb-4
            text-gray-900 dark:text-white
          ">
            Training Institute & IT Services Under One Roof
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            Agastyaan is not just an institute — we also deliver professional IT
            solutions for businesses and startups.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <TiltCard3D key={service.title} maxTilt={12} scale={1.03} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="
                    relative p-7 rounded-2xl h-full flex flex-col justify-between
                    bg-white/85 dark:bg-gray-900/80 backdrop-blur-md
                    border border-gray-200/80 dark:border-gray-800/80
                    shadow-xl dark:shadow-black/60
                    hover:border-[#F28C28] dark:hover:border-orange-500/60
                    transition duration-300 group
                  "
                >
                  {/* Tag */}
                  <span
                    className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full font-bold
                      ${
                        service.tag === "Institute"
                          ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                          : "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400"
                      }`}
                  >
                    {service.tag}
                  </span>

                  <div>
                    {/* Icon */}
                    <div className="
                      w-14 h-14 flex items-center justify-center rounded-xl mb-6
                      bg-orange-100/80 dark:bg-orange-500/10
                      text-orange-600 dark:text-orange-400
                      group-hover:scale-110 transition-transform duration-300
                    ">
                      <Icon size={28} />
                    </div>

                    <h3 className="
                      text-xl font-bold mb-3
                      text-gray-900 dark:text-white
                      group-hover:text-[#F28C28] dark:group-hover:text-orange-400
                      transition
                    ">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <Link
                    to={service.link}
                    className="
                      text-[#F28C28] dark:text-orange-400
                      font-bold hover:underline inline-flex items-center gap-1
                    "
                  >
                    Learn More →
                  </Link>
                </motion.div>
              </TiltCard3D>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;