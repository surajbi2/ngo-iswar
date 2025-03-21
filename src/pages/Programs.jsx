import { motion } from "framer-motion";
import ProgramCard from "../components/ProgramCard";
import { useEffect } from "react";
export default function Programs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const programs = [
    {
      title: "Education Initiatives",
      description: "Running schools, colleges, and vocational training centers to empower the youth.",
      imageUrl: "education.jpeg",
    },
    {
      title: "Healthcare & Medical Support",
      description: "Providing medical camps, awareness programs, and health education.",
      imageUrl: "healthcare.jpeg",

    },
    {
      title: "Women & Child Welfare",
      description: "Supporting women empowerment, child education, and safety initiatives.",
      imageUrl: "welfare.jpeg",

    },
    {
      title: "Skill Development",
      description: "Offering workshops and certification courses to improve employability.",
      imageUrl: "skill.jpeg",

    },
    {
      title: "Social Upliftment Programs",
      description: "Conducting awareness campaigns for social issues and community support.",
      imageUrl: "Seminar.jpeg",

    },
    {
      title: "Tribal & Rural Development",
      description: "Working towards infrastructure, education, and economic growth in rural areas.",
      imageUrl: "rural.jpeg",

    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-4xl font-extrabold text-[#FFD700] mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Programs
        </motion.h1>
        <p className="text-lg text-gray-200 mb-12">
          We run impactful programs to uplift communities, focusing on education, healthcare, and skill development.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-[1.03]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProgramCard {...program} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
