import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/_logo.webp";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // mark component as mounted to avoid initial translate/hide during hydration
    setMounted(true);
  }, []);

  const linkClass = (path) =>
    `transition font-semibold relative
     ${
       location.pathname === path
         ? "text-[#F28C28] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#F28C28]"
         : "text-slate-700 dark:text-gray-200 hover:text-[#2E7D32]"
     }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50
      ${mounted ? "transition-transform duration-300" : ""}
      ${showHeader ? "translate-y-0" : "-translate-y-full"}
      bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl 
      border-b border-orange-100 dark:border-gray-700 shadow-sm`}
      data-mounted={mounted}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Agastyaan Logo" className="h-14 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={linkClass("/")}>Home</Link>
            <Link to="/about" className={linkClass("/about")}>About</Link>

            {/* Courses Dropdown */}
            <div className="relative group py-2">
              <Link to="/courses" className={linkClass("/courses") + " flex items-center gap-1"}>
                Our Courses
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </Link>
              <div className="absolute top-full left-0 mt-0 w-56 bg-white dark:bg-gray-900 border border-orange-100 dark:border-gray-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col z-50">
                <Link to="/frontend" className="px-4 py-2 hover:bg-orange-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200">React JS Mastery</Link>
                <Link to="/backend" className="px-4 py-2 hover:bg-orange-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200">Node & Express Backend</Link>
                <Link to="/fullstack" className="px-4 py-2 hover:bg-orange-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200">Full Stack Development</Link>
                <Link to="/python-django" className="px-4 py-2 hover:bg-orange-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200">Python Backend</Link>
                <Link to="/database" className="px-4 py-2 hover:bg-orange-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200">Database Mastery</Link>
                <Link to="/tools-api" className="px-4 py-2 hover:bg-orange-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200">Live Projects Program</Link>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group py-2">
              <Link to="/services" className={linkClass("/services") + " flex items-center gap-1"}>
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </Link>
              <div className="absolute top-full left-0 mt-0 w-56 bg-white dark:bg-gray-900 border border-orange-100 dark:border-gray-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col z-50">
                <Link to="/web-development" className="px-4 py-2 hover:bg-orange-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200">Web Development</Link>
                <Link to="/app-development" className="px-4 py-2 hover:bg-orange-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200">App Development</Link>
                <Link to="/ui-ux-design" className="px-4 py-2 hover:bg-orange-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200">UI / UX Design</Link>
                <Link to="/digital-marketing" className="px-4 py-2 hover:bg-orange-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200">Digital Marketing</Link>
                <Link to="/seo-optimization" className="px-4 py-2 hover:bg-orange-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200">SEO Optimization</Link>
              </div>
            </div>

            <Link to="/contact" className={linkClass("/contact")}>Contact</Link>
          </nav>

          {/* Right Side (Desktop + Mobile) */}
          <div className="flex items-center gap-4">

         

            {/* CTA Button (Desktop Only) */}
            <div className="hidden md:block">
              <Link
                to="/enquiry"
                className="bg-[#F28C28] hover:bg-orange-300 hover:text-black text-white px-6 py-2 font-semibold transition rounded-md"
              >
                Enquiry Now
              </Link>
            </div>

               {/* Dark Mode Toggle */}
            <DarkModeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-3xl text-slate-800 dark:text-white focus:outline-none"
            >
              {menuOpen ? "✕" : "☰"}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
        ${menuOpen ? "max-h-96" : "max-h-0"}`}
      >
        <nav className="flex flex-col bg-white/95 dark:bg-gray-900/95 backdrop-blur-md
        px-6 py-6 gap-6 border-t border-orange-100 dark:border-gray-700">
          
          <Link onClick={() => setMenuOpen(false)} to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link onClick={() => setMenuOpen(false)} to="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link onClick={() => setMenuOpen(false)} to="/courses" className={linkClass("/courses")}>
            Courses
          </Link>
          <Link onClick={() => setMenuOpen(false)} to="/services" className={linkClass("/services")}>
            Services
          </Link>
          <Link onClick={() => setMenuOpen(false)} to="/contact" className={linkClass("/contact")}>
            Contact
          </Link>

          <Link
            to="/enquiry"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center bg-[#2E7D32] hover:bg-[#1B5E20]
            text-white py-3 font-semibold transition rounded-md"
          >
            Enquiry Now
          </Link>

        </nav>
      </div>
    </header>
  );
}