'use client'
import { Navbar1 } from "@/app/components/Navbar";
import Blog1 from "@/app/components/Blog";
import { motion } from "framer-motion";
import Blog2 from "@/app/components/Blog2";
import Footer from "@/app/components/Footer";

export default function Services() {
  return (
    <div className="flex flex-col items-center w-full bg-black min-h-screen">
        <div className="mt-[30px]">
            <Navbar1></Navbar1>
        </div>
            <Blog2></Blog2>
            <Footer></Footer>
    </div>
  );
}
