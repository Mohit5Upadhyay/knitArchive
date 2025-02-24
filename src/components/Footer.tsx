


import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-[#ff6600] font-bold text-xl mb-4">
              knitArchive
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your one-stop platform for accessing and sharing academic
              resources. Making learning easier for KNIT students.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ff6600] transition-colors"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ff6600] transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ff6600] transition-colors"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ff6600] transition-colors"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#ff6600] font-bold text-xl mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {/* <li>
                <Link to="/about" className="text-gray-400 hover:text-[#ff6600] transition-colors">
                  About Us
                </Link>
              </li> */}
              {/* <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#ff6600] transition-colors">
                  Contact
                </Link>
              </li> */}
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-[#ff6600] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-[#ff6600] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-[#ff6600] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[#ff6600] font-bold text-xl mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/request-resources"
                  className="text-gray-400 hover:text-[#ff6600] transition-colors"
                >
                  Request Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/report-issue"
                  className="text-gray-400 hover:text-[#ff6600] transition-colors"
                >
                  Report Issue
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h3 className="text-[#ff6600] font-bold text-xl mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for updates and new resources.
            </p>
            <form className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg 
                  text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#ff6600] text-white rounded-r-lg hover:bg-[#ff8533] 
                  transition-colors flex items-center"
                >
                  <FaEnvelope className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div> */}

          {/* Disclaimer */}
          <div>
            <h3 className="text-[#ff6600] font-bold text-xl mb-4">
              Disclaimer
            </h3>
            <div className="p-4 rounded-lg bg-gray-800/50 border border-[#ff6600]/20">
              <p className="text-gray-300 text-sm leading-relaxed">
                This website is not officially associated with
                <a
                  href="https://www.knit.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff6600] hover:text-[#ff8533] mx-1 underline"
                >
                  KNIT Sultanpur
                </a>
                . While we provide academic resources related to KNIT, we
                operate independently. All materials are contributed by students
                for educational purposes.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Knit Archive. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="hover:text-[#ff6600] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-[#ff6600] transition-colors"
            >
              Terms of Service
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff6600] transition-colors"
            >
              Open Source
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
