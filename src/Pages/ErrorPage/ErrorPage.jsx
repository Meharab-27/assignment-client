
import React from "react";
import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
 
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-6">
      <h1 className="text-8xl font-extrabold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        {error?.statusText || error?.message || 
          "The page you are looking for doesn’t exist or has been moved."}
      </p>
      <Link
        to="/"
        className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        ⬅️ Back to Home
      </Link>

      
    </div>
  );
};

export default ErrorPage;
