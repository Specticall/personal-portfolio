"use client";

import {
  AnimatePresence,
  motion,
  useAnimate,
  useMotionValue,
} from "motion/react";
import { useEffect, useState } from "react";
import Button from "../general/Button";
import { SMOOTH_EASING } from "@/lib/constants";
const TIMING = 0.35;
const allIntegers = new Array(10).fill("").map((_, i) => i);
export default function AnimatedCounter() {
  const [count, setCount] = useState(0);

  const tokens = String(count).split("");
  return (
    <div className="flex w-fit gap-4 justify-center">
      <Button onClick={() => setCount((c) => c - 1)}>-</Button>

      <div className="w-60 flex items-center justify-center">
        <motion.span
          className="flex text-large"
          layout
          transition={{
            duration: TIMING,
            ease: SMOOTH_EASING,
          }}
        >
          <AnimatePresence mode="popLayout">
            {tokens.map((digit, i) => {
              return (
                <Digit layoutId={String(i)} digit={Number(digit)} key={i} />
              );
            })}
          </AnimatePresence>
        </motion.span>
      </div>
      <Button onClick={() => setCount((c) => c + 1)}>+</Button>
    </div>
  );
}

function Digit({ digit, layoutId }: { digit: number; layoutId: string }) {
  const [scope, animate] = useAnimate();
  const digitMotionValue = useMotionValue(digit);

  useEffect(() => {
    animate(
      scope.current,
      {
        y: `-${digit * 10}%`,
      },
      {
        duration: TIMING,
        ease: SMOOTH_EASING,
        type: "spring",
        stiffness: 500,
        damping: 50,
      }
    );
  }, [digitMotionValue, animate, digit, scope]);

  return (
    <motion.div
      layoutId={layoutId}
      transition={{
        duration: TIMING,
        ease: SMOOTH_EASING,
      }}
      className="relative overflow-hidden"
    >
      <div className="opacity-0 text-center">{0}</div>
      <motion.div
        ref={scope}
        className="text-center inline-flex flex-col absolute top-0 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{
          ease: SMOOTH_EASING,
          duration: TIMING,
        }}
      >
        {allIntegers.map((integer, j) => {
          return (
            <div className="" key={`${integer}-${j}`}>
              {integer}
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
