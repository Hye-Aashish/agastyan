import LearnLayout from "../components/LearnLayout";

const ToolsApi = () => {
  return (
    <LearnLayout
      title="Tools & API Integration"
      subtitle="Master essential software developer tools, version control, API testing, cloud deployment, and productivity workflows."
      category="Developer Operations & Tools"
      duration="2 Months"
      level="All Experience Levels"
      projects="4+ DevOps & Automation Pipelines"
      tools={["Git", "GitHub Actions", "Postman", "Swagger", "Docker Basics", "Vercel", "Render", "Linux Terminal"]}
      points={[
        { title: "Git & Version Control", desc: "Learn git commits, branch management, merge conflict resolution, pull requests, and Git flow." },
        { title: "Postman & API Testing", desc: "Test REST APIs, mock responses, write automated test scripts, and export Postman collections." },
        { title: "REST & Third-Party APIs", desc: "Integrate payment gateways (Razorpay/Stripe), maps, weather, and AI cloud APIs into web apps." },
        { title: "Cloud Tools & Hosting", desc: "Deploy frontend & backend services to cloud platforms like Vercel, Netlify, Render, and Firebase." },
        { title: "CI/CD & Automation", desc: "Set up automated build pipelines using GitHub Actions for continuous integration and delivery." },
        { title: "Developer Workflow Tools", desc: "Master VS Code shortcuts, terminal CLI commands, environment variables, and debugging tools." },
      ]}
    />
  );
};

export default ToolsApi;

