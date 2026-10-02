import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Do you provide 100% placement assistance?",
    answer: "Yes! We provide complete placement support, including resume building, mock interviews, and direct referrals to our hiring partners.",
  },
  {
    id: 2,
    question: "Are the training projects live?",
    answer: "Absolutely. Our curriculum is designed around industry-level live projects, giving you hands-on experience before you even graduate.",
  },
  {
    id: 3,
    question: "Can beginners join your web development course?",
    answer: "Yes, our Full Stack and Web Development courses start from the very basics (HTML/CSS) and go up to advanced frameworks like React and Node.js.",
  },
  {
    id: 4,
    question: "Do you provide IT services for startups?",
    answer: "Yes, Agastyaan Technology offers end-to-end IT solutions, including Web App Development, UI/UX Design, and Digital Marketing for businesses of all sizes.",
  },
];

const FaqSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 md:py-28 bg-gray-50/50 dark:bg-gray-950/70 transition-colors duration-500 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-[#ef7b01]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-3 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-[#ef7b01]/30 text-[#ef7b01] dark:text-orange-400 text-xs sm:text-sm font-bold"
          >
            Got Questions?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white tracking-tight"
          >
            Frequently Asked <span className="text-[#ef7b01] dark:text-orange-400">Questions</span>
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`
                  bg-white/90 dark:bg-gray-900/90
                  backdrop-blur-md
                  border rounded-2xl overflow-hidden
                  transition-all duration-300 shadow-md
                  ${isOpen 
                    ? "border-[#ef7b01]/50 dark:border-[#ef7b01]/50 shadow-orange-500/10 shadow-lg" 
                    : "border-gray-200/80 dark:border-gray-800 hover:border-[#ef7b01]/30 dark:hover:border-gray-700"
                  }
                `}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none gap-4"
                >
                  <span className="font-bold text-base sm:text-lg text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-1.5 rounded-full ${isOpen ? "bg-orange-500/10 text-[#ef7b01]" : "text-gray-400"}`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-0 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-800/80 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;


