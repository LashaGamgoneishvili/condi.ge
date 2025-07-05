import { useEffect, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

export default function BurgerMenu({ isOpen }: { isOpen: boolean }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [isOpen]);

  return (
    <div className="grid h-auto place-content-center bg-transparent ">
      <MotionConfig
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <motion.button
          initial={false}
          animate={active ? "open" : "closed"}
          onClick={() => setActive((pv) => !pv)}
          className="relative h-12 w-12 rounded-full bg-white/0 transition-colors hover:bg-white/20 cursor-pointer"
        >
          <motion.span
            variants={VARIANTS.top}
            className={twMerge(
              "absolute h-0.5 w-10 bg-white",
              isOpen && "bg-black"
            )}
            style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
          />
          <motion.span
            variants={VARIANTS.middle}
            className={twMerge(
              "absolute h-0.5 w-10 bg-white",
              isOpen && "bg-black"
            )}
            style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
          />

          <motion.span
            variants={VARIANTS.bottom}
            className={twMerge(
              "absolute h-0.5 w-5 bg-white",
              isOpen && "bg-black"
            )}
            style={{
              x: "-50%",
              y: "50%",
              bottom: "35%",
              left: "calc(50% + 10px)",
            }}
          />
        </motion.button>
      </MotionConfig>
    </div>
  );
}
