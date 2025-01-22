// // import { useState } from 'react';
// // import { Link } from 'react-router-dom';

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <nav className="bg-white shadow-lg">
// //       <div className="max-w-7xl mx-auto px-4">
// //         <div className="flex justify-between items-center h-16">
// //           {/* Logo */}
// //           <div className="flex-shrink-0">
// //             <Link to="/" className="text-2xl font-bold text-indigo-600">
// //               KnitArchive
// //             </Link>
// //           </div>

// //           {/* Desktop Search Bar */}
// //           <div className="hidden md:block flex-1 max-w-md mx-4">
// //             <div className="relative">
// //               <input
// //                 type="text"
// //                 placeholder="Search..."
// //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //               />
// //               <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-md hover:bg-indigo-700">
// //                 Search
// //               </button>
// //             </div>
// //           </div>

// //           {/* Desktop Navigation */}
// //           <div className="hidden md:flex items-center space-x-4">
// //             <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600">
// //               Dashboard
// //             </Link>
// //             <Link to="/login" className="text-gray-700 hover:text-indigo-600">
// //               Login
// //             </Link>
// //             <Link
// //               to="/signup"
// //               className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
// //             >
// //               Sign Up
// //             </Link>
// //           </div>

// //           {/* Mobile menu button */}
// //           <div className="md:hidden flex items-center">
// //             <button
// //               onClick={() => setIsOpen(!isOpen)}
// //               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
// //             >
// //               <svg
// //                 className="h-6 w-6"
// //                 fill="none"
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth="2"
// //                 viewBox="0 0 24 24"
// //                 stroke="currentColor"
// //               >
// //                 {isOpen ? (
// //                   <path d="M6 18L18 6M6 6l12 12" />
// //                 ) : (
// //                   <path d="M4 6h16M4 12h16M4 18h16" />
// //                 )}
// //               </svg>
// //             </button>
// //           </div>
// //         </div>

// //         {/* Mobile Navigation */}
// //         {isOpen && (
// //           <div className="md:hidden">
// //             <div className="px-2 pt-2 pb-3 space-y-1">
// //               {/* Mobile Search Bar */}
// //               <div className="mb-4">
// //                 <div className="relative">
// //                   <input
// //                     type="text"
// //                     placeholder="Search..."
// //                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //                   />
// //                   <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-md hover:bg-indigo-700">
// //                     Search
// //                   </button>
// //                 </div>
// //               </div>
              
// //               <Link
// //                 to="/dashboard"
// //                 className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
// //               >
// //                 Dashboard
// //               </Link>
// //               <Link
// //                 to="/login"
// //                 className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
// //               >
// //                 Login
// //               </Link>
// //               <Link
// //                 to="/signup"
// //                 className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
// //               >
// //                 Sign Up
// //               </Link>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;




// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-black shadow-lg rounded-lg">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/" className="text-2xl font-bold text-[#ff6600] hover:text-[#ff8533]">
//               knitArchive
//             </Link>
//           </div>

