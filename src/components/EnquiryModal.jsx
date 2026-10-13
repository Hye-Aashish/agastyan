import { useEffect } from "react";
import { createPortal } from "react-dom";
import EnquiryForm from "./EnquiryForm";

const EnquiryModal = ({ open, onClose }) => {
  // Close on Escape and lock body scroll while open
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
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Enquiry Now"
        onClick={(e) => e.stopPropagation()}
        className="
          relative w-full max-w-2xl my-auto rounded-2xl
          bg-white/95 dark:bg-[#080e24]/95
          backdrop-blur-xl
          shadow-2xl shadow-orange-500/10 dark:shadow-black/70
          border border-orange-100/90 dark:border-white/10
          overflow-hidden
          animate-in fade-in zoom-in-95 duration-200
          max-h-[90vh] flex flex-col
        "
      >
        {/* Header */}
        <div className="relative bg-[#F28C28] p-6 pr-14 text-white shrink-0">
          <h2 className="text-2xl font-bold">Enquiry Now</h2>
          <p className="mt-1 text-sm text-white/90">
            Fill the form and our team will contact you soon
          </p>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close enquiry form"
            className="absolute right-4 top-4 w-9 h-9 flex items-center justify-center rounded-full
              bg-white/20 hover:bg-white/30 text-white text-2xl leading-none
              border border-white/30 transition-colors cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 md:p-8 overflow-y-auto">
          <EnquiryForm onSubmitted={onClose} />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default EnquiryModal;
