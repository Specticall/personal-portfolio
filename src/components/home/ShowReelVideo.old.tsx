"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";

export default function ShowReelVideo() {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0.1, 0.35], [-0.6 * height, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.35], [0.5, 1]);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => {
      console.log(entry.contentRect.height);
      setHeight(entry.contentRect.height);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return (
    <>
      <motion.div
        ref={ref}
        style={{ y, scale }}
        className="section lg:hidden px-4 sm:px-0 sm:mt-0 -z-10 relative aspect-video"
      >
        <video
          src="/videos/showreel.mp4"
          autoPlay
          className="w-full rounded-3xl sm:rounded-none"
          muted
          loop
        />
      </motion.div>
      <div className="hidden lg:block px-4 -mt-8 sm:px-0 sm:mt-0 z-10 relative">
        <video
          src="/videos/showreel.mp4"
          autoPlay
          className="w-full rounded-3xl sm:rounded-none"
          muted
          loop
        />
      </div>
    </>
  );
}
