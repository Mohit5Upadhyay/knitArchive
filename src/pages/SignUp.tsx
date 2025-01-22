


// src/pages/SignUp.tsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { toast, Toaster } from 'react-hot-toast';
import { registerUser } from '../services/auth';
import { UserRole } from '../types';


interface FormData {
  name: string;
  email: string;
  course: string;
  branch: string;
  semester: string;
  role: UserRole;
  session: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    course: 'btech',
    branch: '',
    semester: '',
    role: UserRole.STUDENT,
    session: '',
    password: '',
    confirmPassword: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false
  });
  const LoadingSpinner = () => (
    <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent" />
  );

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Name is required!");
      return false;
    }
    
    if (!formData.email.trim() || !formData.email.endsWith('@knit.ac.in')) {
      toast.error("Please use your KNIT email address!");
      return false;
    }

    if (!formData.branch.trim()) {
      toast.error("Branch is required!");
      return false;
    }

    const semesterNum = Number(formData.semester);
    if (!semesterNum || semesterNum < 1 || semesterNum > 8) {
      toast.error("Please enter a valid semester (1-8)!");
      return false;
    }


    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters!");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match!");
      return false;
    }

    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await registerUser(
        formData.email,
        formData.password,
        formData.name,
        formData.course,
        formData.branch,
        Number(formData.semester),
        formData.role,
        formData.session
      );
      
      toast.success('Account created successfully!');
      navigate('/login');
      
    } catch (error: any) {
      console.error('Registration error:', error);
      toast.error(error.message || 'Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full space-y-8 bg-black p-8 rounded-xl shadow-2xl">
        <Toaster position="top-right" />
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#ff6600] mb-2">Create Account</h2>
          <p className="text-gray-400">Join KnitArchive today</p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label className="text-gray-300 text-sm font-medium mb-2 block">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FaUser className="h-5 w-5 text-gray-400" />
              </div>
              <input
                name="name"
                type="text"
                required
                className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-700 
                rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 
                focus:ring-[#ff6600] focus:border-transparent"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="text-gray-300 text-sm font-medium mb-2 block">
              College Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FaEnvelope className="h-5 w-5 text-gray-400" />
              </div>
              <input
                name="email"
                type="email"
                required
                className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-700 
                rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 
                focus:ring-[#ff6600] focus:border-transparent"
                placeholder="student@knit.ac.in"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Course, Branch, Semester Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Course
              </label>
              <select
                name="course"
                className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 
                text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                value={formData.course}
                onChange={handleChange}
              >
                <option value="btech">B.Tech</option>
              </select>
            </div>

            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Branch
              </label>
              <select
                name="branch"
                required
                className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 
                text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                value={formData.branch}
                onChange={handleChange}
              >
                <option value="">Select Branch</option>
                <option value="cse">CSE</option>
                <option value="civil">Civil</option>
                <option value="ee">EE</option>
              </select>
            </div>

            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Current Semester
              </label>
              <select
                name="semester"
                required
                className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 
                text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                value={formData.semester}
                onChange={handleChange}
              >
                <option value="">Select Semester</option>
                {[1,2,3,4,5,6,7,8].map(sem => (
                  <option key={sem} value={sem}>
                    {sem}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Role and Session Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Role
              </label>
              <select
  name="role"
  className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 
  text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
  value={formData.role}
  onChange={handleChange}
>
  <option value="STUDENT">STUDENT</option>
  <option value="CR">CR</option>
  <option value="ADMIN">ADMIN</option>
</select>
            </div>

            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Academic Session
              </label>
              <input
                name="session"
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 
                text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                placeholder="2023-24"
                value={formData.session}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Password Fields */}
          <div className="space-y-4">
            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  name="password"
                  type={showPassword.password ? "text" : "password"}
                  required
                  className="appearance-none block w-full pl-10 pr-10 py-2 border 
                  border-gray-700 rounded-lg bg-gray-800 text-gray-300 
                  focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(prev => ({
                    ...prev,
                    password: !prev.password
                  }))}
                >
                  {showPassword.password ? (
                    <FaEyeSlash className="h-5 w-5 text-gray-400 hover:text-[#ff6600]" />
                  ) : (
                    <FaEye className="h-5 w-5 text-gray-400 hover:text-[#ff6600]" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  name="confirmPassword"
                  type={showPassword.confirmPassword ? "text" : "password"}
                  required
                  className="appearance-none block w-full pl-10 pr-10 py-2 border 
                  border-gray-700 rounded-lg bg-gray-800 text-gray-300 
                  focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(prev => ({
                    ...prev,
                    confirmPassword: !prev.confirmPassword
                  }))}
                >
                  {showPassword.confirmPassword ? (
                    <FaEyeSlash className="h-5 w-5 text-gray-400 hover:text-[#ff6600]" />
                  ) : (
                    <FaEye className="h-5 w-5 text-gray-400 hover:text-[#ff6600]" />
                  )}
                </button>
              </div>
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
      <span>Creating Account...</span>
    </>
  ) : (
    'Create Account'
  )}
</button>

          {/* Login Link */}
          <div className="text-center text-sm">
            <span className="text-gray-400">Already have an account? </span>
            <Link to="/login" className="text-[#ff6600] hover:text-[#ff8533] font-medium">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;