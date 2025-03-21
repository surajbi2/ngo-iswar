import { Heart, Baby, Book, Shield, Home } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
export default function WomenChildWelfare() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const items = [
    {
      icon: <Heart className="text-pink-600 w-5 h-5" />,
      text: "Self-help groups and micro-loan programs",
    },
    {
      icon: <Book className="text-pink-600 w-5 h-5" />,
      text: "Child education sponsorships",
    },
    {
      icon: <Baby className="text-pink-600 w-5 h-5" />,
      text: "Nutrition programs for expecting mothers and children",
    },
    {
      icon: <Shield className="text-pink-600 w-5 h-5" />,
      text: "Workshops on rights, safety, and employment",
    },
    {
      icon: <Home className="text-pink-600 w-5 h-5" />,
      text: "Rehabilitation centers for victims of abuse",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white py-16 px-6 md:px-12">
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-pink-700 mb-6">
          Women & Child Welfare
        </h1>
        <p className="text-gray-700 mb-8 leading-relaxed text-lg">
          Empowered women lead to stronger communities. We focus on uplifting women and ensuring the safety and growth of children.
        </p>

        <ul className="space-y-5">
          {items.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-3 text-gray-800 text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.3,
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
