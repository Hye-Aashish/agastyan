import LearnLayout from "../components/LearnLayout";

const DataAnalytics = () => {
  return (
    <LearnLayout
      title="Data Analytics"
      subtitle="Transform raw data into strategic business intelligence using Advanced Excel, complex SQL queries, interactive Power BI dashboards, and Tableau."
      category="Business Intelligence & Analytics Track"
      duration="3 - 4 Months"
      level="Beginner to Pro"
      projects="5+ Executive Dashboards & Portfolios"
      tools={[
        "Advanced Excel",
        "SQL (MySQL / PostgreSQL)",
        "Power BI",
        "Tableau",
        "Power Query",
        "DAX Measures",
        "Pivot Tables",
        "Data Storytelling",
      ]}
      targetRoles={[
        "Data Analyst",
        "Business Intelligence (BI) Analyst",
        "Operations Analyst",
        "Reporting Specialist",
      ]}
      points={[
        {
          title: "Advanced Excel for Business Analytics",
          desc: "Master XLOOKUP, INDEX/MATCH, dynamic arrays, nested logic, Pivot Tables, interactive slicers, What-If analysis, and macros.",
        },
        {
          title: "SQL Data Extraction & Transformation",
          desc: "Write multi-table JOINs, subqueries, Common Table Expressions (CTEs), window functions (ROW_NUMBER, RANK), and group aggregations.",
        },
        {
          title: "Data Cleaning & ETL with Power Query",
          desc: "Clean, normalize, reshape unformatted datasets, unpivot columns, and automate repetitive data preparation tasks seamlessly.",
        },
        {
          title: "Interactive Power BI & Tableau Dashboards",
          desc: "Design executive KPIs, custom charts, drill-downs, dynamic filters, cross-filtering, and synchronized multi-page dashboard narratives.",
        },
        {
          title: "DAX Modeling & Analytical Calculations",
          desc: "Compute Year-over-Year (YoY) growth, running totals, moving averages, churn rate, and custom metrics using CALCULATE and Time Intelligence.",
        },
        {
          title: "Business Problem Solving & Storytelling",
          desc: "Translate ambiguous business questions into actionable insights, identify cost-reduction opportunities, and present to stakeholders.",
        },
      ]}
    />
  );
};

export default DataAnalytics;
