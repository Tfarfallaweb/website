"use client";

import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

const Images = () => {
  const [data, setData] = useState();
  const ref = useRef();
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("http://localhost:3000/api");
      res = await res.json();
      setData(res.shuffledArray);
      console.log(res.shuffledArray);
    };
    console.log(`translate(${Math.floor(Math.random() * 100)}px, ${Math.floor(Math.random() * 100)}px)`)
    fetchData();

    
    
  }, []);

let lastWidth
  
  const setWidth = () =>{
    lastWidth = `${30 + Math.random() * 30}%`
    return lastWidth
  }

  const setTransform = () =>{
    let ranx = Math.floor(Math.random() * 40);
    let rany = Math.floor(Math.random() * 100);
    console.log(`translateX(${ranx}) translateY(${rany})`)
    return `translateX(${ranx}%) translateY(${rany}%)`
  }

  const addImages = () => {
    if (!data) {
      return null; // Return null if data is not available yet
    }

    return data.map((image, index) => (
      <motion.div
      style={{transform: `${setTransform()}`}}
      className="imgcover">
        <motion.img
      drag
      whileInView={{ opacity: 1 }}
      dragElastic={0}
      className="imgs"
      dragMomentum={false}
      transition={{ duration: 0.6, delay: 0 }}
      initial={{ x: 0, y: 0, opacity: 0 }}
      dragConstraints={ref}
      key={index}
      width={setWidth()}
      src={image.src}
      alt={image.alt}
    />
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