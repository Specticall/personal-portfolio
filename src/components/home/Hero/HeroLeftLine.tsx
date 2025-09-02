import CharacterMaskReveal from "@/components/animated/CharacterMaskReveal";
import Globe from "@/components/general/Globe";
import { SLOW_DOWN_EASING } from "@/lib/constants";
import { motion } from "motion/react";
import { LOADER_DELAY } from "./Hero";

export default function HeroLeftLine() {
  return (
    <div className="relative h-full flex">
      <div className="grid grid-rows-[1fr_auto]">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            ease: SLOW_DOWN_EASING,
            delay: 0.5 + LOADER_DELAY,
          }}
          className="flex flex-col gap-3 self-center items-center"
        >
          <div className="xs:w-1 xs:h-1 w-1.5 h-1.5 bg-black/60 rounded-full"></div>
          <div className="xs:w-1 xs:h-1 w-1.5 h-1.5 bg-black/60 rounded-full"></div>
          <div className="xs:w-1 xs:h-1 w-1.5 h-1.5 bg-black/60 rounded-full"></div>
        </motion.div>
        <motion.div
          initial={{
            clipPath: "inset(0 0 100% 0)",
          }}
          animate={{
            clipPath: "inset(0 0 0 0)",
          }}
          transition={{
            duration: 1,
            delay: LOADER_DELAY,
            ease: SLOW_DOWN_EASING,
          }}
          className="vertical-lr rotate-180 text-body text-secondary md:hidden px-20"
        >
          <p>• BASED IN INDONESIA</p>
        </motion.div>
      </div>
      <div className="z-10 hidden md:flex absolute sm:-left-2 -left-3.5  bottom-24 items-center gap-3">
        <motion.div
          initial={{ rotate: -180, scale: 1.5, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            ease: SLOW_DOWN_EASING,
            delay: LOADER_DELAY,
          }}
          className=" bg-black w-8 h-8 p-7 sm:p-5 items-center justify-center rounded-full text-white  text-3xl"
        >
          <div className="scale-80 sm:scale-60">
            <Globe />
          </div>
        </motion.div>
        <div className="flex flex-col justify-center gap-1.25">
          <h3 className="text-body font-semibold! leading-[100%]!">
            <CharacterMaskReveal
              content="BASED IN"
              delay={LOADER_DELAY}
              once
              className="whitespace-nowrap leading-[100%]!"
            />
          </h3>
          <p className="text-body text-secondary leading-[100%]!">
            <CharacterMaskReveal
              delay={LOADER_DELAY}
              content="JAKARTA, INDONESIA"
              once
              className="whitespace-nowrap leading-[100%]!"
            />
          </p>
        </div>
      </div>
      <motion.div
        initial={{
          scaleY: 0,
        }}
        animate={{
          scaleY: 1,
        }}
        transition={{
          duration: 1,
          ease: SLOW_DOWN_EASING,
          delay: LOADER_DELAY,
        }}
        className="h-[85%] relative my-auto w-[1px] bg-secondary/50 ml-2 xs:ml-2 origin-bottom"
      ></motion.div>
    </div>
  );
}
