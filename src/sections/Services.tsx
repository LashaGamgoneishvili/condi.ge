"use client";

import { tree } from "next/dist/build/templates/app-page";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Services() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="flex flex-col gap-4 mb-12 px-4 lg:px-16   ">
      <h1 className="text-black text-center text-3xl">ჩვენი სერვისები</h1>

      <div className="relative bg-[url(@/src/assets/images/wmendax.jpg)] h-screen w-full rounded-2xl  bg-cover bg-center">
        <div className="w-full h-full flex flex-col justify-center items-center gap-4 lg:gap-14">
          <p className="text-black/90 text-2xl lg:text-5xl font-bold">
            <strong>კონდენციონერის მონტაჟი</strong>
          </p>
          <button
            className="flex lg:text-xl  hover:gap-3 gap-2 px-8 py-2 bg-black/50 text-white/80 rounded-md cursor-pointer tracking-wider
"
            title="დეტალურად"
          >
            დეტალურად <span> → </span>
          </button>
        </div>
        <div className="w-auto h-auto flex gap-4 absolute bottom-4 left-1/2">
          {Array.from({ length: 3 }).map((_, i) => (
            <span
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={twMerge(
                "w-2 h-2 rounded-full bg-white/80 outline outline-black/50 active:outline-offset-4 -translate-x-5",
                selectedIndex === i && "outline-offset-4"
              )}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
