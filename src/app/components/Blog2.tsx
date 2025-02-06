'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Blog2() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-4 md:px-8 lg:px-1 mt-[-10px]">
      <div className="w-full md:w-2/3 text-center mb-10">
        <div className="flex items-center justify-center gap-2">
          <p className="text-yellow-600 mt-[-215px]">________</p>
          <motion.p
            className="font-sans text-white mt-[-200px]"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Services
          </motion.p>
        </div>

        <motion.h1
          className="text-3xl md:text-4xl font-semibold text-white mt-[-30px]"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Services We Provide For You
        </motion.h1>

        <motion.p
          className="text-sm text-white mt-5 md:mt-8"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Unlock the potential of your business with our comprehensive range of professional services tailored to meet your needs.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-3/4 ">
        {[...Array(4)].map((_, index) => (
          <motion.div
            key={index}
            className="w-full h-[200px] md:h-[250px] rounded-lg bg-cover bg-center"
            style={{ backgroundImage: "url('https://i0.wp.com/www.splento.com/blog/wp-content/uploads/2021/03/4K-Cameras.jpg?ssl=1')" }}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 1 }}
          />
        ))}
      </div>

      <motion.button
        className="mt-32 border border-yellow-600 px-6 py-3 text-white font-sans rounded-md hover:bg-yellow-600 hover:text-black transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ y: 70 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
        
      >
        Services
      </motion.button>
    </div>
  );
}
