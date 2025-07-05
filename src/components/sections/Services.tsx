"use client";
import image1 from "@/src/assets/images/wmendax.jpg";
import image2 from "@/src/assets/images/wmendax.jpg";
import image3 from "@/src/assets/images/wmendax.jpg";
import image4 from "@/src/assets/images/wmendax.jpg";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const slides = [
  {
    id: 1,
    title: "კონდენციონერის მონტაჟი",
    mob: "598 - 24 - 22 -20",
    img: image1,
    url: "/installation",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "კონდენციონერის შეკეთება",
    mob: "598 - 24 - 22 -20",
    img: image2,
    url: "/repair",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 3,
    title: "კონდენციონერი წმენდა",
    mob: "598 - 24 - 22 -20",
    img: image3,
    url: "/cleaning",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },

  {
    id: 4,
    title: "ფრეონის დამატება",
    mob: "598 - 24 - 22 -20",
    img: image4,
    url: "/adding-freon",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
];

export default function Services() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const minSwipeDistance = 50;
    const distance = touchStartX - touchEndX;

    console.log("distance", distance);
    console.log("touchStartX", touchStartX);
    console.log("touchEndX", touchEndX);

    if (
      distance !== touchStartX &&
      distance > minSwipeDistance &&
      selectedIndex < slides.length - 1
    ) {
      // Swipe left
      setSelectedIndex((prev) => prev + 1);
    } else if (
      distance !== touchStartX &&
      distance < -minSwipeDistance &&
      selectedIndex > 0
    ) {
      // Swipe right
      setSelectedIndex((prev) => prev - 1);
    }

    // Reset positions
    setTouchStartX(0);
    setTouchEndX(0);
  };

  return (
    <>
      <section className="sm:hidden flex flex-col gap-4 mb-12 pl-2 overflow-hidden lg:px-16 ">
        <h1 className="text-black text-center text-3xl">ჩვენი სერვისები</h1>
        <div className="w-max h-full flex gap-4 ">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative bg-[url(@/src/assets/images/wmendax.jpg)] h-96 w-screen rounded-2xl  bg-cover bg-center transition-all ease-in-out duration-500 "
              style={{ transform: `translateX(-${selectedIndex * 105}vw)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="w-full h-full flex flex-col justify-center items-center gap-8 lg:gap-14">
                <p className="text-black/90  text-center text-2xl lg:text-5xl font-bold">
                  <strong>{slide.title}</strong>
                </p>
                <Link
                  href={slide.url}
                  className="flex lg:text-xl  hover:gap-3 gap-2 px-8 py-2 bg-black/50 text-white/80 rounded-md cursor-pointer tracking-wider
"
                  title="დეტალურად"
                >
                  დეტალურად <span> → </span>
                </Link>
                <h2 className="bg-[rgba(10,10,10,0.7)] lg:hidden text-white  mx-4 px-4 py-2 rounded-lg text-center md:w-1/2  cursor-pointer text-xl">
                  <Link href={`tel:${slide.mob}`}>598 - 24 - 22 - 20</Link>
                </h2>
              </div>

              {/* <div className="absolute top-0 left-0 bg-black w-full h-full"></div> */}
              <div className="w-auto h-auto flex gap-4 absolute bottom-4 left-1/2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setSelectedIndex(i)}
                    className={twMerge(
                      "w-2 h-2 rounded-full bg-white/80 cursor-pointer outline outline-black/50 active:outline-offset-4 -translate-x-5",
                      selectedIndex === i && "outline-offset-4"
                    )}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
