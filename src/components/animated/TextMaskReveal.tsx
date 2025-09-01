"use client";

import { SMOOTH_EASING } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion, stagger, Variants } from "motion/react";
import { useRef } from "react";

type Props = {
  content: string;
  staggerValue?: number;
  duration?: number;
  once?: boolean;
};

const createVariants = (duration?: number) => {
  return {
    hidden: {
      y: "100%",
    },
    show: {
      y: 0,
      transition: {
        duration: duration || 0.5,
        ease: SMOOTH_EASING,
      },
    },
  } satisfies Variants;
};
export default function TextMaskReveal({
  content,
  staggerValue,
  once = false,
  duration,
  ...props
}: Props & HTMLMotionProps<"span">) {
  const ref = useRef<HTMLSpanElement>(null);

  const tokens = content.split(" ");
  return (
    <motion.span
      {...props}
      ref={ref}
      initial="hidden"
      whileInView="show"
      transition={{
        delayChildren: stagger(staggerValue || 0.01),
      }}
      viewport={{ once }}
      className={cn("whitespace-pre-line ", props.className)}
    >
      {tokens.map((token, i) => {
        return (
          <span key={i} className="inline-flex whitespace-pre overflow-hidden">
            <motion.span variants={createVariants(duration)} className="">
              {token}{" "}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
}
