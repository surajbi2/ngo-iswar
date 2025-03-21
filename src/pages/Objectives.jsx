import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
export default function Objectives() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const objectives = [
    "Plan and implement integrated rural, urban, and tribal community development programmes.",
    "Collaborate with government and non-government agencies for social welfare programs.",
    "Establish and run schools, colleges, and hostels to promote education.",
    "Provide vocational and skill development training.",
    "Offer formal and non-formal education to various age groups.",
    "Promote health education, medical care, and disease awareness programs.",
    "Organize welfare programs for the handicapped.",
    "Support orphans, destitute children, and street laborers through rehabilitation programs.",
    "Launch initiatives for the welfare of widows, aged individuals, and marginalized women."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl font-extrabold text-blue-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Objectives
        </motion.h1>
        <p className="text-lg text-gray-900 mb-8">
          We strive to uplift communities by providing education, healthcare, and social welfare programs to those in need.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {objectives.map((objective, index) => (
          <motion.div
            key={index}
            className="flex items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green-500 text-white text-2xl rounded-full mr-5">
              <FaCheckCircle />
            </div>
            <p className="text-gray-800 text-lg leading-relaxed">{objective}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
