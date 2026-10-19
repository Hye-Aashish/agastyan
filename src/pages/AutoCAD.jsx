import LearnLayout from "../components/LearnLayout";

const AutoCAD = () => {
  return (
    <LearnLayout
      title="AutoCAD (2D & 3D)"
      subtitle="Master industry-standard computer-aided design drafting, 2D architectural & mechanical schematics, and precision 3D modeling."
      category="Engineering, Architecture & CAD Track"
      duration="2 - 3 Months"
      level="Beginner to Professional"
      projects="6+ Architectural Plans & Mechanical Assemblies"
      tools={[
        "AutoCAD 2025",
        "2D Drafting Engine",
        "3D Solid Modeling",
        "Layer Management",
        "GD&T Annotations",
        "Isometric Drafting",
        "Plotting & Sheet Sets",
      ]}
      targetRoles={[
        "AutoCAD Drafter",
        "CAD Design Engineer",
        "Architectural Draftsperson",
        "Mechanical Design Assistant",
      ]}
      points={[
        {
          title: "AutoCAD Workspace & Precise Coordinate Systems",
          desc: "Master absolute, relative, and polar coordinate systems, object snaps (OSNAP), polar tracking, dynamic input, and navigation tools.",
        },
        {
          title: "Core Drawing & Modifying Commands",
          desc: "Execute precise geometric construction using Line, Polyline, Circle, Arc, Trim, Extend, Offset, Fillet, Chamfer, Mirror, and Array tools.",
        },
        {
          title: "Layer Architecture & Industry CAD Standards",
          desc: "Organize professional blueprints using layer standards, line weights, color-coding, linetype scales, and layer filtering.",
        },
        {
          title: "Dimensioning, Annotations & GD&T",
          desc: "Apply linear, aligned, angular, and leader dimensions, text styles, title blocks, and geometric dimensioning and tolerancing (GD&T).",
        },
        {
          title: "Architectural & Civil Drawing Projects",
          desc: "Draft complete residential and commercial floor plans, elevation views, cross-sections, doors/window schedules, and site layouts.",
        },
        {
          title: "3D Modeling, Visual Styles & Sheet Layouts",
          desc: "Build 3D solids using Extrude, Revolve, Sweep, Loft, Boolean operations, configure paper space viewports, and generate PDF plot deliverables.",
        },
      ]}
    />
  );
};

export default AutoCAD;
