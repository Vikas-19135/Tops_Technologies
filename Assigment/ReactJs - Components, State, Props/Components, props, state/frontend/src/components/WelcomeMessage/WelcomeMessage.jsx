import React, { Component } from "react";
import { motion } from "framer-motion";

class WelcomeMessage extends Component {
  render() {
    return (
        // Motion for content
      <motion.div
        className="flex justify-center"
        initial={{ x: "100vw" }} 
        animate={{ x: 0 }}      
        transition={{ type: "spring", stiffness: 50 }} 
      >
        <h2>Welcome to React!</h2>
      </motion.div>
    );
  }
}

export default WelcomeMessage;
