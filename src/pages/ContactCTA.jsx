import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, BookOpen } from "lucide-react";
import TiltCard3D from "../components/TiltCard3D";

const ContactCTA = () => {
  return (
    <section className="py-20 bg-gray-50/60 dark:bg-gray-950/65 backdrop-blur-sm transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <TiltCard3D maxTilt={6} scale={1.01}>
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-gray-900/90 via-gray-950/90 to-black/95 text-white relative overflow-hidden shadow-2xl backdrop-blur-md border border-gray-800/80">
            
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ef7b01]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2E7D32]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ef7b01]/20 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4 border border-[#ef7b01]/30">
                <Sparkles className="w-4 h-4" />
                Start Your Journey Today
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4 text-white">
                Ready to Accelerate Your <br className="hidden sm:inline" />
                <span className="text-[#ef7b01]">Tech Career or Business?</span>
              </h2>

              <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Connect with Agastyaan Technology today. Build real-world skills with our expert mentors or scale your business with custom IT solutions.
              </p>

              <div className="flex flex-wrap justify-center items-center gap-4">
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#ef7b01] hover:bg-orange-600 text-white font-extrabold text-base shadow-xl shadow-orange-500/30 transition-all hover:scale-105 active:scale-95"
                >
                  <BookOpen className="w-5 h-5" />
                  Explore Courses
                </Link>

                <Link
                  to="/enquiry"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-base transition-all hover:scale-105 active:scale-95"
                >
                  Book Free Counselling
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

            </div>

          </div>
        </TiltCard3D>

      </div>
    </section>
  );
};

export default ContactCTA;