"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Nav from './Nav'
const HomeComp = () => {

  

  return (
    <div className='maindiv'>
<Nav/>

    <motion.div 
    transition={{duration:0.5, delay:0.5}}
    initial={{x:0, y:100, opacity:0}}
    animate={{x:0, y:0, opacity:1}}
    className='home'>
      {/* <video src={VideoFile.src}></video> */}
      <video className='video' width={700} src={require('../public/videos/video.mp4')} autoPlay loop muted />
    </motion.div>
    
    <div className="content">
      <p>
YESTERDAY, COME CLOSER <br />
BY IBRAHEM HASAN <br />
PRE-ORDER $67.48 <br />
<br />
728 PAGES <br />
170X240MM <br />
115GSM GARDAPAT KIARA PAPER <br />
SELF PUBLISHED <br />
LIMITED TO 1000 <br />
ISBN 978-0-9796149-0-3 <br />
<br />
100% OF THE PROFITS WILL <br />
BE GIVEN DIRECTLY TO MULTIPLE <br />
GRASSROOTS EFFORTS ON <br />
THE GROUND IN PALESTINE. <br />
ONCE WE HIT OUR QUOTA <br />
WE WILL GOTO PRINT. <br />
<br />
SOLD OUT <br />

      </p>
    
    </div>
    </div>
  )
}

export default HomeComp
