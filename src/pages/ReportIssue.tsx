

import { useState, useRef } from 'react';
import { FaExclamationTriangle, FaUpload, FaTimes } from 'react-icons/fa';
import { toast, Toaster } from 'react-hot-toast';

const ReportIssue = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    issueType: '',
    title: '',
    description: '',
    priority: 'medium',
    email: '',
    screenshot: null as File | null
  });

  const issueTypes = [
    { value: 'bug', label: 'Bug Report' },
    { value: 'broken-link', label: 'Broken Link' },
    { value: 'missing-content', label: 'Missing Content' },
    { value: 'suggestion', label: 'Suggestion' },
    { value: 'other', label: 'Other' }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size should be less than 5MB');
        return;
      }
      setFormData(prev => ({ ...prev, screenshot: file }));
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const removeImage = () => {
    setFormData(prev => ({ ...prev, screenshot: null }));
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // API call simulation
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Issue reported successfully!');
      setFormData({
        issueType: '',
        title: '',
        description: '',
        priority: 'medium',
        email: '',
        screenshot: null
      });
      setPreviewUrl(null);
    } catch (error) {
      toast.error('Failed to report issue');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full space-y-8 bg-black p-8 rounded-xl shadow-2xl">
        <Toaster position="top-right" />

        <div className="text-center">
          <FaExclamationTriangle className="mx-auto h-12 w-12 text-[#ff6600]" />
          <h2 className="mt-4 text-3xl font-bold text-[#ff6600]">Report an Issue</h2>
          <p className="mt-2 text-gray-400">Help us improve by reporting any issues you encounter</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Issue Type*
              </label>
              <select
                required
                name="issueType"
                value={formData.issueType}
                onChange={(e) => setFormData(prev => ({ ...prev, issueType: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 
                text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
              >
                <option value="">Select Issue Type</option>
                {issueTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Issue Title*
              </label>
              <input
                required
                type="text"
                name="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 
                text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                placeholder="Brief title of the issue"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Description*
              </label>
              <textarea
                required
                name="description"
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 
                text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                placeholder="Please provide detailed information about the issue..."
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Priority Level
              </label>
              <select
                name="priority"
                value={formData.priority}
                onChange={(e) => setFormData(prev => ({ ...prev, priority: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 
                text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
              </select>
            </div>

            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Your Email*
              </label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 
                text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                placeholder="your.email@knit.ac.in"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Screenshot (Optional)
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-700 
              border-dashed rounded-lg hover:border-[#ff6600] transition-colors duration-300">
                <div className="space-y-1 text-center">
                  <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-400">
                    <label className="relative cursor-pointer rounded-md font-medium 
                    text-[#ff6600] hover:text-[#ff8533]">
                      <span>Upload a file</span>
                      <input
                        ref={fileInputRef}
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-400">
                    PNG, JPG, GIF up to 5MB
                  </p>
                </div>
              </div>
              {previewUrl && (
                <div className="mt-3 relative">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="mt-2 max-h-48 rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 p-1 bg-red-500 rounded-full 
                    hover:bg-red-600 transition-colors duration-300"
                  >
                    <FaTimes className="h-4 w-4 text-white" />
                  </button>
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex justify-center py-3 px-4 border border-transparent 
            rounded-lg shadow-sm text-sm font-medium text-black 
            ${isLoading ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#ff6600] hover:bg-[#ff8533]'} 
            transition duration-300`}
          >
            {isLoading ? 'Submitting...' : 'Submit Report'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportIssue;