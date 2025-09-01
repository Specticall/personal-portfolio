"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import Globe from "../general/Globe";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  LOADER_EXIT_TIME,
  LOADER_TIME,
  OVERALL_LOADER_TIME,
} from "../preloader/Preloader";
import { SLOW_DOWN_EASING, SMOOTH_EASING } from "@/lib/constants";
import TextMaskReveal from "../animated/TextMaskReveal";
import CharacterMaskReveal from "../animated/CharacterMaskReveal";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const parallaxY_B = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <motion.section
      initial={{
        y: 1200,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        delay: LOADER_TIME,
        ease: SMOOTH_EASING,
        duration: LOADER_EXIT_TIME,
      }}
      className="relative"
    >
      <Image
        src="/images/abstract-white.png"
        width={1000}
        height={1000}
        alt="Abstract white image"
        className="absolute inset- -z-10  opacity-50 w-full h-full object-cover"
      />
      <motion.div
        style={{ y: parallaxY_B }}
        initial={{
          y: 300,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          delay: LOADER_TIME,
          ease: SMOOTH_EASING,
          duration: LOADER_EXIT_TIME,
        }}
        className="section relative"
        ref={ref}
      >
        <div className="min-w-0 pt-64 py-54 md:pb-32 sm:pb-16">
          <Title />
          <Badges />
        </div>
        <motion.div className="absolute right-8 bottom-58  self-end flex flex-col items-center justify-center gap-4 pr-7 md:hidden">
          <p className="font-medium text-body vertical-rl">Scroll Down</p>
          <Image
            src={"/svgs/arrow-long.svg"}
            alt="long arrow"
            width={10}
            height={100}
          />
        </motion.div>
        <div className=" pb-24 sm:pb-12   flex justify-between items-center md:gap-8 mt-8 md:mt-24 ">
          <motion.div className="max-w-[25rem] flex items-start gap-3">
            <div className="relative w-10 aspect-square rounded-full border border-border after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:aspect-square after:bg-secondary/50 after:rounded-full sm:hidden"></div>
            <p className="text-secondary text-body min-w-0">
              <TextMaskReveal content="I blend art and engineering to create solutions that don’t just work flawlessly but also look amazing." />
            </p>
          </motion.div>
          <motion.div className="flex items-center gap-4 text-secondary ">
            <p className="text-body whitespace-nowrap md:hidden">
              Based in Indonesia
            </p>
            <div className="bg-black w-16 aspect-square p-4 flex items-center justify-center rounded-full text-white  text-3xl">
              <Globe />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

function Title() {
  return (
    <>
      <p className="text-secondary font-medium text-subtitle">
        <TextMaskReveal content="Hi, My Name Is" />
      </p>
      <motion.h1 className="text-black font-semibold text-title mt-4 ">
        <CharacterMaskReveal
          content="JOSEPH CHRISTIAN YUSMITA"
          staggerValue={0.02}
        />
        <span className="inline-flex gap-6 items-center justify-center ml-6 md:ml-2 xs:ml-0">
          <motion.div
            transition={{
              duration: 0.75,
              ease: SMOOTH_EASING,
            }}
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            className="bg-accent rounded-full text-white p-6 xs:p-4 w-fit aspect-square"
          >
            <Icon
              icon={"clarity:arrow-line"}
              className="-rotate-45 text-[clamp(1rem,5vw,2.25rem)]"
            />
          </motion.div>
          {/* <span className="inline-block text-subtitle font-medium lg:hidden">
            <TextMaskReveal content="Bridging Technicality " />
            <br />
            <TextMaskReveal content="with Creativity." />
          </span> */}
        </span>
      </motion.h1>
    </>
  );
}

function Badges() {
  return (
    <div className="[&>div]:border [&>div]:border-border [&>div]:rounded-full [&>div]:px-6 [&>div]:py-1.5 text-subtitle flex gap-4 mt-8 flex-wrap [&>div]:whitespace-nowrap sm:[&>div]:py-0.75 sm:gap-2 sm:[&>div]:px-4 xs:[&>div]:px-3 xs:[&>div]:py-1 xs:gap-y-3 xs:gap-x-1 sm:mt-4">
      <div>Software Engineer</div>
      <div>&</div>
      <div>Product Designer</div>
    </div>
  );
}
