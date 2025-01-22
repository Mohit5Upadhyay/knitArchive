
// // import { useState } from 'react';
// // import { toast, Toaster } from 'react-hot-toast';
// // import { FaFilter, FaSearch } from 'react-icons/fa';

// // interface Resource {
// //   id: string;
// //   title: string;
// //   type: string;
// //   branch: string;
// //   semester: string;
// //   subject: string;
// //   year: string;
// //   session: string;
// //   downloadUrl: string;
// // }

// // const FilterResource = () => {
// //   const [filters, setFilters] = useState({
// //     course: 'btech',
// //     branch: '',
// //     session: '',
// //     resourceType: '',
// //     year: '',
// //     subject: '',
// //     semester: ''
// //   });

// //   const [resources, setResources] = useState<Resource[]>([]);
// //   const [isLoading, setIsLoading] = useState(false);

// //   const resourceTypes = [
// //     'Previous Year Questions',
// //     'Notes',
// //     'Assignments',
// //     'Practical Files',
// //     'Books',
// //     'Other Materials'
// //   ];

// //   const branches = [
// //     { id: 'cse', name: 'Computer Science' },
// //     { id: 'it', name: 'Information Technology' },
// //     { id: 'ee', name: 'Electrical' },
// //     { id: 'ece', name: 'Electronics' }
// //   ];

// //   const sessions = ['2022-23', '2023-24', '2024-25'];

// //   const handleFilter = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setIsLoading(true);

// //     try {
// //       // API call simulation
// //       await new Promise(resolve => setTimeout(resolve, 1500));
      
// //       // Simulated filtered data
// //       const filteredResults = [
// //         {
// //           id: '1',
// //           title: 'Sample Resource',
// //           type: filters.resourceType,
// //           branch: filters.branch,
// //           semester: filters.semester,
// //           subject: filters.subject,
// //           year: filters.year,
// //           session: filters.session,
// //           downloadUrl: '#'
// //         }
// //       ];

// //       setResources(filteredResults);
// //       toast.success('Resources filtered successfully!');
// //     } catch (error) {
// //       toast.error('Failed to filter resources');
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4">
// //       <div className="max-w-7xl mx-auto">
// //         <Toaster position="top-right" />

// //         {/* Header */}
// //         <div className="text-center mb-12">
// //           <FaFilter className="mx-auto h-12 w-12 text-[#ff6600]" />
// //           <h1 className="text-3xl font-bold text-[#ff6600] mt-4">Filter Resources</h1>
// //           <p className="text-gray-400 mt-2">Find specific academic resources</p>
// //         </div>

// //         {/* Filter Form */}
// //         <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-800">
// //           <form onSubmit={handleFilter} className="space-y-6">
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //               {/* Course */}
// //               <div>
// //                 <label className="block text-gray-300 text-sm font-medium mb-2">
// //                   Course
// //                 </label>
// //                 <select
// //                   value={filters.course}
// //                   onChange={(e) => setFilters(prev => ({ ...prev, course: e.target.value }))}
// //                   className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
// //                   text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
// //                 >
// //                   <option value="btech">B.Tech</option>
// //                 </select>
// //               </div>

// //               {/* Branch */}
// //               <div>
// //                 <label className="block text-gray-300 text-sm font-medium mb-2">
// //                   Branch
// //                 </label>
// //                 <select
// //                   value={filters.branch}
// //                   onChange={(e) => setFilters(prev => ({ ...prev, branch: e.target.value }))}
// //                   className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
// //                   text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
// //                   required
// //                 >
// //                   <option value="">Select Branch</option>
// //                   {branches.map(branch => (
// //                     <option key={branch.id} value={branch.id}>
// //                       {branch.name}
// //                     </option>
// //                   ))}
// //                 </select>
// //               </div>

// //               {/* Session */}
// //               <div>
// //                 <label className="block text-gray-300 text-sm font-medium mb-2">
// //                   Session
// //                 </label>
// //                 <select
// //                   value={filters.session}
// //                   onChange={(e) => setFilters(prev => ({ ...prev, session: e.target.value }))}
// //                   className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
// //                   text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
// //                   required
// //                 >
// //                   <option value="">Select Session</option>
// //                   {sessions.map(session => (
// //                     <option key={session} value={session}>
// //                       {session}
// //                     </option>
// //                   ))}
// //                 </select>
// //               </div>

// //               {/* Resource Type */}
// //               <div>
// //                 <label className="block text-gray-300 text-sm font-medium mb-2">
// //                   Resource Type
// //                 </label>
// //                 <select
// //                   value={filters.resourceType}
// //                   onChange={(e) => setFilters(prev => ({ ...prev, resourceType: e.target.value }))}
// //                   className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
// //                   text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
// //                   required
// //                 >
// //                   <option value="">Select Resource Type</option>
// //                   {resourceTypes.map(type => (
// //                     <option key={type} value={type}>
// //                       {type}
// //                     </option>
// //                   ))}
// //                 </select>
// //               </div>

// //               {/* Semester */}
// //               <div>
// //                 <label className="block text-gray-300 text-sm font-medium mb-2">
// //                   Semester
// //                 </label>
// //                 <select
// //                   value={filters.semester}
// //                   onChange={(e) => setFilters(prev => ({ ...prev, semester: e.target.value }))}
// //                   className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
// //                   text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
// //                   required
// //                 >
// //                   <option value="">Select Semester</option>
// //                   {[1,2,3,4,5,6,7,8].map(sem => (
// //                     <option key={sem} value={sem}>
// //                       Semester {sem}
// //                     </option>
// //                   ))}
// //                 </select>
// //               </div>

