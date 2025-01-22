



import { Link } from 'react-router-dom';
import { 
  FaLaptopCode, 
  FaDesktop, 
  FaBolt, 
  FaMicrochip, 
  FaCogs, 
  FaBuilding,
 
} from 'react-icons/fa';



const branches = [
  {
    id: 'cse',
    name: 'Computer Science',
    shortName: 'CSE',
    icon: FaLaptopCode,
    description: 'Computer Science and Engineering',
    color: '#ff6600'
  },
  {
    id: 'it',
    name: 'Information Technology',
    shortName: 'IT',
    icon: FaDesktop,
    description: 'Information Technology',
    color: '#ff6600'
  },
  {
    id: 'ee',
    name: 'Electrical',
    shortName: 'EE',
    icon: FaBolt,
    description: 'Electrical Engineering',
    color: '#ff6600'
  },
  {
    id: 'ece',
    name: 'Electronics',
    shortName: 'ECE',
    icon: FaMicrochip,
    description: 'Electronics and Communication',
    color: '#ff6600'
  },
  {
    id: 'me',
    name: 'Mechanical',
    shortName: 'ME',
    icon: FaCogs,
    description: 'Mechanical Engineering',
    color: '#ff6600'
  },
//   {
//     id: 'che',
//     name: 'Chemical',
//     shortName: 'CHE',
//     icon: FaFlask,
//     description: 'Chemical Engineering',
//     color: '#ff6600'
//   },
  {
    id: 'ce',
    name: 'Civil',
    shortName: 'CE',
    icon: FaBuilding,
    description: 'Civil Engineering',
    color: '#ff6600'
  }
//   ,
//   {
//     id: 'pie',
//     name: 'Production',
//     shortName: 'PIE',
//     icon: FaIndustry,
//     description: 'Production and Industrial',
//     color: '#ff6600'
//   }
];


const Branch = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#ff6600] mb-4 tracking-tight">
            Engineering Branches
          </h1>
          <p className="text-gray-400 text-lg">
            Select your branch to explore semester resources
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {branches.map((branch) => (
            <Link
              key={branch.id}
              to={`/filter-resources?branch=${branch.id}`}
              className="group focus:outline-none focus:ring-2 focus:ring-[#ff6600] rounded-xl"
              aria-label={`View ${branch.name} resources`}
            >
              <div className="relative bg-black/40 backdrop-blur-sm border border-gray-800 
                rounded-xl p-8 transform transition-all duration-300 
                hover:scale-105 hover:border-[#ff6600] 
                hover:shadow-2xl hover:shadow-[#ff6600]/20
                focus-within:border-[#ff6600] focus-within:shadow-2xl focus-within:shadow-[#ff6600]/20">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 
                    rounded-full bg-gray-800/50 group-hover:bg-[#ff6600]/20 
                    transition-all duration-300">
                    <branch.icon 
                      className="h-10 w-10 text-[#ff6600] group-hover:scale-110 
                      transition-transform duration-300" 
                      aria-hidden="true"
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#ff6600]">
                      {branch.shortName}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {branch.description}
                    </p>
                  </div>

                  <div className="absolute bottom-4 right-4 opacity-0 transform 
                    translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 
                    transition-all duration-300">
                    <svg 
                      className="w-6 h-6 text-[#ff6600]" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" 
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};



export default Branch;