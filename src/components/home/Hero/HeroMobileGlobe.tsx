import CharacterMaskReveal from "@/components/animated/CharacterMaskReveal";
import { LOADER_DELAY } from "./Hero";
import Globe from "@/components/general/Globe";
import { motion } from "motion/react";
import { SLOW_DOWN_EASING } from "@/lib/constants";
import { Icon } from "@iconify/react";
export default function HeroMobileGlobe() {
  return (
    <div className="hidden md:flex items-center justify-between">
      <div className="flex items-center gap-3">
        <motion.div
          initial={{ rotate: -180, scale: 1.5, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            ease: SLOW_DOWN_EASING,
            delay: LOADER_DELAY,
          }}
          className=" bg-black w-10 h-10 p-7 items-center justify-center rounded-full text-white  text-3xl"
        >
          <div className="scale-70">
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
        initial={{ rotate: 180, scale: 0, opacity: 0 }}
        whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{
          duration: 1,
          ease: SLOW_DOWN_EASING,
        }}
      >
        <Icon
          icon={"iconoir:spark-solid"}
          className="[&_*]:stroke-none! text-accent text-[3rem]"
        />
      </motion.div>
    </div>
  );
}
