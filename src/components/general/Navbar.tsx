"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Button from "./Button";
import { useState } from "react";
import { SMOOTH_EASING } from "@/lib/constants";
import { cn } from "@/lib/utils";
export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isAtTop, setIsAtTop] = useState(scrollY.get() <= 1);
  useMotionValueEvent(scrollY, "change", (value) => {
    setIsScrollingDown(value > (scrollY.getPrevious() || 0));
    setIsAtTop(value <= 1);
  });

  return (
    <motion.nav
      animate={{
        y: isScrollingDown ? -100 : 0,
      }}
      transition={{
        duration: 0.2,
        ease: "easeIn",
      }}
      className={cn(
        "transition-[background_0.5s] backdrop-blur-lg  fixed top-0 right-0 left-0 z-10",
        isAtTop ? "bg-transparent" : "bg-white"
      )}
    >
      <section className="section flex justify-between items-center py-3">
        <p className="text-[clamp(1.25rem,4vw,1.5rem)] font-semibold!">
          ©Joseph
        </p>
        <p></p>
        <Button className="md:hidden">Contact Me</Button>
      </section>
    </motion.nav>
  );
}
