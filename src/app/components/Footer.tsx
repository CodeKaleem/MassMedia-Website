'use client'
import {motion} from "framer-motion";
import { Rotate3D } from "lucide-react";
import { animate } from "motion/react-client";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Image from "next/image";
export default function Footer() {
  return (
    
    <div className=" bg-cover justify-center w-full h-[600px] bg-black flex text-white">
        
        <motion.div
          className="w-full md:w-full h-[600px] md:h-full rounded-lg bg-cover bg-center "
          style={{ backgroundImage: "url('')" }}
          initial={{ opacity: 0 ,y:70}}
          animate={{ opacity: 1 }}
          whileInView={{opacity:1,y:0}}
          transition={{ duration: 1 }}
        >
<div className="flex flex-row items-center justify-center gap-36 mt-[50px]">
            <div className="w-[400px] h-[500px] border-[1px] rounded-lg ">
            
            <motion.h1 className="text-xl md:text-3xl font-semibold font-sans " initial={{ opacity: 0 ,y:70 }} whileInView={{opacity:1,y:0}} transition={{ duration: 1 }}>
            Mass Media
            <hr />
        </motion.h1>
            <br />
            <motion.h1 className="text-xl md:text-xl font-sans text-justify" initial={{ opacity: 0 ,y:70 }} whileInView={{opacity:1,y:0}} transition={{ duration: 1 }}>
            Captivating visuals, strategic social media campaigns, elevating brands worldwide.
        </motion.h1>
            
            <br />
            <div className="flex flex-row gap-6">
            <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
            </div>

            </div>
            
            <div className="w-[400px] h-[500px] ml-[0px] border-[1px] rounded-lg">
            <motion.h1 className="text-xl md:text-3xl font-semibold font-sans " initial={{ opacity: 0 ,y:70 }} whileInView={{opacity:1,y:0}} transition={{ duration: 1 }}>
            Contact Info
            <hr />
        </motion.h1>
             <br />             
            <div className="flex flex-row gap-6">
            <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <a href="" className="mt-[8px] font-sans">Shahzaib@gmail.com</a>
            </div>
        </div>
            <div className="w-[400px] h-[500px]  flex flex-col items-start gap-4 font-sans border-[1px] rounded-lg" >
              
              <motion.h1 className="text-xl md:text-3xl font-semibold " initial={{ opacity: 0 ,y:70 }} whileInView={{opacity:1,y:0}} transition={{ duration: 1 }}>
              Explore Us
              <hr />
        </motion.h1>
              <button className="mt-[15px]">
                Home
              </button>
              <button>
                About Us
              </button>
              <button>
                Services
              </button>
              <button>
                Portfolio
              </button>
              <button>
                Contact US
              </button>
              <button>
                Appointment
              </button>
        </div>
</div>
        </motion.div>
    </div>
  );
}
{/* <h6 className="font-semibold font-sans text-6xl">We Create, Produce, & </h6> <br /> <h6 className="font-semibold font-sans text-6xl">Share Stories</h6> */}