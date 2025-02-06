'use client'
import { Navbar1 } from "@/app/components/Navbar";
import Blog1 from "@/app/components/Blog";
import { motion } from "framer-motion";
import Blog3 from "@/app/components/Blog3";
import Footer from "@/app/components/Footer";

export default function Services() {
  return (
    <div className="flex flex-col items-center w-full bg-black min-h-screen">
        <div className="mt-[30px]">
            <Navbar1></Navbar1>

        </div>
        <div className="h-[200px] w-full bg-white text-center">
            PortFolio
          </div>
            <Blog3></Blog3>
            <div className="h-[500px] w-full bg-white">

            </div>
            <Footer></Footer>
    </div>
  );
}
