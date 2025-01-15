import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // API call would go here
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-black p-8 rounded-xl shadow-2xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#ff6600] mb-2">Reset Password</h2>
          <p className="text-gray-400">
            Enter your email address and we'll send you instructions to reset your password.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="text-gray-300 text-sm font-medium mb-2 block">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                type="email"
                required
                className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-700 
                rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 
                focus:ring-[#ff6600] focus:border-transparent"
                placeholder="student@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading' || status === 'success'}
              />
            </div>
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="p-4 rounded-lg bg-green-900 text-green-200">
              Password reset instructions have been sent to your email.
            </div>
          )}
          
          {status === 'error' && (
            <div className="p-4 rounded-lg bg-red-900 text-red-200">
              Failed to send reset instructions. Please try again.
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className={`w-full flex justify-center py-3 px-4 border border-transparent 
            rounded-lg shadow-sm text-sm font-medium text-black 
            ${status === 'loading' || status === 'success' 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-[#ff6600] hover:bg-[#ff8533]'} 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff6600] 
            transition duration-300`}
          >
            {status === 'loading' ? 'Sending...' : 'Send Reset Instructions'}
          </button>

          {/* Back to Login Link */}
          <div className="text-center">
            <Link 
              to="/login" 
              className="inline-flex items-center text-[#ff6600] hover:text-[#ff8533] 
              transition duration-300"
            >
              <FaArrowLeft className="mr-2" />
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;