export const COURSE_GROUPS = [
  {
    category: "Full Stack & Web Development",
    courses: [
      "Full Stack Development (MERN Stack)",
      "Frontend Development (React JS)",
      "Backend Development (Node.js & Express)",
      "Web Development",
    ],
  },
  {
    category: "Programming & Data Management",
    courses: [
      "Python & Django Development",
      "Database Management (SQL & MongoDB)",
      "Developer Tools & REST APIs",
    ],
  },
  {
    category: "Industrial Training Programs",
    courses: [
      "6 Months Industrial Training",
      "6 Weeks Industrial Training / Summer Training",
    ],
  },
  {
    category: "App Development & UI/UX",
    courses: [
      "Mobile App Development (React Native / Android)",
      "UI / UX Design (Figma & Prototyping)",
    ],
  },
  {
    category: "Digital Marketing & SEO",
    courses: [
      "Digital Marketing",
      "SEO Optimization",
    ],
  },
  {
    category: "Counselling & Other",
    courses: [
      "Career Counselling & Free Demo Class",
      "Other / Custom Training",
    ],
  },
];

export const ALL_COURSES = COURSE_GROUPS.flatMap((group) => group.courses);

/**
 * Fuzzy / smart helper to match an incoming course title or URL query
 * to the closest standard course.
 */
export const findMatchingCourse = (raw) => {
  if (!raw || typeof raw !== "string") return "";
  const cleaned = raw.trim().toLowerCase();

  // Direct exact match
  const exact = ALL_COURSES.find((c) => c.toLowerCase() === cleaned);
  if (exact) return exact;

  // Keyword-based matching
  if (cleaned.includes("frontend") || cleaned.includes("react")) {
    return "Frontend Development (React JS)";
  }
  if (cleaned.includes("backend") || cleaned.includes("node") || cleaned.includes("express")) {
    return "Backend Development (Node.js & Express)";
  }
  if (cleaned.includes("full") || cleaned.includes("mern")) {
    return "Full Stack Development (MERN Stack)";
  }
  if (cleaned.includes("python") || cleaned.includes("django")) {
    return "Python & Django Development";
  }
  if (cleaned.includes("database") || cleaned.includes("sql") || cleaned.includes("mongodb")) {
    return "Database Management (SQL & MongoDB)";
  }
  if (cleaned.includes("tools") || cleaned.includes("api") || cleaned.includes("git")) {
    return "Developer Tools & REST APIs";
  }
  if (cleaned.includes("6 month") || cleaned.includes("industrial")) {
    return "6 Months Industrial Training";
  }
  if (cleaned.includes("6 week") || cleaned.includes("summer")) {
    return "6 Weeks Industrial Training / Summer Training";
  }
  if (cleaned.includes("app") || cleaned.includes("mobile") || cleaned.includes("flutter") || cleaned.includes("native")) {
    return "Mobile App Development (React Native / Android)";
  }
  if (cleaned.includes("web")) {
    return "Web Development";
  }
  if (cleaned.includes("ui") || cleaned.includes("ux") || cleaned.includes("design") || cleaned.includes("figma")) {
    return "UI / UX Design (Figma & Prototyping)";
  }
  if (cleaned.includes("seo") || cleaned.includes("search engine")) {
    return "SEO Optimization";
  }
  if (cleaned.includes("market") || cleaned.includes("digital")) {
    return "Digital Marketing";
  }
  if (cleaned.includes("demo") || cleaned.includes("counsel")) {
    return "Career Counselling & Free Demo Class";
  }

  // Partial match in any course title
  const partial = ALL_COURSES.find(
    (c) => c.toLowerCase().includes(cleaned) || cleaned.includes(c.toLowerCase())
  );
  return partial || raw;
};
