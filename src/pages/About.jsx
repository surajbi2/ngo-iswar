import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white py-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About ISWAR
        </motion.h1>
        
        <motion.p 
          className="text-lg text-gray-700 leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          The first meeting of the organization was convened on <strong>April 13, 2024</strong>. Dr. Srinivasa D presided over the meeting, where members decided to establish the <strong>Institute for Social Workers for Action Research (ISWAR)</strong> for the welfare of urban, rural, and tribal communities.
        </motion.p>

        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg text-left"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4">Our Mission</h2>
          <p className="text-gray-700">
            ISWAR is a <strong>knowledge-based, non-profit organization</strong> committed to social action research. Our mission is to contribute to domain knowledge and solve prevailing social issues through research and education.
          </p>
        </motion.div>

        <motion.div 
          className="mt-8 bg-white p-6 rounded-lg shadow-lg text-left"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4">Registration & Governance</h2>
          <p className="text-gray-700">
            The organization is registered under the <strong>Karnataka Societies Registration Act, 1960</strong>. A board of directors has been elected to guide ISWAR’s vision and operations.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
