import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Clock, 
  Award, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  Code2, 
  Layers, 
  Terminal, 
  Zap, 
  Sparkles,
  ShieldCheck,
  Users
} from "lucide-react";
import TiltCard3D from "./TiltCard3D";

const moduleIcons = [Code2, Layers, Terminal, Zap, ShieldCheck, Sparkles, BookOpen, Briefcase];

const LearnLayout = ({ 
  title, 
  subtitle, 
  points = [],
  category = "Professional Tech Track",
  duration = "3 - 6 Months",
  level = "Beginner to Advanced",
  projects = "4+ Live Industrial Projects",
  tools = [],
  targetRoles = []
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
            <Link to="/courses" className="hover:text-[#ef7b01] transition">Courses</Link>
            <span>/</span>
            <span className="text-[#ef7b01] font-semibold">{title}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Info */}
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
                Master <span className="text-[#ef7b01] dark:text-orange-400">{title}</span> <br className="hidden sm:inline" />
                With Practical Live Projects
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mb-8">
                {subtitle}
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="p-3.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm">
                  <Clock className="w-5 h-5 text-[#ef7b01] mb-1" />
                  <span className="block text-xs text-gray-500 dark:text-gray-400 font-medium">Duration</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">{duration}</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm">
                  <Award className="w-5 h-5 text-[#2E7D32] mb-1" />
                  <span className="block text-xs text-gray-500 dark:text-gray-400 font-medium">Skill Level</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">{level}</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm">
                  <Code2 className="w-5 h-5 text-blue-600 mb-1" />
                  <span className="block text-xs text-gray-500 dark:text-gray-400 font-medium">Practice</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">{projects}</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm">
                  <Briefcase className="w-5 h-5 text-purple-600 mb-1" />
                  <span className="block text-xs text-gray-500 dark:text-gray-400 font-medium">Placement</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">100% Support</span>
                </div>
              </div>

              {/* Action CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to={`/enquiry?course=${encodeURIComponent(title)}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#ef7b01] hover:bg-orange-600 text-white font-extrabold shadow-lg shadow-orange-500/25 transition-all hover:scale-105 active:scale-95"
                >
                  Apply & Reserve Seat
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  to={`/contact?course=${encodeURIComponent(title)}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 hover:border-[#2E7D32] dark:hover:border-emerald-500 text-gray-800 dark:text-gray-200 font-bold transition-all"
                >
                  Talk to Mentor
                </Link>
              </div>

            </motion.div>

            {/* Right Column: Key Takeaways Glass Card */}
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
                      Program Highlights
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-[#2E7D32]/10 text-[#2E7D32] dark:text-emerald-400 border border-[#2E7D32]/20">
                      LIVE
                    </span>
                  </div>

                  <ul className="space-y-4 mb-6">
                    {[
                      "100% Practical & Industry Oriented Training",
                      "Real-World Hands-on Live Project Experience",
                      "1-on-1 Expert Mentorship & Daily Code Review",
                      "Resume Building & Mock Technical Interviews",
                      "Authorized Certificate of Completion",
                      "Job Placement Assistance & Hiring Support",
                    ].map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-[#2E7D32] dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-gray-100 dark:border-gray-800 text-center">
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                      Batch Starting Soon • Limited Seats Available
                    </span>
                  </div>

                </div>
              </TiltCard3D>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ================= CURRICULUM MODULES ================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#2E7D32]/10 dark:bg-[#2E7D32]/20 text-[#2E7D32] dark:text-emerald-400 font-bold text-xs uppercase tracking-wider mb-3">
            Structured Learning Path
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
            What You Will Learn in <span className="text-[#ef7b01]">{title}</span>
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            Step-by-step module breakdown crafted by senior software engineers for real industry demands.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {points.map((item, index) => {
            const IconComponent = moduleIcons[index % moduleIcons.length];

            return (
              <TiltCard3D key={index} maxTilt={12} scale={1.03} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="group p-6 sm:p-8 rounded-3xl h-full bg-white/85 dark:bg-gray-900/80 backdrop-blur-md border-2 border-gray-100/80 dark:border-gray-800/80 hover:border-[#ef7b01] dark:hover:border-orange-500 shadow-xl dark:shadow-black/60 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Icon + Module Index */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3 rounded-2xl bg-orange-50 dark:bg-orange-500/10 text-[#ef7b01] dark:text-orange-400 group-hover:bg-[#ef7b01] group-hover:text-white transition-colors duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-black tracking-widest text-gray-400 dark:text-gray-500 uppercase">
                        Module 0{index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-extrabold text-gray-900 dark:text-white group-hover:text-[#ef7b01] dark:group-hover:text-orange-400 transition-colors mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Footer status */}
                  <div className="mt-6 pt-4 border-t border-gray-100/80 dark:border-gray-800/80 flex items-center justify-between text-xs font-bold text-gray-500 dark:text-gray-400">
                    <span>Hands-on Project</span>
                    <span className="text-[#2E7D32] dark:text-emerald-400">✓ Included</span>
                  </div>
                </motion.div>
              </TiltCard3D>
            );
          })}
        </div>

      </section>

      {/* ================= TECH STACK & TOOLS ================= */}
      {tools && tools.length > 0 && (
        <section className="py-12 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-y border-gray-200/80 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h4 className="text-sm font-extrabold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-6">
              Technologies & Tools Covered
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

      {/* ================= WHY CHOOSE AGASTYAAN ================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <TiltCard3D maxTilt={6} scale={1.01}>
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-gray-900/90 via-gray-950/90 to-black/95 text-white relative overflow-hidden shadow-2xl backdrop-blur-md border border-gray-800/80">
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ef7b01]/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#ef7b01]/20 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4 border border-[#ef7b01]/30">
                  Career Guaranteed Learning
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
                  Ready to Become a Certified <br className="hidden sm:inline" />
                  <span className="text-[#ef7b01]">{title} Professional?</span>
                </h2>
                <p className="text-gray-300 text-base sm:text-lg max-w-xl">
                  Join 10,000+ successful graduates who launched their IT careers with Agastyaan Technology's industrial training programs.
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  to={`/enquiry?course=${encodeURIComponent(title)}`}
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-xl bg-[#ef7b01] hover:bg-orange-600 text-white font-black text-lg shadow-xl shadow-orange-500/30 transition-all hover:scale-105 active:scale-95"
                >
                  Enroll Now & Get Started
                </Link>
              </div>
            </div>

          </div>
        </TiltCard3D>
      </section>

    </div>
  );
};

export default LearnLayout;

