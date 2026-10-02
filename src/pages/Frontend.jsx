import LearnLayout from "../components/LearnLayout";

const Frontend = () => {
  return (
    <LearnLayout
      title="Frontend Development"
      subtitle="Design and build modern, fast, responsive & interactive user interfaces with React.js & Tailwind CSS."
      category="Frontend Engineering Track"
      duration="3 Months"
      level="Beginner to Advanced"
      projects="4+ Live Web Projects"
      tools={["HTML5", "CSS3", "JavaScript ES6+", "React.js", "Tailwind CSS", "Vite", "REST APIs", "Git & GitHub"]}
      points={[
        { title: "HTML5 & CSS3", desc: "Master semantic markup, modern CSS grid, flexbox layout, and CSS animations." },
        { title: "JavaScript (ES6+)", desc: "Learn core logic, async/await, closures, promises, DOM manipulation, and modern ES6 modules." },
        { title: "React.js Mastery", desc: "Build component-driven UIs, custom hooks, state management, router, and context API." },
        { title: "Tailwind CSS", desc: "Design sleek, modern, utility-first UI components with dark mode support." },
        { title: "Responsive Web Design", desc: "Build mobile-first, high-performing user interfaces for all screen sizes." },
        { title: "Performance & Optimization", desc: "Optimize bundle size, code splitting, lazy loading, and web vitals." },
      ]}
    />
  );
};

export default Frontend;

