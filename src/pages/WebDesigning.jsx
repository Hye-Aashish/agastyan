import LearnLayout from "../components/LearnLayout";

const WebDesigning = () => {
  return (
    <LearnLayout
      title="Web Designing"
      subtitle="Master modern visual design, semantic HTML5, CSS3, Flexbox, CSS Grid, Tailwind CSS, Bootstrap, and responsive UI creation."
      category="Creative UI & Design Track"
      duration="3 Months"
      level="Beginner to Pro"
      projects="6+ Responsive Web Portfolios"
      tools={[
        "HTML5",
        "CSS3",
        "JavaScript",
        "Tailwind CSS",
        "Bootstrap 5",
        "Figma to HTML",
        "Responsive Design",
        "Git & GitHub",
      ]}
      targetRoles={[
        "UI Web Designer",
        "Frontend Layout Developer",
        "Responsive Web Specialist",
        "Website Styler",
      ]}
      points={[
        {
          title: "Semantic HTML5 Architecture",
          desc: "Master modern semantic markup, accessible forms, meta tags, SVG graphics, audio/video embeds, and SEO-friendly document structures.",
        },
        {
          title: "Modern CSS3 Styling & Micro-Interactions",
          desc: "Craft eye-catching layouts with CSS gradients, box shadows, glassmorphism, transitions, transform effects, and keyframe animations.",
        },
        {
          title: "Flexbox & CSS Grid Mastery",
          desc: "Build complex, fluid web layouts effortlessly using 1D Flexbox navigation and 2D Grid card arrays that adapt to any viewport.",
        },
        {
          title: "Tailwind CSS & Utility-First Workflow",
          desc: "Accelerate frontend styling with Tailwind CSS v4, custom themes, dark mode configuration, and production bundle optimization.",
        },
        {
          title: "Bootstrap 5 & Component Frameworks",
          desc: "Leverage grid systems, modals, offcanvas drawers, carousels, and responsive navbar components for rapid prototyping.",
        },
        {
          title: "Figma to Responsive Pixel-Perfect Code",
          desc: "Translate real client Figma mockups into clean, production-ready, mobile-first responsive web pages with 100% fidelity.",
        },
      ]}
    />
  );
};

export default WebDesigning;
