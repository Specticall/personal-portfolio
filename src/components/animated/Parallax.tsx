"use client";

import { cn } from "@/lib/utils";
import {
  useScroll,
  motion,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import { HTMLAttributes, ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
  speed: number;
};
export default function Parallax({
  children,
  speed,
  ...props
}: Props & HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => console.log(v));
  const slideY = useTransform(scrollYProgress, [0, 1], [0, -speed]);
  return (
    <motion.div
      style={{
        y: slideY,
      }}
      ref={ref}
      className={cn("", props.className)}
    >
      {children}
    </motion.div>
  );
}
