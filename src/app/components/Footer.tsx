'use client'
import {motion} from "framer-motion";
import { Rotate3D } from "lucide-react";
import { animate } from "motion/react-client";
import Image from "next/image";
export default function Footer() {
  return (
    
    <div className=" bg-cover justify-center w-full h-[600px] bg-black flex">
        
        <motion.div
          className="w-full md:w-full h-[600px] md:h-full rounded-lg bg-cover bg-center "
          style={{ backgroundImage: "url('https://i0.wp.com/www.splento.com/blog/wp-content/uploads/2021/03/4K-Cameras.jpg?ssl=1')" }}
          initial={{ opacity: 0 ,y:70}}
          animate={{ opacity: 1 }}
          whileInView={{opacity:1,y:0}}
          transition={{ duration: 1 }}
        >
<div className="flex flex-row items-center justify-center gap-16 mt-[50px]">
            <div className="w-[400px] h-[500px] bg-white"></div>
            <div className="w-[400px] h-[500px] bg-white"></div>
            <div className="w-[400px] h-[500px] bg-white"></div>
</div>
        </motion.div>
    </div>
  );
}
{/* <h6 className="font-semibold font-sans text-6xl">We Create, Produce, & </h6> <br /> <h6 className="font-semibold font-sans text-6xl">Share Stories</h6> */}