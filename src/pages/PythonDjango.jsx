import LearnLayout from "../components/LearnLayout";

const PythonDjango = () => {
  return (
    <LearnLayout
      title="Python & Django Engineering"
      subtitle="Master Python 3 programming, Django web framework, Django ORM, REST Framework, and robust database applications."
      category="Python Backend Track"
      duration="4 Months"
      level="Beginner to Advanced"
      projects="5+ Live Python Apps"
      tools={["Python 3", "Django", "Django REST Framework", "SQLite / PostgreSQL", "Postman", "Git & GitHub"]}
      points={[
        { title: "Python Fundamentals & OOP", desc: "Master core syntax, data structures, object-oriented programming, modules, and error handling." },
        { title: "Django Framework Core", desc: "Build powerful web applications with Django MVT architecture, routing, templates, and forms." },
        { title: "Django ORM & Databases", desc: "Manage relational data, migrations, model relations, queries, and PostgreSQL integration." },
        { title: "Authentication & User Management", desc: "Implement built-in user auth, password reset flow, session security, and permissions." },
        { title: "Django REST Framework (DRF)", desc: "Develop professional REST APIs with serializers, viewsets, authentication, and token headers." },
        { title: "Production Deployment", desc: "Deploy Django applications on live cloud environments with Gunicorn and Nginx." },
      ]}
    />
  );
};

export default PythonDjango;

