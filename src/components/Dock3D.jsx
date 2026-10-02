import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaProjectDiagram,
  FaCertificate,
  FaLaptopCode,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

/**
 * Dock3D - Modern Interactive 3D Floating Dock
 * 
 * Features:
 * - Apple-style 3D parabolic icon magnification on hover
 * - High-end Glassmorphic 3D pill container with multi-layer depth shadow
 * - Quick direct routing to key academy sections
 */
const dockItems = [
  {
    id: "courses",
    label: "Our Courses",
    icon: FaGraduationCap,
    to: "/courses",
    color: "#ef7b01",
  },
  {
    id: "services",
    label: "IT Services",
    icon: FaLaptopCode,
    to: "/services",
    color: "#10b981",
  },
  {
    id: "roadmap",
    label: "Placement Process",
    icon: FaProjectDiagram,
    href: "#courses",
    color: "#f59e0b",
  },
  {
    id: "contact",
    label: "Contact Us",
    icon: FaPhoneAlt,
    to: "/contact",
    color: "#38bdf8",
  },
  {
    id: "whatsapp",
    label: "Live Chat",
    icon: FaWhatsapp,
    href: "https://wa.me/916230466249?text=Hello%20Agastyaan%20Technology!",
    external: true,
    color: "#22c55e",
  },
];

const Dock3D = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 hidden sm:block">
      <div
        className="
          flex items-center gap-2.5 px-4 py-2.5 rounded-full
          bg-white/80 dark:bg-gray-900/80
          backdrop-blur-2xl
          border border-orange-200/50 dark:border-gray-800/80
          shadow-2xl shadow-orange-950/20 dark:shadow-black/70
          transition-all duration-300
        "
        style={{
          boxShadow:
            "0 20px 40px -10px rgba(0,0,0,0.3), 0 0 25px -5px rgba(239,123,1,0.15)",
        }}
      >
        {dockItems.map((item, idx) => {
          const Icon = item.icon;
          const isHovered = hoveredIdx === idx;
          const isNeighbor =
            hoveredIdx !== null && Math.abs(hoveredIdx - idx) === 1;

          let scale = 1;
          let translateY = 0;
          if (isHovered) {
            scale = 1.35;
            translateY = -8;
          } else if (isNeighbor) {
            scale = 1.15;
            translateY = -4;
          }

          const content = (
            <div
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative group p-2.5 rounded-2xl flex items-center justify-center transition-all duration-200 ease-out"
              style={{
                transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
                backgroundColor: isHovered
                  ? `${item.color}20`
                  : "rgba(255,255,255,0.05)",
              }}
            >
              {/* Tooltip Label */}
              <div
                className={`
                  absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg
                  bg-gray-900 text-white text-[11px] font-bold tracking-wide whitespace-nowrap
                  pointer-events-none shadow-xl transition-all duration-200
                  ${isHovered ? "opacity-100 -translate-y-1" : "opacity-0 translate-y-1"}
                `}
              >
                {item.label}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900" />
              </div>

              {/* 3D Icon */}
              <Icon
                size={20}
                style={{
                  color: isHovered ? item.color : undefined,
                  filter: isHovered
                    ? `drop-shadow(0 4px 10px ${item.color}80)`
                    : undefined,
                }}
                className="text-gray-700 dark:text-gray-300 transition-colors"
              />
            </div>
          );

          if (item.external) {
            return (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            );
          }

          if (item.to) {
            return (
              <Link key={item.id} to={item.to}>
                {content}
              </Link>
            );
          }

          return (
            <a key={item.id} href={item.href}>
              {content}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Dock3D;
