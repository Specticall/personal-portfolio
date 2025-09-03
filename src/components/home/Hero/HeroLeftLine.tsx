import CharacterMaskReveal from "@/components/animated/CharacterMaskReveal";
import Globe from "@/components/general/Globe";
import { SLOW_DOWN_EASING } from "@/lib/constants";
import { motion } from "motion/react";
import { LOADER_DELAY } from "./Hero";

export default function HeroLeftLine() {
  return (
    <div className="relative h-full flex">
      <div className="grid grid-rows-[1fr_auto] md:grid-cols-1">
        <ThreeDots />
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{
            duration: 1,
            delay: LOADER_DELAY,
            ease: SLOW_DOWN_EASING,
          }}
          className="vertical-lr rotate-180 text-body text-secondary md:hidden"
        >
          <p>• BASED IN INDONESIA</p>
        </motion.div>
      </div>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{
          duration: 1,
          ease: SLOW_DOWN_EASING,
          delay: LOADER_DELAY,
        }}
        className="h-full relative top-20 my-auto w-[1px] bg-secondary/50 ml-2 md:hidden origin-bottom"
      ></motion.div>
    </div>
  );
}

function ThreeDots() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: SLOW_DOWN_EASING,
        delay: 0.5 + LOADER_DELAY,
      }}
      className="flex flex-col gap-3 self-center items-center md:hidden"
    >
      <div className="xs:w-1 xs:h-1 w-1.5 h-1.5 bg-black/60 rounded-full"></div>
      <div className="xs:w-1 xs:h-1 w-1.5 h-1.5 bg-black/60 rounded-full"></div>
      <div className="xs:w-1 xs:h-1 w-1.5 h-1.5 bg-black/60 rounded-full"></div>
    </motion.div>
  );
}
