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
      {isLoading && (
        <motion.div
          variants={{
            hide: {
              scale: 1.4,
              clipPath: "inset(0 0 0 0)",
            },
            show: {
              scale: 1,
              clipPath: "inset(0 0 0 0)",
              transition: {
                duration: LOADER_TIME,
                ease: SLOW_DOWN_EASING,
              },
            },
            exit: {
              clipPath: "inset(0 0 100% 0)",
              transition: {
                duration: LOADER_EXIT_TIME,
                ease: SMOOTH_EASING,
              },
            },
          }}
          initial={"hide"}
          animate={"show"}
          exit={"exit"}
          className="bg-dark flex items-center justify-center min-h-dvh z-[999] fixed inset-0 inverted-colors"
        >
          {lineRanges
            .concat(lineRanges.map((r) => r.map((n) => n * -1)))
            .map(([animate, initial], i) => {
              return (
                <motion.div
                  key={i}
                  initial={{ x: initial, opacity: 0 }}
                  animate={{ x: animate, opacity: 1 }}
                  transition={{
                    duration: 2,
                    ease: SLOW_DOWN_EASING,
                  }}
                  className="absolute left-1/2 -translate-x-1/2 h-full w-[1px] bg-white/10"
                ></motion.div>
              );
            })}

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
              <p className="text-body text-white/50 bg-transparent">
                <TextMaskReveal content="Portfolio." />
              </p>
              <h2 className="bg-transparent text-large text-white">{count}%</h2>
              <p className="text-body text-white/50 bg-transparent">
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
              className="bg-white/1 fixed inset-0 top-0 -z-10 origin-bottom"
            ></motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
