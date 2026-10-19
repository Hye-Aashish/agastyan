import { createBrowserRouter } from "react-router-dom";
import { useLayoutEffect } from "react";


/* ========== LAYOUTS ========== */
import SiteLayout from "./layouts/SiteLayout";

/* ========== SITE PAGES ========== */
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import EnquiryNow from "./pages/EnquiryNow";



import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";
import FullStack from "./pages/FullStack";
import PythonDjango from "./pages/PythonDjango";
import Database from "./pages/Database";
import ToolsApi from "./pages/ToolsApi";
import AiMl from "./pages/AiMl";
import WebDesigning from "./pages/WebDesigning";
import PhpLaravelWordpress from "./pages/PhpLaravelWordpress";
import PythonFlaskDjango from "./pages/PythonFlaskDjango";
import DataScience from "./pages/DataScience";
import DataAnalytics from "./pages/DataAnalytics";
import Robotics from "./pages/Robotics";
import AutoCAD from "./pages/AutoCAD";
import BubbleIo from "./pages/BubbleIo";
import PowerBi from "./pages/PowerBi";
import Flutter from "./pages/Flutter";

import WebDevelopment from "./pages/WebDevelopment";
import AppDevelopment from "./pages/AppDevelopment";
import UIUXDesign from "./pages/UIUXDesign";
import DigitalMarketing from "./pages/DigitalMarketing";
import SEOOptimization from "./pages/SEOOptimization";


/* ========== PROTECTED ROUTE ========== */
import ProtectedRoute from "./routes/ProtectedRoute";

/* ========== AUTO SITE ACCESS WRAPPER ========== */
import ErrorElement from "./components/ErrorElement";

const SiteAccessWrapper = ({ children }) => {
  // useLayoutEffect runs before the browser paints, avoiding a flash where
  // ProtectedRoute sees missing siteAccess on first render.
  useLayoutEffect(() => {
    try {
      localStorage.setItem("siteAccess", "true");
    } catch (e) {
      // ignore
    }
  }, []);

  return children;
};

const App = createBrowserRouter([
  /* ================= SITE ROUTES ================= */
  {
    path: "/",
    errorElement: <ErrorElement />,
    element: (
      <SiteAccessWrapper>
        <SiteLayout />
      </SiteAccessWrapper>
    ),
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "about",
        element: (
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        ),
      },
      {
        path: "courses",
        element: (
          <ProtectedRoute>
            <Courses />
          </ProtectedRoute>
        ),
      },
      {
        path: "services",
        element: (
          <ProtectedRoute>
            <Services />
          </ProtectedRoute>
        ),
      },
      {
        path: "contact",
        element: (
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        ),
      },
      {
        path: "enquiry",
        element: (
          <ProtectedRoute>
            <EnquiryNow />
          </ProtectedRoute>
        ),
      },
      {
        path: "frontend",
        element: (
          <ProtectedRoute>
            <Frontend />
          </ProtectedRoute>
        ),
      },
      {
        path: "backend",
        element: (
          <ProtectedRoute>
            <Backend />
          </ProtectedRoute>
        ),
      },
      {
        path: "fullstack",
        element: (
          <ProtectedRoute>
            <FullStack />
          </ProtectedRoute>
        ),
      },
      {
        path: "python-django",
        element: (
          <ProtectedRoute>
            <PythonDjango />
          </ProtectedRoute>
        ),
      },
      {
        path: "database",
        element: (
          <ProtectedRoute>
            <Database />
          </ProtectedRoute>
        ),
      },
      {
        path: "tools-api",
        element: (
          <ProtectedRoute>
            <ToolsApi />
          </ProtectedRoute>
        ),
      },
      {
        path: "web-designing",
        element: (
          <ProtectedRoute>
            <WebDesigning />
          </ProtectedRoute>
        ),
      },
      {
        path: "php-laravel-wordpress",
        element: (
          <ProtectedRoute>
            <PhpLaravelWordpress />
          </ProtectedRoute>
        ),
      },
      {
        path: "python-flask-django",
        element: (
          <ProtectedRoute>
            <PythonFlaskDjango />
          </ProtectedRoute>
        ),
      },
      {
        path: "data-science",
        element: (
          <ProtectedRoute>
            <DataScience />
          </ProtectedRoute>
        ),
      },
      {
        path: "data-analytics",
        element: (
          <ProtectedRoute>
            <DataAnalytics />
          </ProtectedRoute>
        ),
      },
      {
        path: "ai-ml",
        element: (
          <ProtectedRoute>
            <AiMl />
          </ProtectedRoute>
        ),
      },
      {
        path: "robotics",
        element: (
          <ProtectedRoute>
            <Robotics />
          </ProtectedRoute>
        ),
      },
      {
        path: "autocad",
        element: (
          <ProtectedRoute>
            <AutoCAD />
          </ProtectedRoute>
        ),
      },
      {
        path: "bubble-io",
        element: (
          <ProtectedRoute>
            <BubbleIo />
          </ProtectedRoute>
        ),
      },
      {
        path: "power-bi",
        element: (
          <ProtectedRoute>
            <PowerBi />
          </ProtectedRoute>
        ),
      },
      {
        path: "flutter",
        element: (
          <ProtectedRoute>
            <Flutter />
          </ProtectedRoute>
        ),
      },

      {
        path: "web-development",
        element: (
          <ProtectedRoute>
            <WebDevelopment />
          </ProtectedRoute>
        ),
      },
      {
        path: "app-development",
        element: (
          <ProtectedRoute>
            <AppDevelopment />
          </ProtectedRoute>
        ),
      },
      {
        path: "ui-ux-design",
        element: (
          <ProtectedRoute>
            <UIUXDesign />
          </ProtectedRoute>
        ),
      },
      {
        path: "digital-marketing",
        element: (
          <ProtectedRoute>
            <DigitalMarketing />
          </ProtectedRoute>
        ),
      },
      {
        path: "seo-optimization",
        element: (
          <ProtectedRoute>
            <SEOOptimization />
          </ProtectedRoute>
        ),
      },
    ],
  },

  
]);

export default App;
