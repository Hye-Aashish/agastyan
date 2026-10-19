import LearnLayout from "../components/LearnLayout";

const Flutter = () => {
  return (
    <LearnLayout
      title="Flutter & Dart Mobile App Development"
      subtitle="Build beautiful, natively compiled cross-platform mobile applications for iOS and Android from a single unified codebase with Flutter & Dart."
      category="Mobile App Engineering Track"
      duration="3 - 6 Months"
      level="Beginner to Advanced"
      projects="4+ Live iOS & Android Mobile Apps"
      tools={[
        "Flutter 3.x",
        "Dart Programming",
        "Firebase",
        "State Management (Provider / Bloc)",
        "REST APIs",
        "Android Studio",
        "Git & GitHub",
      ]}
      targetRoles={[
        "Flutter Developer",
        "Mobile App Engineer",
        "Cross-Platform App Specialist",
        "Frontend Mobile Developer",
      ]}
      points={[
        {
          title: "Dart Programming Language Foundations",
          desc: "Master Dart syntax, object-oriented principles, classes, interfaces, asynchronous programming with Futures and Streams, and null safety.",
        },
        {
          title: "Flutter Widget Architecture & UI Mastery",
          desc: "Construct pixel-perfect UIs with Stateless and Stateful widgets, Column, Row, Stack, GridView, CustomPaint, and Material 3 / Cupertino styling.",
        },
        {
          title: "Predictable State Management",
          desc: "Architect scalable Flutter applications using popular state management patterns including Provider, Riverpod, and BLoC (Business Logic Component).",
        },
        {
          title: "REST API Integration & Local Storage",
          desc: "Consume external JSON REST APIs, handle HTTP headers, network errors, image caching, and persistent offline storage with Shared Preferences & Hive.",
        },
        {
          title: "Firebase Cloud Backend Integration",
          desc: "Implement user authentication (Email, Google sign-in), Cloud Firestore real-time database, Firebase Storage, and Push Notifications.",
        },
        {
          title: "Device Features & App Store Deployment",
          desc: "Integrate native device features (Camera, GPS, Maps), optimize frame rendering (60/120fps), generate release APKs/App Bundles and iOS IPAs.",
        },
      ]}
    />
  );
};

export default Flutter;
