import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/_logo.webp";
import DarkModeToggle from "./DarkModeToggle";
import EnquiryModal from "./EnquiryModal";
import {
  Code2,
  Layers,
  Layout,
  Terminal,
  Server,
  Smartphone,
  Sparkles,
  Bot,
  Brain,
  BarChart3,
  LineChart,
  Database,
  Cpu,
  DraftingCompass,
  Boxes,
  ArrowRight,
  Award,
  ChevronDown,
  CheckCircle2,
  Briefcase,
  GraduationCap
} from "lucide-react";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY;

        // Ignore tiny scroll jitter so header stays stable
        if (Math.abs(delta) > 8) {
          if (delta > 0 && currentScrollY > 120) {
            setShowHeader(false);
          } else if (delta < 0) {
            setShowHeader(true);
          }
          lastScrollY = currentScrollY;
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Allow external triggers to open the modal
  useEffect(() => {
    const handleOpenEnquiry = () => setEnquiryOpen(true);
    window.addEventListener("open-enquiry-modal", handleOpenEnquiry);
    return () => window.removeEventListener("open-enquiry-modal", handleOpenEnquiry);
  }, []);

  const linkClass = (path) =>
    `transition font-semibold relative text-sm
     ${
       location.pathname === path
         ? "text-[#F28C28] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#F28C28]"
         : "text-slate-700 dark:text-gray-200 hover:text-[#ef7b01]"
     }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50
        ${mounted ? "transition-transform duration-300" : ""}
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
        bg-white/90 dark:bg-[#070c1e]/90 backdrop-blur-2xl 
        border-b border-orange-100/80 dark:border-white/10 shadow-sm`}
        data-mounted={mounted}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="h-20 flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Agastyaan Logo" className="h-13 sm:h-14 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-7">
              <Link to="/" className={linkClass("/")}>Home</Link>
              <Link to="/about" className={linkClass("/about")}>About</Link>

              {/* Clean Simple Courses Dropdown */}
              <div className="relative group py-2">
                <Link
                  to="/courses"
                  className={linkClass("/courses") + " flex items-center gap-1.5 cursor-pointer"}
                >
                  <span>Our Courses</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180 text-gray-500 group-hover:text-[#ef7b01]" />
                </Link>

                {/* Simple Dropdown Menu */}
                <div className="absolute top-full -left-16 mt-1 w-[460px] bg-white/98 dark:bg-[#080d22]/98 backdrop-blur-2xl border border-orange-100/90 dark:border-white/10 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4 z-50">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                    
                    {/* Column 1: Web & Software */}
                    <div>
                      <div className="text-[11px] font-black uppercase tracking-wider text-[#ef7b01] px-2.5 py-1 mb-1 border-b border-orange-100/80 dark:border-white/10">
                        Web &amp; Software
                      </div>
                      <div className="space-y-0.5">
                        <Link to="/fullstack" className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-200 hover:text-[#ef7b01] dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-white/[0.06] transition">
                          Full Stack Development
                        </Link>
                        <Link to="/web-designing" className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-200 hover:text-[#ef7b01] dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-white/[0.06] transition">
                          Web Designing &amp; UI/UX
                        </Link>
                        <Link to="/python-flask-django" className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-200 hover:text-[#ef7b01] dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-white/[0.06] transition">
                          Python, Flask &amp; Django
                        </Link>
                        <Link to="/php-laravel-wordpress" className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-200 hover:text-[#ef7b01] dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-white/[0.06] transition">
                          PHP, Laravel &amp; WordPress
                        </Link>
                        <Link to="/flutter" className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-200 hover:text-[#ef7b01] dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-white/[0.06] transition">
                          Flutter Mobile Apps
                        </Link>
                        <Link to="/bubble-io" className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-200 hover:text-[#ef7b01] dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-white/[0.06] transition">
                          Bubble.io (No-Code)
                        </Link>
                      </div>
                    </div>

                    {/* Column 2: Data Science & AI */}
                    <div>
                      <div className="text-[11px] font-black uppercase tracking-wider text-[#2E7D32] dark:text-emerald-400 px-2.5 py-1 mb-1 border-b border-orange-100/80 dark:border-white/10">
                        Data Science &amp; AI
                      </div>
                      <div className="space-y-0.5">
                        <Link to="/ai-ml" className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-200 hover:text-[#ef7b01] dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-white/[0.06] transition">
                          AI &amp; Machine Learning
                        </Link>
                        <Link to="/data-science" className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-200 hover:text-[#ef7b01] dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-white/[0.06] transition">
                          Data Science Track
                        </Link>
                        <Link to="/data-analytics" className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-200 hover:text-[#ef7b01] dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-white/[0.06] transition">
                          Data Analytics
                        </Link>
                        <Link to="/power-bi" className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-200 hover:text-[#ef7b01] dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-white/[0.06] transition">
                          Power BI
                        </Link>
                        <Link to="/database" className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-200 hover:text-[#ef7b01] dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-white/[0.06] transition">
                          MySQL &amp; MongoDB
                        </Link>
                        <Link to="/robotics" className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-200 hover:text-[#ef7b01] dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-white/[0.06] transition">
                          Robotics &amp; AutoCAD
                        </Link>
                      </div>
                    </div>

                  </div>

                  {/* Dropdown Footer */}
                  <div className="mt-3 pt-2.5 border-t border-gray-100 dark:border-white/10 flex items-center justify-between px-2 text-xs">
                    <span className="text-gray-500 dark:text-gray-400 font-medium">
                      100% Practical Training
                    </span>
                    <Link
                      to="/courses"
                      className="font-extrabold text-[#ef7b01] hover:text-[#2E7D32] transition flex items-center gap-1"
                    >
                      <span>View All Courses</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Services Dropdown */}
              <div className="relative group py-2">
                <Link to="/services" className={linkClass("/services") + " flex items-center gap-1"}>
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-gray-500 group-hover:text-[#ef7b01]" />
                </Link>
                <div className="absolute top-full left-0 mt-0 w-56 bg-white/95 dark:bg-[#080d22]/95 backdrop-blur-xl border border-orange-100 dark:border-white/10 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col p-2 z-50">
                  <Link to="/web-development" className="px-3.5 py-2 rounded-xl text-xs font-bold hover:bg-orange-50 dark:hover:bg-white/[0.05] text-gray-700 dark:text-gray-200 hover:text-[#ef7b01]">Web Development</Link>
                  <Link to="/app-development" className="px-3.5 py-2 rounded-xl text-xs font-bold hover:bg-orange-50 dark:hover:bg-white/[0.05] text-gray-700 dark:text-gray-200 hover:text-[#ef7b01]">App Development</Link>
                  <Link to="/ui-ux-design" className="px-3.5 py-2 rounded-xl text-xs font-bold hover:bg-orange-50 dark:hover:bg-white/[0.05] text-gray-700 dark:text-gray-200 hover:text-[#ef7b01]">UI / UX Design</Link>
                  <Link to="/digital-marketing" className="px-3.5 py-2 rounded-xl text-xs font-bold hover:bg-orange-50 dark:hover:bg-white/[0.05] text-gray-700 dark:text-gray-200 hover:text-[#ef7b01]">Digital Marketing</Link>
                  <Link to="/seo-optimization" className="px-3.5 py-2 rounded-xl text-xs font-bold hover:bg-orange-50 dark:hover:bg-white/[0.05] text-gray-700 dark:text-gray-200 hover:text-[#ef7b01]">SEO Optimization</Link>
                </div>
              </div>

              <Link to="/contact" className={linkClass("/contact")}>Contact</Link>
            </nav>

            {/* Right Side (Desktop + Mobile) */}
            <div className="flex items-center gap-4">

              {/* CTA Button (Desktop Only) */}
              <div className="hidden lg:block">
                <button
                  type="button"
                  onClick={() => setEnquiryOpen(true)}
                  className="bg-[#ef7b01] hover:bg-[#2E7D32] text-white px-6 py-2.5 font-extrabold text-sm transition-all rounded-xl shadow-md shadow-orange-500/20 hover:shadow-emerald-600/30 cursor-pointer active:scale-98"
                >
                  Enquiry Now
                </button>
              </div>

              {/* Dark Mode Toggle */}
              <DarkModeToggle />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-800 dark:text-white hover:bg-orange-50 dark:hover:bg-white/10 transition"
                aria-label="Toggle Navigation Menu"
              >
                {menuOpen ? (
                  <span className="text-2xl font-bold">✕</span>
                ) : (
                  <span className="text-2xl font-bold">☰</span>
                )}
              </button>

            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300
          ${menuOpen ? "max-h-[85vh] overflow-y-auto" : "max-h-0"}`}
        >
          <nav className="flex flex-col bg-white/98 dark:bg-[#080d22]/98 backdrop-blur-2xl
          px-6 py-6 gap-3.5 border-t border-orange-100 dark:border-white/10">
            
            <Link onClick={() => setMenuOpen(false)} to="/" className={linkClass("/")}>
              Home
            </Link>
            <Link onClick={() => setMenuOpen(false)} to="/about" className={linkClass("/about")}>
              About
            </Link>
            
            {/* Mobile Courses Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                className="w-full flex items-center justify-between text-left font-bold text-slate-700 dark:text-gray-200 py-1"
              >
                <span>Our Courses</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileCoursesOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileCoursesOpen && (
                <div className="pl-3 mt-2 border-l-2 border-[#ef7b01] space-y-2 py-1">
                  <Link onClick={() => setMenuOpen(false)} to="/fullstack" className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-[#ef7b01]">
                    <Layers className="w-3.5 h-3.5 text-[#ef7b01]" /> Full Stack Development
                  </Link>
                  <Link onClick={() => setMenuOpen(false)} to="/web-designing" className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-[#ef7b01]">
                    <Layout className="w-3.5 h-3.5 text-amber-500" /> Web Designing & UI/UX
                  </Link>
                  <Link onClick={() => setMenuOpen(false)} to="/python-flask-django" className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-[#ef7b01]">
                    <Terminal className="w-3.5 h-3.5 text-emerald-500" /> Python, Flask & Django
                  </Link>
                  <Link onClick={() => setMenuOpen(false)} to="/php-laravel-wordpress" className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-[#ef7b01]">
                    <Server className="w-3.5 h-3.5 text-blue-500" /> PHP, Laravel & WordPress
                  </Link>
                  <Link onClick={() => setMenuOpen(false)} to="/ai-ml" className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-[#ef7b01]">
                    <Bot className="w-3.5 h-3.5 text-purple-500" /> AI & Machine Learning
                  </Link>
                  <Link onClick={() => setMenuOpen(false)} to="/data-science" className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-[#ef7b01]">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Data Science Program
                  </Link>
                  <Link onClick={() => setMenuOpen(false)} to="/data-analytics" className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-[#ef7b01]">
                    <BarChart3 className="w-3.5 h-3.5 text-emerald-500" /> Data Analytics & Power BI
                  </Link>
                  <Link onClick={() => setMenuOpen(false)} to="/flutter" className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-[#ef7b01]">
                    <Smartphone className="w-3.5 h-3.5 text-cyan-500" /> Flutter Mobile Development
                  </Link>
                  <Link onClick={() => setMenuOpen(false)} to="/courses" className="inline-flex items-center gap-1 text-xs font-black text-[#ef7b01] pt-1">
                    View All 16+ Courses →
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Services Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between text-left font-bold text-slate-700 dark:text-gray-200 py-1 cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pl-3 mt-2 border-l-2 border-[#2E7D32] space-y-2 py-1">
                  <Link onClick={() => setMenuOpen(false)} to="/web-development" className="block text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-[#ef7b01]">
                    Web Development
                  </Link>
                  <Link onClick={() => setMenuOpen(false)} to="/app-development" className="block text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-[#ef7b01]">
                    App Development
                  </Link>
                  <Link onClick={() => setMenuOpen(false)} to="/ui-ux-design" className="block text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-[#ef7b01]">
                    UI / UX Design
                  </Link>
                  <Link onClick={() => setMenuOpen(false)} to="/digital-marketing" className="block text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-[#ef7b01]">
                    Digital Marketing
                  </Link>
                  <Link onClick={() => setMenuOpen(false)} to="/seo-optimization" className="block text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-[#ef7b01]">
                    SEO Optimization
                  </Link>
                  <Link onClick={() => setMenuOpen(false)} to="/services" className="inline-flex items-center gap-1 text-xs font-black text-[#2E7D32] pt-1">
                    View All Services →
                  </Link>
                </div>
              )}
            </div>
            <Link onClick={() => setMenuOpen(false)} to="/contact" className={linkClass("/contact")}>
              Contact
            </Link>

            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                setEnquiryOpen(true);
              }}
              className="mt-2 text-center bg-[#ef7b01] hover:bg-[#2E7D32]
              text-white py-3 rounded-xl font-extrabold text-sm shadow-md transition-all cursor-pointer"
            >
              Enquiry Now
            </button>

          </nav>
        </div>
      </header>

      {/* Enquiry Modal */}
      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </>
  );
}