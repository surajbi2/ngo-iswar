import { motion } from "framer-motion";
import { useEffect } from "react";
export default function GetInvolved() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-4xl font-extrabold text-[#FFD700] mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Join Our Cause
        </motion.h1>
        <p className="text-lg text-gray-200 mb-12">
          Be a part of something bigger—contribute, volunteer, or partner with us to create a lasting impact.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Membership Card */}
        <motion.div
          className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:scale-[1.03]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-xl font-semibold text-[#1E3A8A] mb-4">Become a Member</h3>
          <p className="text-gray-600 mb-4">
            Join as an ordinary member with nominal fees and contribute directly to our initiatives.
          </p>
          <div className="mb-4">
            <p className="font-semibold">₹15 Registration + ₹25 Annual Fee</p>
          </div>
          <button className="bg-[#1E3A8A] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition">
            Apply Now
          </button>
        </motion.div>

        {/* Volunteer Card */}
        <motion.div
          className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:scale-[1.03]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-[#1E3A8A] mb-4">Volunteer With Us</h3>
          <p className="text-gray-600 mb-4">
            Contribute your time and skills to our field operations and community programs.
          </p>
          <button className="bg-[#1E3A8A] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition">
            Volunteer Form
          </button>
        </motion.div>

        {/* Donation Card */}
        <motion.div
          className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:scale-[1.03]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-[#1E3A8A] mb-4">Make a Donation</h3>
          <p className="text-gray-600 mb-4">
            Support our initiatives through financial contributions or material donations.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#B59F3B] text-[#1E3A8A] px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Donate Now
            </button>
            <button className="border-2 border-[#1E3A8A] text-[#1E3A8A] px-6 py-2 rounded-lg hover:bg-[#1E3A8A] hover:text-white transition">
              View Causes
            </button>
          </div>
        </motion.div>
      </div>

      {/* Partnership Section */}
      <motion.div
        className="mt-16 bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-6">Corporate Partnerships</h2>
        <p className="text-gray-600 mb-6">
          Collaborate with us for CSR initiatives and sustainable development projects.
        </p>
        <div className="flex items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
          />
          <button className="bg-[#1E3A8A] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition">
            Request Partnership
          </button>
        </div>
      </motion.div>
    </div>
  );
}
