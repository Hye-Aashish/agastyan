import { useState, useEffect, useCallback } from "react";

const COURSE_NAMES = [
  "Python",
  "Data Analytics",
  "AI/ML",
  "Web Dev",
  "Full Stack Development",
  "Robotics",
];

const HeroSection = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [hintVisible, setHintVisible] = useState(true);

  const handleOpenCard = useCallback((index) => {
    setSelectedCourse(index);
    try {
      window.dispatchEvent(
        new CustomEvent("play-bell-sound", { detail: { freq: 520 + index * 90 } })
      );
      window.dispatchEvent(
        new CustomEvent("course-card-selected", { detail: { courseIndex: index } })
      );
    } catch {
      // ignore
    }
  }, []);

  const handleCloseCard = useCallback(() => {
    setSelectedCourse(null);
    try {
      window.dispatchEvent(
        new CustomEvent("course-card-selected", { detail: { courseIndex: -1 } })
      );
    } catch {
      // ignore
    }
  }, []);

  // Listen for clicks on floating course portals from the fixed canvas
  useEffect(() => {
    const handleCourseClick = (e) => {
      if (e && e.detail && e.detail.courseIndex !== undefined) {
        handleOpenCard(e.detail.courseIndex);
      }
    };
    window.addEventListener("open-course-card", handleCourseClick);
    return () => window.removeEventListener("open-course-card", handleCourseClick);
  }, [handleOpenCard]);

  // Fade out hint on user interaction
  useEffect(() => {
    const handleInteract = () => setHintVisible(false);
    window.addEventListener("mousemove", handleInteract, { once: true, passive: true });
    window.addEventListener("touchstart", handleInteract, { once: true, passive: true });
    return () => {
      window.removeEventListener("mousemove", handleInteract);
      window.removeEventListener("touchstart", handleInteract);
    };
  }, []);

  // Auto-close card on scroll past hero section
  useEffect(() => {
    const handleScroll = () => {
      if (selectedCourse !== null && window.scrollY > 280) {
        handleCloseCard();
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedCourse, handleCloseCard]);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleCloseCard();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleCloseCard]);

  return (
    <section id="hero-section" className="relative w-full min-h-[76vh] md:min-h-[82vh] flex flex-col justify-start pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-8 px-4 text-center select-none z-10 font-sans bg-transparent">
      
      {/* Copy / Hero Heading */}
      <div className="max-w-4xl mx-auto px-4 pointer-events-none z-10 font-sans">
        <h1 className="m-0 font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-[3rem] tracking-tight leading-snug text-gray-900 dark:text-white drop-shadow-md">
          Build Your Tech Career with <span className="text-[#ef7b01] dark:text-orange-400">Agastyaan</span>
        </h1>

        <p className="mt-3 mx-auto max-w-xl text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium leading-relaxed drop-shadow-sm">
          Industrial IT Training, Live Projects &amp; 100% Placement Support in Full Stack, Python, AI &amp; Robotics.
        </p>
      </div>

      {/* Interactive Course Dialog Card with Backdrop */}
      {selectedCourse !== null && (
        <>
          {/* Backdrop Scrim (clicking anywhere outside closes the card) */}
          <div
            onClick={handleCloseCard}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 transition-opacity animate-in fade-in duration-200"
            aria-hidden="true"
          />

          <div
            id="card"
            role="dialog"
            aria-label="Agastyaan Technology course"
            className="fixed left-1/2 -translate-x-1/2 bottom-[calc(20px+env(safe-area-inset-bottom,0px))] w-[min(92vw,420px)] bg-white/95 dark:bg-[#080e22]/95 border border-orange-200/90 dark:border-white/20 rounded-[18px] p-[18px_18px_16px] backdrop-blur-xl shadow-2xl dark:shadow-[0_10px_40px_rgba(0,0,0,.5),0_0_30px_rgba(0,230,255,.12)] z-50 font-sans text-left animate-in fade-in zoom-in-95 duration-200"
          >
            <button
              id="cx"
              type="button"
              aria-label="Close"
              onClick={handleCloseCard}
              className="absolute top-2 right-2.5 w-[34px] h-[34px] p-0 text-xl leading-none rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 text-gray-700 dark:text-[#e9eefc] border border-gray-200 dark:border-white/20 flex items-center justify-center cursor-pointer transition-colors"
            >
              &times;
            </button>
            <div className="text-[0.65rem] tracking-[0.16em] text-[#ef7b01] dark:text-[#9fb0d9] font-bold">
              COURSE AT AGASTYAAN TECHNOLOGY
            </div>
            <div
              id="ct"
              className="font-serif text-[2rem] font-medium my-[4px_0_2px] text-gray-900 dark:text-[#e9eefc]"
            >
              {COURSE_NAMES[selectedCourse]}
            </div>
            <div className="text-[0.7rem] tracking-[0.14em] text-[#2E7D32] dark:text-[#d6ff7a] mb-3 font-extrabold">
              THE RIGHT SKILLS. THE RIGHT JOB.
            </div>
            <div id="chips" className="flex flex-wrap gap-2">
              {COURSE_NAMES.map((name, i) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => handleOpenCard(i)}
                  className={`py-[7px] px-3 text-[0.8rem] rounded-full border transition-all font-sans cursor-pointer ${
                    i === selectedCourse
                      ? "border-[#ef7b01] text-white bg-[#ef7b01] shadow-md shadow-orange-500/20 dark:border-[#d6ff7a] dark:text-[#d6ff7a] dark:bg-[#d6ff7a]/15 dark:shadow-[0_0_12px_rgba(214,255,122,0.25)]"
                      : "border-gray-200 dark:border-white/20 text-gray-700 dark:text-[#e9eefc] bg-gray-50/80 hover:bg-gray-100 dark:bg-white/5 dark:hover:bg-white/10"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
            <div className="mt-3 text-[0.7rem] text-gray-500 dark:text-[#9fb0d9] leading-[1.4]">
              Agastyaan Technology &middot; Khanpur, Kharar, Mohali, Punjab
            </div>
          </div>
        </>
      )}

      {/* Interaction Hint Bottom */}
      <div
        id="hint"
        className={`absolute left-0 right-0 bottom-4 text-center text-sm text-gray-600 dark:text-[#9fb0d9] font-medium pointer-events-none transition-opacity duration-1000 z-20 ${
          hintVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        Click on any course portal to explore our curriculum & career tracks
      </div>
    </section>
  );
};

export default HeroSection;
