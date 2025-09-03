"use client";

import {
  motion,
  MotionValue,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const images = [
  {
    src: "/images/showcase-slide-1.png",
    range: [-400, 200],
  },
  {
    src: "/images/showcase-slide-2.png",
    range: [400, -350],
  },
  {
    src: "/images/showcase-slide-3.png",
    range: [-800, -400],
  },
];
export default function ShowcaseSlide() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const radius = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const clipPath = useTransform(radius, (r) => `circle(${r}% at 50% 50%)`);
  return (
    <section ref={ref} className="h-[300dvh] relative">
      <motion.div
        style={{
          clipPath,
        }}
        className="bg-black h-dvh overflow-hidden sticky left-0 top-0 right-0"
      >
        <div className="grid grid-cols-3 gap-6 rotate-15  min-w-[clamp(70rem,200vw,120rem)] top-1/2 -translate-y-1/2 absolute left-1/2 -translate-x-1/2">
          {images.map((image, i) => {
            return (
              <ImageStrip
                {...image}
                scrollYProgress={scrollYProgress}
                key={i}
              />
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

function ImageStrip({
  src,
  scrollYProgress,
  range,
}: {
  src: string;
  range: number[];
  scrollYProgress: MotionValue<number>;
}) {
  const y = useTransform(scrollYProgress, [0, 1], range);
  return (
    <motion.div style={{ y }}>
      <Image
        src={src}
        height={2000}
        width={500}
        alt="slide"
        className="w-full"
      />
    </motion.div>
  );
}
