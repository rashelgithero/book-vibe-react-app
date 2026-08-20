import React from 'react'
import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 p-4 text-center">
      <h1 className="text-9xl font-black text-gray-300">404</h1>
      <h2 className="text-3xl font-bold mt-4 mb-2">Page Not Found</h2>
      <p className="text-gray-600 max-w-md mb-6">
        Oops! The page you are looking for doesn't exist, was removed, or is temporarily unavailable.
      </p>
        <Link
            to="/home"
            className="btn bg-green-500 hover:bg-green-600 text-white border-none px-6"
        >
            Back to Home
        </Link>
    </div>
  )
}

export default NotFoundPage