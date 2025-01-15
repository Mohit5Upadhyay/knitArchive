
// import { Link } from 'react-router-dom';
// import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-black text-gray-300">
//       {/* Main Footer Section */}
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Logo and About Section */}
//           <div>
//             <Link to="/" className="text-2xl font-bold text-[#ff6600]">
//               KnitArchive
//             </Link>
//             <p className="mt-4 text-sm">
//               Building the future of knitting patterns and resources together.
//             </p>
//           </div>

//           {/* Quick Links Section */}
//           <div>
//             <h3 className="text-[#ff6600] font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link to="/about" className="hover:text-[#ff6600] transition duration-300">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/patterns" className="hover:text-[#ff6600] transition duration-300">
//                   Patterns
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/community" className="hover:text-[#ff6600] transition duration-300">
//                   Community
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/resources" className="hover:text-[#ff6600] transition duration-300">
//                   Resources
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Social Media Section */}
//           <div>
//             <h3 className="text-[#ff6600] font-semibold mb-4">Connect With Us</h3>
//             <div className="flex space-x-4">
//               <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
//                 className="hover:text-[#ff6600] transition duration-300">
//                 <FaGithub size={24} />
//               </a>
//               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
//                 className="hover:text-[#ff6600] transition duration-300">
//                 <FaTwitter size={24} />
//               </a>
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
//                 className="hover:text-[#ff6600] transition duration-300">
//                 <FaLinkedin size={24} />
//               </a>
//               <a href="https://discord.com" target="_blank" rel="noopener noreferrer" 
//                 className="hover:text-[#ff6600] transition duration-300">
//                 <FaDiscord size={24} />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Additional Links */}
//         <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
//           <Link to="/request" className="hover:text-[#ff6600] transition duration-300">
//             Request Resources
//           </Link>
//           <Link to="/report" className="hover:text-[#ff6600] transition duration-300">
//             Report Issue
//           </Link>
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
//             className="hover:text-[#ff6600] transition duration-300">
//             Open Source
//           </a>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="border-t border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 py-6">
//           <div className="flex flex-col items-center">
//             <Link to="/" className="text-xl font-bold text-[#ff6600] mb-2">
//               KnitArchive
//             </Link>
//             <p className="text-sm text-gray-400">
//               © {new Date().getFullYear()} KnitArchive. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About Section */}
          <div>
            <Link to="/" className="text-2xl font-bold text-[#ff6600]">
              KnitArchive
            </Link>
            <p className="mt-4 text-sm">
              Building the future of knitting patterns and resources together.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-[#ff6600] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-[#ff6600] transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/patterns" className="hover:text-[#ff6600] transition duration-300">
                  Patterns
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-[#ff6600] transition duration-300">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-[#ff6600] transition duration-300">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-[#ff6600] font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-[#ff6600] transition duration-300">
                <FaGithub size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-[#ff6600] transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-[#ff6600] transition duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-[#ff6600] transition duration-300">
                <FaDiscord size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Additional Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
          <Link to="/request-resources" className="hover:text-[#ff6600] transition duration-300">
            Request Resources
          </Link>
          <Link to="/report-issue" className="hover:text-[#ff6600] transition duration-300">
            Report Issue
          </Link>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
            className="hover:text-[#ff6600] transition duration-300">
            Open Source
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col items-center">
            <Link to="/" className="text-xl font-bold text-[#ff6600] mb-2">
              KnitArchive
            </Link>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} KnitArchive. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;