// //               {/* Subject */}
// //               <div>
// //                 <label className="block text-gray-300 text-sm font-medium mb-2">
// //                   Subject
// //                 </label>
// //                 <input
// //                   type="text"
// //                   value={filters.subject}
// //                   onChange={(e) => setFilters(prev => ({ ...prev, subject: e.target.value }))}
// //                   className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
// //                   text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
// //                   placeholder="Enter subject name"
// //                   required
// //                 />
// //               </div>
// //             </div>

// //             {/* Submit Button */}
// //             <div className="flex justify-center mt-6">
// //               <button
// //                 type="submit"
// //                 disabled={isLoading}
// //                 className={`flex items-center px-6 py-3 rounded-lg text-black font-medium
// //                 ${isLoading ? 'bg-gray-600' : 'bg-[#ff6600] hover:bg-[#ff8533]'} 
// //                 transition duration-300`}
// //               >
// //                 <FaSearch className="mr-2" />
// //                 {isLoading ? 'Filtering...' : 'Filter Resources'}
// //               </button>
// //             </div>
// //           </form>
// //         </div>

// //         {/* Results Section */}
// //         {resources.length > 0 && (
// //           <div className="mt-12">
// //             <h2 className="text-2xl font-bold text-[#ff6600] mb-6">Found Resources</h2>
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //               {resources.map(resource => (
// //                 <div
// //                   key={resource.id}
// //                   className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 
// //                   hover:border-[#ff6600] transition duration-300"
// //                 >
// //                   <h3 className="text-[#ff6600] font-bold mb-2">{resource.title}</h3>
// //                   <p className="text-gray-400 text-sm mb-4">{resource.type}</p>
// //                   <div className="flex justify-between items-center">
// //                     <span className="text-gray-500 text-sm">
// //                       {resource.subject} - Sem {resource.semester}
// //                     </span>
// //                     <a
// //                       href={resource.downloadUrl}
// //                       className="text-[#ff6600] hover:text-[#ff8533] transition duration-300"
// //                     >
// //                       Download
// //                     </a>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default FilterResource;





// // import { useState } from 'react';
// // import { toast, Toaster } from 'react-hot-toast';
// // import { FaFilter, FaSearch, FaFilePdf, FaTimes } from 'react-icons/fa';
// // import { Dialog, DialogContent } from "@/components/ui/dialog";

// // interface Resource {
// //   id: string;
// //   title: string;
// //   type: string;
// //   branch: string;
// //   semester: string;
// //   subject: string;
// //   year: string;
// //   session: string;
// //   downloadUrl: string;
// //   previewUrl?: string;
// // }

// // const PdfPreviewDialog = ({ isOpen, onClose, url, title }: { 
// //   isOpen: boolean; 
// //   onClose: () => void; 
// //   url: string;
// //   title: string;
// // }) => {
// //   return (
// //     <Dialog open={isOpen} onOpenChange={onClose}>
// //       <DialogContent className="max-w-4xl w-full h-[80vh] p-0 bg-gray-900">
// //         <div className="flex justify-between items-center p-4 border-b border-gray-800">
// //           <h3 className="text-lg font-medium text-gray-100">{title}</h3>
// //           <button
// //             onClick={onClose}
// //             className="text-gray-400 hover:text-gray-200 transition-colors"
// //           >
// //             <FaTimes size={20} />
// //           </button>
// //         </div>
// //         <div className="h-full w-full bg-gray-800">
// //           <iframe
// //             src={url}
// //             className="w-full h-full"
// //             title={`Preview of ${title}`}
// //           />
// //         </div>
// //       </DialogContent>
// //     </Dialog>
// //   );
// // };

// // const FilterResource = () => {
// //   const [filters, setFilters] = useState({
// //     course: 'btech',
// //     branch: '',
// //     session: '',
// //     resourceType: '',
// //     year: '',
// //     subject: '',
// //     semester: ''
// //   });

// //   const [resources, setResources] = useState<Resource[]>([]);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [previewState, setPreviewState] = useState<{
// //     isOpen: boolean;
// //     url: string;
// //     title: string;
// //   }>({
// //     isOpen: false,
// //     url: '',
// //     title: ''
// //   });

// //   const resourceTypes = [
// //     'Previous Year Questions',
// //     'Notes',
// //     'Assignments',
// //     'Practical Files',
// //     'Books',
// //     'Other Materials'
// //   ];

// //   const branches = [
// //     { id: 'cse', name: 'Computer Science' },
// //     { id: 'it', name: 'Information Technology' },
// //     { id: 'ee', name: 'Electrical' },
// //     { id: 'ece', name: 'Electronics' }
// //   ];

// //   const sessions = ['2022-23', '2023-24', '2024-25'];

// //   const handlePreview = (resource: Resource) => {
// //     if (resource.previewUrl) {
// //       setPreviewState({
// //         isOpen: true,
// //         url: resource.previewUrl,
// //         title: resource.title
// //       });
// //     } else {
// //       toast.error('Preview not available for this resource');
// //     }
// //   };

// //   const handleFilter = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setIsLoading(true);

// //     try {
// //       // API call simulation
// //       await new Promise(resolve => setTimeout(resolve, 1500));
      
