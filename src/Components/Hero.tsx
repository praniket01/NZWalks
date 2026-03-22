import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LandingNavbar from "./LandingNavbar";

const HeroSection = ({ imageUrl, motto, description }: any) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">


      <LandingNavbar />

      <motion.img
        src={imageUrl}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 12, ease: "easeInOut" }}
      />


      <div className="absolute inset-0 bg-black/50" />


      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white max-w-3xl leading-tight"
        >
          {motto}
        </motion.h1>


        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-200 mt-6 max-w-2xl"
        >
          {description}
        </motion.p>


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex gap-4 mt-8 items-center"
        >

      
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/signup"
              className="flex items-center justify-center h-[48px] px-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition shadow"
            >
              Start Exploring
            </Link>
          </motion.div>

        
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById("OurFeatures")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center justify-center h-[48px] px-6 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
          >
            Learn More
          </motion.button>

        </motion.div>

      </div>

    </section>
  );
};

export default HeroSection;