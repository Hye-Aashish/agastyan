import LearnLayout from "../components/LearnLayout";

const AiMl = () => {
  return (
    <LearnLayout
      title="AI & Machine Learning"
      subtitle="Build intelligent algorithms, predictive models, neural networks, and computer vision applications."
      category="Artificial Intelligence Track"
      duration="6 Months"
      level="Intermediate to Advanced"
      projects="5+ Practical AI Models"
      tools={["Python 3", "NumPy", "Pandas", "Scikit-Learn", "TensorFlow", "Keras", "OpenCV", "Jupyter Notebooks"]}
      points={[
        { title: "Python for Data Science & AI", desc: "Master NumPy arrays, Pandas dataframes, data cleaning, and statistical visualization." },
        { title: "Machine Learning Core", desc: "Build supervised & unsupervised algorithms (Linear Regression, Decision Trees, K-Means)." },
        { title: "Deep Learning & Neural Networks", desc: "Understand artificial neural networks (ANN), backpropagation, and TensorFlow/Keras layers." },
        { title: "Computer Vision & NLP", desc: "Process image datasets with OpenCV and text analytics with Natural Language Processing." },
        { title: "Model Training & Evaluation", desc: "Train, tune hyperparameters, evaluate precision/recall metrics, and prevent overfitting." },
        { title: "Real-World AI Deployment", desc: "Deploy trained Machine Learning models as REST API endpoints using FastAPI/Flask." },
      ]}
    />
  );
};

export default AiMl;

