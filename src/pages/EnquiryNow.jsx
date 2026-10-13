import EnquiryForm from "../components/EnquiryForm";

const EnquiryNow = () => {
  return (
    <div
      className="
        min-h-[100dvh] py-10 md:py-12
        bg-transparent
        transition-colors duration-500
      "
    >
      <div className="container mx-auto px-4 md:px-6">

        {/* Card */}
        <div className="
          max-w-7xl mx-auto overflow-hidden rounded-2xl
          bg-white/90 dark:bg-[#080e24]/90
          backdrop-blur-xl
          shadow-xl shadow-orange-500/5 dark:shadow-black/40
          border border-orange-100/90 dark:border-white/10
        " data-aos="zoom-in">

          {/* Header */}
          <div className="bg-[#F28C28] p-8 text-white">
            <h1 className="text-3xl font-bold">Enquiry Now</h1>
            <p className="mt-2 text-white/90">
              Fill the form and our team will contact you soon
            </p>
          </div>

          {/* Form */}
          <div className="p-8">
            <EnquiryForm />
          </div>

        </div>
      </div>
    </div>
  );
};

export default EnquiryNow;