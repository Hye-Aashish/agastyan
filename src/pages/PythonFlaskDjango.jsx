import LearnLayout from "../components/LearnLayout";

const PythonFlaskDjango = () => {
  return (
    <LearnLayout
      title="Python, Flask & Django"
      subtitle="Master core Python programming, microservices with Flask, enterprise web portals with Django, and scalable RESTful API backends."
      category="Python & Full Backend Track"
      duration="4 - 6 Months"
      level="Beginner to Advanced"
      projects="5+ Production Python & API Projects"
      tools={[
        "Python 3.12",
        "Django 5",
        "Flask",
        "Django REST Framework",
        "PostgreSQL",
        "SQLite",
        "Redis",
        "Postman",
      ]}
      targetRoles={[
        "Python Developer",
        "Django Web Engineer",
        "Flask Backend Developer",
        "API Integration Engineer",
      ]}
      points={[
        {
          title: "Python Core & Object-Oriented Programming",
          desc: "Master data structures, algorithms, list comprehensions, OOP principles, inheritance, decorators, generators, and exception handling.",
        },
        {
          title: "Lightweight APIs with Flask Microframework",
          desc: "Build fast, modular REST APIs with Flask blueprints, routing, request/response lifecycle, Jinja2 templates, and SQLAlchemy ORM.",
        },
        {
          title: "Enterprise Django MVT Web Architecture",
          desc: "Develop full-featured dynamic web applications with Django apps, routing, views, templates, model forms, and admin interface customization.",
        },
        {
          title: "Django ORM & Relational Database Design",
          desc: "Model complex relational schemas with PostgreSQL & SQLite, write optimized querysets, and manage schema migrations seamlessly.",
        },
        {
          title: "Django REST Framework (DRF) & JWT Auth",
          desc: "Create scalable RESTful APIs with serializers, Generic Views, ViewSets, Token & JWT authentication, and Swagger/OpenAPI documentation.",
        },
        {
          title: "Background Tasks, Caching & Deployment",
          desc: "Implement Redis caching, asynchronous task queues with Celery, and deploy to cloud platforms using Gunicorn and Nginx.",
        },
      ]}
    />
  );
};

export default PythonFlaskDjango;