// //       // Simulated filtered data with preview URLs
// //       const filteredResults = [
// //         {
// //           id: '1',
// //           title: 'Sample Resource',
// //           type: filters.resourceType,
// //           branch: filters.branch,
// //           semester: filters.semester,
// //           subject: filters.subject,
// //           year: filters.year,
// //           session: filters.session,
// //           downloadUrl: '#',
// //           previewUrl: 'https://example.com/sample.pdf' // Replace with actual PDF URL
// //         }
// //       ];

// //       setResources(filteredResults);
// //       toast.success('Resources filtered successfully!');
// //     } catch (error) {
// //       toast.error('Failed to filter resources');
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4">
// //       <div className="max-w-7xl mx-auto">
// //         <Toaster position="top-right" />

// //         {/* Header */}
// //         <div className="text-center mb-12">
// //           <FaFilter className="mx-auto h-12 w-12 text-[#ff6600]" />
// //           <h1 className="text-3xl font-bold text-[#ff6600] mt-4">Filter Resources</h1>
// //           <p className="text-gray-400 mt-2">Find specific academic resources</p>
// //         </div>

// //         {/* Filter Form */}
// //         <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-800">
// //           <form onSubmit={handleFilter} className="space-y-6">
// //             {/* ... (previous form code remains the same) ... */}
// //           </form>
// //         </div>

// //         {/* Results Section */}
// //         {resources.length > 0 && (
// //           <div className="mt-12">
// //             <h2 className="text-2xl font-bold text-[#ff6600] mb-6">Found Resources</h2>
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //               {resources.map(resource => (
// //                 <div
// //                   key={resource.id}
// //                   className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 
// //                   hover:border-[#ff6600] transition duration-300"
// //                 >
// //                   <h3 className="text-[#ff6600] font-bold mb-2">{resource.title}</h3>
// //                   <p className="text-gray-400 text-sm mb-4">{resource.type}</p>
// //                   <div className="flex justify-between items-center">
// //                     <span className="text-gray-500 text-sm">
// //                       {resource.subject} - Sem {resource.semester}
// //                     </span>
// //                     <div className="flex gap-2">
// //                       <button
// //                         onClick={() => handlePreview(resource)}
// //                         className="text-[#ff6600] hover:text-[#ff8533] transition duration-300"
// //                       >
// //                         <FaFilePdf size={20} />
// //                       </button>
// //                       <a
// //                         href={resource.downloadUrl}
// //                         className="text-[#ff6600] hover:text-[#ff8533] transition duration-300"
// //                       >
// //                         Download
// //                       </a>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}

// //         {/* PDF Preview Dialog */}
// //         <PdfPreviewDialog
// //           isOpen={previewState.isOpen}
// //           onClose={() => setPreviewState(prev => ({ ...prev, isOpen: false }))}
// //           url={previewState.url}
// //           title={previewState.title}
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default FilterResource;







// // PDF VIEWER IMPLEMENTED


// // import { useState } from 'react';
// // import { toast, Toaster } from 'react-hot-toast';
// // import { FaFilter, FaSearch, FaEye, FaTimes } from 'react-icons/fa';
// // import { storage } from '../appwrite/config';
// // import { Document, Page, pdfjs } from 'react-pdf';
// // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// // interface Resource {
// //   id: string;
// //   fileId: string;
// //   fileName: string;
// //   type: string;
// //   branch: string;
// //   semester: string;
// //   subject: string;
// //   academicYear: string;
// //   resourceType: string;
// // }

// // const FilterResource = () => {
// //   const [filters, setFilters] = useState({
// //     course: 'btech',
// //     branch: '',
// //     semester: '',
// //     subject: '',
// //     resourceType: '',
// //     academicYear: ''
// //   });

// //   const [resources, setResources] = useState<Resource[]>([]);
// //   const [loading, setLoading] = useState(false);
// //   const [previewUrl, setPreviewUrl] = useState<string | null>(null);
// //   const [showPreview, setShowPreview] = useState(false);
// //   const [numPages, setNumPages] = useState<number | null>(null);
// //   const [pageNumber, setPageNumber] = useState(1);

// //   const handlePreview = async (fileId: string) => {
// //     try {
// //       const result = await storage.getFileView(
// //         import.meta.env.VITE_APPWRITE_BUCKET_ID,
// //         fileId
// //       );
      
// //       setPreviewUrl(URL.createObjectURL(result));
// //       setShowPreview(true);
// //       setPageNumber(1);
// //     } catch (error) {
// //       toast.error('Failed to load PDF preview');
// //     }
// //   };

// //   const closePreview = () => {
// //     if (previewUrl) {
// //       URL.revokeObjectURL(previewUrl);
// //     }
// //     setPreviewUrl(null);
// //     setShowPreview(false);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4">
// //       <div className="max-w-7xl mx-auto">
// //         <Toaster position="top-right" />

// //         {/* Header */}
// //         <div className="text-center mb-12">
// //           <FaFilter className="mx-auto h-12 w-12 text-[#ff6600]" />
// //           <h1 className="text-3xl font-bold text-[#ff6600] mt-4">Filter Resources</h1>
// //           <p className="text-gray-400 mt-2">Find specific academic resources</p>
// //         </div>

// //         {/* Filter Form */}
// //         {...existing filter form code...}

