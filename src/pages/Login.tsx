


// src/pages/Login.tsx
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';

import { toast, Toaster } from 'react-hot-toast';

import { useAuth } from '../context/AuthProvider';

interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoadingSpinner = () => (
  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
);

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);
  
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: '',
    rememberMe: false
  });

  const isValidKnitEmail = (email: string): boolean => {
    return /^[a-zA-Z0-9._%+-]+@knit\.ac\.in$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = (): boolean => {
    if (!isValidKnitEmail(formData.email)) {
      toast.error('Please use your KNIT email address');
      return false;
    }

    if (formData.password.length < 8) {
      toast.error('Password must be at least 8 characters');
      return false;
    }

    if (attempts >= 5) {
      toast.error('Too many login attempts. Please try again later.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setAttempts(prev => prev + 1);

    try {
      const toastId = toast.loading('Signing in...');
      
      await login(formData.email, formData.password);
      
      if (formData.rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      }

      toast.success('Login successful!', { id: toastId });
      
      // Navigate to the intended page or dashboard
      const redirectTo = location.state?.from || '/';
      navigate(redirectTo, { replace: true });
      
    } catch (error: any) {
      toast.error(error.message || 'Login failed');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-black p-8 rounded-xl shadow-2xl">
        <Toaster position="top-right" />
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#ff6600] mb-2">Welcome Back</h2>
          <p className="text-gray-400">Sign in to your account</p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="relative">
            <label htmlFor="email" className="text-gray-300 text-sm font-medium mb-2 block">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-700 
                rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 
                focus:ring-[#ff6600] focus:border-transparent"
                placeholder="student@knit.ac.in"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="relative">
            <label htmlFor="password" className="text-gray-300 text-sm font-medium mb-2 block">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-700 
                rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 
                focus:ring-[#ff6600] focus:border-transparent"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 bg-gray-800 border-gray-700 rounded text-[#ff6600] 
                focus:ring-[#ff6600]"
                checked={formData.rememberMe}
                onChange={handleChange}
                disabled={isLoading}
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link 
                to="/forgot-password" 
                className="text-[#ff6600] hover:text-[#ff8533]"
                tabIndex={isLoading ? -1 : 0}
              >
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex items-center justify-center gap-2 py-3 px-4 
                border border-transparent rounded-lg shadow-sm text-sm font-medium 
                text-black transition-all duration-300
                ${isLoading 
                  ? 'bg-gray-600 cursor-not-allowed opacity-75' 
                  : 'bg-[#ff6600] hover:bg-[#ff8533] hover:shadow-lg hover:shadow-[#ff6600]/20'
                }`}
            >
              {isLoading ? (
                <>
                  <LoadingSpinner />
                  <span>Signing in...</span>
                </>
              ) : (
                'Sign In'
              )}
            </button>

          {/* Sign Up Link */}
          <div className="text-center text-sm">
            <span className="text-gray-400">Don't have an account? </span>
            <Link 
              to="/signup" 
              className="text-[#ff6600] hover:text-[#ff8533] font-medium"
              tabIndex={isLoading ? -1 : 0}
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;