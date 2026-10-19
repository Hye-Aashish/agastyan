import { useEffect, useState } from "react";
import { X, Sparkles, User, Mail, Phone, Send } from "lucide-react";

const ApplyNowPopup = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert("Please fill all the fields.");
      return;
    }
    const text = `*[NEW APPLICATION - AGASTYAAN]*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📧 *Email:* ${email}\n` +
      `📱 *Phone:* ${phone}\n\nSent via Agastyaan Web Portal`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/916230466249?text=${encodedText}`, "_blank");
    setOpen(false);
  };

  useEffect(() => {
    const alreadyShown = localStorage.getItem("applyPopupShown");
    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setOpen(true);
        localStorage.setItem("applyPopupShown", "true");
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-200 cursor-pointer"
      onClick={() => setOpen(false)}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className="
          relative w-full max-w-md rounded-3xl overflow-hidden
          bg-white/95 dark:bg-[#080d22]/95
          backdrop-blur-2xl
          border-2 border-orange-200/90 dark:border-white/15
          shadow-2xl shadow-black/80
          animate-in fade-in zoom-in-95 duration-200 cursor-default
        "
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-[#ef7b01] via-amber-500 to-[#2E7D32] p-5 pr-14 text-white">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/30 backdrop-blur-md text-[10px] font-black uppercase tracking-wider mb-1.5 border border-white/20">
            <Sparkles className="w-3 h-3 text-yellow-300" />
            <span>Fast Track Admission</span>
          </div>

          <h2 className="text-xl font-black text-white">
            Apply Now
          </h2>
          <p className="text-xs text-white/90">
            Get instant counseling &amp; scholarship assistance.
          </p>

          {/* Close Button */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="
              absolute right-3.5 top-3.5 w-9 h-9 rounded-full
              flex items-center justify-center
              bg-black/30 hover:bg-red-600 text-white
              border border-white/30 transition-all cursor-pointer
              hover:scale-110 active:scale-95 shadow-md
            "
            title="Close Form"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <form className="p-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
              <User className="w-3.5 h-3.5 text-[#ef7b01]" />
              <span>Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="
                w-full px-3.5 py-2.5 rounded-xl text-sm
                bg-gray-50/90 dark:bg-[#0c1433]/90
                border border-orange-200/70 dark:border-white/15
                text-gray-900 dark:text-white placeholder-gray-400
                focus:outline-none focus:border-[#ef7b01] focus:ring-3 focus:ring-orange-500/20
                transition
              "
            />
          </div>

          <div>
            <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
              <Mail className="w-3.5 h-3.5 text-emerald-500" />
              <span>Email Address</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="
                w-full px-3.5 py-2.5 rounded-xl text-sm
                bg-gray-50/90 dark:bg-[#0c1433]/90
                border border-orange-200/70 dark:border-white/15
                text-gray-900 dark:text-white placeholder-gray-400
                focus:outline-none focus:border-[#ef7b01] focus:ring-3 focus:ring-orange-500/20
                transition
              "
            />
          </div>

          <div>
            <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>Phone Number</span>
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-xs font-bold text-gray-500 select-none">
                +91
              </span>
              <input
                type="tel"
                placeholder="Mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                pattern="[0-9]{10}"
                required
                className="
                  w-full pl-11 pr-4 py-2.5 rounded-xl text-sm
                  bg-gray-50/90 dark:bg-[#0c1433]/90
                  border border-orange-200/70 dark:border-white/15
                  text-gray-900 dark:text-white placeholder-gray-400
                  focus:outline-none focus:border-[#ef7b01] focus:ring-3 focus:ring-orange-500/20
                  transition
                "
              />
            </div>
          </div>

          <div className="pt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="
                w-1/3 py-3 rounded-xl border border-gray-300 dark:border-white/15
                text-gray-600 dark:text-gray-300 font-bold text-xs hover:bg-gray-100 dark:hover:bg-white/10
                transition cursor-pointer
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="
                w-2/3 rounded-xl py-3 font-extrabold text-sm text-white
                bg-gradient-to-r from-[#ef7b01] via-amber-500 to-[#2E7D32]
                hover:opacity-95 shadow-lg shadow-orange-500/25 transition-all
                cursor-pointer flex items-center justify-center gap-1.5
              "
            >
              <span>Submit</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyNowPopup;
