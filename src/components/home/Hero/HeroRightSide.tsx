import Globe from "@/components/general/Globe";
import { SLOW_DOWN_EASING } from "@/lib/constants";
import { motion } from "motion/react";
import Image from "next/image";
import { LOADER_DELAY } from "./Hero";

export default function HeroRightSide() {
  return (
    <div className="flex items-center gap-4 text-secondary ">
      <div className="absolute right-8 bottom-0  self-end flex flex-col items-center justify-center gap-4 pr-7 md:pr-0 md:right-4 sm:bottom-20 md:hidden">
        <motion.div
          initial={{ rotate: -180, scale: 1.5, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            ease: SLOW_DOWN_EASING,
            delay: LOADER_DELAY,
          }}
          className="bg-black w-16 aspect-square p-4 flex items-center justify-center rounded-full text-white  text-3xl mb-8 md:hidden"
        >
          <Globe />
        </motion.div>
        <motion.div
          initial={{
            clipPath: "inset(0 0 100% 0)",
          }}
          animate={{
            clipPath: "inset(0 0 0 0)",
          }}
          transition={{
            duration: 1,
            ease: SLOW_DOWN_EASING,
            delay: LOADER_DELAY,
          }}
          className="flex items-center justify-center flex-col gap-4"
        >
          <p className="font-medium text-body vertical-rl sm:text-[0.75rem]!">
            Scroll Down
          </p>
          <Image
            src={"/svgs/arrow-long.svg"}
            alt="long arrow"
            width={10}
            className="opacity-50"
            height={100}
          />
        </motion.div>
      </div>
    </div>
  );
}