// //         {/* Results */}
// //         <div className="mt-8 grid gap-4">
// //           {resources.map((resource) => (
// //             <div 
// //               key={resource.id}
// //               className="bg-gray-800/50 p-4 rounded-lg flex justify-between items-center"
// //             >
// //               <div>
// //                 <h3 className="text-gray-200 font-medium">{resource.fileName}</h3>
// //                 <p className="text-gray-400 text-sm">
// //                   {resource.subject} • {resource.resourceType} • Sem {resource.semester}
// //                 </p>
// //               </div>
// //               <button
// //                 onClick={() => handlePreview(resource.fileId)}
// //                 className="px-4 py-2 bg-[#ff6600] text-black rounded-lg hover:bg-[#ff8533] 
// //                 transition-colors flex items-center gap-2"
// //               >
// //                 <FaEye /> Preview
// //               </button>
// //             </div>
// //           ))}
// //         </div>

// //         {/* PDF Preview Modal */}
// //         {showPreview && previewUrl && (
// //           <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
// //             <div className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto p-4">
// //               <div className="flex justify-between items-center mb-4">
// //                 <h3 className="text-gray-200 font-medium">PDF Preview</h3>
// //                 <button
// //                   onClick={closePreview}
// //                   className="text-gray-400 hover:text-white"
// //                 >
// //                   <FaTimes className="h-6 w-6" />
// //                 </button>
// //               </div>
              
// //               <Document
// //                 file={previewUrl}
// //                 onLoadSuccess={({ numPages }) => setNumPages(numPages)}
// //                 className="mx-auto"
// //               >
// //                 <Page 
// //                   pageNumber={pageNumber} 
// //                   className="max-w-full"
// //                   renderTextLayer={false}
// //                   renderAnnotationLayer={false}
// //                 />
// //               </Document>

// //               {numPages && (
// //                 <div className="flex justify-center items-center gap-4 mt-4">
// //                   <button
// //                     onClick={() => setPageNumber(page => Math.max(1, page - 1))}
// //                     disabled={pageNumber <= 1}
// //                     className="px-4 py-2 bg-gray-800 rounded-lg disabled:opacity-50"
// //                   >
// //                     Previous
// //                   </button>
// //                   <span className="text-gray-400">
// //                     Page {pageNumber} of {numPages}
// //                   </span>
// //                   <button
// //                     onClick={() => setPageNumber(page => Math.min(numPages, page + 1))}
// //                     disabled={pageNumber >= numPages}
// //                     className="px-4 py-2 bg-gray-800 rounded-lg disabled:opacity-50"
// //                   >
// //                     Next
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default FilterResource;






// // FilterResources.tsx
// import { useEffect, useState } from 'react';
// import { toast, Toaster } from 'react-hot-toast';
// import { FaFilter, FaSearch, FaTimes } from 'react-icons/fa';
// import { databases, storage, account } from '../appwrite/appwrite';
// import { conf } from '../config/conf';
// import { Query } from 'appwrite';
// import { useNavigate } from 'react-router-dom';

// // Enums
// enum Course {
//   BTECH = 'btech'
// }

// enum Branch {
//   CSE = 'CSE',
//   IT = 'IT',
//   ELECTRICAL = 'ELECTRICAL',
//   ELECTRONICS = 'ELECTRONICS',
//   MECHANICAL = 'MECHANICAL',
//   CIVIL = 'CIVIL'
// }

// enum ResourceType {
//   NOTES = 'NOTES',
//   PYQ = 'PYQ',
//   PRACTICAL = 'PRACTICAL'
// }

// // Types
// interface Resource {
//   id: string;
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

// interface Filters {
//   course: Course;
//   branch: string;
//   academicYear: string;
//   resourceType: string;
//   year: string;
//   subject: string;
//   semester: string;
// }


// // Utility function to generate standardized fileId
// const generateStandarFileNamePattern = (filters: Partial<Filters>): string => {
//   const parts = [];
  
//   if (filters.course) parts.push(filters.course);
//   if (filters.branch) parts.push(filters.branch);
//   if (filters.academicYear) parts.push(filters.academicYear);
//   if(filters.semester) parts.push(filters.semester);
//   if (filters.subject) parts.push(filters.subject.toLowerCase().replace(/\s+/g, '_'));
//   if (filters.resourceType) parts.push(filters.resourceType.toLowerCase());
  
//   return parts.join('_');
// };

// // Preview Modal Component
// const PreviewModal = ({ 
//   resource, 
//   isOpen, 
//   onClose, 
//   isLoggedIn,
//   onDownload 
// }: { 
//   resource: Resource; 
//   isOpen: boolean; 
//   onClose: () => void;
//   isLoggedIn: boolean;
//   onDownload: () => void;
// }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
//       <div className="bg-gray-900 rounded-xl p-6 max-w-2xl w-full">
//         <div className="flex justify-between items-start mb-4">
//           <h3 className="text-xl font-bold text-white">{resource.subject}</h3>
//           <button 
//             onClick={onClose}
//             className="text-gray-400 hover:text-white"
//           >
//             <FaTimes />
//           </button>
//         </div>

//         <div className="space-y-4 mb-6">
//           <p className="text-gray-300">
//             <span className="font-medium">Type:</span> {resource.resourceType}
//           </p>
//           <p className="text-gray-300">
//             <span className="font-medium">Semester:</span> {resource.semester}
//           </p>
//           <p className="text-gray-300">
//             <span className="font-medium">Downloads:</span> {resource.downloads}
//           </p>
//         </div>

