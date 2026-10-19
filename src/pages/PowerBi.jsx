import LearnLayout from "../components/LearnLayout";

const PowerBi = () => {
  return (
    <LearnLayout
      title="Power BI & Business Intelligence"
      subtitle="Connect, model, and visualize enterprise data into stunning interactive executive dashboards with Power Query, DAX, and Power BI Service."
      category="Business Intelligence & Analytics Track"
      duration="2 - 3 Months"
      level="Beginner to Advanced"
      projects="5+ Executive Dashboards & Case Studies"
      tools={[
        "Power BI Desktop",
        "Power BI Service",
        "Power Query (M)",
        "DAX (Data Analysis Expressions)",
        "SQL Data Sources",
        "Data Modeling",
        "Excel Gateway",
      ]}
      targetRoles={[
        "Power BI Developer",
        "Business Intelligence Specialist",
        "Data Visualization Analyst",
        "MIS Executive",
      ]}
      points={[
        {
          title: "Data Ingestion & Power Query ETL Transformations",
          desc: "Connect to SQL databases, Excel, CSVs, and Web APIs. Clean, filter, merge, unpivot columns, and automate data transformation steps.",
        },
        {
          title: "Relational Data Modeling & Star Schema",
          desc: "Construct star schemas with fact and dimension tables, manage relationship cardinalities (1:*, *:*), and configure cross-filter directions.",
        },
        {
          title: "DAX Measures & Advanced Calculations",
          desc: "Master CALCULATE, FILTER, ALL, RELATED, dynamic measure creation, Time Intelligence (YTD, MTD, YoY growth), and KPIs.",
        },
        {
          title: "Interactive Dashboards & Custom Visualizations",
          desc: "Design polished visual reports with matrix views, KPI cards, custom tooltip pages, bookmarks, drill-through actions, and interactive slicers.",
        },
        {
          title: "Power BI Service, Workspaces & Collaboration",
          desc: "Publish reports to the cloud, configure automated scheduled refreshes, manage shared workspaces, and implement Row-Level Security (RLS).",
        },
        {
          title: "Real-World Business Portfolio Projects",
          desc: "Build complete end-to-end dashboards for Sales & Revenue Performance, HR Analytics, Financial Statements, and Supply Chain tracking.",
        },
      ]}
    />
  );
};

export default PowerBi;
