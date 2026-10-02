import LearnLayout from "../components/LearnLayout";

const FullStack = () => {
  return (
    <LearnLayout
      title="Full Stack Development"
      subtitle="Master end-to-end web software engineering with MERN stack (MongoDB, Express, React, Node) & live project deployment."
      category="MERN Full Stack Track"
      duration="6 Months"
      level="Zero to Industry Ready"
      projects="8+ Industrial Live Projects"
      tools={["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Tailwind CSS", "REST APIs", "AWS / Vercel", "Git & GitHub"]}
      points={[
        { title: "Frontend & Backend Integration", desc: "Connect modern React components seamlessly with Express REST API backends." },
        { title: "MERN Stack Mastery", desc: "Build full stack applications using MongoDB, Express, React, and Node.js." },
        { title: "Full Stack Authentication", desc: "Secure multi-user platforms with JWT, cookies, role-based authorization, and protected routes." },
        { title: "State Management & APIs", desc: "Manage global application state using Redux Toolkit, Context API, and Axios integration." },
        { title: "Live Cloud Deployment", desc: "Host production frontends on Vercel/Netlify and backends on cloud servers with CI/CD pipelines." },
        { title: "Clean Code & Architecture", desc: "Follow industry MVC architecture, modular code structure, git flow, and best practices." },
      ]}
    />
  );
};

export default FullStack;


