import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgramCard from "../components/ProgramCard";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const featuredPrograms = [
    {
      title: "Community Development",
      description: "Integrated rural, urban, and tribal community development programs.",
      imageUrl: "team.jpeg"
    },
    {
      title: "Education Initiatives",
      description: "Pre-primary to secondary education, vocational training, and skill development.",
      imageUrl: "education.jpeg"
    },
    {
      title: "Healthcare Programs",
      description: "Medical care, family welfare, and disease awareness campaigns.",
      imageUrl: "healthcare.jpeg"
    }
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <motion.div
        className="bg-[#1E3A8A] text-white py-20 relative overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Empowering Communities Through Action Research
          </motion.h1>
          <motion.p
            className="text-xl mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Dedicated to sustainable development and social welfare of underprivileged communities.
          </motion.p>
          <div className="flex justify-center gap-4">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                to="/get-involved"
                className="bg-[#B59F3B] text-[#1E3A8A] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
              >
                Get Involved
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                to="/programs"
                className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1E3A8A] transition-all duration-300"
              >
                Our Programs
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Featured Programs */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#1E3A8A] text-center mb-12">
          Featured Initiatives
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredPrograms.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ProgramCard {...program} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#E5E7EB] py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          {[
            { value: 5, label: "Social Programs" },
            { value: 8, label: "Dedicated Board Members" },
            { value: 1, label: "Years of Service" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-4xl font-bold text-[#1E3A8A] mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.3 }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {stat.value}+
                </motion.span>
              </motion.h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
