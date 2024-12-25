import React from "react";
import { motion } from "framer-motion";

const Greeting = ({ name }) => {
  return (

    // Motion for Heading
    <motion.div
      className="text-4xl font-semibold flex justify-center p-4"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}      
      transition={{ type: "spring", stiffness: 50 }} 
    >
      <h1>
        Hello, {name}!
      </h1>
    </motion.div>
  );
};

export default Greeting;
