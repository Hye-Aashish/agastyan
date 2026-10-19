import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
import FixedLivingBackground from "../components/FixedLivingBackground";

const SiteLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen bg-transparent text-gray-900 dark:text-[#e9eefc] overflow-x-clip transition-colors duration-500">

      {/* Global Fixed Living World Canvas Background (Static across all pages and scrolling) */}
      <FixedLivingBackground />

      {/* Header */}
      <Header />

      {/* Main Content Sections (Transparent wrapper so static living background shows through all sections) */}
      <main className="relative z-10 pt-16 bg-transparent">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default SiteLayout;