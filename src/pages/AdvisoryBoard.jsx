import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
}

const imageVariants = {
  hover: { 
    scale: 1.05,
    transition: { duration: 0.3 }
  }
}

// Member data with image paths
const advisoryMembers = [
  {
    id: 1,
    name: 'Prof. Ramesh B.',
    role: 'Advisory Board Member',
    department: 'Professor, Department of Studies and Research in Social Work, Tumkur University, Tumakuru',
    image: '/members/Picture1.jpg'
  },
  {
    id: 2,
    name: 'Sri. Venkatesh Murthy',
    role: 'Advisory Board Member',
    department: 'General Manager-HR, Quess, Bangalore',
    image: '/members/Picture2.jpg'
  },
  {
    id: 3,
    name: 'Dr. Srinivasa D.',
    role: 'Advisory Board Member',
    department: 'Assistant Professor, Department of Social Work, Central University of Karnataka, Kalaburagi',
    image: '/members/Picture3.jpg'
  },
  {
    id: 4,
    name: 'Dr. Kiran M Gajanur',
    role: 'Advisory Board Member',
    department: 'Assistant Professor, Department of Public Administration, Central University of Karnataka, Kalaburagi',
    image: '/members/Picture4.jpg'
  }
]

const boardMembers = [
  {
    id: 1,
    name: 'Dr. Mahadevaswamy D',
    role: 'Chairman',
    department: 'Institute for Social Workers for Action Research, Mysuru',
    image: '/members/Picture5.jpg'
  },
  {
    id: 2,
    name: 'Dr. Dileepkumar M',
    role: 'Vice-Chairman',
    department: 'Media and Communication Trainer, Institute for Social Workers for Action Research',
    image: '/members/Picture6.jpg'
  },
  {
    id: 3,
    name: 'Dr. Rajshekar',
    role: 'Secretary',
    department: 'Institute for Social Workers for Action Research, Mysuru',
    image: '/members/Picture7.png'
  },
  {
    id: 4,
    name: 'Dr. Raju C',
    role: 'Treasurer',
    department: 'Institute for Social Workers for Action Research, Mysuru',
    image: '/members/Picture8.jpg'
  },
  {
    id: 5,
    name: 'Mr. Raghavendra',
    role: 'Member',
    department: 'Institute for Social Workers for Action Research, Mysuru',
    image: '/members/Picture9.jpg'
  },
  {
    id: 6,
    name: 'Mr. Madesh K',
    role: 'Member',
    department: 'Institute for Social Workers for Action Research, Mysuru',
    image: '/members/Picture10.jpg'
  },
  {
    id: 7,
    name: 'Mr. Bhakthavatsala H M',
    role: 'Member',
    department: 'Institute for Social Workers for Action Research, Mysuru',
    image: '/members/Picture11.jpg'
  },
  {
    id: 8,
    name: 'Mrs. Raksha R',
    role: 'Member',
    department: 'Institute for Social Workers for Action Research, Mysuru',
    image: '/members/Picture12.jpg'
  }
]

export default function AdvisoryBoard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
      <div className="container mx-auto px-4 ">
        {/* Advisory Board Section */}
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{duration: 1, ease: 'easeInOut'}}
          className="text-3xl font-bold text-primary text-center mb-12 bg-[#1E3A8A] text-white py-4 rounded-t-xl shadow-lg"
        >
          Advisory Board Members
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 hover:cursor-pointer"
        >
          {advisoryMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              <motion.div 
                className="relative h-64 bg-gray-100"
                variants={imageVariants}
                whileHover="hover"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-top"
                  onError={(e) => {
                    e.target.src = '/placeholder-member.jpg'
                  }}
                />
              </motion.div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.department}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Board of Directors Section */}
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{duration: 1, ease: 'easeInOut'}}
          className="text-3xl font-bold text-primary text-center mb-12 bg-[#1E3A8A] text-white py-4 rounded-t-xl shadow-lg"
        >
          Board of Directors
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 hover:cursor-pointer"
        >
          {boardMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center p-6"
            >
              <motion.div
                className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg"
                variants={imageVariants}
                whileHover="hover"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-top"
                  onError={(e) => {
                    e.target.src = '/placeholder-member.jpg'
                  }}
                />
              </motion.div>

              <h3 className="text-lg font-bold text-primary">{member.name}</h3>
              <p className="text-secondary text-sm font-medium mt-2">
                {member.role}
              </p>
              <p className="text-gray-600 text-xs mt-4">
                {member.department}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-gray-600"
        >
          <p className="mb-4">For official inquiries, please contact our</p>
          <Link
            to="/contact"
            className="text-primary hover:underline font-medium"
          >
            Administrative Office →
          </Link>
        </motion.div>
      </div>
    </div>
  )
}