//           {/* Desktop Search Bar */}
//           <div className="hidden md:block flex-1 max-w-md mx-4">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white 
//                 focus:outline-none focus:ring-2 focus:ring-[#ff6600] focus:border-[#ff6600]"
//               />
//               <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#ff6600] 
//               text-black px-4 py-1 rounded-md hover:bg-[#ff8533] transition duration-300">
//                 Search
//               </button>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link to="/branch" className="text-gray-300 hover:text-[#ff6600] transition duration-300">
//               Download Resources
//             </Link>
//             <Link to="/login" className="text-gray-300 hover:text-[#ff6600] transition duration-300">
//               Login
//             </Link>
//             <Link
//               to="/signup"
//               className="bg-[#ff6600] text-black px-4 py-2 rounded-md hover:bg-[#ff8533] 
//               transition duration-300 font-semibold"
//             >
//               Sign Up
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 
//               hover:text-[#ff6600] focus:outline-none transition duration-300"
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isOpen ? (
//                   <path d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden bg-black border-t border-gray-800">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {/* Mobile Search Bar */}
//               <div className="mb-4">
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="Search..."
//                     className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 
//                     text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
//                   />
//                   <button className="absolute right-2 top-1/2 transform -translate-y-1/2 
//                   bg-[#ff6600] text-black px-4 py-1 rounded-md hover:bg-[#ff8533]">
//                     Search
//                   </button>
//                 </div>
//               </div>
              
//               <Link
//                 to="/dashboard"
//                 className="block px-3 py-2 rounded-md text-gray-300 hover:text-[#ff6600] 
//                 hover:bg-gray-900 transition duration-300"
//               >
//                 Dashboard
//               </Link>
//               <Link
//                 to="/login"
//                 className="block px-3 py-2 rounded-md text-gray-300 hover:text-[#ff6600] 
//                 hover:bg-gray-900 transition duration-300"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/signup"
//                 className="block px-3 py-2 rounded-md text-gray-300 hover:text-[#ff6600] 
//                 hover:bg-gray-900 transition duration-300"
//               >
//                 Sign Up
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;












// // import { useState, useRef, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { databases } from '../appwrite/config';
// // import { FaSearch, FaSpinner } from 'react-icons/fa';

// // interface SearchResult {
// //   $id: string;
// //   fileName: string;
// //   course: string;
// //   branch: string;
// //   semester: string;
// //   subject: string;
// //   resourceType: string;
// //   academicYear: string;
// // }

// // const Navbar = () => {
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [results, setResults] = useState<SearchResult[]>([]);
// //   const [loading, setLoading] = useState(false);
// //   const [showResults, setShowResults] = useState(false);
// //   const searchRef = useRef<HTMLDivElement>(null);
// //   const navigate = useNavigate();

// //   // Close results when clicking outside
// //   useEffect(() => {
// //     const handleClickOutside = (event: MouseEvent) => {
// //       if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
// //         setShowResults(false);
// //       }
// //     };

// //     document.addEventListener('mousedown', handleClickOutside);
// //     return () => document.removeEventListener('mousedown', handleClickOutside);
// //   }, []);

// //   // Search function
// //   const handleSearch = async (query: string) => {
// //     setSearchQuery(query);
    
// //     if (query.length < 2) {
// //       setResults([]);
// //       setShowResults(false);
// //       return;
// //     }

// //     setLoading(true);
// //     setShowResults(true);

// //     try {
// //       const response = await databases.listDocuments(
// //         import.meta.env.VITE_APPWRITE_DATABASE_ID,
// //         'resources'
// //       );

// //       // Filter results based on filename match
// //       const filtered = response.documents.filter(doc => 
// //         doc.fileName.toLowerCase().includes(query.toLowerCase())
// //       );

// //       setResults(filtered);
// //     } catch (error) {
// //       console.error('Search error:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Handle result selection
// //   const handleResultClick = (result: SearchResult) => {
// //     navigate(`/resource/${result.$id}`);
// //     setShowResults(false);
// //     setSearchQuery('');
// //   };

// //   return (
// //     <nav className="bg-black shadow-lg rounded-lg">
// //       {/* Desktop Search Bar */}
// //       <div className="hidden md:block flex-1 max-w-md mx-4" ref={searchRef}>
// //         <div className="relative">
// //           <input
// //             type="text"
// //             value={searchQuery}
// //             onChange={(e) => handleSearch(e.target.value)}
// //             placeholder="Search resources..."
// //             className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white 
// //             focus:outline-none focus:ring-2 focus:ring-[#ff6600] focus:border-[#ff6600]"
// //           />
// //           <button 
// //             className="absolute right-2 top-1/2 transform -translate-y-1/2 
// //             text-black px-4 py-1 rounded-md transition duration-300"
// //             disabled={loading}
// //           >
// //             {loading ? (
// //               <FaSpinner className="animate-spin text-[#ff6600]" />
// //             ) : (
// //               <FaSearch className="text-[#ff6600]" />
// //             )}
// //           </button>

// //           {/* Search Results Dropdown */}
// //           {showResults && (searchQuery.length >= 2) && (
// //             <div className="absolute w-full mt-2 py-2 bg-gray-900 border border-gray-700 
// //             rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
// //               {results.length > 0 ? (
// //                 results.map((result) => (
// //                   <div
// //                     key={result.$id}
// //                     onClick={() => handleResultClick(result)}
// //                     className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
// //                   >
// //                     <div className="text-white font-medium">{result.subject}</div>
// //                     <div className="text-gray-400 text-sm">
// //                       {result.course} • {result.branch} • Sem {result.semester} • {result.resourceType}
// //                     </div>
// //                   </div>
// //                 ))
// //               ) : (
// //                 <div className="px-4 py-2 text-gray-400">No results found</div>
// //               )}
// //             </div>
// //           )}
// //         </div>
// //       </div>
      
// //       {/* ...rest of navbar code... */}
// //     </nav>
// //   );
// // };

// // export default Navbar;





// // import { useState, useRef, useEffect } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { FaSearch, FaSpinner, FaBars, FaTimes, FaUser } from 'react-icons/fa';
// // import { databases } from '../appwrite/config';
// // import { toast } from 'react-hot-toast';

// // interface SearchResult {
// //   $id: string;
// //   fileName: string;
// //   course: string;
// //   branch: string;
// //   semester: string;
// //   subject: string;
// //   resourceType: string;
// //   academicYear: string;
// // }

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [results, setResults] = useState<SearchResult[]>([]);
// //   const [loading, setLoading] = useState(false);
// //   const [showResults, setShowResults] = useState(false);
// //   const searchRef = useRef<HTMLDivElement>(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const handleClickOutside = (event: MouseEvent) => {
// //       if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
// //         setShowResults(false);
// //       }
// //     };

// //     document.addEventListener('mousedown', handleClickOutside);
// //     return () => document.removeEventListener('mousedown', handleClickOutside);
// //   }, []);

// //   const handleSearch = async (query: string) => {
// //     setSearchQuery(query);
    
// //     if (query.length < 2) {
// //       setResults([]);
// //       setShowResults(false);
// //       return;
// //     }

// //     setLoading(true);
// //     setShowResults(true);

// //     try {
// //       const response = await databases.listDocuments(
// //         import.meta.env.VITE_APPWRITE_DATABASE_ID,
// //         'resources',
// //       );

// //       // Filter results based on standardized filename match
// //       const filtered = response.documents.filter(doc => {
// //         const searchTerms = query.toLowerCase().split(' ');
// //         const filename = doc.fileName.toLowerCase();
        
// //         return searchTerms.every(term => 
// //           filename.includes(term) ||
// //           doc.subject.toLowerCase().includes(term) ||
// //           doc.resourceType.toLowerCase().includes(term)
// //         );
// //       });

// //       setResults(filtered);
// //     } catch (error) {
// //       console.error('Search error:', error);
// //       toast.error('Failed to search resources');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleResultClick = (result: SearchResult) => {
// //     navigate(`/resource/${result.$id}`);
// //     setShowResults(false);
// //     setSearchQuery('');
// //     setIsOpen(false);
// //   };

// //   return (
// //     <nav className="bg-black border-b border-gray-800">
// //       <div className="max-w-7xl mx-auto px-4">
// //         <div className="flex items-center justify-between h-16">
// //           {/* Logo */}
// //           <div className="flex-shrink-0">
// //             <Link to="/" className="text-2xl font-bold text-[#ff6600]">
// //               knitArchive
// //             </Link>
// //           </div>

// //           {/* Desktop Search Bar */}
// //           <div className="hidden md:block flex-1 max-w-md mx-4" ref={searchRef}>
// //             <div className="relative">
// //               <input
// //                 type="text"
// //                 value={searchQuery}
// //                 onChange={(e) => handleSearch(e.target.value)}
// //                 placeholder="Search resources..."
// //                 className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 
// //                 text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
// //               />
// //               <button 
// //                 className="absolute right-2 top-1/2 transform -translate-y-1/2 
// //                 text-[#ff6600] px-4 py-1 rounded-md"
// //                 disabled={loading}
// //               >
// //                 {loading ? (
// //                   <FaSpinner className="animate-spin" />
// //                 ) : (
// //                   <FaSearch />
// //                 )}
// //               </button>

// //               {/* Desktop Search Results */}
// //               {showResults && searchQuery.length >= 2 && (
// //                 <div className="absolute w-full mt-2 py-2 bg-gray-900 border border-gray-700 
// //                 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
// //                   {results.length > 0 ? (
// //                     results.map((result) => (
// //                       <div
// //                         key={result.$id}
// //                         onClick={() => handleResultClick(result)}
// //                         className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
// //                       >
// //                         <div className="text-white font-medium">{result.subject}</div>
// //                         <div className="text-gray-400 text-sm">
// //                           {result.course} • {result.branch} • Sem {result.semester} • {result.resourceType}
// //                         </div>
// //                       </div>
// //                     ))
// //                   ) : (
// //                     <div className="px-4 py-2 text-gray-400">No results found</div>
// //                   )}
// //                 </div>
// //               )}
// //             </div>
// //           </div>

// //           {/* Navigation Links */}
// //           <div className="hidden md:flex items-center space-x-4">
// //             <Link to="/resources" className="text-gray-300 hover:text-[#ff6600]">
// //               Resources
// //             </Link>
// //             <Link to="/upload" className="text-gray-300 hover:text-[#ff6600]">
// //               Upload
// //             </Link>
// //             <Link to="/profile" className="text-gray-300 hover:text-[#ff6600]">
// //               <FaUser />
// //             </Link>
// //           </div>

// //           {/* Mobile menu button */}
// //           <div className="md:hidden">
// //             <button
// //               onClick={() => setIsOpen(!isOpen)}
// //               className="text-gray-300 hover:text-[#ff6600]"
// //             >
// //               {isOpen ? <FaTimes /> : <FaBars />}
// //             </button>
// //           </div>
// //         </div>

// //         {/* Mobile Navigation */}
// //         {isOpen && (
// //           <div className="md:hidden bg-black border-t border-gray-800">
// //             <div className="px-2 pt-2 pb-3 space-y-1">
// //               {/* Mobile Search Bar */}
// //               <div className="mb-4" ref={searchRef}>
// //                 <div className="relative">
// //                   <input
// //                     type="text"
// //                     value={searchQuery}
// //                     onChange={(e) => handleSearch(e.target.value)}
// //                     placeholder="Search resources..."
// //                     className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 
// //                     text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
// //                   />
// //                   <button 
// //                     className="absolute right-2 top-1/2 transform -translate-y-1/2 
// //                     text-[#ff6600] px-4 py-1 rounded-md"
// //                     disabled={loading}
// //                   >
// //                     {loading ? (
// //                       <FaSpinner className="animate-spin" />
// //                     ) : (
// //                       <FaSearch />
// //                     )}
// //                   </button>

// //                   {/* Mobile Search Results */}
// //                   {showResults && searchQuery.length >= 2 && (
// //                     <div className="absolute w-full mt-2 py-2 bg-gray-900 border border-gray-700 
// //                     rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
// //                       {results.length > 0 ? (
// //                         results.map((result) => (
// //                           <div
// //                             key={result.$id}
// //                             onClick={() => handleResultClick(result)}
// //                             className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
// //                           >
// //                             <div className="text-white font-medium">{result.subject}</div>
// //                             <div className="text-gray-400 text-sm">
// //                               {result.course} • {result.branch} • Sem {result.semester} • {result.resourceType}
// //                             </div>
// //                           </div>
// //                         ))
// //                       ) : (
// //                         <div className="px-4 py-2 text-gray-400">No results found</div>
// //                       )}
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>

// //               {/* Mobile Navigation Links */}
// //               <Link
// //                 to="/resources"
// //                 className="block px-3 py-2 rounded-md text-gray-300 hover:text-[#ff6600]"
// //                 onClick={() => setIsOpen(false)}
// //               >
// //                 Resources
// //               </Link>
// //               <Link
// //                 to="/upload"
// //                 className="block px-3 py-2 rounded-md text-gray-300 hover:text-[#ff6600]"
// //                 onClick={() => setIsOpen(false)}
// //               >
// //                 Upload
// //               </Link>
// //               <Link
// //                 to="/profile"
// //                 className="block px-3 py-2 rounded-md text-gray-300 hover:text-[#ff6600]"
// //                 onClick={() => setIsOpen(false)}
// //               >
// //                 Profile
// //               </Link>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;












import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

// Modal Component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal = ({ isOpen, onClose, onConfirm }: ModalProps) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
        <h3 className="text-xl font-semibold text-gray-200 mb-4">Confirm Logout</h3>
        <p className="text-gray-300 mb-6">Are you sure you want to logout?</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-[#ff6600] text-black rounded-md hover:bg-[#ff8533] 
            transition-colors font-medium"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  // const handleSearch = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (searchQuery.trim()) {
  //     navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  //   }
  // };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // const SearchBar = () => (
  //   <form onSubmit={handleSearch} className="relative">
  //     <input
  //       type="text"
  //       value={searchQuery}
  //       onChange={(e) => setSearchQuery(e.target.value)}
  //       placeholder="Search resources..."
  //       className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 
  //       text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
  //     />
  //     <button 
  //       type="submit"
  //       className="absolute right-2 top-1/2 transform -translate-y-1/2 
  //       bg-[#ff6600] text-black px-4 py-1 rounded-md hover:bg-[#ff8533] 
  //       transition duration-300"
  //     >
  //       Search
  //     </button>
  //   </form>
  // );

  return (
    <>
      <nav className="bg-black shadow-lg rounded-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-[#ff6600] hover:text-[#ff8533]">
                knitArchive
              </Link>
            </div>

            {/* Search Bar */}
            {/* <div className="hidden md:block flex-1 max-w-md mx-4">
              <SearchBar />
            </div> */}

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {isAuthenticated && (
                <div className="flex items-center space-x-6">
                  {/* Resources */}
                  <Link 
                    to="/branch" 
                    className="nav-item group relative flex items-center gap-2 text-gray-300 
                    hover:text-[#ff6600] transition duration-300 px-3 py-1.5 rounded-md 
                    hover:bg-gray-900/50 border border-transparent hover:border-[#ff6600]/30"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Resources
                  </Link>

                  {/* Upload - Admin/CR only */}
                  {(user?.role === 'ADMIN' || user?.role === 'CR') && (
                    <Link 
                      to="/upload-resources" 
                      className="nav-item group relative flex items-center gap-2 text-gray-300 
                      hover:text-[#ff6600] transition duration-300 px-3 py-1.5 rounded-md 
                      hover:bg-gray-900/50 border border-[#ff6600]/20 hover:border-[#ff6600]"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                      Upload
                    </Link>
                  )}

                  {/* Profile */}
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-900/50 
                  rounded-md border border-gray-700">
                    <div className="w-2 h-2 bg-[#ff6600] rounded-full"></div>
                    <span className="text-gray-300 font-medium">
                      {user?.name}
                    </span>
                  </div>

                  {/* Logout */}
                  <button
                    onClick={() => setShowLogoutModal(true)}
                    className="nav-item flex items-center gap-2 text-gray-300 hover:text-[#ff6600] 
                    transition duration-300 px-3 py-1.5 rounded-md hover:bg-gray-900/50 
                    border border-transparent hover:border-[#ff6600]/30"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Logout
                  </button>
                </div>
              )}

              {!isAuthenticated && (
                <>
                  <Link 
                    to="/login" 
                    className="text-gray-300 hover:text-[#ff6600] transition duration-300 
                    px-4 py-2 rounded-md hover:bg-gray-900/50"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-[#ff6600] text-black px-4 py-2 rounded-md 
                    hover:bg-[#ff8533] transition duration-300 font-semibold 
                    shadow-lg hover:shadow-[#ff6600]/20"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-[#ff6600]"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden border-t border-gray-800">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* <div className="mb-4">
                  <SearchBar />
                </div> */}
                
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/branch"
                      className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-300 
                      hover:text-[#ff6600] hover:bg-gray-900 transition duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      Resources
                    </Link>
                    {(user?.role === 'ADMIN' || user?.role === 'CR') && (
                      <Link
                        to="/upload-resources"
                        className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-300 
                        hover:text-[#ff6600] hover:bg-gray-900 transition duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        Upload
                      </Link>
                    )}
                    <div className="flex items-center justify-between px-3 py-2 
                    bg-gray-900/50 rounded-md border border-gray-700 mt-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#ff6600] rounded-full"></div>
                        <span className="text-gray-300 font-medium">
                          {user?.name}
                        </span>
                      </div>
                      <button
                        onClick={() => setShowLogoutModal(true)}
                        className="text-gray-300 hover:text-[#ff6600] transition duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block px-3 py-2 rounded-md text-gray-300 hover:text-[#ff6600] 
                      hover:bg-gray-900 transition duration-300"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="block px-3 py-2 rounded-md bg-[#ff6600] text-black 
                      hover:bg-[#ff8533] transition duration-300 text-center font-semibold mt-2"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Logout Confirmation Modal */}
      <Modal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />
    </>
  );
};

export default Navbar;