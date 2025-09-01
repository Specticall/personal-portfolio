"use client";
import { SMOOTH_EASING } from "@/lib/constants";
import { Variants } from "motion";
import { motion, stagger } from "motion/react";

const variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: SMOOTH_EASING,
    },
  },
} satisfies Variants;
export default function ServicesTagsList({ items }: { items: string[] }) {
  return (
    <motion.div
      className="flex flex-wrap gap-3 items-center"
      initial="hidden"
      whileInView="show"
      transition={{
        delayChildren: stagger(0.01),
      }}
    >
      {items.map((item) => {
        return (
          <motion.div
            variants={variants}
            className="bg-secondary/25 text-white/90 text-body rounded-full px-5 py-0.5"
            key={item}
          >
            {item}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
