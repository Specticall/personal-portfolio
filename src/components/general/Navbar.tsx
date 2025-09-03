"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Button from "./Button";
import { cn } from "@/lib/utils";
import { SMOOTH_EASING, SMOOTH_FAST_EASING } from "@/lib/constants";
import { LOADER_DELAY } from "../home/Hero/Hero";
export default function Navbar() {
  return (
    <motion.nav
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: SMOOTH_EASING,
        delay: LOADER_DELAY + 1,
      }}
      className={cn(
        "transition-[background_0.5s]  fixed top-0 right-0 left-0 z-50 invert-colors bg-transparent"
      )}
    >
      <section className="section flex justify-between items-center py-4">
        <p className="text-[clamp(1.25rem,4vw,1.5rem)] font-semibold! text-black">
          ©Joseph
        </p>
        <ul className=" flex items-center justify-center text-body gap-8 text-black md:hidden">
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <Button className="md:hidden text-white bg-black">Contact Me</Button>
        </ul>
      </section>
    </motion.nav>
  );
}