//         {isLoggedIn ? (
//           <button
//             onClick={onDownload}
//             className="w-full bg-[#ff6600] text-white rounded-lg py-2 px-4
//             hover:bg-[#ff8533] transition duration-300"
//           >
//             Download Resource
//           </button>
//         ) : (
//           <p className="text-center text-gray-400">
//             Please <a href="/login" className="text-[#ff6600] hover:text-[#ff8533]">login</a> to download
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// const FilterResource = () => {
//   const [filters, setFilters] = useState<Filters>({
//     course: Course.BTECH,
//     branch: '',
//     academicYear: '',
//     resourceType: '',
//     year: '',
//     subject: '',
//     semester: ''
//   });

//   const [resources, setResources] = useState<Resource[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [user, setUser] = useState<any>(null);
//   const [showPreview, setShowPreview] = useState(false);
//   const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
//   const navigate = useNavigate();

//   const resourceTypes = [
//     { id: ResourceType.NOTES, name: 'NOTES' },
//     { id: ResourceType.PYQ, name: 'PYQ' },
//     { id: ResourceType.PRACTICAL, name: 'PRACTICAL' }
//   ];

//   const branches = [
//     { id: Branch.CSE, name: 'CSE' },
//     { id: Branch.IT, name: 'IT' },
//     { id: Branch.ELECTRICAL, name: 'EE' },
//     { id: Branch.ELECTRONICS, name: 'ECE' },
//     { id: Branch.MECHANICAL, name: 'MECHANICAL' },
//     { id: Branch.CIVIL, name: 'CIVIL' }
//   ];

//   const academicYears = ['2022-23', '2023-24', '2024-25'];

//   // Check authentication
//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const currentUser = await account.get();
//         setUser(currentUser);
//       } catch (error) {
//         console.error('Auth error:', error);
//       }
//     };

//     checkAuth();
//   }, []);

//   const handleFilter = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
  
//     try {
//       // Generate fileName pattern based on filters
//       const fileNamePattern = generateStandarFileNamePattern(filters);
      
//       // Create query to match fileName pattern
//       const queries = [
//         Query.search('fileName', fileNamePattern.toLowerCase())
//       ];
  
//       // Add other filters if needed
//       if (filters.semester || filters.subject) {
//         queries.push(Query.equal('semester', parseInt(filters.semester)));
//         queries.push(Query.equal('subject', filters.subject));
//         queries.push(Query.equal('resourceType', filters.resourceType));  
//         queries.push(Query.equal('branch', filters.branch));
//         queries.push(Query.equal('academicYear', filters.academicYear));  
//         queries.push(Query.equal('course', filters.course));

//       }
  
//       // Fetch matching documents
//       const response = await databases.listDocuments(
//         conf.appwriteDatabaseId,
//         conf.appwriteResourceCollectionId,
//         queries
//       );
  
//       // Map response to resources
//       const filteredResources: Resource[] = response.documents.map(doc => ({
//         id: doc.$id,
//         fileId: doc.fileId, // This is what we need for downloads
//         fileName: doc.fileName,
//         originalName: doc.originalName,
//         subject: doc.subject,
//         semester: doc.semester,
//         uploadedBy: doc.uploadedBy,
//         resourceType: doc.resourceType,
//         course: doc.course,
//         branch: doc.branch,
//         academicYear: doc.academicYear,
//         downloads: doc.downloads,
//         fileSize: doc.fileSize
//       }));
  
//       setResources(filteredResources);
  
//       if (filteredResources.length === 0) {
//         toast('No resources found with matching filename pattern');
//       } else {
//         toast.success(`Found ${filteredResources.length} matching resources`);
//       }
  
//     } catch (error) {
//       console.error('Filter error:', error);
//       toast.error('Failed to filter resources');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const getFileUrl = (fileId: string) => {
//     return storage.getFileView(
//       conf.appwriteBucketId,
//       fileId
//     );
//   };

//   const handleDownload = (fileId: string) => {
//     if (!user) {
//       toast.error('Please login to download resources');
//       navigate('/login');
//       return;
//     }

//     const url = getFileUrl(fileId);
//     window.open(url, '_blank');
//   };

//   const handlePreview = (resource: Resource) => {
//     setSelectedResource(resource);
//     setShowPreview(true);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         <Toaster position="top-right" />

//         {/* Header */}
//         <div className="text-center mb-12">
//           <FaFilter className="mx-auto h-12 w-12 text-[#ff6600]" />
//           <h1 className="text-3xl font-bold text-[#ff6600] mt-4">Filter Resources</h1>
//           <p className="text-gray-400 mt-2">Find specific academic resources</p>
//         </div>

//         {/* Filter Form */}
//         <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-800">
//           <form onSubmit={handleFilter} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {/* Course */}
//               <div>
//                 <label className="block text-gray-300 text-sm font-medium mb-2">Course</label>
//                 <select
//                   value={filters.course}
//                   onChange={(e) => setFilters(prev => ({ 
//                     ...prev, 
//                     course: e.target.value as Course 
//                   }))}
//                   className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
//                   text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
//                 >
//                   <option value={Course.BTECH}>B.Tech</option>
//                 </select>
//               </div>

