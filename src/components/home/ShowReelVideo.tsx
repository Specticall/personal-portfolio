"use client";
import { BREAKPOINT_LG, SMOOTH_FAST_EASING } from "@/lib/constants";
import {
  motion,
  MotionValue,
  useMotionValue,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { LOADER_DELAY } from "./Hero/Hero";

export default function ShowReelVideo() {
  const [isUnderLG, setIsUnderLG] = useState(false);
  const [anchorHeight, setAnchorHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const offsetYShift = isUnderLG ? 0.625 : 0.73;
  const y = useTransform(
    scrollYProgress,
    [0, 0.35],
    [-offsetYShift * anchorHeight, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.35], [0.6, 1]);

  useLayoutEffect(() => {
    // We're opting out refs here for better code clarity, as passing them from the target element can be challenging and may reduce readability.
    const target = document.querySelector("#showreel-anchor");
    if (!target) return;
    const observer = new ResizeObserver(([entry]) => {
      setIsUnderLG(window.innerWidth < BREAKPOINT_LG);
      setAnchorHeight(entry.contentRect.height);
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, [ref]);

  // Mouse Move effect
  const posX = useMotionValue(0);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      posX.set((window.innerWidth / 2 - e.clientX) * -1);
    };
    window.addEventListener("mousemove", handler);
    return () => {
      window.removeEventListener("mousemove", handler);
    };
  }, [posX]);
  const x = useTransform([posX, scrollYProgress], (value: number[]) => {
    const [xValue, scrollY] = value;
    const val = xValue * Math.max(0.35 - scrollY, 0);
    return val;
  });

  return (
    <>
      <motion.div
        ref={ref}
        initial={{
          clipPath: "inset(100% 100% 100% 100%)",
        }}
        animate={{
          clipPath: "inset(0 0 0 0)",
        }}
        transition={{
          duration: 2.5,
          ease: SMOOTH_FAST_EASING,
          delay: LOADER_DELAY - 0.5,
        }}
        style={{ y, x, scale }}
        className="section md:hidden  px-4 sm:px-0 sm:mt-0 -z-10 relative aspect-video"
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
          className="w-full rounded-2xl"
          muted
          loop
        />
      </motion.div>
    </>
  );
}
