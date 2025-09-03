"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import ServicesList from "./ServicesList";
import Parallax from "../animated/Parallax";
import { HTMLMotionProps, motion } from "motion/react";
import { SLOW_DOWN_EASING, SMOOTH_EASING } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Services() {
  return (
    <Parallax speed={400} className="relative z-10">
      <section className="bg-dark pb-12">
        <div className="relative section ">
          <Parallax speed={150}>
            {/* -top-20 lg:-top-10 */}
            <div className="absolute right-1/4 xl:right-1/6 md:right-8 bg-accent rounded-full text-white p-14 lg:p-8 w-fit aspect-square">
              <Icon
                icon={"clarity:arrow-line"}
                className="-rotate-135 text-[clamp(1.5rem,3vw,3rem)]"
              />
            </div>
          </Parallax>
        </div>
        <Parallax speed={100} className="pt-36 md:pt-16">
          <div className="section py-24 pb-18 relative md:pb-8">
            <DownArrow />
            <motion.h2
              initial={{
                filter: "blur(10px)",
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: SMOOTH_EASING,
              }}
              className="text-white text-heading-large text-center sm:text-start"
            >
              <span>TURNING</span>{" "}
              <span
                className="font-cursive font-regular!"
                style={{ fontStyle: "italic" }}
              >
                VISION
              </span>{" "}
              <Star className="hidden xs:inline-block" />
              <br />
              <span>INTO</span>{" "}
              <span
                className="font-cursive font-regular!"
                style={{ fontStyle: "italic" }}
              >
                WORK
              </span>{" "}
              <Star className="xs:hidden" />
            </motion.h2>
          </div>
          <ServicesList />
        </Parallax>
      </section>
    </Parallax>
  );
}

function DownArrow() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 self-end flex flex-col items-center justify-center gap-4 pr-4 sm:hidden">
      <p className="font-medium text-white text-body vertical-rl">
        Scroll Down
      </p>
      <Image
        src={"/svgs/arrow-long-white.svg"}
        alt="long arrow"
        width={10}
        height={100}
      />
    </div>
  );
}

function Star(props: HTMLMotionProps<"div">) {
  return (
    <motion.div
      {...props}
      initial={{ rotate: 180, scale: 0, opacity: 0 }}
      whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
      transition={{
        duration: 1,
        ease: SLOW_DOWN_EASING,
      }}
      className={cn("inline-block", props.className)}
    >
      <Icon
        icon={"iconoir:spark-solid"}
        className="[&_*]:stroke-none! text-white inline"
      />
    </motion.div>
  );
}
