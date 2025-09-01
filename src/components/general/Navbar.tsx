"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Button from "./Button";
import { cn } from "@/lib/utils";
export default function Navbar() {
  return (
    <motion.nav
      className={cn(
        "transition-[background_0.5s]  fixed top-0 right-0 left-0 z-50 invert-colors bg-transparent"
      )}
    >
      <section className="section flex justify-between items-center py-4">
        <p className="text-[clamp(1.25rem,4vw,1.5rem)] font-semibold! text-black">
          ©Joseph
        </p>
        <Button className="md:hidden text-white bg-black">Contact Me</Button>
      </section>
    </motion.nav>
  );
}
