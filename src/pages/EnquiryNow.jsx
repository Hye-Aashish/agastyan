import { Link } from "react-router-dom";
import { Sparkles, ArrowLeft } from "lucide-react";
import EnquiryForm from "../components/EnquiryForm";

const EnquiryNow = () => {
  return (
    <div className="min-h-[90vh] py-12 md:py-16 bg-transparent transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-[#ef7b01] dark:text-gray-400 dark:hover:text-orange-400 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Form Card Container */}
        <div className="
          overflow-hidden rounded-3xl
          bg-white/95 dark:bg-[#070c1e]/95
          backdrop-blur-2xl
          shadow-2xl shadow-orange-500/10 dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]
          border-2 border-orange-100/90 dark:border-white/15
        ">
          {/* Header Banner */}
          <div className="relative bg-gradient-to-r from-[#ef7b01] via-amber-500 to-[#2E7D32] p-6 sm:p-8 text-white shadow-md">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 backdrop-blur-md text-white text-xs font-black uppercase tracking-wider mb-2.5 border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Official Admission &amp; Mentorship Cell</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Course Enquiry &amp; Career Counseling
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-white/90 max-w-xl font-medium">
              Fill out your details below. Our senior industry counselors will review your profile and connect within 15 minutes.
            </p>
          </div>

          {/* Form Body */}
          <div className="p-6 sm:p-8 md:p-10">
            <EnquiryForm />
          </div>
        </div>

      </div>
    </div>
  );
};

export default EnquiryNow;