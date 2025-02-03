'use client'
import {motion} from "framer-motion";
import { useRef } from "react";
import { useScroll } from "motion/react";
import { Route } from "lucide-react";
import { animate, div } from "motion/react-client";
import Image from "next/image";
export default function Blog2() {
  return(
    <div className="w-full h-[940px] bg-black flex flex-col items-center justify-center ">
    <div className="w-1/2 h-[200px] mt-[0px] flex flex-col text-center">
    <div className="flex flex-row items-center justify-center"><p className="mt-[-10px] text-yellow-600"> ________ </p> <motion.p className="font-sans ml-[10px] text-white"
       initial={{opacity:1,y:70}}
       whileInView={{opacity:1,y:0}}
       transition={{duration:1}}>Our Services</motion.p>
       </div>
<div className="flex flex-col items-center justify-center">
<motion.h1
      initial={{ opacity: 0, y: 70 }}
      // animate={{ opacity: 1, y: 0 }}
      whileInView={{opacity:1,y:0}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-4xl font-semibold text-center mt-5 font-sans flex-wrap flex text-white"
    >
      Services We Provide For You 
    </motion.h1>
</div>
<div className="flex flex-col items-center justify-center text-white">
<motion.h1
      initial={{ opacity: 0, y : 70 }}
      // animate={{ opacity: 1, y: 0 }}
      whileInView={{opacity:1,y:0}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-sm text-left mt-10 font-sans flex flex-wrap"
    >
        Unlock the potential of your business with our comprehensive range of professional services tailored to meet your needs.
    </motion.h1>
</div>
    </div>
  <div className="w-full h-[400px] items-center justify-center flex flex-col">
  <div id="example">
            <ul>
                <li style={{ }}><motion.div
          className="w-full md:w-[200px] h-[400px] md:h-[250px] rounded-lg bg-cover bg-center"
          style={{ backgroundImage: "url('https://i0.wp.com/www.splento.com/blog/wp-content/uploads/2021/03/4K-Cameras.jpg?ssl=1')" }}
          initial={{ opacity: 0 ,y:70}}
          animate={{ opacity: 1 }}
          whileHover={{scale:1.2}}
          whileTap={{scale:0.8}}
          whileInView={{opacity:1,y:0}}
          transition={{ duration: 1 }}
        /></li>
                <li style={{}}><motion.div
          className="w-full md:w-[200px] h-[400px] md:h-[250px] rounded-lg bg-cover bg-center"
          style={{ backgroundImage: "url('https://i0.wp.com/www.splento.com/blog/wp-content/uploads/2021/03/4K-Cameras.jpg?ssl=1')" }}
          initial={{ opacity: 0 ,y:70}}
          animate={{ opacity: 1 }}
          whileHover={{scale:1.2}}
          whileTap={{scale:0.8}}
          whileInView={{opacity:1,y:0}}
          transition={{ duration: 1 }}
        /></li>
                <li style={{}}><motion.div
          className="w-full md:w-[200px] h-[400px] md:h-[250px] rounded-lg bg-cover bg-center"
          style={{ backgroundImage: "url('https://i0.wp.com/www.splento.com/blog/wp-content/uploads/2021/03/4K-Cameras.jpg?ssl=1')" }}
          initial={{ opacity: 0 ,y:70}}
          animate={{ opacity: 1 }}
          whileHover={{scale:1.2}}
          whileTap={{scale:0.8}}
          whileInView={{opacity:1,y:0}}
          transition={{ duration: 1 }}
        /></li>
                        <li style={{}}><motion.div
          className="w-full md:w-[200px] h-[400px] md:h-[250px] rounded-lg bg-cover bg-center"
          style={{ backgroundImage: "url('https://i0.wp.com/www.splento.com/blog/wp-content/uploads/2021/03/4K-Cameras.jpg?ssl=1')" }}
          initial={{ opacity: 0 ,y:70}}
          animate={{ opacity: 1 }}
          whileHover={{scale:1.2}}
          whileTap={{scale:0.8}}
          whileInView={{opacity:1,y:0}}
          transition={{ duration: 1 }}
        /></li>

            </ul>
            <StyleSheet />
        </div>
  </div>
  <motion.button className="font-sans border-[0.5px] w-[100px] h-[60px] border-yellow-600 text-white"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.7 }}
          initial={{y:70}}
          whileInView={{y:0}}
          transition={{duration:1}}
          >
            Services</motion.button>
  </div>
  );
}
function StyleSheet() {
    return (
        <style>{`
            #example {
              width: 900vw;
              max-width: 880px;
              position: relative;
            }
            #example ul {
                display: flex;
                list-style: none;
                height: 270px;
                gap: 25px;
            }
    `}</style>
    )
}