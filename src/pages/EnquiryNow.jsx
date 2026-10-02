import { useState, useEffect } from "react";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import TiltCard3D from "../components/TiltCard3D";
import { COURSE_GROUPS, findMatchingCourse } from "../constants/courseOptions";

const EnquiryNow = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleClose = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const paramCourse = searchParams.get("course") || location.state?.course;
    if (paramCourse) {
      const matched = findMatchingCourse(paramCourse);
      setFormData((prev) => ({
        ...prev,
        course: matched || paramCourse,
      }));
    }
  }, [searchParams, location.state]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, course, message } = formData;
    
    if (!name || !email || !phone || !course) {
      alert("Please fill all the required fields.");
      return;
    }
    
    const text = `*[NEW COURSE ENQUIRY]*\n\nHello Agastyaan Technology!\n\nHere are the details:\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Course:* ${course}\n*Message:* ${message}`;
    const encodedText = encodeURIComponent(text);
    window.location.href = `https://wa.me/916230466249?text=${encodedText}`;
    
    // Reset the form after submit
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });
  };

  // Dark friendly input
  const inputClass = `
    mt-1 w-full px-4 py-2.5 rounded-xl
    border border-gray-300/80 dark:border-gray-700/80
    bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
    text-gray-800 dark:text-white
    placeholder-gray-400 dark:placeholder-gray-500
    focus:outline-none focus:border-[#F28C28]
    focus:ring-2 focus:ring-[#F28C28]/40
    transition
  `;

  return (
    <div
      className="
        min-h-[100dvh] py-14 md:py-20
        bg-gradient-to-br from-[#fff7ed]/50 via-white/40 to-[#f0fdf4]/50
        dark:from-gray-900/60 dark:via-gray-950/70 dark:to-black/70
        backdrop-blur-sm
        transition-colors duration-500
      "
    >
      <div className="container mx-auto px-4 md:px-6">

        {/* Top Navigation & Close Hint */}
        <div className="max-w-4xl mx-auto mb-4 flex items-center justify-between">
          <button
            type="button"
            onClick={handleClose}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-[#ef7b01] dark:hover:text-orange-400 hover:border-[#ef7b01]/50 transition cursor-pointer shadow-xs"
          >
            ← Back to Previous Page
          </button>
          <span className="hidden sm:inline-block text-xs text-gray-500 dark:text-gray-400">
            Press <kbd className="px-2 py-0.5 rounded bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 font-mono text-[11px]">Esc</kbd> or click ✕ to close
          </span>
        </div>

        {/* Card */}
        <TiltCard3D maxTilt={6} scale={1.01}>
          <div className="
            max-w-4xl mx-auto overflow-hidden rounded-3xl
            bg-white/90 dark:bg-gray-900/85 backdrop-blur-md
            shadow-2xl dark:shadow-black/70
            border border-gray-200/80 dark:border-gray-800/80
          " data-aos="zoom-in">

            {/* Header with Close Button */}
            <div className="bg-gradient-to-r from-[#ef7b01] to-[#2E7D32] p-8 text-white relative">
              
              {/* Close Button (✕) */}
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/20 hover:bg-white/35 active:scale-90 text-white flex items-center justify-center text-2xl font-bold backdrop-blur-md transition-all shadow-md cursor-pointer border border-white/30"
                title="Close Form (Esc)"
                aria-label="Close"
              >
                ✕
              </button>

              <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-2">
                Quick Enquiry
              </span>
              <h1 className="text-3xl font-black">Enquiry Now</h1>
              <p className="mt-2 text-white/90 text-sm sm:text-base pr-12">
                Fill the form and our team will contact you soon
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name <span className="text-[#ef7b01]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address <span className="text-[#ef7b01]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={inputClass}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Phone Number <span className="text-[#ef7b01]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className={inputClass}
                />
              </div>

              {/* Course */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Course Interested In <span className="text-[#ef7b01]">*</span>
                </label>
                <select
                  name="course"
                  required
                  value={formData.course}
                  onChange={handleChange}
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" className="bg-white dark:bg-gray-800 text-gray-500">
                    Select course
                  </option>
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
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className={inputClass}
                />
              </div>

              {/* Buttons: Submit & Cancel/Close */}
              <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="
                    flex-1 py-3.5 rounded-xl
                    bg-[#F28C28] hover:bg-orange-600
                    text-white font-extrabold text-base
                    hover:scale-[1.01] active:scale-95
                    transition duration-300 shadow-lg shadow-orange-500/25 cursor-pointer
                  "
                >
                  Submit Enquiry via WhatsApp
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="
                    px-7 py-3.5 rounded-xl
                    border-2 border-gray-300 dark:border-gray-700
                    hover:bg-gray-100 dark:hover:bg-gray-800
                    text-gray-700 dark:text-gray-300 font-bold text-base
                    transition duration-200 active:scale-95 cursor-pointer text-center
                  "
                >
                  Cancel / Close
                </button>
              </div>
            </form>

          </div>
        </TiltCard3D>
      </div>
    </div>
  );
};

export default EnquiryNow;