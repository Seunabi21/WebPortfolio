import React from "react";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <motion.section
      id="introduction"
      className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl">Welcome to My Portfolio</h2>
    </motion.section>
  );
};

export default Introduction;
