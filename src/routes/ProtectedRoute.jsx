import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  // Read localStorage synchronously on first render to avoid showing a
  // blank/loading state while waiting for an effect.
  const [isAllowed, setIsAllowed] = useState(() => {
    try {
      return !!localStorage.getItem("siteAccess");
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    // keep state in sync if something else changes it later
    try {
      const siteAccess = localStorage.getItem("siteAccess");
      setIsAllowed(!!siteAccess);
    } catch (e) {}
  }, []);

  if (!isAllowed) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;