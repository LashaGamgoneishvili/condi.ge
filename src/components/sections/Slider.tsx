"use client";
import image1 from "../../../public/assets/images/installation-service-fix.png";
import image2 from "../../../public/assets/images/sheketeba.jpg";
import image3 from "../../../public/assets/images/wmenda.jpg";
import image4 from "../../../public/assets/images/freoni.png";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden sm:block h-[calc(100vh-80px)] overflow-hidden relative  mb-24">
      <div
        className="absolute top-1/2 -translate-y-1/2 right-4 z-50 bg-black/20 rounded-full text-white px-4 py-3 text-2xl text-center cursor-pointer"
        onClick={() => setCurrent(current < 3 ? current + 1 : current)}
      >
        &rarr;
      </div>
      <div
        className="absolute top-1/2 -translate-y-1/2 left-4 z-50 bg-black/20 rounded-full text-white px-4 py-3 text-2xl text-center cursor-pointer"
        onClick={() => setCurrent(current > 0 ? current - 1 : current)}
      >
        &larr;
      </div>
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1500"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="flex h-1/2 xl:w-1/2 xl:h-full relative  items-center justify-center text-center gap-2 sm:gap-8 flex-col 2xl:gap-12 ">
              <h1 className="text-3xl lg:text-5xl 2xl:text-7xl font-semibold">
                {slide.title}
              </h1>
              <h2 className="text-xl cursor-pointer lg:text-3xl 2xl:text-5xl">
                <Link href={`tel:${slide.mob}`}>598 - 24 - 22 - 20</Link>
              </h2>

              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white px-4 py-2 cursor-pointer hover:text-black hover:bg-white border border-black transition duration-200">
                  იხილეთ დეტალურად
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full  relative">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 -translate-x-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
