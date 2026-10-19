import LearnLayout from "../components/LearnLayout";

const DataScience = () => {
  return (
    <LearnLayout
      title="Data Science"
      subtitle="Extract meaningful insights and build predictive AI models using Python, statistical data modeling, Pandas, Scikit-Learn, and real-world datasets."
      category="Data Science & Machine Intelligence"
      duration="4 - 6 Months"
      level="Beginner to Advanced"
      projects="6+ End-to-End Data Science Case Studies"
      tools={[
        "Python 3",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Scikit-Learn",
        "Jupyter Notebook",
        "SQL",
      ]}
      targetRoles={[
        "Data Scientist",
        "Machine Learning Associate",
        "Quantitative Analyst",
        "Data Research Engineer",
      ]}
      points={[
        {
          title: "Python for Data Science & Scientific Computing",
          desc: "Master high-performance array operations with NumPy, multi-dimensional slicing, broadcasting, and vector math.",
        },
        {
          title: "Data Wrangling & Cleaning with Pandas",
          desc: "Handle messy real-world datasets, missing values, outliers, data transformations, merging, pivoting, and aggregation pipelines.",
        },
        {
          title: "Exploratory Data Analysis (EDA) & Visualization",
          desc: "Uncover patterns, correlations, and trends through statistical plots, heatmaps, distributions, and dashboards with Matplotlib and Seaborn.",
        },
        {
          title: "Applied Statistics & Probability for Modeling",
          desc: "Master hypothesis testing, p-values, confidence intervals, A/B testing, normal distributions, regression assumptions, and variance analysis.",
        },
        {
          title: "Supervised & Unsupervised Machine Learning",
          desc: "Build Linear/Logistic Regression, Decision Trees, Random Forests, XGBoost, K-Means clustering, and PCA dimensionality reduction.",
        },
        {
          title: "Model Validation, Hyperparameter Tuning & Pipeline",
          desc: "Implement K-Fold cross-validation, GridSearchCV, evaluation metrics (ROC-AUC, F1-score), and save reproducible models with Joblib.",
        },
      ]}
    />
  );
};

export default DataScience;
