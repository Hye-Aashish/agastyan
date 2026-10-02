import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock, MessageSquare, CheckCircle2 } from "lucide-react";
import TiltCard3D from "../components/TiltCard3D";
import { COURSE_GROUPS, findMatchingCourse } from "../constants/courseOptions";

const quickPills = [
  "6 Months Industrial Training",
  "Full Stack Development (MERN Stack)",
  "Frontend Development (React JS)",
  "Backend Development (Node.js & Express)",
  "Python & Django Development",
  "UI / UX Design (Figma & Prototyping)",
];

const ContactFormSection = () => {
  const [searchParams] = useSearchParams();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("6 Months Industrial Training");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const q = searchParams.get("course") || searchParams.get("topic");
    if (q) {
      const matched = findMatchingCourse(q);
      if (matched) setTopic(matched);
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill all the required fields.");
      return;
    }
    
    const text = `*[NEW CONTACT INQUIRY]*\n\nHello Agastyaan Technology!\n\n*Name:* ${name}\n*Phone:* ${phone || "N/A"}\n*Email:* ${email}\n*Inquiry Topic / Course:* ${topic}\n\n*Message:* ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/916230466249?text=${encodedText}`, "_blank");
    
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="py-20 md:py-28 bg-white/60 dark:bg-gray-950/65 backdrop-blur-sm transition-colors duration-500 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-white/85 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200/80 dark:border-gray-800/80 shadow-2xl dark:shadow-black/60"
          >
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#ef7b01]/10 text-[#ef7b01] font-bold text-xs uppercase tracking-wider mb-3">
              Send Message
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-4">
              Get in Touch with Our <span className="text-[#ef7b01]">Expert Team</span>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm sm:text-base">
              Fill out the form below to enquire about industrial training programs, software services, or general questions.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Course / Topic Selector Dropdown & Quick Pills */}
              <div>
                <label className="block text-xs font-black uppercase text-gray-500 dark:text-gray-400 mb-2 tracking-wider">
                  Select Course / Inquiry Topic <span className="text-[#ef7b01]">*</span>
                </label>
                
                {/* Full Course Dropdown */}
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ef7b01] outline-none text-sm transition cursor-pointer mb-3"
                >
                  {COURSE_GROUPS.map((group) => (
                    <optgroup
                      key={group.category}
                      label={`── ${group.category} ──`}
                      className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-orange-400 font-bold"
                    >
                      {group.courses.map((c) => (
                        <option
                          key={c}
                          value={c}
                          className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 font-normal py-1"
                        >
                          {c}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>

                {/* Popular Quick Pills */}
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="text-[11px] font-bold text-gray-400 dark:text-gray-500 mr-1">Quick Select:</span>
                  {quickPills.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setTopic(item)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        topic === item
                          ? "bg-[#ef7b01] text-white shadow-xs shadow-orange-500/20"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ef7b01] outline-none text-sm transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ef7b01] outline-none text-sm transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ef7b01] outline-none text-sm transition"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                  Your Message *
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us how we can help you..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ef7b01] outline-none text-sm transition"
                  required
                ></textarea>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#ef7b01] hover:bg-orange-600 text-white font-extrabold text-base shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.02] active:scale-95"
              >
                <Send className="w-5 h-5" />
                Send Message via WhatsApp
              </button>

            </form>
          </motion.div>

          {/* Right Column: Google Maps Embed & Office Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <TiltCard3D maxTilt={8} scale={1.01}>
              <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-200/80 dark:border-gray-800 bg-white/85 dark:bg-gray-900/80 backdrop-blur-md">
                
                {/* Google Map Embed */}
                <div className="h-64 sm:h-72 w-full relative">
                  <iframe
                    title="Agastyaan Technology Kharar Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.487771746683!2d76.6504!3d30.7486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQ0JzU1LjAiTiA3NsKwMzknMDEuNCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full filter contrast-[1.05]"
                  ></iframe>
                </div>

                {/* Address Details */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-500/10 text-[#ef7b01]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-gray-900 dark:text-white">
                        Agastyaan Technology Kharar
                      </h4>
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                        Headquarters & Training Campus
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    Sco No 23, 2nd Floor, Opposite Nature Huts-3 Gate, Mind Tree School Road, Khanpur, Kharar, Mohali, Punjab 140301
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800 text-xs font-bold text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" /> Walk-ins Welcome
                    </span>
                    <span className="text-[#ef7b01]">9:00 AM - 7:00 PM</span>
                  </div>
                </div>

              </div>
            </TiltCard3D>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ContactFormSection;