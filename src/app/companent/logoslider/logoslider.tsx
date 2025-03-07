"use client"
import { motion } from "framer-motion";
import Image from "next/image";
 import "./logoslider.css";
const logos = [
  "/1384031.png",
  "/15949717.png",
  "/brain.png",
  "/twitter_.png",
  "/next.svg",
];

const BrandsCarousel = () => {
  return (
    <div className="div">

    <div className="overflow-hidden bg-gray-100 py-4">
      <motion.div
        className="flex gap-16 w-max"
        animate={{ 
          x: ["-10%", "-50%"] // Container genişliğinin yarısı kadar kaydır
        }}
        transition={{ 
          repeat: Infinity,
          duration: 100, // Hızı ayarlamak için süre
          ease: "linear",
        }}
      >
        {/* Çift set oluşturarak kesintisiz döngü */}
        {[...logos, ...logos,...logos, ...logos,...logos, ...logos,...logos, ...logos].map((logo, index) => (
          <div key={index} className="relative w-24 h-24 shrink-0 mx-10">
            <Image
              src={logo}
              alt="Brand Logo"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div></div>
  );
};

export default BrandsCarousel;