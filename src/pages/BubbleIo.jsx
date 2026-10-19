import LearnLayout from "../components/LearnLayout";

const BubbleIo = () => {
  return (
    <LearnLayout
      title="Bubble.io (No-Code App Development)"
      subtitle="Build powerful, enterprise-grade web applications, SaaS platforms, and digital marketplaces visually without writing code."
      category="No-Code & Visual Engineering Track"
      duration="2 - 3 Months"
      level="Zero to Hero"
      projects="4+ Production No-Code SaaS Web Apps"
      tools={[
        "Bubble.io",
        "Visual Workflow Engine",
        "Relational Data Types",
        "API Connector",
        "Stripe Gateway",
        "Responsive Engine",
        "SendGrid / Auth",
      ]}
      targetRoles={[
        "No-Code Developer",
        "Bubble.io Engineer",
        "SaaS Product Builder",
        "MVP Prototype Specialist",
      ]}
      points={[
        {
          title: "Bubble.io Fundamentals & Canvas Layouts",
          desc: "Understand visual programming concepts, elements hierarchy, containers, groups, repeating groups, and modern flexbox responsive layouts.",
        },
        {
          title: "Relational Database Design & Privacy Rules",
          desc: "Create custom data types, fields, option sets, parent-child relationships, and configure strict security privacy rules per user role.",
        },
        {
          title: "Visual Logic & Conditional Workflows",
          desc: "Design event-driven workflows, dynamic conditions, custom states, step-by-step triggers, email notifications, and automated alerts.",
        },
        {
          title: "API Connector & Third-Party Integrations",
          desc: "Connect external REST APIs, OpenAI ChatGPT models, Google Maps, webhooks, and CRM systems with zero backend programming.",
        },
        {
          title: "Payments, Subscriptions & User Authentication",
          desc: "Integrate Stripe checkout, recurring SaaS memberships, password resets, social OAuth logins, and user account management.",
        },
        {
          title: "App Performance, Domain Setup & Launch",
          desc: "Optimize search queries, manage app versions (Development / Live), configure custom domains, and scale production applications.",
        },
      ]}
    />
  );
};

export default BubbleIo;
