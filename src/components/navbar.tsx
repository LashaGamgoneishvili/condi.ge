"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logoImage from "@/src/assets/images/Bild2.png";
import FacebookIcon from "@/src/assets/images/icons8-facebook-60.svg";
import { twMerge } from "tailwind-merge";
import BurgerMenu from "./BurgerMenu";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="flex gap-2 lg:gap-28 items-center justify-between px-4  bg-gradient-to-br from-blue-700 to-indigo-700]
  w-full h-24 lg:px-16 lg:py-8 shadow-xl relative"
    >
      <Image
        src={logoImage}
        alt="logo"
        height={50}
        width={50}
        className="rounded-xl cursor-pointer"
      />

      <div
        className={twMerge("lg:hidden z-20 ", isOpen && "text-black")}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <BurgerMenu isOpen={isOpen} />
      </div>

      <motion.div
        animate={{}}
        className={twMerge(
          "hidden lg:flex  flex-col lg:flex-row items-center justify-between h-auto w-full",
          isOpen &&
            "flex h-screen top-0 left-0 absolute py-18 bg-white backdrop-blur z-10 transition-all duration-500"
        )}
      >
        <div className="flex flex-col md:flex-row w-full mt-24 lg:mt-0 gap-6 lg:gap-12 items-center justify-center lg:justify-start">
          <Link
            href="#"
            className="relative text-black text-md transition-all duration-500 leading-8 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full"
          >
            მთავარი
          </Link>

          <Link
            href="#"
            className="relative text-black text-md transition-all duration-500 leading-8 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full"
          >
            ჩვენი სერვისები
          </Link>
          <Link
            href="#"
            className="relative text-black text-md transition-all duration-500 leading-8 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full"
          >
            ჩვენს შესახებ
          </Link>
          <Link
            href="#"
            className="relative text-black text-md transition-all leading-8 duration-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full"
          >
            ბლოგები
          </Link>
        </div>
        <Link
          href="https://www.facebook.com/profile.php?id=61574622100907"
          target="_blank"
        >
          <Image
            src={FacebookIcon}
            alt="FacebookIcon"
            className="cursor-pointer outline-2 outline-transparent hover:outline-black transition-all rounded-full duration-300 outline-offset-2"
            height={40}
            width={40}
          />
        </Link>
      </motion.div>
    </header>
  );
}
