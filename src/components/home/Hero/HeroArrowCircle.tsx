import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { SMOOTH_EASING } from "@/lib/constants";
import { LOADER_DELAY } from "./Hero";

export default function HeroArrowCircle() {
  return (
    <motion.div
      transition={{
        duration: 0.75,
        ease: SMOOTH_EASING,
        delay: LOADER_DELAY,
      }}
      initial={{ scale: 0, rotate: -180, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      className="absolute left-1/2 -bottom-20 md:-bottom-8  -translate-x-1/2 bg-accent rounded-full -mt-[2.5%] z-10 text-white p-10 md:p-5.5 w-fit aspect-square"
    >
      <Icon
        icon={"clarity:arrow-line"}
        className="-rotate-180 text-[clamp(1.5rem,5vw,2.5rem)]"
      />
    </motion.div>
  );
}
