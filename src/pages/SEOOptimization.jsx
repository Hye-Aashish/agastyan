import ServiceDetailLayout from "../components/ServiceDetailLayout";

const SEOOptimization = () => {
  return (
    <ServiceDetailLayout
      title="SEO & Search Engine Optimization"
      subtitle="Dominate Google search rankings, attract high-intent organic traffic, and outrank your online competitors."
      category="Organic Search Acceleration"
      tools={["Google Search Console", "Google Analytics 4", "Ahrefs", "SEMrush", "Screaming Frog", "Schema Markup", "Yoast / RankMath"]}
      features={[
        { title: "On-Page SEO Optimization", desc: "Title tag optimization, meta descriptions, H1-H6 heading hierarchy, image alt text, and internal link structure." },
        { title: "Technical SEO & Speed Audit", desc: "Core Web Vitals acceleration, XML sitemap indexing, mobile-friendliness, canonical tags, and crawling fixes." },
        { title: "High-Authority Link Building", desc: "Ethical white-hat off-page SEO, guest blogging, digital PR outreach, and domain authority acceleration." },
        { title: "Keyword & Competitor Intelligence", desc: "Uncovering buyer-intent keywords, search volume analysis, and gap analysis against top ranking competitors." },
        { title: "Local SEO & Google Business Profile", desc: "Optimizing Google Maps presence, local NAP citations, review management, and geotargeted search rank." },
        { title: "Weekly Rank & Traffic Audits", desc: "Transparent weekly keyword position reports, organic visitor analytics, and strategy adjustments." },
      ]}
      ctaTitle="Want to Rank #1 on Google Search?"
      ctaDesc="Outrank your competitors with proven white-hat SEO strategies and technical optimization."
    />
  );
};

export default SEOOptimization;