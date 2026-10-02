import ServiceDetailLayout from "../components/ServiceDetailLayout";

const DigitalMarketing = () => {
  return (
    <ServiceDetailLayout
      title="Digital Marketing & Brand Growth"
      subtitle="We drive targeted online marketing, data-driven PPC campaigns, social media growth, and scalable lead generation for your brand."
      category="Growth & Performance Marketing"
      tools={["Google Ads", "Meta Business Suite", "Google Analytics 4", "Canva", "Mailchimp", "SEO Copywriting", "Funnel Building"]}
      features={[
        { title: "Social Media Marketing (SMM)", desc: "Strategic content creation, graphics, and community engagement across Facebook, Instagram, LinkedIn, & YouTube." },
        { title: "Google & Meta Paid Ads", desc: "High-ROI PPC ad campaigns optimized for low cost-per-lead (CPL) and maximum conversion rates." },
        { title: "Brand Promotion & Copywriting", desc: "Crafting persuasive brand narratives, promotional video scripts, ad copy, and sales landing pages." },
        { title: "Conversion Funnel Optimization", desc: "A/B testing, user behavior analytics, lead magnet funnels, and landing page optimization." },
        { title: "Email Drip Campaigns", desc: "Automated email marketing flows for lead nurturing, product onboarding, and customer retention." },
        { title: "GA4 Analytics & ROI Tracking", desc: "Full tracking setup with Google Analytics 4, Meta Pixel, event triggers, and weekly ROI performance reports." },
      ]}
      ctaTitle="Ready to Grow Your Business Traffic & Sales?"
      ctaDesc="Launch high-performing digital marketing campaigns with guaranteed lead generation."
    />
  );
};

export default DigitalMarketing;