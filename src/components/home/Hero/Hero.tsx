"use client";

import CharacterMaskReveal from "../../animated/CharacterMaskReveal";
import HeroLeftLine from "./HeroLeftLine";
import HeroRightSide from "./HeroRightSide";
import HeroArrowCircle from "./HeroArrowCircle";
import { OVERALL_LOADER_TIME } from "@/components/preloader/Preloader";
import { motion } from "motion/react";
import { SMOOTH_FAST_EASING } from "@/lib/constants";

export const LOADER_DELAY = OVERALL_LOADER_TIME - 1;
export default function Hero() {
  return (
    <motion.section
      initial={{
        filter: "blur(10px)",
        opacity: 0,
        scale: 1.5,
      }}
      animate={{
        filter: "blur(0px)",
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
        ease: SMOOTH_FAST_EASING,
        delay: LOADER_DELAY,
      }}
      id="showreel-anchor"
      className="relative section items-center justify-center grid grid-cols-[auto_1fr_auto] mb-12 md:mb-0"
    >
      <HeroLeftLine />
      <motion.div className="flex flex-col items-center justify-center min-h-[min(120dvh,1200px)] -mt-42 xl:-mt-16 md:pb-48 md:pt-32">
        <p className="text-small font-medium mb-2 text-secondary">
          <span className="md:hidden">SOFTWARE</span> ENGINEER •{" "}
          <span className="md:hidden">PRODUCT</span> DESIGNER
        </p>
        <h1 className="relative text-title text-center md:px-4 sm:px-2 flex gap-8 items-center xl:flex-col">
          <div className="relative">
            <CharacterMaskReveal
              content="JOSEPH"
              staggerValue={0.05}
              delay={LOADER_DELAY}
              once
              className="block tracking-tighter"
            />
          </div>
          <CharacterMaskReveal
            staggerValue={0.05}
            delay={LOADER_DELAY + 0.4}
            content="YUSMITA"
            once
            className="font-cursive md:-translate-y-[15%] block tracking-tighter md:-mt-6 xl:-mt-12"
          />
          <HeroArrowCircle />
        </h1>
        <HeroRightSide />
      </motion.div>
    </motion.section>
  );
}
