"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Landing() {
  return (
    <section
      className={`h-screen w-full bg-[url(/assets/images/landingImage.jpg)] bg-cover bg-center -translate-y-4`}
    >
      <div className="flex flex-col items-center justify-center">
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
          className="bg-[rgba(10,10,10,0.7)] lg:hidden text-white flex flex-col  mx-4 px-4 py-2 rounded-lg text-center md:w-1/2  cursor-pointer"
        >
          <Link href="tel:598242220">598 - 24 - 22 - 20</Link>

          <Link
            href="tel:+995598222420"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 cursor-pointer"
          >
            📞 გამოძახება
          </Link>
        </motion.p>
        <motion.p
          animate={{ fontSize: "32px", opacity: 1 }}
          initial={{ fontSize: "0px", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[rgba(10,10,10,0.7)] hidden lg:flex flex-col text-white/80 gap-2 justify-center items-center rounded-lg text-center md:w-1/2 lg:mx-auto py-4 cursor-pointer"
        >
          <Link href="tel:598242220">598 - 24 - 22 - 20</Link>

          <Link
            href="tel:+995598222420"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 w-72 rounded-lg transition-colors duration-200 cursor-pointer"
          >
            📞 გამოძახება
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
