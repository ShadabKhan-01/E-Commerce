"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      {/* 404 Text */}
      <h1 className="text-7xl font-bold text-blue-500 mb-4">404</h1>

      {/* Page Not Found */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Oops! Page not found.
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        The page you are looking for might have been removed or doesn’t exist.
      </p>

      {/* Back to Home Button */}
      <Link
        href="/"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
      >
        Go Back to Home
      </Link>
    </div>
  );
};