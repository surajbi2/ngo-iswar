import { School, BookOpen, Laptop, Users, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
export default function EducationInitiatives() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const initiatives = [
    {
      icon: <School className="text-blue-700 w-5 h-5" />,
      text: "Primary and Secondary schools in rural regions",
    },
    {
      icon: <BookOpen className="text-blue-700 w-5 h-5" />,
      text: "Scholarship programs for deserving students",
    },
    {
      icon: <Laptop className="text-blue-700 w-5 h-5" />,
      text: "Digital learning initiatives and libraries",
    },
    {
      icon: <Users className="text-blue-700 w-5 h-5" />,
      text: "Adult education and literacy campaigns",
    },
    {
      icon: <Handshake className="text-blue-700 w-5 h-5" />,
      text: "Partnerships with NGOs for better infrastructure",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-6">
          Education Initiatives
        </h1>
        <p className="text-gray-700 mb-8 leading-relaxed text-lg">
          We believe that education is the cornerstone of a better society. Our organization runs several schools and colleges in underprivileged areas to ensure that every child has access to quality education.
        </p>

        <ul className="space-y-5">
          {initiatives.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-3 text-gray-800 text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.3, // staggered effect
              }}
            >
              {item.icon}
              <span>{item.text}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
