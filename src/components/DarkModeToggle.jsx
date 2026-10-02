import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(() => {
    try {
      const theme = localStorage.getItem("theme");
      const userChoseLight = sessionStorage.getItem("user_explicit_light");
      if (theme === "light" && userChoseLight) {
        return false;
      }
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      return true;
    } catch {
      return true;
    }
  });

  useEffect(() => {
    try {
      if (dark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        sessionStorage.removeItem("user_explicit_light");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        sessionStorage.setItem("user_explicit_light", "true");
      }
    } catch (e) {
      // ignore
    }
  }, [dark]);

  return (
    <div className="flex items-center gap-3">
      {/* Toggle */}
      <button
        type="button"
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        onClick={() => setDark(!dark)}
        className={`w-14 h-7 flex items-center p-1 cursor-pointer transition duration-300 rounded-full ${
          dark ? "bg-orange-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition duration-300 flex items-center justify-center text-xs ${
            dark ? "translate-x-7" : ""
          }`}
        >
          {dark ? "☀️" : "🌙"}
        </div>
      </button>
    </div>
  );
};

export default DarkModeToggle;