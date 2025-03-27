import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
}

const rowVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
}

const headerVariants = {
  hidden: { opacity: 0, scaleY: 0 },
  visible: { 
    opacity: 1, 
    scaleY: 1,
    transition: { type: "spring", stiffness: 100, delay: 0.2 }
  }
}

export default function Members() {
  // export default function Members() {
    const members = [
      {
        name: 'Dr.D.Mahadevaswamy',
        role: 'Chairman',
        designation: 'Guest Faculty',
        contact: 'mahadevaswamy@iswar.org'
      },
      {
        name: 'Dr.Dileep Kumar M',
        role: 'Vice-Chairman',
        designation: 'Guest Faculty',
        contact: 'dileep@iswar.org'
      },
      {
        name: 'Dr.Rajashekar',
        role: 'Secretary',
        designation: 'Guest Faculty',
        contact: 'rajashekar@iswar.org'
      },
      {
        name: 'Dr.Raju',
        role: 'Treasurer',
        designation: 'Asst Librarian',
        contact: 'raju@iswar.org'
      },
      {
        name: 'Mr.Raghavendra',
        role: 'Member, Board of Directors',
        designation: 'Farmer',
        contact: 'raghavendra@iswar.org'
      },
      {
        name: 'Mr.Madesha K',
        role: 'Member, Board of Directors',
        designation: 'Farmer',
        contact: 'madesha@iswar.org'
      },
      {
        name: 'Mr.Bhakthavathsala H M',
        role: 'Member, Board of Directors',
        designation: 'Asst Librarian',
        contact: 'bhakthavathsala@iswar.org'
      },
      {
        name: 'R.Raksha',
        role: 'Member, Board of Directors',
        designation: 'House Wife',
        contact: 'raksha@iswar.org'
      }
    ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-white py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-3xl font-bold text-white rounded-t-2xl mb-4 text-center bg-[#1E3A8A] p-2"
        >
          Governing Body Members
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-white rounded-t-xl shadow-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <motion.thead 
                variants={headerVariants}
                className="bg-green-700 text-white"
              >
                <tr>
                  <th className="text-left py-4 px-6 font-semibold">Name</th>
                  <th className="text-left py-4 px-6 font-semibold">Position</th>
                  <th className="text-left py-4 px-6 font-semibold">Designation</th>
                  <th className="text-left py-4 px-6 font-semibold">Contact</th>
                </tr>
              </motion.thead>

              <motion.tbody 
                className="divide-y divide-accent"
                variants={containerVariants}
              >
                {members.map((member, index) => (
                  <motion.tr 
                    key={index}
                    variants={rowVariants}
                    className="hover:bg-gray-50 transition-colors"
                    whileHover={{ scale: 1.01 }}
                  >
                    <td className="py-4 px-6 font-medium text-gray-900">
                      {member.name}
                    </td>
                    <td className="py-4 px-6 text-secondary font-medium">
                      {member.role}
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      {member.designation}
                    </td>
                    <td className="py-4 px-6">
                      <motion.a 
                        href={`mailto:${member.contact}`}
                        className="text-primary hover:underline"
                        whileHover={{ scale: 1.05 }}
                      >
                        {member.contact}
                      </motion.a>
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-gray-600"
        >
          <p>For official correspondence, please contact our 
            <Link to="/contact" className="text-primary hover:underline ml-1">
              headquarters
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  )
}