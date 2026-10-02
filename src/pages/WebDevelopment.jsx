import ServiceDetailLayout from "../components/ServiceDetailLayout";

const WebDevelopment = () => {
  return (
    <ServiceDetailLayout
      title="Web Development"
      subtitle="We engineer fast, secure, scalable, and responsive websites & custom web applications tailored for your business growth."
      category="Custom Web Solutions"
      tools={["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "MongoDB", "MySQL", "AWS", "Vercel"]}
      features={[
        { title: "Responsive Web Design", desc: "Mobile-first, pixel-perfect layouts designed to look stunning across all desktop, tablet, and mobile screens." },
        { title: "Frontend Architecture", desc: "High-performance web user interfaces built with modern React.js, Next.js, and utility-first Tailwind CSS." },
        { title: "Scalable Backend Systems", desc: "Secure Node.js, Express, and Python backend microservices handling high traffic and concurrent users." },
        { title: "E-Commerce & Portals", desc: "Custom online store platforms, secure payment gateway integrations, and content management systems." },
        { title: "Web Security & SSL", desc: "Built-in protection against OWASP vulnerabilities, SSL encryption, rate limiting, and CORS compliance." },
        { title: "Sub-Second Performance", desc: "Core Web Vitals optimization, asset bundling, CDN caching, and lightning fast page speed." },
      ]}
      ctaTitle="Need a Custom Website or Web App?"
      ctaDesc="Let's build a high-converting, lightning-fast web platform for your brand."
    />
  );
};

export default WebDevelopment;