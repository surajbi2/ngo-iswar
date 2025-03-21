import { Stethoscope, Baby, ShieldCheck, GraduationCap, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
export default function HealthcareSupport() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const initiatives = [
    {
      icon: <Stethoscope className="text-red-700 w-5 h-5" />,
      text: "Free medical camps and checkups in villages",
    },
    {
      icon: <Baby className="text-red-700 w-5 h-5" />,
      text: "Women and child health awareness drives",
    },
    {
      icon: <ShieldCheck className="text-red-700 w-5 h-5" />,
      text: "Hygiene and sanitation programs",
    },
    {
      icon: <GraduationCap className="text-red-700 w-5 h-5" />,
      text: "Training for local health workers",
    },
    {
      icon: <Truck className="text-red-700 w-5 h-5" />,
      text: "Mobile healthcare vans for remote areas",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-red-700 mb-6">
          Healthcare & Medical Support
        </h1>
        <p className="text-gray-700 mb-8 leading-relaxed text-lg">
          Access to basic healthcare is a right, not a privilege. Our medical outreach initiatives focus on preventive care and awareness.
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
