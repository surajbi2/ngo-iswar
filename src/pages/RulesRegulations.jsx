import { motion } from "framer-motion";
import { useEffect } from "react";
export default function RulesRegulations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <motion.h1
          className="text-3xl font-bold text-blue-900 text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          General Rules & Regulations
        </motion.h1>

        <motion.p
          className="text-gray-700 text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Governed under the Karnataka Society Registration Act 1960.
        </motion.p>

        <div className="space-y-6">
          <motion.div
            className="bg-blue-50 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-2">1. Delegation of Powers</h3>
            <p className="text-gray-700">
              The board shall pass resolutions to delegate powers to the Chairman, Secretary, and other members for conducting organizational affairs.
            </p>
          </motion.div>

          <motion.div
            className="bg-blue-50 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-2">2. Amendments</h3>
            <p className="text-gray-700">
              Amendments can be made as per Section 13 of the KSR Act 1960 under the guidance of the Governing Board and General Body.
            </p>
          </motion.div>

          <motion.div
            className="bg-blue-50 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-2">3. Resignation of Office Bearers</h3>
            <p className="text-gray-700">
              The Chairman and office bearers may resign by submitting a letter to the Board, effective upon acceptance.
            </p>
          </motion.div>

          <motion.div
            className="bg-blue-50 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-2">4. Invited Members</h3>
            <p className="text-gray-700">
              The Chairman and Secretary may invite non-members to meetings, but they shall not have voting rights.
            </p>
          </motion.div>

          <motion.div
            className="bg-blue-50 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-2">5. Amendments and Special Meetings</h3>
            <p className="text-gray-700">
              Special General Body meetings shall be convened for alterations/extensions as per Section 3 of the KSR Act 1960.
            </p>
          </motion.div>

          <motion.div
            className="bg-blue-50 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-2">6. Legal Provisions</h3>
            <p className="text-gray-700">
              The Secretary shall represent the organization in legal matters as per Section 6 of the KSR Act 1960.
            </p>
          </motion.div>

          <motion.div
            className="bg-blue-50 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-2">7. Inclusivity</h3>
            <p className="text-gray-700">
              The benefits of the Society shall be open to all, regardless of caste, creed, or religion.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
