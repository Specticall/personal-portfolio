"use client";

import HeroLeftLine from "./HeroLeftLine";
import HeroRightSide from "./HeroRightSide";
import { motion } from "motion/react";
import { SMOOTH_FAST_EASING } from "@/lib/constants";
import HeroTitle from "./HeroTitle";
import HeroMobileGlobe from "./HeroMobileGlobe";
import { OVERALL_LOADER_TIME } from "@/components/preloader/Preloader";
import HeroMobileVideo from "./HeroMobileVideo";

export const LOADER_DELAY = OVERALL_LOADER_TIME - 1;
// export const LOADER_DELAY = 0;
export default function Hero() {
  return (
    <div className="overflow-hidden">
      <motion.section
        initial={{
          filter: "blur(4px)",
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
        className="relative section items-center justify-center grid grid-cols-[auto_1fr_auto] md:grid-cols-1 mb-12 md:mb-0 md:pt-32"
      >
        <HeroLeftLine />
        <HeroTitle />
        <HeroRightSide />
        <HeroMobileVideo />
        {/* <div className="h-fit hidden md:block my-12">
          <video
            src="/videos/showreel.mp4"
            autoPlay
            className="w-full rounded-lg aspect-video "
            muted
            loop
          />
        </div> */}
        <HeroMobileGlobe />
      </motion.section>
    </div>
  );
}
