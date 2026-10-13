import { useEffect, useState } from "react";
import { FaWhatsapp, FaArrowUp, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  // Sound status listener
  useEffect(() => {
    const handleSoundStatus = (e) => {
      if (e && e.detail !== undefined) {
        setSoundOn(Boolean(e.detail.soundOn));
      }
    };
    window.addEventListener("ambient-sound-status", handleSoundStatus);
    return () => window.removeEventListener("ambient-sound-status", handleSoundStatus);
  }, []);

  const toggleSound = () => {
    window.dispatchEvent(new CustomEvent("toggle-ambient-sound"));
  };

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
    <div className="fixed bottom-4 right-3.5 sm:bottom-6 sm:right-6 flex flex-col items-center gap-2 sm:gap-3 z-40 pointer-events-auto">
      {/* Ambient Sound Toggle (On/Off Switch matching DarkModeToggle) */}
      <button
        onClick={toggleSound}
        type="button"
        title={soundOn ? "Ambient Sound: On (Click to Mute)" : "Ambient Sound: Off (Click to Play)"}
        aria-label={soundOn ? "Mute ambient audio" : "Play ambient audio"}
        className={`w-14 h-7 flex items-center p-1 cursor-pointer transition duration-300 rounded-full shadow-lg backdrop-blur-md border hover:scale-105 active:scale-95 ${
          soundOn
            ? "bg-[#ef7b01] border-orange-400 shadow-orange-500/40 ring-2 ring-orange-400/40"
            : "bg-gray-300 dark:bg-gray-700 border-gray-400/30 dark:border-white/15"
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition duration-300 flex items-center justify-center text-xs ${
            soundOn ? "translate-x-7" : "translate-x-0"
          }`}
        >
          {soundOn ? (
            <FaVolumeUp className="text-[#ef7b01] text-[11px]" />
          ) : (
            <FaVolumeMute className="text-gray-500 text-[11px]" />
          )}
        </div>
      </button>

      {/* WhatsApp Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
        className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
      >
        <FaWhatsapp size={20} className="sm:text-[22px]" />
      </a>

      {/* Scroll To Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          type="button"
          title="Scroll to Top"
          aria-label="Scroll to top"
          className="bg-[#ef7b01] hover:bg-orange-600 text-white p-2.5 sm:p-3 rounded-full shadow-md hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
        >
          <FaArrowUp size={14} className="sm:text-base" />
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;
