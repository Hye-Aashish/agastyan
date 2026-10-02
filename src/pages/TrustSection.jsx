import { Briefcase, Users, Star, MapPin } from "lucide-react";


const TrustSection = () =>{
  const stats = [
    {
      icon: <Briefcase size={32} />,
      title: "10+ Years",
      desc: "Industry Experience",
    },
    {
      icon: <Users size={32} />,
      title: "500+",
      desc: "Projects Delivered",
    },
    {
      icon: <Star size={32} />,
      title: "4.9 / 5",
      desc: "Client Rating",
    },
    {
      icon: <MapPin size={32} />,
      title: "India",
      desc: "Serving Worldwide",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by Clients. Built by Experience.
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Founder-led solutions with proven results and long-term client
            relationships.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4 text-primary">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
