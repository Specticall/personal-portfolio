import { useScroll, useTransform } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";

export default function useAnimateVideoScroll() {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0.1, 0.35], [0, height * 1.2]);
  const scale = useTransform(scrollYProgress, [0.1, 0.35], [0.5, 1]);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => {
      setHeight(entry.contentRect.height);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return { style: { y, scale }, ref };
}
