import { motion } from "framer-motion";
import { MessageSquare, PhoneCall, Mail, Sparkles, MapPin } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="
      relative pt-28 pb-16 md:pt-36 md:pb-24 
      bg-gradient-to-b from-orange-50/40 via-white/40 to-emerald-50/20 
      dark:from-black/60 dark:via-gray-950/60 dark:to-black/70
      backdrop-blur-sm
      overflow-hidden transition-colors duration-500 border-b border-gray-200/60 dark:border-gray-800/80
    ">

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-72 bg-gradient-to-r from-[#ef7b01]/10 via-[#2E7D32]/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">

        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
            bg-[#ef7b01]/10 dark:bg-orange-500/20
            border border-[#ef7b01]/30
            text-[#ef7b01] dark:text-orange-400
            text-xs sm:text-sm font-extrabold uppercase tracking-wide mb-5
          "
        >
          <Sparkles className="w-4 h-4" />
          Get In Touch • We Are Here To Help
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="
            text-3xl sm:text-5xl lg:text-6xl font-black 
            text-gray-900 dark:text-white 
            leading-tight tracking-tight mb-6
          "
        >
          Let’s Connect & Build Something{" "}
          <span className="text-[#ef7b01] dark:text-orange-400">
            Extraordinary
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            text-base sm:text-lg text-gray-600 dark:text-gray-300 
            max-w-3xl mx-auto leading-relaxed mb-8
          "
        >
          Have questions about our industrial training courses, IT software services, or placement guidance? 
          Reach out to our team today and we'll be happy to assist you!
        </motion.p>

        {/* Quick Contact Chips */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto"
        >
          <a
            href="tel:+916230466249"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:border-[#ef7b01] text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200 transition"
          >
            <PhoneCall className="w-4 h-4 text-[#ef7b01]" />
            +91-6230466249
          </a>

          <a
            href="mailto:agastyaantechnology@gmail.com"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:border-[#2E7D32] text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200 transition"
          >
            <Mail className="w-4 h-4 text-[#2E7D32]" />
            agastyaantechnology@gmail.com
          </a>

          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200">
            <MapPin className="w-4 h-4 text-blue-500" />
            Kharar, Mohali, Punjab
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactHero;