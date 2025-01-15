// import React, { useState } from 'react';
// import { toast } from 'react-hot-toast';

// const RequestResources = () => {
//   const [formData, setFormData] = useState({
//     course: '',
//     branch: '',
//     semester: '',
//     subject: '',
//     academicYear: '',
//     resourceType: '',
//     description: ''
//   });

//   const branches = ['CSE', 'IT', 'ECE', 'EE', 'ME'];
//   const semesters = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6', 'Sem 7', 'Sem 8'];
//   const subjects = ['DBMS', 'OS', 'Computer Networks', 'Data Structures', 'Software Engineering'];

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!formData.course || !formData.branch || !formData.semester || !formData.subject) {
//       toast.error('Please fill all required fields');
//       return;
//     }

//     try {
//       // API call would go here
//       toast.success('Resource request submitted successfully!');
//       setFormData({
//         course: '',
//         branch: '',
//         semester: '',
//         subject: '',
//         academicYear: '',
//         resourceType: '',
//         description: ''
//       });
//     } catch (error) {
//       toast.error('Failed to submit request');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
//         <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Academic Resources</h2>
        
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Course</label>
//               <input
//                 type="text"
//                 name="course"
//                 value={formData.course}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                 placeholder="e.g., BTech"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Branch</label>
//               <select
//                 name="branch"
//                 value={formData.branch}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                 required
//               >
//                 <option value="">Select Branch</option>
//                 {branches.map(branch => (
//                   <option key={branch} value={branch}>{branch}</option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Semester</label>
//               <select
//                 name="semester"
//                 value={formData.semester}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                 required
//               >
//                 <option value="">Select Semester</option>
//                 {semesters.map(sem => (
//                   <option key={sem} value={sem}>{sem}</option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Subject</label>
//               <select
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                 required
//               >
//                 <option value="">Select Subject</option>
//                 {subjects.map(sub => (
//                   <option key={sub} value={sub}>{sub}</option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Academic Year</label>
//               <input
//                 type="text"
//                 name="academicYear"
//                 value={formData.academicYear}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                 placeholder="e.g., 2023-24"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Resource Type</label>
//               <input
//                 type="text"
//                 name="resourceType"
//                 value={formData.resourceType}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                 placeholder="e.g., Notes, Books, etc."
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Description</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               rows={4}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               placeholder="Describe the resource you need..."
//             />
//           </div>

//           <div className="flex justify-end">
//             <button
//               type="submit"
//               className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//             >
//               Submit Request
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RequestResources;




import { useState } from 'react';
import { FaBook, FaCalendar, FaGraduationCap } from 'react-icons/fa';
import { toast, Toaster } from 'react-hot-toast';

const RequestResources = () => {
  const [formData, setFormData] = useState({
    course: 'btech',
    branch: '',
    semester: '',
    subject: '',
    academicYear: '',
    description: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  // Subject options based on branch and semester
  const subjects = {
    cse: {
      '3': ['DBMS', 'Data Structures', 'Operating Systems'],
      '4': ['Computer Networks', 'Theory of Computation', 'Computer Architecture'],
      '5': ['Compiler Design', 'Software Engineering', 'Web Development'],
      '6': ['Artificial Intelligence', 'Cloud Computing', 'Information Security']
    },
    it: {
      '3': ['DBMS', 'Data Structures', 'Digital Electronics'],
      '4': ['Computer Networks', 'Microprocessors', 'Software Engineering'],
      '5': ['Web Technologies', 'Information Security', 'Cloud Computing'],
      '6': ['Machine Learning', 'Big Data Analytics', 'Mobile Computing']
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // API call would go here
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      toast.success('Resource request submitted successfully!');
      setFormData({
        course: 'btech',
        branch: '',
        semester: '',
        subject: '',
        academicYear: '',
        description: ''
      });
    } catch (error) {
      toast.error('Failed to submit request');
    } finally {
      setIsLoading(false);
    }
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
                  {formData.branch && formData.semester && subjects[formData.branch as keyof typeof subjects]?.[formData.semester as keyof typeof subjects['cse']]?.map(subject => (
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