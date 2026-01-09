import React from 'react';
import { Link } from 'react-router-dom';

function NotExist() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
      <div className="bg-white px-8 py-10 rounded-2xl shadow-xl flex flex-col items-center max-w-md w-full border border-green-100">
        <div className="flex flex-col items-center mb-6">
          <span className="text-8xl font-extrabold text-green-600 mb-2">404</span>
          <h1 className="text-2xl font-semibold text-green-800">Page Not Found</h1>
        </div>
        <p className="text-green-500 mb-8 text-center">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="px-7 py-2.5 bg-green-600 text-white rounded-full shadow-md font-medium hover:bg-green-700 transition-all duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotExist;