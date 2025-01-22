

import { Link } from 'react-router-dom';
import { FaDownload, FaBook, FaUsers, FaLightbulb } from 'react-icons/fa';

// interface FeatureCardProps {
//   icon: React.ElementType;
//   title: string;
//   description: string;
// }

// interface StatCardProps {
//   number: string;
//   label: string;
// }

// const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
//   <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm 
//   border border-gray-800 hover:border-[#ff6600]/30 transition-all duration-300 
//   group w-full">
//     <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl 
//     bg-gradient-to-br from-[#ff6600] to-[#ff8533] flex items-center 
//     justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
//       <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//     </div>
//     <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{title}</h3>
//     <p className="text-sm sm:text-base text-gray-400">{description}</p>
//   </div>
// );

// const StatCard = ({ number, label }: StatCardProps) => (
//   <div className="text-center p-4 sm:p-6">
//     <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r 
//     from-[#ff6600] to-[#ff8533] bg-clip-text text-transparent mb-1 sm:mb-2">
//       {number}
//     </div>
//     <div className="text-sm sm:text-base text-gray-400">{label}</div>
//   </div>
// );

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 pt-12 sm:pt-20 pb-12 sm:pb-16 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-[#ff6600] to-[#ff8533] 
            bg-clip-text text-transparent">
              Welcome to Knit Archive
            </span>
          </h1>
          <p className="text-base sm:text-xl text-gray-400 mb-8 sm:mb-12 
          max-w-2xl mx-auto px-4">
            Your comprehensive platform for accessing and sharing academic resources.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <Link to="/branch" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto group flex items-center justify-center 
              px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-[#ff6600] 
              to-[#ff8533] text-white font-semibold hover:shadow-lg 
              hover:shadow-[#ff6600]/20 transition-all duration-300">
                <FaDownload className="mr-2 group-hover:scale-110 transition-transform" />
                Explore Resources
              </button>
            </Link>
            <Link to="/about" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl 
              border border-[#ff6600]/30 text-[#ff6600] font-semibold 
              hover:bg-[#ff6600]/10 transition-all duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      {/* <div className="max-w-7xl mx-auto px-4 py-12 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12">
          Why Choose Knit Archive?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <FeatureCard
            icon={FaBook}
            title="Comprehensive Resources"
            description="Access a vast collection of study materials, previous year papers, and notes."
          />
          <FeatureCard
            icon={FaUsers}
            title="Community Driven"
            description="Share and collaborate with fellow students and faculty members."
          />
          <FeatureCard
            icon={FaLightbulb}
            title="Smart Organization"
            description="Easily find resources organized by branches, semesters, and subjects."
          />
        </div>
      </div> */}

      {/* Stats Section */}
      {/* <div className="bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            <StatCard number="1000+" label="Resources" />
            <StatCard number="500+" label="Active Users" />
            <StatCard number="8+" label="Branches" />
            <StatCard number="100%" label="Free Access" />
          </div>
        </div>
      </div> */}

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 py-7 sm:py-10 text-center">
        <div className="p-6 sm:p-12 rounded-xl sm:rounded-2xl bg-gradient-to-r 
        from-[#ff6600]/20 to-[#ff8533]/20 backdrop-blur-sm border border-[#ff6600]/10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 
          max-w-2xl mx-auto px-4">
            Join our community and get access to all academic resources you need.
          </p>
          <Link to="/signup">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl 
            bg-white text-[#ff6600] font-semibold hover:shadow-lg 
            hover:shadow-white/20 transition-all duration-300">
              Sign Up Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;