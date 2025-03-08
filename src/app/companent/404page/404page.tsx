"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 text-gray-800">
      <motion.div 
        className="w-4/5 max-w-3xl bg-white p-8 rounded-lg shadow-lg flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
   
        
        <motion.div 
          className="mt-6 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Image src="/404img.jpg" alt="404 Not Found" width={600} height={400} className="w-full h-auto rounded-lg shadow-lg" />
        </motion.div>

        <motion.p 
          className="text-xl mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Üzgünüz, aradığınız sayfa bulunamadı.
        </motion.p>

        <motion.div 
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all">
            Anasayfaya Dön
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
