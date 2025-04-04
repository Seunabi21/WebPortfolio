import React from "react";
import { motion } from "framer-motion";

const contact = () => {
  return (
    <motion.section
      className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl">Contact</h2>
    </motion.section>
  );
};

export default contact;
