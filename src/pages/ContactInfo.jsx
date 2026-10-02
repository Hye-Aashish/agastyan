import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageSquare, ExternalLink } from "lucide-react";
import TiltCard3D from "../components/TiltCard3D";

const infoCards = [
  {
    title: "Email Us",
    detail: "agastyaantechnology@gmail.com",
    subtext: "Average response within 2 hours",
    badge: "24/7 Mail Support",
    icon: Mail,
    actionText: "Send Mail",
    actionLink: "mailto:agastyaantechnology@gmail.com",
    accentColor: "border-orange-200 dark:border-orange-900/40 hover:border-[#ef7b01]",
    iconBg: "bg-orange-50 dark:bg-orange-500/10 text-[#ef7b01]",
    badgeBg: "bg-orange-50 text-[#ef7b01] dark:bg-orange-500/10 dark:text-orange-400 border border-orange-200 dark:border-orange-500/20"
  },
  {
    title: "Call & WhatsApp",
    detail: "+91-6230466249",
    subtext: "Direct talk with admissions & IT team",
    badge: "Instant Call",
    icon: Phone,
    actionText: "Chat on WhatsApp",
    actionLink: "https://wa.me/916230466249?text=Hello%20Agastyaan%20Technology!",
    accentColor: "border-emerald-200 dark:border-emerald-900/40 hover:border-[#2E7D32]",
    iconBg: "bg-emerald-50 dark:bg-emerald-500/10 text-[#2E7D32] dark:text-emerald-400",
    badgeBg: "bg-emerald-50 text-[#2E7D32] dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20"
  },
  {
    title: "Visit Headquarters",
    detail: "Sco No 23, 2nd Floor, Opposite Nature Huts-3 Gate, Mind Tree School Road, Khanpur, Kharar, Mohali, Punjab 140301",
    subtext: "Walk-in campus visits welcome",
    badge: "Official Campus",
    icon: MapPin,
    actionText: "Get Map Directions",
    actionLink: "https://maps.google.com/?q=Agastyaan+Technology+Kharar+Mohali",
    accentColor: "border-blue-200 dark:border-blue-900/40 hover:border-blue-500",
    iconBg: "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400",
    badgeBg: "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20"
  },
  {
    title: "Working Hours",
    detail: "Monday - Saturday: 9:00 AM - 7:00 PM IST",
    subtext: "Sunday: Closed (Online Queries Open)",
    badge: "Office Schedule",
    icon: Clock,
    actionText: "Book Appointment",
    actionLink: "/enquiry",
    accentColor: "border-purple-200 dark:border-purple-900/40 hover:border-purple-500",
    iconBg: "bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400",
    badgeBg: "bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20"
  },
];

const ContactInfo = () => {
  return (
    <section className="py-20 bg-gray-50/60 dark:bg-gray-950/65 backdrop-blur-sm transition-colors duration-500 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {infoCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <TiltCard3D key={card.title} maxTilt={12} scale={1.03} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`
                    p-6 sm:p-8 rounded-3xl h-full
                    bg-white/85 dark:bg-gray-900/80 backdrop-blur-md
                    border-2 ${card.accentColor}
                    shadow-xl shadow-gray-200/50 dark:shadow-black/60
                    transition-all duration-500 flex flex-col justify-between group
                  `}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`p-3.5 rounded-2xl ${card.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={26} />
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${card.badgeBg}`}>
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2">
                      {card.title}
                    </h3>

                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                      {card.detail}
                    </p>

                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                      {card.subtext}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100/80 dark:border-gray-800/80">
                    <a
                      href={card.actionLink}
                      target={card.actionLink.startsWith("http") ? "_blank" : "_self"}
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#ef7b01] dark:text-orange-400 hover:underline"
                    >
                      <span>{card.actionText}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              </TiltCard3D>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ContactInfo;