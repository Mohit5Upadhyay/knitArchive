



// src/pages/ForgotPassword.tsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import { toast, Toaster } from 'react-hot-toast';
import { resetPassword } from '../services/auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await resetPassword(email);
      setStatus('success');
      toast.success('Recovery email sent! Please check your inbox.');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      setStatus('error');
      toast.error('Failed to send recovery email');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-black p-8 rounded-xl shadow-2xl">
        <Toaster position="top-right" />
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#ff6600] mb-2">
            Forgot Password
          </h2>
          <p className="text-gray-400">
            Enter your email address to reset your password
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label 
              htmlFor="email" 
              className="text-gray-300 text-sm font-medium mb-2 block"
            >
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FaEnvelope className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none block w-full pl-10 pr-3 py-2 border 
                border-gray-700 rounded-lg bg-gray-800 text-gray-300 
                focus:outline-none focus:ring-2 focus:ring-[#ff6600] 
                focus:border-transparent"
                placeholder="student@knit.ac.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full flex justify-center py-3 px-4 border border-transparent 
            rounded-lg shadow-sm text-sm font-medium text-black 
            ${status === 'loading' 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-[#ff6600] hover:bg-[#ff8533]'} 
            focus:outline-none focus:ring-2 focus:ring-offset-2 
            focus:ring-[#ff6600] transition duration-300`}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Reset Password'}
          </button>

          {/* Back to Login Link */}
          <div className="text-center text-sm">
            <Link 
              to="/login" 
              className="text-gray-400 hover:text-[#ff6600] flex items-center justify-center gap-2"
            >
              <FaArrowLeft className="h-4 w-4" />
              Back to Login
            </Link>
          </div>
        </form>

        {/* Status Messages */}
        {status === 'success' && (
          <div className="text-green-500 text-center text-sm mt-4">
            Recovery email sent! Please check your inbox.
          </div>
        )}
        {status === 'error' && (
          <div className="text-red-500 text-center text-sm mt-4">
            Failed to send recovery email. Please try again.
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;