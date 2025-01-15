// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/" className="text-2xl font-bold text-indigo-600">
//               KnitArchive
//             </Link>
//           </div>

//           {/* Desktop Search Bar */}
//           <div className="hidden md:block flex-1 max-w-md mx-4">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//               <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-md hover:bg-indigo-700">
//                 Search
//               </button>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600">
//               Dashboard
//             </Link>
//             <Link to="/login" className="text-gray-700 hover:text-indigo-600">
//               Login
//             </Link>
//             <Link
//               to="/signup"
//               className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
//             >
//               Sign Up
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
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
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {/* Mobile Search Bar */}
//               <div className="mb-4">
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="Search..."
//                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   />
//                   <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-md hover:bg-indigo-700">
//                     Search
//                   </button>
//                 </div>
//               </div>
              
//               <Link
//                 to="/dashboard"
//                 className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
//               >
//                 Dashboard
//               </Link>
//               <Link
//                 to="/login"
//                 className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/signup"
//                 className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
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




import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg rounded-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-[#ff6600] hover:text-[#ff8533]">
              knitArchive
            </Link>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:block flex-1 max-w-md mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white 
                focus:outline-none focus:ring-2 focus:ring-[#ff6600] focus:border-[#ff6600]"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#ff6600] 
              text-black px-4 py-1 rounded-md hover:bg-[#ff8533] transition duration-300">
                Search
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/dashboard" className="text-gray-300 hover:text-[#ff6600] transition duration-300">
              Dashboard
            </Link>
            <Link to="/login" className="text-gray-300 hover:text-[#ff6600] transition duration-300">
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-[#ff6600] text-black px-4 py-2 rounded-md hover:bg-[#ff8533] 
              transition duration-300 font-semibold"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 
              hover:text-[#ff6600] focus:outline-none transition duration-300"
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
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Search Bar */}
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 
                    text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 
                  bg-[#ff6600] text-black px-4 py-1 rounded-md hover:bg-[#ff8533]">
                    Search
                  </button>
                </div>
              </div>
              
              <Link
                to="/dashboard"
                className="block px-3 py-2 rounded-md text-gray-300 hover:text-[#ff6600] 
                hover:bg-gray-900 transition duration-300"
              >
                Dashboard
              </Link>
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-gray-300 hover:text-[#ff6600] 
                hover:bg-gray-900 transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block px-3 py-2 rounded-md text-gray-300 hover:text-[#ff6600] 
                hover:bg-gray-900 transition duration-300"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;