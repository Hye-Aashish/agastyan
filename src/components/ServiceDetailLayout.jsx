import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Award,
  Layers,
  Code2,
  PhoneCall,
  Laptop
} from "lucide-react";
import TiltCard3D from "./TiltCard3D";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Requirement Analysis",
    desc: "We analyze your business goals, target audience, technical requirements, and project scope."
  },
  {
    step: "02",
    title: "UI/UX & Architecture Design",
    desc: "Our team crafts wireframes, clickable prototypes, and scalable system architecture."
  },
  {
    step: "03",
    title: "Agile Development & QA",
    desc: "Sprint-based clean coding with continuous testing, security checks, and code reviews."
  },
  {
    step: "04",
    title: "Deployment & Growth Support",
    desc: "Smooth production launch with cloud configuration, monitoring, and ongoing maintenance."
  }
];

const ServiceDetailLayout = ({
  title,
  subtitle,
  category = "IT Business Service",
  gradient = "from-[#ef7b01] via-orange-600 to-[#2E7D32]",
  features = [],
  tools = [],
  ctaTitle = "Ready to Transform Your Business?",
  ctaDesc = "Partner with Agastyaan Technology for top-tier IT development and digital strategy."
}) => {
  return (
    <div className="min-h-screen bg-transparent text-gray-900 dark:text-gray-100 transition-colors duration-500">
      
      {/* ================= HERO HEADER ================= */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-orange-50/40 via-white/30 to-gray-50/20 dark:from-gray-900/60 dark:via-gray-950/60 dark:to-gray-950/70 backdrop-blur-sm border-b border-gray-200/60 dark:border-gray-800">
        
        {/* Glow Effects */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-72 bg-gradient-to-r from-[#ef7b01]/10 via-[#2E7D32]/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-6">
            <Link to="/" className="hover:text-[#ef7b01] transition">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#ef7b01] transition">Services</Link>
            <span>/</span>
            <span className="text-[#ef7b01] font-semibold">{title}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-8"
            >
              {/* Category Pill */}
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ef7b01]/10 dark:bg-[#ef7b01]/20 border border-[#ef7b01]/30 text-xs sm:text-sm font-bold text-[#ef7b01] dark:text-orange-400 mb-4">
                <Sparkles className="w-4 h-4" />
                {category}
              </span>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight tracking-tight mb-6">
                Professional <br className="hidden sm:inline" />
                <span className="text-[#ef7b01] dark:text-orange-400">{title}</span> Solutions
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mb-8">
                {subtitle}
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="p-3.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm">
                  <Zap className="w-5 h-5 text-[#ef7b01] mb-1" />
                  <span className="block text-xs text-gray-500 dark:text-gray-400 font-medium">Performance</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">High Speed</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-[#2E7D32] mb-1" />
                  <span className="block text-xs text-gray-500 dark:text-gray-400 font-medium">Security</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">100% Secure</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm">
                  <Clock className="w-5 h-5 text-blue-600 mb-1" />
                  <span className="block text-xs text-gray-500 dark:text-gray-400 font-medium">Delivery</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">On Time</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm">
                  <Award className="w-5 h-5 text-purple-600 mb-1" />
                  <span className="block text-xs text-gray-500 dark:text-gray-400 font-medium">Quality</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">Top Rated</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to={`/contact?topic=${encodeURIComponent(title)}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#ef7b01] hover:bg-orange-600 text-white font-extrabold shadow-lg shadow-orange-500/25 transition-all hover:scale-105 active:scale-95"
                >
                  Request Free Quote & Proposal
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  to={`/enquiry?course=${encodeURIComponent(title)}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 hover:border-[#2E7D32] dark:hover:border-emerald-500 text-gray-800 dark:text-gray-200 font-bold transition-all"
                >
                  Book Consultation
                </Link>
              </div>

            </motion.div>

            {/* Right Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-4"
            >
              <TiltCard3D maxTilt={10} scale={1.02}>
                <div className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-2 border-orange-200/80 dark:border-gray-800 shadow-2xl relative">
                  
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-black text-gray-900 dark:text-white">
                      Why Partner With Us?
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-[#2E7D32]/10 text-[#2E7D32] dark:text-emerald-400 border border-[#2E7D32]/20">
                      EXPERT IT
                    </span>
                  </div>

                  <ul className="space-y-4 mb-6">
                    {[
                      "Experienced Software Engineers & Designers",
                      "Custom Built Tailored to Your Business Goals",
                      "Agile Sprint Delivery & Transparent Reporting",
                      "Sub-second Performance & SEO Optimization",
                      "Rigorous Security & Penetration Audits",
                      "24/7 Ongoing Support & Cloud Maintenance",
                    ].map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-[#2E7D32] dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-gray-100 dark:border-gray-800 text-center">
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                      Agastyaan Technology • Your Trusted Digital Partner
                    </span>
                  </div>

                </div>
              </TiltCard3D>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ================= CORE CAPABILITIES GRID ================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#2E7D32]/10 dark:bg-[#2E7D32]/20 text-[#2E7D32] dark:text-emerald-400 font-bold text-xs uppercase tracking-wider mb-3">
            Solutions Offered
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
            Comprehensive <span className="text-[#ef7b01]">{title}</span> Services
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            End-to-end capabilities tailored to scale startups, enterprises, and growing businesses.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, index) => (
            <TiltCard3D key={index} maxTilt={12} scale={1.03} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group p-6 sm:p-8 rounded-3xl h-full bg-white/85 dark:bg-gray-900/80 backdrop-blur-md border-2 border-gray-100/80 dark:border-gray-800/80 hover:border-[#ef7b01] dark:hover:border-orange-500 shadow-xl dark:shadow-black/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-orange-50 dark:bg-orange-500/10 text-[#ef7b01] dark:text-orange-400 group-hover:bg-[#ef7b01] group-hover:text-white transition-colors duration-300">
                      <Laptop className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black tracking-widest text-gray-400 dark:text-gray-500 uppercase">
                      Feature 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-gray-900 dark:text-white group-hover:text-[#ef7b01] dark:group-hover:text-orange-400 transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100/80 dark:border-gray-800/80 flex items-center justify-between text-xs font-bold text-gray-500 dark:text-gray-400">
                  <span>Enterprise Grade</span>
                  <span className="text-[#2E7D32] dark:text-emerald-400">✓ Guaranteed</span>
                </div>
              </motion.div>
            </TiltCard3D>
          ))}
        </div>

      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="py-20 bg-gray-100/50 dark:bg-gray-900/40 backdrop-blur-sm border-y border-gray-200/80 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#ef7b01]/10 text-[#ef7b01] font-bold text-xs uppercase tracking-wider mb-3">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
              Our 4-Step Development & Delivery Process
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <TiltCard3D key={idx} maxTilt={12} scale={1.03} className="h-full">
                <div 
                  className="p-6 rounded-2xl h-full bg-white/85 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200/80 dark:border-gray-800 shadow-md relative overflow-hidden flex flex-col justify-between"
                >
                  <span className="text-4xl font-black text-orange-200/60 dark:text-gray-800 absolute top-3 right-4 select-none">
                    {step.step}
                  </span>
                  <div>
                    <h4 className="text-base font-extrabold text-gray-900 dark:text-white mb-2 relative z-10">
                      {step.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed relative z-10">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </TiltCard3D>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECH STACK & TOOLS ================= */}
      {tools && tools.length > 0 && (
        <section className="py-12 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-b border-gray-200/80 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h4 className="text-sm font-extrabold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-6">
              Technologies & Frameworks Utilized
            </h4>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {tools.map((tool, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 border border-gray-200/80 dark:border-gray-700 shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= CTA BANNER ================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <TiltCard3D maxTilt={6} scale={1.01}>
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-gray-900/90 via-gray-950/90 to-black/95 text-white relative overflow-hidden shadow-2xl backdrop-blur-md border border-gray-800/80">
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ef7b01]/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#ef7b01]/20 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4 border border-[#ef7b01]/30">
                  Let's Build Something Great
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
                  {ctaTitle}
                </h2>
                <p className="text-gray-300 text-base sm:text-lg max-w-xl">
                  {ctaDesc}
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-xl bg-[#ef7b01] hover:bg-orange-600 text-white font-black text-lg shadow-xl shadow-orange-500/30 transition-all hover:scale-105 active:scale-95"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>

          </div>
        </TiltCard3D>
      </section>

    </div>
  );
};

export default ServiceDetailLayout;
