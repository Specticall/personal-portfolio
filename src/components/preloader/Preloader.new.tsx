"use client";

import { Icon } from "@iconify/react";
import { SLOW_DOWN_EASING, SMOOTH_EASING } from "@/lib/constants";
import { motion, useMotionValue, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { animate } from "motion";

const images = [
  "/work/sakuin/work-sakuin-1.png",
  "/work/sakuin/work-sakuin-2.png",
  "/work/cia/work-cia-2.png",
  "/work/proxyits/work-proxyits-2.png",
  "/work/catalyst/work-catalyst-2.png",
];

export default function Preloader() {
  const [count, setCount] = useState(0);
  const countMotion = useMotionValue(0);

  useEffect(() => {
    const unsubscribe = countMotion.on("change", (cur) => {
      setCount(Math.floor(cur));
    });
    animate(countMotion, 100, {
      duration: 5,
      ease: SLOW_DOWN_EASING,
    });
    return () => {
      unsubscribe();
    };
  }, [countMotion]);

  return (
    <div className="bg-white fixed z-[999] inset-0 flex flex-col items-center justify-center">
      <div>
        <div className="flex items-center justify-between mb-1">
          <Icon
            icon={"iconoir:spark-solid"}
            className="[&_*]:stroke-none! text-black text-4xl"
          />
          <p className="text-body font-semibold!">{count}%</p>
        </div>
        <motion.div
          initial={{
            clipPath: "inset(0 0 100% 0)",
          }}
          animate={{
            clipPath: "inset(0 0 0 0)",
          }}
          transition={{
            duration: 1,
            ease: SMOOTH_EASING,
          }}
          className="origin-top relative w-64 h-86"
        >
          <motion.div
            initial={{ scale: 1.5 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1,
              ease: SLOW_DOWN_EASING,
              delay: 1,
            }}
          >
            {images.map((img, i) => {
              return (
                <Image
                  key={i}
                  src={img}
                  fill
                  className="rounded-sm"
                  objectFit="cover"
                  alt="Preloader image"
                />
              );
            })}
          </motion.div>
        </motion.div>
        <div className="flex items-center justify-between w-full mt-2">
          <p className="text-body">JOSEPH YUSMITA</p>
          <motion.div
            transition={{
              duration: 0.75,
              ease: SMOOTH_EASING,
            }}
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            className=" bg-black rounded-full  z-10 text-white p-2 w-fit aspect-square"
          >
            <Icon
              icon={"clarity:arrow-line"}
              className="-rotate-180 text-body"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
