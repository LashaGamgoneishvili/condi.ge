"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHideNavbar(currentY > lastScrollY && currentY > 100);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  console.log("isOpen", isOpen);

  return (
    <header
      className={twMerge(
        `${
          lastScrollY > 250 ? "sticky" : "relative"
        } top-0 z-50 transition-transform duration-300`,
        hideNavbar ? "-translate-y-full" : "translate-y-0",
        "flex gap-2 lg:gap-28 items-center mb-4 justify-between px-4 bg-gradient-to-br from-[#6569E0] to-[#6569E0]] w-full h-24 lg:px-16 lg:py-8 shadow-xl"
      )}
    >
      <Link href="/" className="cursor-pointer">
        <Image
          src={logoImage}
          alt="logo"
          height={50}
          width={50}
          className="rounded-xl "
        />
      </Link>

      <div
        className={twMerge("lg:hidden z-50 ", isOpen && "text-black")}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <BurgerMenu isOpen={isOpen} />
      </div>

      {!isOpen && (
        <div
          className={twMerge(
            "hidden lg:flex flex-col lg:flex-row items-center justify-between h-auto w-full",
            isOpen &&
              "flex h-screen top-0 left-0 absolute py-18 bg-white backdrop-blur z-10 transition-all duration-500"
          )}
        >
          <div className="flex flex-col lg:flex-row w-full mt-24 lg:mt-0 gap-6 lg:gap-12 items-center justify-center lg:justify-start">
            <Link
              href="/"
              className="relative text-black text-md transition-all duration-500 leading-8 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full"
              // onClick={() => setIsOpen((prev) => !prev)}
            >
              მთავარი
            </Link>

            <Link
              href="/servicePage"
              className="relative text-black text-md transition-all duration-500 leading-8 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full"
              // onClick={() => setIsOpen((prev) => !prev)}
            >
              ჩვენი სერვისები
            </Link>
            <Link
              href="/about"
              className="relative text-black text-md transition-all duration-500 leading-8 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full"
              // onClick={() => setIsOpen((prev) => !prev)}
            >
              ჩვენს შესახებ
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
        </div>
      )}
      {isOpen && (
        <div
          className={twMerge(
            "hidden lg:flex flex-col lg:flex-row items-center justify-between h-auto w-full",
            isOpen &&
              "flex h-screen top-0 left-0 absolute py-18 bg-white backdrop-blur z-10 transition-all duration-500"
          )}
        >
          <div className="flex flex-col lg:flex-row w-full mt-24 lg:mt-0 gap-6 lg:gap-12 items-center justify-center lg:justify-start">
            <Link
              href="/"
              className="relative text-black text-md transition-all duration-500 leading-8 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              მთავარი
            </Link>

            <Link
              href="/servicePage"
              className="relative text-black text-md transition-all duration-500 leading-8 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              ჩვენი სერვისები
            </Link>
            <Link
              href="/about"
              className="relative text-black text-md transition-all duration-500 leading-8 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              ჩვენს შესახებ
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
        </div>
      )}
    </header>
  );
}
