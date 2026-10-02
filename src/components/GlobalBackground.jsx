import { motion } from "framer-motion";

const bgBoxes = Array.from({ length: 18 });

const GlobalBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {bgBoxes.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-xl 
          bg-orange-400/10 dark:bg-orange-500/10 
          border border-orange-400/20 dark:border-orange-500/20"
          style={{
            width: 40 + (i % 5) * 25,
            height: 40 + (i % 5) * 25,
            left: `${(i * 7) % 100}%`,
            top: `${(i * 11) % 100}%`,
          }}
          animate={{
            y: ["0%", "-120%"],
            rotate: [0, 180],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 22 + i,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default GlobalBackground;