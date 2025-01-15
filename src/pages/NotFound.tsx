import { Link } from 'react-router-dom';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Error Icon */}
        <div className="mb-8 animate-bounce">
          <FaExclamationTriangle className="mx-auto h-16 w-16 text-[#ff6600]" />
        </div>

        {/* Error Message */}
        <h1 className="text-6xl font-bold text-[#ff6600] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Back to Home Button */}
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 border border-transparent 
          rounded-lg shadow-sm text-base font-medium text-black bg-[#ff6600] 
          hover:bg-[#ff8533] transition duration-300"
        >
          <FaHome className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;