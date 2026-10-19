import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Sparkles, GraduationCap } from "lucide-react";
import EnquiryForm from "./EnquiryForm";

const EnquiryModal = ({ open, onClose }) => {
  // Close on Escape and lock body scroll while modal is open
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/75 backdrop-blur-md p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-200 cursor-pointer"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Enquiry Now"
        onClick={(e) => e.stopPropagation()}
        className="
          relative w-full max-w-2xl my-auto rounded-3xl
          bg-white/95 dark:bg-[#070c1e]/95
          backdrop-blur-2xl
          shadow-[0_25px_70px_-15px_rgba(0,0,0,0.5)] dark:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95)]
          border-2 border-orange-100/90 dark:border-white/15
          overflow-hidden
          animate-in fade-in zoom-in-95 duration-200
          max-h-[92vh] flex flex-col cursor-default
        "
      >
        {/* Top Header Banner with Gradient Accent */}
        <div className="relative bg-gradient-to-r from-[#ef7b01] via-amber-500 to-[#2E7D32] p-5 sm:p-6 pr-16 text-white shrink-0 shadow-md">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white text-[11px] font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>Admissions &amp; Career Counseling</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
            Enquiry Now
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-white/90 font-medium">
            Fill the form below and our senior counselors will contact you within 15 minutes.
          </p>

          {/* Prominent High-Visibility Close Button (Top-Right) */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close enquiry form"
            className="
              absolute right-4 top-4 sm:right-5 sm:top-5 w-10 h-10 rounded-full
              flex items-center justify-center
              bg-black/30 hover:bg-red-600 active:bg-red-700
              text-white transition-all duration-200 cursor-pointer
              border border-white/30 shadow-lg hover:scale-110 active:scale-95
            "
            title="Close / Cancel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Body with Smooth Scroll */}
        <div className="p-5 sm:p-7 md:p-8 overflow-y-auto custom-scrollbar">
          <EnquiryForm
            onSubmitted={onClose}
            onCancel={onClose}
            showCancel={true}
          />
        </div>

        {/* Modal Bottom Close Bar (Provides a fast, explicit button to dismiss) */}
        <div className="px-5 sm:px-7 py-3 bg-gray-50/90 dark:bg-[#050714]/90 border-t border-gray-100 dark:border-white/10 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span className="hidden sm:inline">
            Press <kbd className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-mono text-[10px]">Esc</kbd> or click outside to dismiss
          </span>
          <button
            type="button"
            onClick={onClose}
            className="ml-auto text-xs font-bold text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 flex items-center gap-1 cursor-pointer transition-colors py-1 px-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10"
          >
            <X className="w-3.5 h-3.5" />
            <span>Close this form</span>
          </button>
        </div>

      </div>
    </div>,
    document.body
  );
};

export default EnquiryModal;
