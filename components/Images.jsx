"use client";

import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

const Images = () => {
  const [data, setData] = useState();
  const ref = useRef();

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("/api");
      res = await res.json();
      setData(res.shuffledArray);
    };
    fetchData();
  }, []);

  let lastWidth = 45;

  const setWidth = () => {
    lastWidth = `${60 + Math.random() * 15}%`;
  };

  const setTransform = () => {
    let ranx = Math.floor(Math.random() * 40);
    let rany = Math.floor(Math.random() * 100);
    return `translateX(${ranx}%) translateY(${rany}%)`;
  };
  setWidth();
  const addImages = () => {
    if (!data) {
      return null; // Return null if data is not available yet
    }

    return data.map((image, index) => (
      <motion.div
        style={{
          transform: `${setTransform()}`,
          pointerEvents: "none",
          width: `${lastWidth}`,
        }}
        drag
        className="imgcover"
      >
        <motion.img
          style={{ transform: `${setTransform()}`, pointerEvents: "auto" }}
          drag
          whileInView={{ opacity: 1 }}
          className="imgs"
          transition={{ duration: 0.6, delay: 0 }}
          initial={{ x: 0, y: 0, opacity: 0 }}
          whileDrag={{ scale: 1.2 }}
          key={index}
          width={lastWidth}
          src={image.src}
          alt={image.alt}
        />
        {setWidth()}
      </motion.div>
    ));
  };

  return (
    <motion.div className="main" ref={ref}>
      {addImages()}
    </motion.div>
  );
};

export default Images;
