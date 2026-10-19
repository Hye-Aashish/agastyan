import LearnLayout from "../components/LearnLayout";

const PhpLaravelWordpress = () => {
  return (
    <LearnLayout
      title="PHP, Laravel & WordPress"
      subtitle="Engineer robust backend systems with modern Object-Oriented PHP, enterprise Laravel MVC applications, and custom WordPress CMS solutions."
      category="Backend & CMS Development Track"
      duration="4 - 6 Months"
      level="Beginner to Advanced"
      projects="5+ Dynamic Web Portals & CMS Projects"
      tools={[
        "PHP 8+",
        "Laravel 11",
        "WordPress",
        "MySQL",
        "Blade Engine",
        "Eloquent ORM",
        "Composer",
        "RESTful APIs",
      ]}
      targetRoles={[
        "PHP Developer",
        "Laravel Backend Engineer",
        "WordPress CMS Developer",
        "Full Stack Web Engineer",
      ]}
      points={[
        {
          title: "Core & Object-Oriented PHP 8+",
          desc: "Master PHP syntax, data types, superglobals, sessions, cookies, OOP principles, namespaces, traits, and robust error/exception handling.",
        },
        {
          title: "Laravel MVC Framework Architecture",
          desc: "Understand Laravel directory structure, routing, controllers, Blade templating, middleware, request validation, and artisan CLI tools.",
        },
        {
          title: "Eloquent ORM & Database Migrations",
          desc: "Design scalable MySQL schemas with migrations, seeders, model factories, and define complex 1-to-many and many-to-many relationships.",
        },
        {
          title: "Authentication & REST API Engineering",
          desc: "Implement role-based access control (RBAC), multi-guard authentication with Breeze/Sanctum, and expose secure JSON REST APIs.",
        },
        {
          title: "WordPress CMS Customization",
          desc: "Develop custom themes, child themes, plugins, custom post types (CPT), advanced custom fields (ACF), and WooCommerce e-commerce stores.",
        },
        {
          title: "Deployment & Security Hardening",
          desc: "Protect against SQL injection, CSRF, and XSS attacks. Deploy production web apps on Apache, Nginx, cPanel, and cloud servers.",
        },
      ]}
    />
  );
};

export default PhpLaravelWordpress;
