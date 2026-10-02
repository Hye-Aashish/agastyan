import { motion } from "framer-motion";
import Images from "../assets/index";
import { CheckCircle2, ThumbsUp, Play, Star } from "lucide-react";
import TiltCard3D from "../components/TiltCard3D";

// Platform SVG Icons
const GoogleIcon = () => (
  <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-6 h-6 shrink-0 fill-[#1877F2]" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-6 h-6 shrink-0 fill-[#FF0000]" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const reviewCards = [
  {
    platform: "Google Reviews",
    icon: <GoogleIcon />,
    rating: "4.9",
    ratingSuffix: "★",
    statLabel: "500+ Verified Reviews",
    badge: "✓ Google Verified",
    badgeBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
    themeBg: "from-amber-500/10 via-orange-500/5 to-transparent",
    accentBorder: "border-amber-200 dark:border-amber-900/50 hover:border-[#ef7b01]",
    glowColor: "group-hover:shadow-amber-500/20",
    statColor: "text-[#ef7b01] dark:text-orange-400",
    tag: "100% Satisfaction Rate",
    quote: "100% of diploma students found our industry-oriented courses highly useful for practical learning and career success.",
    subtext: "Highest Rated Tech Institute",
    stars: 5,
    starColor: "text-amber-400",
  },
  {
    platform: "Facebook Ratings",
    icon: <FacebookIcon />,
    rating: "98%",
    ratingSuffix: "",
    statLabel: "Recommendation Score",
    badge: "👍 1,200+ Aspirants",
    badgeBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
    themeBg: "from-blue-500/10 via-indigo-500/5 to-transparent",
    accentBorder: "border-blue-200 dark:border-blue-900/50 hover:border-blue-500",
    glowColor: "group-hover:shadow-blue-500/20",
    statColor: "text-blue-600 dark:text-blue-400",
    tag: "5-Star Mentor Rating",
    quote: "Consistently rated 5-stars by tech aspirants for hands-on live project training and 1-on-1 expert mentorship.",
    subtext: "Based on 1,200+ Student Votes",
    stars: 5,
    starColor: "text-blue-500",
  },
  {
    platform: "YouTube Community",
    icon: <YouTubeIcon />,
    rating: "35K+",
    ratingSuffix: "",
    statLabel: "Active Tech Learners",
    badge: "▶ Free Video Lessons",
    badgeBg: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30",
    themeBg: "from-rose-500/10 via-red-500/5 to-transparent",
    accentBorder: "border-rose-200 dark:border-rose-900/50 hover:border-rose-500",
    glowColor: "group-hover:shadow-rose-500/20",
    statColor: "text-rose-600 dark:text-rose-400",
    tag: "Top Tech Channel",
    quote: "Thousands of students follow our practical coding tutorials, project walkthroughs & career placement guidance.",
    subtext: "Growing Tech Community",
    stars: 5,
    starColor: "text-rose-500",
  },
];

const OwnerTrustSection = () => {
  return (
    <section
      className="
        py-20 md:py-28
        bg-gradient-to-b from-emerald-50/20 via-white/90 to-orange-50/30
        dark:from-black/70 dark:via-gray-950/60 dark:to-black/70
        transition-colors duration-500 relative overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-12 gap-10 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <span className="
              inline-flex items-center gap-2 px-4 py-1.5 rounded-full
              bg-[#2E7D32]/10 dark:bg-[#2E7D32]/20 border border-[#2E7D32]/30
              text-xs sm:text-sm font-bold tracking-wide uppercase
              text-[#2E7D32] dark:text-emerald-400
            ">
              <CheckCircle2 className="w-4 h-4" />
              Industry-Recognized Certification & Skill-Based Training
            </span>

            <h2 className="
              text-3xl sm:text-4xl lg:text-5xl font-black mt-4 leading-tight tracking-tight
              text-gray-900 dark:text-white
            ">
              Over <span className="text-[#ef7b01] dark:text-orange-400">10,000+ Students</span> have <br className="hidden sm:inline" />
              Trusted <span className="text-[#ef7b01] dark:text-orange-400">Agastyaan Technology</span> for <br className="hidden sm:inline" />
              Industrial Training & Career Growth
            </h2>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex justify-center md:justify-end"
          >
            <TiltCard3D maxTilt={10} scale={1.02}>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#ef7b01] to-[#2E7D32] rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500" />
                <div
                  className="
                    relative overflow-hidden w-full max-w-sm
                    rounded-2xl shadow-2xl
                    border-2 border-[#ef7b01]/50 dark:border-orange-400/30
                    bg-white dark:bg-gray-900
                  "
                >
                  <img
                    src={Images.Onerimage}
                    alt="Founder of Agastyaan Technology"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </TiltCard3D>
          </motion.div>
        </div>

        {/* STATS / REVIEWS - DISTINCT PLATFORM BRAND CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">

          {reviewCards.map((card, i) => (
            <TiltCard3D key={card.platform} maxTilt={12} scale={1.03} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`
                  relative p-6 sm:p-8 rounded-3xl overflow-hidden h-full
                  bg-white/90 dark:bg-gray-900/85
                  backdrop-blur-xl
                  shadow-xl shadow-gray-200/50 dark:shadow-black/60
                  border-2 ${card.accentBorder}
                  ${card.glowColor}
                  transition-all duration-500 flex flex-col justify-between group
                `}
              >
                {/* Card Ambient Top Background Gradient Tint */}
                <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${card.themeBg} pointer-events-none`} />

                <div className="relative z-10">
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-white dark:bg-gray-800 shadow-md shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-700">
                        {card.icon}
                      </div>
                      <div>
                        <h4 className="text-base font-extrabold text-gray-900 dark:text-white group-hover:text-gray-950 dark:group-hover:text-white">
                          {card.platform}
                        </h4>
                        <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">
                          {card.subtext}
                        </span>
                      </div>
                    </div>

                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${card.badgeBg}`}>
                      {card.badge}
                    </span>
                  </div>

                  {/* Rating Display */}
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className={`text-4xl sm:text-5xl font-black ${card.statColor} tracking-tight`}>
                      {card.rating}<span className="text-2xl">{card.ratingSuffix}</span>
                    </span>
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {card.statLabel}
                    </span>
                  </div>

                  {/* Tag pill */}
                  <div className="mb-4">
                    <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                      {card.tag}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300 font-normal italic">
                    "{card.quote}"
                  </p>
                </div>

                {/* Bottom Footer Row */}
                <div className="relative z-10 mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                    Overall Rating
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(card.stars)].map((_, idx) => (
                      <Star key={idx} className={`w-4 h-4 fill-current ${card.starColor}`} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </TiltCard3D>
          ))}

        </div>

      </div>
    </section>
  );
};

export default OwnerTrustSection;


