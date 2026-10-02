import LearnLayout from "../components/LearnLayout";

const Backend = () => {
  return (
    <LearnLayout
      title="Backend Development"
      subtitle="Build secure, scalable microservices, REST APIs, authentication systems, and server architecture."
      category="Server & API Engineering"
      duration="3 Months"
      level="Intermediate to Advanced"
      projects="5+ Production REST APIs"
      tools={["Node.js", "Express.js", "REST APIs", "JWT Auth", "Postman", "MongoDB", "Express Middleware", "Linux / Deployment"]}
      points={[
        { title: "Node.js Environment", desc: "Understand asynchronous event loop, modules, file system, and server execution." },
        { title: "Express.js Framework", desc: "Develop clean routing, custom middleware pipelines, and API architecture." },
        { title: "Authentication & Security", desc: "Implement JWT tokens, bcrypt password hashing, session management, and OAuth." },
        { title: "RESTful API Design", desc: "Build scalable CRUD endpoints, request validation, error handling, and API docs." },
        { title: "Server Business Logic", desc: "Handle complex database queries, data transformation, background jobs, and caching." },
        { title: "Cloud Deployment", desc: "Deploy backend services on cloud servers, environment configuration, and monitoring." },
      ]}
    />
  );
};

export default Backend;

