"use client";
import landingImage from "@/src/assets/images/landingImage.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <section className="h-screen w-full bg-[url(@/src/assets/images/landingImage.jpg)] bg-cover bg-center -translate-y-4">
      <div>
        <p className="text-black text-lg lg:hidden text-center px-2 mb-24 pt-24 lg:text-3xl">
          <motion.strong
            animate={{ fontSize: "24px" }}
            initial={{ fontSize: "0px" }}
            transition={{ duration: 0.5 }}
          >
            კონდენციონერის - მონტაჟი - შეკეთება - გაწმენდა - ფრეონის დამატება
          </motion.strong>
        </p>
        <p className="text-black hidden lg:block text-lg text-center px-2 mb-24 pt-24 lg:text-3xl">
          <motion.strong
            animate={{ fontSize: "32px" }}
            initial={{ fontSize: "0px" }}
            transition={{ duration: 0.5 }}
          >
            კონდენციონერის - მონტაჟი - შეკეთება - გაწმენდა - ფრეონის დამატება
          </motion.strong>
        </p>
        <motion.p
          animate={{ fontSize: "24px", opacity: 1 }}
          initial={{ fontSize: "0px", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[rgba(10,10,10,0.7)] lg:hidden mx-4 px-4 py-2 rounded-lg text-center md:w-1/2  cursor-pointer"
        >
          598 - 24 - 22 - 20
        </motion.p>
        <motion.p
          animate={{ fontSize: "32px", opacity: 1 }}
          initial={{ fontSize: "0px", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[rgba(10,10,10,0.7)] hidden lg:block rounded-lg text-center md:w-1/2 lg:mx-auto py-4 cursor-pointer"
        >
          598 - 24 - 22 - 20
        </motion.p>
      </div>
    </section>
  );
}
