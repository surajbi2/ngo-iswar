import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
export default function SkillDevelopment() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const skills = [
    "Vocational training centers",
    "IT and computer literacy courses",
    "Handicrafts, tailoring, carpentry, and plumbing",
    "Soft skill development programs",
    "Industry tie-ups for employment assistance",
  ];

  return (
    <div className="bg-gradient-to-br from-green-100 via-white to-green-50 min-h-screen py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skill Development
        </motion.h1>

        <motion.p
          className="text-lg text-gray-800 mb-8 text-center leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          To improve employability and economic independence, we offer a range of skill-based learning opportunities tailored to the needs of our communities.
        </motion.p>

        <motion.ul
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {skills.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-start bg-white p-4 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <CheckCircle className="text-green-600 mt-1 mr-3" size={22} />
              <span className="text-gray-800 text-lg">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
