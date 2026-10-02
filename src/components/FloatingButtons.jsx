import { useEffect, useState } from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  // Scroll detect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const message = "Hello I want to contact you";
const url = `https://api.whatsapp.com/send?phone=916230466249&text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center gap-3 z-50">

      {/* WhatsApp Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
      >
        <FaWhatsapp size={22} />
      </a>

      {/* Scroll To Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="bg-[#ef7b01] hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition duration-300"
        >
          <FaArrowUp size={18} />
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;
