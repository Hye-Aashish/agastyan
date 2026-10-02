const ServicesOverview = () => {
  return (
    <section
      className="
        py-20
        bg-white/40 
        dark:bg-gray-950/40
        backdrop-blur-sm
        transition-colors duration-500
      "
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="
          text-3xl md:text-4xl font-bold mb-6
          text-gray-800 dark:text-white
        ">
          What We Do
        </h2>

        <p className="
          max-w-3xl mx-auto
          text-gray-600 dark:text-gray-300
        ">
          We are not just an institute. We are a full-fledged IT services company
          empowering businesses and students together.
        </p>

      </div>
    </section>
  );
};

export default ServicesOverview;