"use client";

import { useEffect, useState } from "react";
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";
import { SLOW_DOWN_EASING, SMOOTH_EASING } from "@/lib/constants";
import TextMaskReveal from "../animated/TextMaskReveal";

export const LOADER_TIME = 3;
export const LOADER_EXIT_TIME = 1.5;
export const OVERALL_LOADER_TIME = LOADER_TIME + LOADER_EXIT_TIME;
const DEST = 100;

const lineRanges = [
  [20, 20],
  [100, 100],
  [280, 400],
  [600, 700],
];

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);
  const countMotion = useMotionValue(0);

  useEffect(() => {
    const unsubscribe = countMotion.on("change", (cur) => {
      setCount(Math.floor(cur));
    });
    animate(countMotion, DEST, {
      duration: LOADER_TIME,
      ease: SMOOTH_EASING,
    });
    return () => {
      unsubscribe();
    };
  }, [countMotion]);
  const scaleY = useTransform(countMotion, [0, DEST], [0, 1]);

  // Remove loader after the specified amount of time
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, (LOADER_TIME + 0.1) * 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="overflow-hidden">
        {isLoading && (
          <motion.div
            variants={{
              hide: {
                scale: 1.4,
              },
              show: {
                scale: 1,
                opacity: 1,
                transition: {
                  duration: LOADER_TIME,
                  ease: SLOW_DOWN_EASING,
                },
              },
              exit: {
                scale: 0.5,
                opacity: 0,
                transition: {
                  duration: LOADER_EXIT_TIME,
                  ease: SMOOTH_EASING,
                },
              },
            }}
            initial={"hide"}
            animate={"show"}
            exit={"exit"}
            className="bg-[#fbfbfb] flex items-center justify-center min-h-dvh z-[999] fixed inset-0 inverted-colors"
          >
            <div className="inverted-colors">
              <motion.div
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  y: {
                    duration: 1,
                    ease: SLOW_DOWN_EASING,
                  },
                  duration: 0.75,
                }}
                className="flex flex-col justify-between items-center min-h-dvh p-6 w-full"
              >
                <p className="text-body text-black/50 bg-transparent">
                  <TextMaskReveal content="Portfolio." />
                </p>
                <h2 className="bg-transparent text-large text-black">
                  {count}%
                </h2>
                <p className="text-body text-black/50 bg-transparent">
                  <TextMaskReveal content="© Joseph" duration={1.5} />
                </p>
              </motion.div>
              <motion.div
                style={{
                  scaleY,
                }}
                transition={{
                  duration: LOADER_TIME,
                  ease: SMOOTH_EASING,
                }}
                className="bg-white fixed inset-0 top-0 -z-10 origin-bottom"
              ></motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}
