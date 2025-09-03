import CharacterMaskReveal from "@/components/animated/CharacterMaskReveal";
import { LOADER_DELAY } from "./Hero";
import HeroStar from "./HeroStar";
import { motion } from "motion/react";
import HeroArrowCircle from "./HeroArrowCircle";

export default function HeroTitle() {
  return (
    <motion.div className="flex flex-col items-center justify-center min-h-[clamp(1000px,100dvh,1200px)]  md:-translate-y-0 -translate-y-32 md:py-0 md:min-h-full ">
      <p className="text-small font-medium mb-2 text-black/80">
        <span className="md:hidden">SOFTWARE</span> ENGINEER •{" "}
        <span className="md:hidden">PRODUCT</span> DESIGNER
      </p>
      <h1 className="relative text-title text-center md:px-4 sm:px-2 flex gap-8 items-center lg:flex-col">
        <div className="relative">
          <CharacterMaskReveal
            content="JOSEPH"
            staggerValue={0.05}
            delay={LOADER_DELAY}
            once
            className="block tracking-tighter"
          />
        </div>
        <span className="relative">
          <HeroStar className="absolute -right-16 -top-20 xs:hidden" />
          <CharacterMaskReveal
            staggerValue={0.05}
            delay={LOADER_DELAY + 0.4}
            content="YUSMITA"
            once
            className="font-cursive md:-translate-y-[15%] block tracking-tighter md:-mt-8 lg:-mt-12 "
          />
        </span>
        <HeroArrowCircle />
      </h1>
    </motion.div>
  );
}
