import { useState } from "react";
import { COURSE_OPTIONS } from "../data/courses";
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  MessageSquare,
  Send,
  X,
  ShieldCheck,
  Clock,
  Sparkles,
  CheckCircle2
} from "lucide-react";

const EnquiryForm = ({ onSubmitted, onCancel, showCancel = false }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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
      alert("Please fill in all the required fields.");
      return;
    }

    setSubmitting(true);

    const text = `*[NEW COURSE ENQUIRY - AGASTYAAN]*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📧 *Email:* ${email}\n` +
      `📱 *Phone:* ${phone}\n` +
      `🎓 *Course:* ${course}\n` +
      (message ? `💬 *Message:* ${message}\n` : "") +
      `\nSent via Agastyaan Technology Web Portal`;

    const encodedText = encodeURIComponent(text);
    
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.open(`https://wa.me/916230466249?text=${encodedText}`, "_blank");
      
      // Notify parent after brief delay or keep success view
      setTimeout(() => {
        if (onSubmitted) onSubmitted();
      }, 2500);
    }, 400);
  };

  if (submitted) {
    return (
      <div className="py-8 text-center flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/20">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
          Enquiry Received!
        </h3>
        <p className="text-sm text-gray-600 dark:text-[#9fb0d9] max-w-md mx-auto mb-6">
          Thank you, <span className="font-bold text-orange-500">{formData.name}</span>. Our senior career counselors will connect with you on WhatsApp / Phone within 15 minutes.
        </p>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2.5 rounded-xl bg-gray-200 hover:bg-gray-300 dark:bg-white/10 dark:hover:bg-white/20 text-gray-800 dark:text-white font-bold text-sm transition cursor-pointer"
          >
            Close Window
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      
      {/* 2-Column Fields Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        
        {/* Full Name */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
            <User className="w-3.5 h-3.5 text-[#ef7b01]" />
            <span>Full Name <span className="text-red-500">*</span></span>
          </label>
          <div className="relative">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className="
                w-full pl-3.5 pr-4 py-2.5 sm:py-3 rounded-xl text-sm
                bg-gray-50/90 dark:bg-[#0c1433]/90
                border border-orange-200/70 dark:border-white/15
                text-gray-900 dark:text-white
                placeholder-gray-400 dark:placeholder-gray-500
                focus:outline-none focus:border-[#ef7b01] focus:ring-3 focus:ring-orange-500/20
                transition-all duration-200
              "
            />
          </div>
        </div>

        {/* Email Address */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
            <Mail className="w-3.5 h-3.5 text-emerald-500" />
            <span>Email Address <span className="text-red-500">*</span></span>
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. rahul@example.com"
              className="
                w-full pl-3.5 pr-4 py-2.5 sm:py-3 rounded-xl text-sm
                bg-gray-50/90 dark:bg-[#0c1433]/90
                border border-orange-200/70 dark:border-white/15
                text-gray-900 dark:text-white
                placeholder-gray-400 dark:placeholder-gray-500
                focus:outline-none focus:border-[#ef7b01] focus:ring-3 focus:ring-orange-500/20
                transition-all duration-200
              "
            />
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            <span>Phone Number <span className="text-red-500">*</span></span>
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-3 text-xs font-bold text-gray-500 dark:text-gray-400 select-none">
              +91
            </span>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="98765 43210"
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit mobile number"
              className="
                w-full pl-11 pr-4 py-2.5 sm:py-3 rounded-xl text-sm
                bg-gray-50/90 dark:bg-[#0c1433]/90
                border border-orange-200/70 dark:border-white/15
                text-gray-900 dark:text-white
                placeholder-gray-400 dark:placeholder-gray-500
                focus:outline-none focus:border-[#ef7b01] focus:ring-3 focus:ring-orange-500/20
                transition-all duration-200
              "
            />
          </div>
        </div>

        {/* Course Selection */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-blue-500" />
            <span>Course Interested In <span className="text-red-500">*</span></span>
          </label>
          <div className="relative">
            <select
              name="course"
              required
              value={formData.course}
              onChange={handleChange}
              className="
                w-full px-3.5 py-2.5 sm:py-3 rounded-xl text-sm
                bg-gray-50/90 dark:bg-[#0c1433]/90
                border border-orange-200/70 dark:border-white/15
                text-gray-900 dark:text-white
                focus:outline-none focus:border-[#ef7b01] focus:ring-3 focus:ring-orange-500/20
                transition-all duration-200 cursor-pointer
              "
            >
              <option value="" disabled className="text-gray-400">
                Choose a career track...
              </option>
              {COURSE_OPTIONS.map((course) => (
                <option key={course} value={course} className="dark:bg-[#080e24] text-gray-900 dark:text-white py-1">
                  {course}
                </option>
              ))}
              <option value="Not Sure / Free Counseling" className="dark:bg-[#080e24] text-orange-500 font-bold py-1">
                ⭐ Help Me Choose / Career Counseling
              </option>
            </select>
          </div>
        </div>

      </div>

      {/* Message / Learning Goals */}
      <div>
        <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
          <MessageSquare className="w-3.5 h-3.5 text-purple-500" />
          <span>Message or Learning Goals (Optional)</span>
        </label>
        <textarea
          name="message"
          rows="3"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your background, career goals, or preferred batch timing..."
          className="
            w-full px-3.5 py-2.5 rounded-xl text-sm
            bg-gray-50/90 dark:bg-[#0c1433]/90
            border border-orange-200/70 dark:border-white/15
            text-gray-900 dark:text-white
            placeholder-gray-400 dark:placeholder-gray-500
            focus:outline-none focus:border-[#ef7b01] focus:ring-3 focus:ring-orange-500/20
            transition-all duration-200 resize-none
          "
        />
      </div>

      {/* Trust Highlights */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] text-gray-500 dark:text-[#9fb0d9]/80 font-medium">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>100% Confidential</span>
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-amber-500" />
          <span>Callback within 15 Mins</span>
        </span>
        <span className="flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-[#ef7b01]" />
          <span>Free Demo Class</span>
        </span>
      </div>

      {/* Form Action Buttons (Submit + Form Hatane / Cancel Ka Option) */}
      <div className="pt-2 flex flex-col-reverse sm:flex-row items-center gap-3 w-full">
        
        {/* OPTION TO CLOSE / CANCEL FORM (Form Hatane Ka Option) */}
        {showCancel && onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="
              w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm
              border-2 border-gray-300 dark:border-white/15
              bg-transparent hover:bg-gray-100 dark:hover:bg-white/10
              text-gray-700 dark:text-gray-300
              transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5
            "
          >
            <X className="w-4 h-4" />
            <span>Cancel &amp; Close</span>
          </button>
        )}

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={submitting}
          className="
            w-full flex-1 py-3.5 px-6 rounded-xl font-black text-sm sm:text-base text-white
            bg-gradient-to-r from-[#ef7b01] via-amber-500 to-[#2E7D32]
            hover:opacity-95 hover:shadow-xl hover:shadow-orange-500/25
            active:scale-[0.99] transition-all duration-300 cursor-pointer
            flex items-center justify-center gap-2
          "
        >
          {submitting ? (
            <span>Submitting...</span>
          ) : (
            <>
              <span>Submit &amp; Connect On WhatsApp</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

      </div>

    </form>
  );
};

export default EnquiryForm;
