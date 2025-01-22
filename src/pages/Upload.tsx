


// Upload.tsx
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ID } from 'appwrite';
import { toast, Toaster } from 'react-hot-toast';
import { FaCloudUploadAlt, FaFilePdf, FaTimes } from 'react-icons/fa';
import { account, databases, storage } from '../appwrite/appwrite';
import { conf } from '../config/conf';
import { UserRole } from '../types';

// Enums
enum Course {
  BTECH = 'btech'
}

enum Branch {
  CSE = 'CSE',
  IT = 'IT',
  EE = 'EE',
  ECE = 'ECE',
  ME = 'ME',
  CE = 'CE'
}

enum ResourceType {
  NOTES = 'NOTES',
  PYQ = 'PYQ',
  PRACTICAL = 'PRACTICAL'
}

// // Types
// interface ResourceDocument {
//   subject: string;
//   semester: number;
//   uploadedBy: string;
//   resourceType: ResourceType;
//   fileId: string;
//   fileName: string;
//   originalName: string;
//   course: Course;
//   branch: Branch;
//   academicYear: string;
//   downloads: number;
//   fileSize: number;
// }

interface FormData {
  course: Course;
  branch: Branch;
  semester: string;
  subject: string;
  resourceType: ResourceType;
  academicYear: string;
  file: File | null;
}

// Constants
const branches = [
  { id: Branch.CSE, name: 'CSE' },
  { id: Branch.IT, name: 'IT' },
  { id: Branch.EE, name: 'EE' },
  { id: Branch.ECE, name: 'ECE' },
  { id: Branch.ME, name: 'ME' },
  { id: Branch.CE, name: 'CE' }
];

const resourceTypes = [
  { id: ResourceType.NOTES, name: 'NOTES' },
  { id: ResourceType.PYQ, name: 'PYQ' },
  { id: ResourceType.PRACTICAL, name: 'PRACTICAL' }
];

const academicYears = ['2024-25','2023-24', '2022-23'];
const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20MB

const LoadingSpinner = () => (
  <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent" />
);

