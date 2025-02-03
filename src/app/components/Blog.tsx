'use client'
import {motion} from "framer-motion";
import { Rotate3D } from "lucide-react";
import { animate } from "motion/react-client";
import Image from "next/image";
export default function Blog1() {
  return (
    
    <div className="text-white bg-cover justify-center">

       <div className="flex"><p className="mt-[-9px] text-yellow-600"> ________ </p> <motion.p className="font-sans ml-[10px]"
       initial={{opacity:1,y:70}}
       whileInView={{opacity:1,y:0}}
       transition={{duration:1}}> Production & Visual Agency </motion.p></div>
        <br />
        <br />
        
      <motion.h1
      viewport={{amount:0.4}}
      initial={{ opacity: 0, y: 90 }}
      // animate={{ opacity: 1, y: 0 }}
      whileInView={{opacity:1,y:0}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-6xl font-semibold text-left mt-10 font-sans flex-wrap flex"
    >
      We Create, Produce, &
    </motion.h1>
    <motion.h1
      initial={{ opacity: 0, y: 70 }}
      // animate={{ opacity: 1, y: 0 }}
      whileInView={{opacity:1,y:0}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-6xl font-semibold text-left mt-10 font-sans"
    >
      Share Stories
    </motion.h1>
        <br />
        <motion.h1
      initial={{ opacity: 0, y : 70 }}
      // animate={{ opacity: 1, y: 0 }}
      whileInView={{opacity:1,y:0}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-sm text-left mt-10 font-sans flex flex-wrap"
    >
      Capture the moment, amplify your story. Discover unparalleled photography services tailored to showcase your vision with precision and creativity.
    </motion.h1>
        <br />
        <br />
          <motion.button className="font-sans border-[0.5px] w-[120px] h-[80px] border-yellow-600"
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.7 }}
          >Get Started</motion.button>
          
    </div>
  );
}
{/* <h6 className="font-semibold font-sans text-6xl">We Create, Produce, & </h6> <br /> <h6 className="font-semibold font-sans text-6xl">Share Stories</h6> */}