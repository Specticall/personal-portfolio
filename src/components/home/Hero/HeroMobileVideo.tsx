import { SMOOTH_FAST_EASING } from "@/lib/constants";
import { motion } from "motion/react";
import { LOADER_DELAY } from "./Hero";

export default function HeroMobileVideo() {
  return (
    <motion.div
      initial={{
        clipPath: "inset(100% 100% 100% 100%)",
      }}
      animate={{
        clipPath: "inset(0 0 0 0)",
      }}
      className="h-fit hidden md:block my-12"
    >
      <motion.video
        initial={{
          scale: 0.5,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 2.5,
          ease: SMOOTH_FAST_EASING,
          delay: LOADER_DELAY - 0.5,
        }}
        src="/videos/showreel.mp4"
        autoPlay
        className="w-full rounded-lg"
        muted
        loop
      />
    </motion.div>
  );
}
