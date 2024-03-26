"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open)
    console.log("click")
  }

  return (
    <>
      <motion.div
        initial={{ x: 0, y: -30, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="nav"
      >
        <div className="left">TONY FARFALLA</div>
        <div className="right">
          
            <button onClick={() => handleClick()} className="info">
              Info
            </button>
          
        </div>
      </motion.div>
      <div className={`text`}>
        <p className={`${open ? "open" : "close"}`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
          minus eos distinctio incidunt ratione quibusdam delectus mollitia,
          aliquam maxime rerum obcaecati autem eveniet similique repellendus
          nemo tempore deserunt vero unde id corrupti iste nihil. Ad unde illum
          expedita exercitationem laboriosam impedit, voluptatum sint veniam
          molestiae, vitae doloremque laudantium.
        </p>
      </div>
    </>
  );
};

export default Nav;
