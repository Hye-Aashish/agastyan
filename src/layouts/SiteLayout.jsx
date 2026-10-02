import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
import ShootingStarsEffect from "../components/ShootingStarsEffect";
import FireflyEffect from "../components/FireflyEffect";
import ThreeSceneBackground from "../components/ThreeSceneBackground";
import Dock3D from "../components/Dock3D";
import CursorSpotlight from "../components/CursorSpotlight";
import { motion } from "framer-motion";

const bgBoxes = Array.from({ length: 18 });

const SiteLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">

      {/* 3D Cursor Volumetric Spotlight */}
      <CursorSpotlight />

      {/* Three.js Real 3D Cinematic Background (Floating 3D Polyhedra & Constellation) */}
      <ThreeSceneBackground />

      {/* Global Interactive Shooting Stars & Cosmic Stars */}
      <ShootingStarsEffect />

      {/* Global Subtle Fireflies with Mouse Attraction */}
      <FireflyEffect />

      {/* Background Layer */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
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

      <Header />
      <main className="relative z-10 pt-16">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
      <Dock3D />
    </div>
  );
};

export default SiteLayout;