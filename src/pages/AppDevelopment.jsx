import ServiceDetailLayout from "../components/ServiceDetailLayout";

const AppDevelopment = () => {
  return (
    <ServiceDetailLayout
      title="Mobile App Development"
      subtitle="We engineer native Android, iOS, and cross-platform mobile applications designed for high performance, smooth UX, and user retention."
      category="Mobile Software Engineering"
      tools={["React Native", "Flutter", "Android Kotlin", "iOS Swift", "Firebase", "Node.js REST API", "Play Store", "App Store"]}
      features={[
        { title: "Android Native Apps", desc: "Custom, native Android application development optimized for speed, battery efficiency, and device compatibility." },
        { title: "iOS Native Applications", desc: "Sleek, secure, high-performing iOS apps built following Apple's Human Interface Guidelines." },
        { title: "Cross-Platform Flutter/React Native", desc: "Build single-codebase cross-platform apps with 100% native look, feel, and multi-device performance." },
        { title: "Real-Time Cloud Integration", desc: "Firebase & REST API integration for instant chat, live updates, push notifications, and user authentication." },
        { title: "Intuitive UI/UX Navigation", desc: "Fluid gesture animations, dark mode themes, offline data storage, and seamless user interaction design." },
        { title: "App Store Publishing", desc: "End-to-end guidance for Google Play Store and Apple App Store submission, compliance, and launch." },
      ]}
      ctaTitle="Have a Mobile App Idea?"
      ctaDesc="Transform your app concept into a top-performing Android & iOS application."
    />
  );
};

export default AppDevelopment;