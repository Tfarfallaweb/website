import React from "react";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <motion.div 
    transition={{duration:0.5}}
    initial={{x:0, y:-30, opacity:0}}
    animate={{x:0, y:0, opacity:1}}
    className="nav">
      <div className="left">Logo</div>
      <div className="right">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Nav;
