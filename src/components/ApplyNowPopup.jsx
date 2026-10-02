import { useEffect, useState } from "react";
import { COURSE_GROUPS } from "../constants/courseOptions";

const ApplyNowPopup = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !course) {
      alert("Please fill all the required fields including course.");
      return;
    }
    const text = `*[NEW APPLICATION]*\n\nHello Agastyaan Technology!\n\nHere are the details:\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Course:* ${course}`;
    const encodedText = encodeURIComponent(text);
    window.location.href = `https://wa.me/916230466249?text=${encodedText}`;
    setOpen(false);
  };

  useEffect(() => {
    const alreadyShown = localStorage.getItem("applyPopupShown");
    if (!alreadyShown) {
      setTimeout(() => {
        setOpen(true);
        localStorage.setItem("applyPopupShown", "true");
      }, 8000); // delay for smooth feel
    }
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 cursor-pointer animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setOpen(false);
        }
      }}
    >
      <div
        className="relative w-full max-w-md rounded-3xl bg-white dark:bg-gray-900 p-6 sm:p-8 shadow-2xl border border-gray-200/80 dark:border-gray-800 transition-colors cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition font-black text-xl cursor-pointer shadow-xs border border-gray-200/50 dark:border-gray-700/50"
          title="Close Popup (Esc)"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="text-center mb-5">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/10 text-[#ef7b01] dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
            Limited Seats Available
          </span>
          <h2 className="text-2xl font-black text-gray-900 dark:text-white">
            Apply for <span className="text-[#ef7b01]">Admission</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
            Get 1-on-1 mentorship & live industrial project training
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
              Full Name <span className="text-[#ef7b01]">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ef7b01] transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
              Email Address <span className="text-[#ef7b01]">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ef7b01] transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
              Phone Number <span className="text-[#ef7b01]">*</span>
            </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ef7b01] transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
              Course Interested In <span className="text-[#ef7b01]">*</span>
            </label>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
              className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ef7b01] transition cursor-pointer"
            >
              <option value="" className="text-gray-400">
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

          <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
            <button
              type="submit"
              className="flex-1 rounded-xl bg-[#ef7b01] hover:bg-orange-600 py-3.5 font-bold text-white shadow-lg shadow-orange-500/25 hover:scale-[1.01] active:scale-95 transition cursor-pointer"
            >
              Submit via WhatsApp
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-5 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold transition cursor-pointer text-center"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyNowPopup;

