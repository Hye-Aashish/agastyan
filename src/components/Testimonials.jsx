import { useState, useEffect } from "react";
import ReactSlick from "react-slick";
const Slider = ReactSlick.default || ReactSlick;
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Full Stack Developer",
    image: "https://i.pravatar.cc/150?img=11",
    feedback: "The training at Agastyaan Institute completely transformed my career. The live projects helped me crack my first IT job effortlessly!",
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=5",
    feedback: "Amazing mentors and hands-on experience. I learned how to build beautiful, user-centric interfaces. Highly recommended!",
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Python Developer",
    image: "https://i.pravatar.cc/150?img=15",
    feedback: "Agastyaan's IT services built a scalable web app for my startup. Their development process is flawless and professional.",
  },
  {
    id: 4,
    name: "Neha Gupta",
    role: "Digital Marketer",
    image: "https://i.pravatar.cc/150?img=9",
    feedback: "Their SEO and Digital Marketing course gave me the exact skills I needed to boost my business traffic. Great learning environment.",
  },
];

const Testimonials = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesToShow(1);
      } else if (width < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-24 bg-white/60 dark:bg-black/60 backdrop-blur-sm transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-3 px-4 py-1 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-semibold"
          >
            Success Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white"
          >
            What People Say About Us
          </motion.h2>
        </div>

        {/* Carousel Container */}
        <div className="w-full relative min-w-0">
          <Slider {...settings} className="testimonial-slider">
            {testimonials.map((t) => (
              <div key={t.id} className="px-2 md:px-4 py-6 outline-none focus:outline-none">
                <div className="bg-white/85 dark:bg-gray-900/80 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-xl dark:shadow-black/50 h-full flex flex-col justify-between hover:scale-[1.02] hover:border-[#F28C28] transition-all duration-300">
                  <p className="text-gray-600 dark:text-gray-300 italic mb-6 leading-relaxed flex-grow">
                    "{t.feedback}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full border-2 border-[#F28C28] object-cover flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{t.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

