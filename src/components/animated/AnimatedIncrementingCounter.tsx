"use client";

import { animate, motion, useMotionValue } from "motion/react";
import { useEffect, useState } from "react";

const OVERALL_TIME = 4;
const DEST = 100;
export default function AnimatedIncrementingCounter() {
  const [count, setCount] = useState(0);
  const countMotion = useMotionValue(0);

  useEffect(() => {
    const unsubscribe = countMotion.on("change", (cur) => {
      setCount(Math.floor(cur));
    });
    animate(countMotion, DEST, {
      duration: OVERALL_TIME,
      ease: "linear",
    });
    return () => {
      unsubscribe();
    };
  }, [countMotion]);
  return (
    <motion.span className="bg-transparent text-title text-black invert-colors">
      {count}%
    </motion.span>
  );
}