//               {/* Branch */}
//               <div>
//                 <label className="block text-gray-300 text-sm font-medium mb-2">Branch</label>
//                 <select
//                   value={filters.branch}
//                   onChange={(e) => setFilters(prev => ({ 
//                     ...prev, 
//                     branch: e.target.value 
//                   }))}
//                   className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
//                   text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
//                   required
//                 >
//                   <option value="">Select Branch</option>
//                   {branches.map(branch => (
//                     <option key={branch.id} value={branch.id}>{branch.name}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Resource Type */}
//               <div>
//                 <label className="block text-gray-300 text-sm font-medium mb-2">Resource Type</label>
//                 <select
//                   value={filters.resourceType}
//                   onChange={(e) => setFilters(prev => ({ 
//                     ...prev, 
//                     resourceType: e.target.value 
//                   }))}
//                   className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
//                   text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
//                   required
//                 >
//                   <option value="">Select Resource Type</option>
//                   {resourceTypes.map(type => (
//                     <option key={type.id} value={type.id}>{type.name}</option>
//                   ))}
//                 </select>
//               </div>   



//               {/* Academic Year */}         
//             <div>
//                 <label className="block text-gray-300 text-sm font-medium mb-2">
//                   academicYear
//                 </label>
//                  <select
//                   value={filters.academicYear}
//                   onChange={(e) => setFilters(prev => ({ ...prev, academicYear: e.target.value }))}
//                   className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
//                   text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
//                   required
//                 >
//                   <option value="">Select academicYear</option>
//                   {academicYears.map(academicYear => (
//                     <option key={academicYear} value={academicYear}>
//                       {academicYear}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Semester */}
//               <div>
//                 <label className="block text-gray-300 text-sm font-medium mb-2">Semester</label>
//                 <select
//                   value={filters.semester}
//                   onChange={(e) => setFilters(prev => ({ ...prev, semester: e.target.value }))}
//                   className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
//                   text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
//                   required
//                 >
//                   <option value="">Select Semester</option>
//                   {[1,2,3,4,5,6,7,8].map(sem => (
//                     <option key={sem} value={sem}>Semester {sem}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Subject */}
//               {/* <div>
//                 <label className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
//                 <input
//                   type="text"
//                   value={filters.subject}
//                   onChange={(e) => setFilters(prev => ({ ...prev, subject: e.target.value }))}
//                   className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
//                   text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
//                   placeholder="Enter subject name"
//                 />
//               </div> */}
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-center mt-6">
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className={`flex items-center px-6 py-3 rounded-lg text-black font-medium
//                 ${isLoading ? 'bg-gray-600' : 'bg-[#ff6600] hover:bg-[#ff8533]'} 
//                 transition duration-300`}
//               >
//                 <FaSearch className="mr-2" />
//                 {isLoading ? 'Filtering...' : 'Filter Resources'}
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Results Section */}
//         {resources.length > 0 && (
//           <div className="mt-12">
//             <h2 className="text-2xl font-bold text-[#ff6600] mb-6">Found Resources</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {resources.map(resource => (
//                 <div
//                   key={resource.id}
//                   className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 
//                   hover:border-[#ff6600] transition duration-300"
//                 >
//                   <div className="flex justify-between items-start mb-4">
//                     <div>
//                       <h3 className="text-white font-medium">{resource.subject}</h3>
//                       <p className="text-gray-400 text-sm">
//                         Semester {resource.semester} | {resource.resourceType}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex justify-between items-center mt-4">
//                     <span className="text-gray-500 text-sm">
//                       Downloads: {resource.downloads}
//                     </span>
//                     <button
//                       onClick={() => handlePreview(resource)}
//                       className="text-[#ff6600] hover:text-[#ff8533] transition duration-300"
//                     >
//                       Preview
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {selectedResource && (
//         <PreviewModal
//           resource={selectedResource}
//           isOpen={showPreview}
//           onClose={() => setShowPreview(false)}
//           isLoggedIn={!!user}
//           onDownload={() => handleDownload(selectedResource.fileId)}
//         />
//       )}
//     </div>
//   );
// };

// export default FilterResource;













// FilterResources.tsx
import { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { FaFilter, FaSearch, FaTimes } from 'react-icons/fa';
import { databases, storage, account } from '../appwrite/appwrite';
import { conf } from '../config/conf';
import { Query } from 'appwrite';
import { useNavigate , useLocation, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

// Enums
enum Course {
  BTECH = 'btech'
}

enum Branch {
  CSE = 'CSE',
  IT = 'IT',
  ELECTRICAL = 'ELECTRICAL',
  ELECTRONICS = 'ELECTRONICS',
  MECHANICAL = 'MECHANICAL',
  CIVIL = 'CIVIL'
}

enum ResourceType {
  NOTES = 'NOTES',
  PYQ = 'PYQ',
  PRACTICAL = 'PRACTICAL'
}

// Types
interface Resource {
  id: string;
  subject: string;
  semester: number;
  uploadedBy: string;
  resourceType: ResourceType;
  fileId: string;
  fileName: string;
  originalName: string;
  course: Course;
  branch: Branch;
  academicYear: string;
  downloads: number;
  fileSize: number;
}

interface Filters {
  course: Course;
  branch: string;
  academicYear: string;
  resourceType: string;
  year: string;
  subject: string;
  semester: string;
}

// Utility function to generate standardized fileId
const generateStandarFileNamePattern = (filters: Partial<Filters>): string => {
  const parts = [];
  
  if (filters.course) parts.push(filters.course);
  if (filters.branch) parts.push(filters.branch);
  if (filters.academicYear) parts.push(filters.academicYear);
  if(filters.semester) parts.push(filters.semester);
  if (filters.subject) parts.push(filters.subject.toLowerCase().replace(/\s+/g, '_'));
  if (filters.resourceType) parts.push(filters.resourceType.toLowerCase());
  
  return parts.join('_');
};

// Preview Modal Component
const PreviewModal = ({ 
  resource, 
  isOpen, 
  onClose, 
  isLoggedIn,
  onDownload 
}: { 
  resource: Resource; 
  isOpen: boolean; 
  onClose: () => void;
  isLoggedIn: boolean;
  onDownload: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-xl p-6 max-w-2xl w-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">{resource.subject}</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <FaTimes />
          </button>
        </div>

        <div className="space-y-4 mb-6">
          <p className="text-gray-300">
            <span className="font-medium">Type:</span> {resource.resourceType}
          </p>
          <p className="text-gray-300">
            <span className="font-medium">Semester:</span> {resource.semester}
          </p>
          <p className="text-gray-300">
            <span className="font-medium">Downloads:</span> {resource.downloads}
          </p>
        </div>

        {isLoggedIn ? (
          <button
            onClick={onDownload}
            className="w-full bg-[#ff6600] text-white rounded-lg py-2 px-4
            hover:bg-[#ff8533] transition duration-300"
          >
            Download Resource
          </button>
        ) : (
          <p className="text-center text-gray-400">
            Please <a href="/login" className="text-[#ff6600] hover:text-[#ff8533]">login</a> to download
          </p>
        )}
      </div>
    </div>
  );
};

const FilterResource = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialBranch = queryParams.get('branch') || '';
  const [filters, setFilters] = useState<Filters>({
    course: Course.BTECH,
    branch: initialBranch,
    academicYear: '',
    resourceType: '',
    year: '',
    subject: '',
    semester: ''
  });
  const [searchParams] = useSearchParams();
  const [resources, setResources] = useState<Resource[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  // const [downloadingFileId, setDownloadingFileId] = useState<string | null>(null);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const resourceTypes = [
    { id: ResourceType.NOTES, name: 'NOTES' },
    { id: ResourceType.PYQ, name: 'PYQ' },
    { id: ResourceType.PRACTICAL, name: 'PRACTICAL' }
  ];

  const branches = [
    { id: Branch.CSE, name: 'CSE' },
    { id: Branch.IT, name: 'IT' },
    { id: Branch.ELECTRICAL, name: 'EE' },
    { id: Branch.ELECTRONICS, name: 'ECE' },
    { id: Branch.MECHANICAL, name: 'MECHANICAL' },
    { id: Branch.CIVIL, name: 'CIVIL' }
  ];

  const academicYears = ['2024-25', '2023-24', '2022-23'];

  // Check authentication
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await account.get();
        setUser(currentUser);
      } catch (error) {
        console.error('Auth error:', error);
      }
    };

    checkAuth();
  }, []);

  const handleFilter = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      // Generate fileName pattern based on filters
      const fileNamePattern = generateStandarFileNamePattern(filters);
      
      // Create query to match fileName pattern
      const queries = [
        Query.search('fileName', fileNamePattern.toLowerCase())
      ];
  
      // Add other filters if needed
      if (filters.semester ) {
        queries.push(Query.equal('semester', parseInt(filters.semester)));
        // queries.push(Query.equal('subject', filters.subject));
        queries.push(Query.equal('resourceType', filters.resourceType));  
        queries.push(Query.equal('branch', filters.branch));
        queries.push(Query.equal('academicYear', filters.academicYear));  
        queries.push(Query.equal('course', filters.course));

      }
  
      // Fetch matching documents
      const response = await databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteResourceCollectionId,
        queries
      );
  
      // Map response to resources
      const filteredResources: Resource[] = response.documents.map(doc => ({
        id: doc.$id,
        fileId: doc.fileId, // This is what we need for downloads
        fileName: doc.fileName,
        originalName: doc.originalName,
        subject: doc.subject,
        semester: doc.semester,
        uploadedBy: doc.uploadedBy,
        resourceType: doc.resourceType,
        course: doc.course,
        branch: doc.branch,
        academicYear: doc.academicYear,
        downloads: doc.downloads,
        fileSize: doc.fileSize
      }));
  
      setResources(filteredResources);
  
      if (filteredResources.length === 0) {
        toast('No resources found with matching filename pattern');
      } else {
        toast.success(`Found ${filteredResources.length} matching resources`);
      }
  
    } catch (error) {
      console.error('Filter error:', error);
      toast.error('Failed to filter resources');
    } finally {
      setIsLoading(false);
    }
  };

  const getFileUrl = (fileId: string) => {
    return storage.getFileView(
      conf.appwriteBucketId,
      fileId
    );
  };

  const handleDownload = async (fileId: string, resourceId: string) => {
    try {
      // Check authentication
      if (!isAuthenticated) {
        toast.error('Please login to download resources');
        navigate('/login', { 
          state: { from: location.pathname }
        });
        return;
      }

      // setDownloadingFileId(fileId);
      const toastId = toast.loading('Starting download...');

      // Get file URL
      const url = getFileUrl(fileId);

      if (!url) {
        throw new Error('Failed to get download URL');
      }

      // Update download count
      await databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteResourceCollectionId,
        resourceId,
        {
          downloads: (resources.find(r => r.id === resourceId)?.downloads || 0) + 1 // Explicitly calculate new value
        }
      );

      // Start download
      window.open(url.toString(), '_blank');
      toast.success('Download started', { id: toastId });

    } catch (error: any) {
      console.error('Download error:', error);
      toast.error(error.message || 'Failed to download file');
    } 
    // finally {
    //   setDownloadingFileId(null);
    // }
  };

  const handlePreview = (resource: Resource) => {
    setSelectedResource(resource);
    setShowPreview(true);
  };

  useEffect(() => {
    const branchFromUrl = searchParams.get('branch')?.toLowerCase();
    
    if (branchFromUrl) {
      // Find matching branch from branches array
      const matchedBranch = branches.find(
        b => b.name.toLowerCase() === branchFromUrl
      );
  
      if (matchedBranch) {
        setFilters(prev => ({
          ...prev,
          branch: matchedBranch.id
        }));
      }
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <Toaster position="top-right" />

        {/* Header */}
        <div className="text-center mb-12">
          <FaFilter className="mx-auto h-12 w-12 text-[#ff6600]" />
          <h1 className="text-3xl font-bold text-[#ff6600] mt-4">Filter Resources</h1>
          <p className="text-gray-400 mt-2">Find specific academic resources</p>
        </div>

        {/* Filter Form */}
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-800">
          <form onSubmit={handleFilter} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Course */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Course</label>
                <select
                  value={filters.course}
                  onChange={(e) => setFilters(prev => ({ 
                    ...prev, 
                    course: e.target.value as Course 
                  }))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
                  text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                >
                  <option value={Course.BTECH}>B.Tech</option>
                </select>
              </div>

              {/* Branch */}
              {/* <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Branch</label>
                <select
                  value={filters.branch}
                  onChange={(e) => setFilters(prev => ({ 
                    ...prev, 
                    branch: e.target.value 
                  }))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
                  text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                  required
                >
                  <option value="">Select Branch</option>
                  
                  {branches.map(branch => (
                    <option key={branch.id} value={branch.id}>{branch.name}</option>
                  ))}
                </select>
              </div> */}






              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Branch</label>
                {/* <select
                  value={filters.branch || ''} 
                  onChange={(e) => setFilters(prev => ({ 
                    ...prev, 
                    branch: e.target.value 
                  }))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
                  text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                  required
                >
                  <option value="">Select Branch</option>
                  {branches.map(branch => (
                    <option 
                      key={branch.id} 
                      value={branch.id}
                      selected={initialBranch === branch.id}
                    >
                      {branch.name}
                    </option>
                  ))}
                </select> */}

                    <select
                      value={filters.branch || ''}
                      onChange={(e) => setFilters(prev => ({ 
                        ...prev, 
                        branch: e.target.value 
                      }))}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
                      text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                      required
                    >
                      <option value="">Select Branch</option>
                      {branches.map(branch => (
                        <option 
                          key={branch.id} 
                          value={branch.id}
                        >
                          {branch.name}
                        </option>
                      ))}
                    </select>
              </div>

              {/* Resource Type */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Resource Type</label>
                <select
                  value={filters.resourceType}
                  onChange={(e) => setFilters(prev => ({ 
                    ...prev, 
                    resourceType: e.target.value 
                  }))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
                  text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                  required
                >
                  <option value="">Select Resource Type</option>
                  {resourceTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                  ))}
                </select>
              </div>   



              {/* Academic Year */}         
            <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  academicYear
                </label>
                 <select
                  value={filters.academicYear}
                  onChange={(e) => setFilters(prev => ({ ...prev, academicYear: e.target.value }))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
                  text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                  required
                >
                  <option value="">Select academicYear</option>
                  {academicYears.map(academicYear => (
                    <option key={academicYear} value={academicYear}>
                      {academicYear}
                    </option>
                  ))}
                </select>
              </div>

              {/* Semester */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Semester</label>
                <select
                  value={filters.semester}
                  onChange={(e) => setFilters(prev => ({ ...prev, semester: e.target.value }))}
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
              {/* <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  value={filters.subject}
                  onChange={(e) => setFilters(prev => ({ ...prev, subject: e.target.value }))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
                  text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                  placeholder="Enter subject name"
                />
              </div> */}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                disabled={isLoading}
                className={`flex items-center px-6 py-3 rounded-lg text-black font-medium
                ${isLoading ? 'bg-gray-600' : 'bg-[#ff6600] hover:bg-[#ff8533]'} 
                transition duration-300`}
              >
                <FaSearch className="mr-2" />
                {isLoading ? 'Filtering...' : 'Filter Resources'}
              </button>
            </div>
          </form>
        </div>

        {/* Results Section */}
        {resources.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#ff6600] mb-6">Found Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map(resource => (
                <div
                  key={resource.id}
                  className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 
                  hover:border-[#ff6600] transition duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-white font-medium">{resource.subject}</h3>
                      <p className="text-gray-400 text-sm">
                        Semester {resource.semester} | {resource.resourceType}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-gray-500 text-sm">
                      Downloads: {resource.downloads}
                    </span>
                    <button
                      onClick={() => handlePreview(resource)}
                      className="text-[#ff6600] hover:text-[#ff8533] transition duration-300"
                    >
                      Preview
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {selectedResource && (
        <PreviewModal
          resource={selectedResource}
          isOpen={showPreview}
          onClose={() => setShowPreview(false)}
          isLoggedIn={!!user}
          onDownload={() => handleDownload(selectedResource.fileId, selectedResource.id)}
        />
      )}
    </div>
  );
};

export default FilterResource;