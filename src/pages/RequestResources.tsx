
// src/pages/RequestResources.tsx
import { useState } from 'react';
import { FaBook, FaCalendar, FaGraduationCap } from 'react-icons/fa';
import { toast, Toaster } from 'react-hot-toast';
// import { createResourceRequest } from '../services/resources';
import { useNavigate } from 'react-router-dom';

const subjects = {
  cse: {
    1: ['Math', 'Physics'],
    2: ['Chemistry', 'Programming'],
    3: ['Data Structures', 'Algorithms'],
    4: ['Operating Systems', 'DBMS'],
    5: ['Computer Networks', 'Software Engineering'],
    6: ['Machine Learning', 'AI'],
    7: ['Cloud Computing', 'Big Data'],
    8: ['Cyber Security', 'Blockchain']
  },
  it: {
    1: ['Math', 'Physics'],
    2: ['Chemistry', 'Programming'],
    3: ['Data Structures', 'Algorithms'],
    4: ['Operating Systems', 'DBMS'],
    5: ['Computer Networks', 'Software Engineering'],
    6: ['Machine Learning', 'AI'],
    7: ['Cloud Computing', 'Big Data'],
    8: ['Cyber Security', 'Blockchain']
  }
};

const RequestResources = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    course: 'btech',
    branch: '',
    semester: '',
    subject: '',
    academicYear: '',
    description: ''
  });

  // Form validation
  const validateForm = () => {
    if (!formData.branch) {
      toast.error('Please select a branch');
      return false;
    }
    if (!formData.semester) {
      toast.error('Please select a semester');
      return false;
    }
    if (!formData.subject) {
      toast.error('Please select a subject');
      return false;
    }
    if (!formData.academicYear) {
      toast.error('Please select an academic year');
      return false;
    }
    if (formData.description.length < 10) {
      toast.error('Please provide a detailed description');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);

    try {
      const userId = 'current-user-id'; // Get this from your auth context
      
      await createResourceRequest({
        ...formData,
        userId
      });

      toast.success('Resource request submitted successfully!');
      
      // Reset form
      setFormData({
        course: 'btech',
        branch: '',
        semester: '',
        subject: '',
        academicYear: '',
        description: ''
      });

      // Redirect to requests list after short delay
      setTimeout(() => {
        navigate('/my-requests');
      }, 2000);

    } catch (error: any) {
      toast.error(error.message || 'Failed to submit request');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full space-y-8 bg-black p-8 rounded-xl shadow-2xl">
        <Toaster position="top-right" />

        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#ff6600] mb-2">Request Resources</h2>
          <p className="text-gray-400">Submit your request for academic resources</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Course and Branch Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Course
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <FaGraduationCap className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  name="course"
                  className="w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg 
                  bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                  value={formData.course}
                  onChange={handleChange}
                >
                  <option value="btech">B.Tech</option>
                </select>
              </div>
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
                <option value="cse">Computer Science</option>
                <option value="it">Information Technology</option>
              </select>
            </div>
          </div>

          {/* Semester and Subject Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Semester
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
                    Semester {sem}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Subject
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <FaBook className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  name="subject"
                  required
                  className="w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg 
                  bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={!formData.branch || !formData.semester}
                >
                  <option value="">Select Subject</option>
                  {formData.branch && formData.semester && subjects[formData.branch as keyof typeof subjects]?.[formData.semester as unknown as keyof typeof subjects['cse']]?.map(subject => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Academic Year */}
          <div>
            <label className="text-gray-300 text-sm font-medium mb-2 block">
              Academic Year
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FaCalendar className="h-5 w-5 text-gray-400" />
              </div>
              <select
                name="academicYear"
                required
                className="w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg 
                bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                value={formData.academicYear}
                onChange={handleChange}
              >
                <option value="">Select Academic Year</option>
                <option value="2023-24">2023-24</option>
                <option value="2022-23">2022-23</option>
                <option value="2021-22">2021-22</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-gray-300 text-sm font-medium mb-2 block">
              Description
            </label>
            <textarea
              name="description"
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 
              text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
              placeholder="Describe what specific resources you need..."
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex justify-center py-3 px-4 border border-transparent 
            rounded-lg shadow-sm text-sm font-medium text-black
            ${isLoading ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#ff6600] hover:bg-[#ff8533]'} 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff6600] 
            transition duration-300`}
          >
            {isLoading ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestResources;


function createResourceRequest(arg0: { userId: string; course: string; branch: string; semester: string; subject: string; academicYear: string; description: string; }) {
  throw new Error('Function not implemented.');
  console.log(arg0);
}
