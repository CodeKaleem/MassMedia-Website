'use client'
import { Navbar1 } from "@/app/components/Navbar";
import Blog1 from "@/app/components/Blog";
import { motion } from "framer-motion";
import Blog2 from "@/app/components/Blog2";
import Footer from "@/app/components/Footer";

export default function Home1() {
  return (
    <div className="flex flex-col items-center w-full bg-black min-h-screen">
      {/* Navbar Section */}
      <div className="w-full flex justify-center py-6">
        <Navbar1 />
      </div>
      
      {/* Hero Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center px-4 lg:px-20">
        <motion.div
          className="w-full lg:w-1/2 h-[400px] lg:h-[966px] rounded-lg bg-cover bg-center"
          style={{ backgroundImage: "url('https://i0.wp.com/www.splento.com/blog/wp-content/uploads/2021/03/4K-Cameras.jpg?ssl=1')" }}
          initial={{ opacity: 0 ,y:10,x:10}}
          // animate={{ opacity: 1 }}
          whileInView={{ opacity: 1 ,y:0 ,x:0}}
          transition={{ duration: 1 }}
        />
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-white text-center lg:text-left p-4 lg:p-10">
          <Blog1 />
        </div>
      </div>
      
      {/* About Section */}
      <div className="w-full flex flex-col items-center lg:flex-row px-4 lg:px-20 py-10">
        <motion.div
          className="w-full md:w-[500px] h-[400px] md:h-[700px] rounded-lg bg-cover bg-center"
          style={{ backgroundImage: "url('https://i0.wp.com/www.splento.com/blog/wp-content/uploads/2021/03/4K-Cameras.jpg?ssl=1')" }}
          initial={{ opacity: 0 ,x:-100}}
          animate={{ opacity: 1 }}
          whileInView={{opacity:1,x:0}}
          transition={{ duration: 1 }}
        />
        <div className="w-full md:w-[800px] text-white p-4 md:p-10">
          <motion.h1 className="text-xl md:text-2xl font-semibold text-center" initial={{ opacity: 0,y:-100 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileInView={{y:0,x:0}}>About Mass Media</motion.h1>
          <br />
          <motion.h1 className="text-2xl md:text-5xl font-semibold mt-4" initial={{ opacity: 0 ,y:70 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileInView={{x:0,y:0}}>
            We Make Only Authentic Visual Experiences
          </motion.h1>
          <br />
          <motion.p className="text-sm md:text-lg mt-4" initial={{ opacity: 0 , y:70 }} transition={{ duration: 1 }} whileInView={{opacity:1 ,y:0}}>
          At Mass Mediaa, we pride ourselves on delivering tailored solutions that drive results. With a focus on creativity and expertise, our dedicated team crafts customized strategies to meet your unique needs. Whether it’s captivating product photography, compelling real estate visuals, engaging digital video commercials, or strategic social media marketing, we’re here to elevate your brand and exceed your expectations. With a commitment to excellence and a passion for innovation, we are your trusted partner in achieving success.
          </motion.p>
          <br />
          <motion.button className="border border-yellow-600 px-6 py-3 mt-6 text-white rounded-lg hover:bg-yellow-600 transition-all"
            initial={{y:70}} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} whileInView={{scale:1,y:0,opacity:1}} transition={{duration:1}}> 
            Get Started
          </motion.button>
        </div>
      </div>
      
      {/* Experience Section */}
      <div className="w-full flex justify-center text-white text-center p-6">
        <motion.h1 className="text-xl md:text-3xl font-semibold" initial={{ opacity: 0 ,y:70 }} whileInView={{opacity:1,y:0}} transition={{ duration: 1 }}>
          10+ Years Working Experience
        </motion.h1>
      </div>
      <Blog2></Blog2>
      <Footer></Footer>
    </div>
  );
}
