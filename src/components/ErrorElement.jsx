import { useRouteError, Link } from "react-router-dom";
import React from "react";

const ErrorElement = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white p-4">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-6xl font-bold text-red-500">Oops!</h1>
        <h2 className="text-2xl font-semibold">Something went wrong.</h2>
        <p className="text-gray-400">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        {error?.message && (
          <div className="bg-red-500/10 border border-red-500/20 rounded p-4 text-red-400 text-sm text-left overflow-auto max-h-48">
            <pre>{error.statusText || error.message}</pre>
          </div>
        )}
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-200 transition-colors"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorElement;