const Upload = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [standardizedFileName, setStandardizedFileName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<FormData>({
    course: Course.BTECH,
    branch: '' as Branch,
    semester: '',
    subject: '',
    resourceType: '' as ResourceType,
    academicYear: '',
    file: null
  });

  // Auth check on mount
  useEffect(() => {
    let isMounted = true;

    const checkAuth = async () => {
      try {
        setIsLoading(true);
        const currentUser = await account.get();
        if (!isMounted) return;
        setUser(currentUser);

        const userDoc = await databases.getDocument(
          conf.appwriteDatabaseId,
          conf.appwriteUserCollectionId,
          currentUser.$id
        );
        setUserRole(userDoc.role);
      } catch (error: any) {
        if (!isMounted) return;
        
        if (error?.code === 401) {
          toast.error('Please login first');
          navigate('/login');
        } else {
          console.error('Auth error:', error);
          toast.error('Something went wrong');
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    checkAuth();
    return () => { isMounted = false; };
  }, [navigate]);

  // Generate standardized filename
  useEffect(() => {
    if (formData.course && formData.branch && formData.academicYear && 
        formData.subject && formData.resourceType) {
      const fileName = `${formData.course}_${formData.branch}_${formData.academicYear}_sem${
        formData.semester}_${formData.subject.toLowerCase().replace(/\s+/g, '_')}_${
        formData.resourceType.toLowerCase()}.pdf`;
      setStandardizedFileName(fileName.toLowerCase());
    }
  }, [formData]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (file) {
      if (!file.type.includes('pdf')) {
        toast.error('Please upload PDF files only');
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        toast.error('File size must be less than 20MB');
        return;
      }

      setFormData(prev => ({ ...prev, file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.file || !standardizedFileName) {
      toast.error('Please fill all fields and select a file');
      return;
    }

    if (userRole !== UserRole.ADMIN && userRole !== UserRole.CR) {
      toast.error('You do not have permission to upload');
      return;
    }

    const toastId = toast.loading('Uploading...');
    setIsUploading(true);
    setUploadProgress(0);

    try {
      const standardizedFile = new File([formData.file], standardizedFileName, {
        type: 'application/pdf'
      });

      const uploadResponse = await storage.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        standardizedFile
      );

      const fileSizeInMB = Math.round(formData.file.size / (1024 * 1024));

      await databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteResourceCollectionId,
        ID.unique(),
        {
          subject: formData.subject,
          semester: Number(formData.semester),
          uploadedBy: user.$id,
          resourceType: formData.resourceType,
          fileId: uploadResponse.$id,
          fileName: standardizedFileName,
          originalName: formData.file.name,
          course: formData.course,
          branch: formData.branch,
          academicYear: formData.academicYear,
          downloads: 0,
          fileSize: fileSizeInMB,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      );

      toast.success('Upload successful!', { id: toastId });
      resetForm();
    } catch (error: any) {
      console.error('Upload error:', error);
      toast.error(error.message || 'Upload failed', { id: toastId });
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const resetForm = () => {
    setFormData({
      course: Course.BTECH,
      branch: '' as Branch,
      semester: '',
      subject: '',
      resourceType: '' as ResourceType,
      academicYear: '',
      file: null
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 
        flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Toaster position="top-right" />

        <div className="text-center mb-12">
          <FaCloudUploadAlt className="mx-auto h-16 w-16 text-[#ff6600]" />
          <h1 className="text-3xl font-bold text-[#ff6600] mt-4">Upload Resources</h1>
          <p className="text-gray-400 mt-2">Share academic materials with your peers</p>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Course */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Course</label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    course: e.target.value as Course 
                  }))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
                  text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                >
                  <option value={Course.BTECH}>BTech</option>
                </select>
              </div>

              {/* Branch */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Branch</label>
                <select
                  value={formData.branch}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    branch: e.target.value as Branch 
                  }))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
                  text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                  required
                >
                  <option value="">Select Branch</option>
                  {branches.map(branch => (
                    <option key={branch.id} value={branch.id}>
                      {branch.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Semester */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Semester</label>
                <select
                  value={formData.semester}
                  onChange={(e) => setFormData(prev => ({ ...prev, semester: e.target.value }))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
                  text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                  required
                >
                  <option value="">Select Semester</option>
                  {[1,2,3,4,5,6,7,8].map(sem => (
                    <option key={sem} value={sem}> sem{sem}</option>
                  ))}
                </select>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
                  text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                  placeholder="Enter subject name"
                  required
                />
              </div>

              {/* Resource Type */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Resource Type
                </label>
                <select
                  value={formData.resourceType}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev,
                    resourceType: e.target.value as ResourceType 
                  }))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
                  text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                  required
                >
                  <option value="">Select Resource Type</option>
                  {resourceTypes.map(type => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Academic Year */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Academic Year
                </label>
                <select
                  value={formData.academicYear}
                  onChange={(e) => setFormData(prev => ({ ...prev, academicYear: e.target.value }))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
                  text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                  required
                >
                  <option value="">Select Academic Year</option>
                  {academicYears.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Filename Preview */}
            {standardizedFileName && (
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <p className="text-gray-300 text-sm font-medium mb-2">
                  File will be saved as:
                </p>
                <p className="text-[#ff6600] font-mono break-all">
                  {standardizedFileName}
                </p>
              </div>
            )}

            {/* File Upload */}


            // File upload section with consistent styling
<div className="mt-6">
  <label className="block text-gray-300 text-sm font-medium mb-2">
    Upload PDF File (Max 20MB)
  </label>
  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border border-gray-700 
    rounded-lg hover:border-[#ff6600] bg-gray-800/50 transition-all duration-300">
    <div className="space-y-1 text-center">
      {formData.file ? (
        <div className="relative">
          <div className="flex items-center justify-center space-x-3">
            <FaFilePdf className="h-8 w-8 text-[#ff6600]" />
            <div className="flex flex-col items-start">
              <span className="text-gray-300 text-sm">{formData.file.name}</span>
              <span className="text-gray-500 text-xs">
                {(formData.file.size / (1024 * 1024)).toFixed(2)} MB
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, file: null }))}
            className="absolute -top-2 -right-2 text-gray-500 hover:text-[#ff6600] 
            transition-colors duration-300"
          >
            <FaTimes className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-2">
          <FaCloudUploadAlt className="h-12 w-12 text-[#ff6600]" />
          <label className="relative cursor-pointer rounded-md font-medium 
            text-gray-300 hover:text-[#ff6600] transition-colors duration-300">
            <span>Click to upload a PDF file</span>
            <input
              ref={fileInputRef}
              type="file"
              className="sr-only"
              accept=".pdf"
              onChange={handleFileChange}
            />
          </label>
          <p className="text-xs text-gray-500">Maximum file size: 20MB</p>
        </div>
      )}
    </div>
  </div>
</div>

{/* Progress Bar */}
{isUploading && (
  <div className="mt-4 space-y-2">
    <div className="flex justify-between text-xs text-gray-400">
      <span>Uploading...</span>
      <span>{uploadProgress}%</span>
    </div>
    <div className="w-full bg-gray-800 rounded-full h-2">
      <div
        className="bg-[#ff6600] h-2 rounded-full transition-all duration-300"
        style={{ width: `${uploadProgress}%` }}
      />
    </div>
  </div>
)}

{/* Submit Button */}
<button
  type="submit"
  disabled={isUploading || !formData.file}
  className={`w-full flex items-center justify-center gap-2 py-3 px-4 mt-6 
    border border-transparent rounded-lg shadow-sm text-sm font-medium 
    text-black transition-all duration-300
    ${isUploading || !formData.file
      ? 'bg-gray-600 cursor-not-allowed opacity-75' 
      : 'bg-[#ff6600] hover:bg-[#ff8533] hover:shadow-lg hover:shadow-[#ff6600]/20'
    }`}
>
  {isUploading ? (
    <>
      <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent" />
      <span>Uploading...</span>
    </>
  ) : (
    'Upload Resource'
  )}
</button>

          </form>
        </div>
      </div>
    </div>
  );
} ;

export default Upload;