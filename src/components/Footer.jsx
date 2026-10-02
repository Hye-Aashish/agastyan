import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/_logo.webp";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <Link to="/">
            <img src={logo} alt="Agastyaan Logo" className="h-14 w-auto mb-4" />
          </Link>

          <p className="text-sm leading-relaxed">
            We provide quality services and courses to help you grow your skills
            and career with confidence.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6">
            
            <a 
              href="https://www.instagram.com/agastyaantechnology?igsh=MXc0ZHViZnIxcmtx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition duration-300"
            >
              <Instagram size={20} />
            </a>

            <a 
              href="https://youtube.com/@techagastyaan?si=qbgfhn5QyOjPDW0M" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-red-500 transition duration-300"
            >
              <Youtube size={25} />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-orange-500 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-500 transition">About Us</Link></li>
            <li><Link to="/courses" className="hover:text-orange-500 transition">Our Courses</Link></li>
            <li><Link to="/services" className="hover:text-orange-500 transition">Services</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/web-development" className="hover:text-orange-500 transition">Web Development</Link></li>
            <li><Link to="/app-development" className="hover:text-orange-500 transition">App Development</Link></li>
            <li><Link to="/ui-ux-design" className="hover:text-orange-500 transition">UI / UX Design</Link></li>
            <li><Link to="/digital-marketing" className="hover:text-orange-500 transition">Digital Marketing</Link></li>
            <li><Link to="/seo-optimization" className="hover:text-orange-500 transition">SEO Optimization</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="shrink-0 mt-1" />
              <span>
                Sco No 23, 2nd Floor, Opposite Nature Huts-3 Gate, Mind Tree School Road, Khanpur, Kharar, Mohali, Punjab, 140301
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} />
              <a href="tel:+916230466249" className="hover:text-orange-500 transition">
                +91-6230466249
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} />
              <a href="mailto:agastyaantechnology@gmail.com" className="hover:text-orange-500 transition">
                agastyaantechnology@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center text-sm">
          <p>
            © {new Date().getFullYear()} Agastyaan Technology. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;