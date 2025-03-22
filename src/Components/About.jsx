import { motion } from "framer-motion"; // ✅ Import from "framer-motion"
import React from "react";

const About = () => {
  return (
    <div className="p-5 w-full flex flex-col items-center justify-center">
      {/* Heading Animation */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl heading2
         md:text-6xl mt-10 text-white text-center"
      >
        Compact & Durable
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="md:h-[70vh]  relative"
      >
        <img src="/Pods2.png" className="h-full w-full object-cover" alt="" />
      </motion.div>
    </div>
  );
};

export default About;
