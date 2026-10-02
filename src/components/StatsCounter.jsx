import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import TiltCard3D from "./TiltCard3D";

const stats = [
  { id: 1, label: "Students Placed", value: 450, suffix: "+" },
  { id: 2, label: "Live Projects", value: 45, suffix: "+" },
  { id: 3, label: "Expert Mentors", value: 15, suffix: "+" },
  { id: 4, label: "Hiring Partners", value: 50, suffix: "+" },
];

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / value));
      const effectiveStepTime = stepTime > 0 ? stepTime : 10;
      const step = Math.ceil(value / (duration / effectiveStepTime));

      const timer = setInterval(() => {
        start += step;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, effectiveStepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-black text-[#ef7b01] dark:text-orange-400 mb-2">
      {count}
      {suffix}
    </div>
  );
};

const StatsCounter = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-orange-500/5 via-amber-500/5 to-emerald-500/5 dark:from-gray-950/70 dark:via-gray-900/60 dark:to-gray-950/70 border-y border-orange-100/80 dark:border-gray-800/80 backdrop-blur-xl transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <TiltCard3D
                maxTilt={14}
                scale={1.04}
                className="
                  p-6 rounded-2xl
                  bg-white/80 dark:bg-gray-900/80
                  backdrop-blur-md
                  border border-orange-100 dark:border-gray-800
                  shadow-xl shadow-orange-500/5 dark:shadow-black/50
                  hover:border-[#ef7b01]/50 dark:hover:border-[#ef7b01]/50
                  transition-all duration-300 h-full flex flex-col justify-center
                "
              >
                <div style={{ transform: "translateZ(25px)" }}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="text-gray-600 dark:text-gray-300 font-semibold text-sm sm:text-base mt-2">
                    {stat.label}
                  </p>
                </div>
              </TiltCard3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;


