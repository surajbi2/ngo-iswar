import { Leaf, Sun, Landmark, BookOpen, Mountain } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
export default function TribalRuralDevelopment() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const items = [
    {
      icon: <Landmark className="text-yellow-600 w-5 h-5" />,
      text: "Infrastructure support: roads, schools, and water supply",
    },
    {
      icon: <Sun className="text-yellow-600 w-5 h-5" />,
      text: "Renewable energy initiatives (solar panels, biogas)",
    },
    {
      icon: <BookOpen className="text-yellow-600 w-5 h-5" />,
      text: "Support for tribal art and culture preservation",
    },
    {
      icon: <Leaf className="text-yellow-600 w-5 h-5" />,
      text: "Farming training, seed banks, and market access",
    },
    {
      icon: <Mountain className="text-yellow-600 w-5 h-5" />,
      text: "Rural entrepreneurship programs",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-yellow-700 mb-6">
          Tribal & Rural Development
        </h1>
        <p className="text-gray-700 mb-8 leading-relaxed text-lg">
          Our organization strives to bring inclusive growth to tribal and rural communities by building sustainable systems.
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
                delay: index * 0.3, // staggered delay for each item
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
