import ServiceDetailLayout from "../components/ServiceDetailLayout";

const UIUXDesign = () => {
  return (
    <ServiceDetailLayout
      title="UI / UX Design Studio"
      subtitle="We craft intuitive, user-centered, and conversion-focused digital interface designs that delight users and elevate brand equity."
      category="Digital Product Design"
      tools={["Figma", "Adobe XD", "Proto.io", "Framer", "Design Systems", "Usability Testing", "Wireframing"]}
      features={[
        { title: "User Research & Personas", desc: "In-depth user behavior analysis, customer persona creation, and mapping smooth user journeys." },
        { title: "Wireframing & IA", desc: "Creating structural blueprints and information architecture for web and mobile interfaces." },
        { title: "Interactive Prototyping", desc: "High-fidelity clickable Figma prototypes allowing live preview of animations and interactions." },
        { title: "Custom Design Systems", desc: "Building scalable UI component libraries, typography hierarchy, and branded color palettes." },
        { title: "Mobile & Web UI Design", desc: "Designing pixel-perfect, accessible, and responsive user interfaces with dark mode support." },
        { title: "Usability Audits & Redesign", desc: "Analyzing existing software products to identify friction points and boost conversion rates." },
      ]}
      ctaTitle="Want a Design That Converts?"
      ctaDesc="Let's build a modern, high-converting user experience for your product."
    />
  );
};

export default UIUXDesign;