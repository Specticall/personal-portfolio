"use client";

import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useRef } from "react";

const content =
  "Need an app? I’ll design the interface, build the frontend, code the backend, and set up the infrastructure fueled by my endless curiosity and love of learning.";
export default function Narrative() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.5"],
  });

  const tokens = content.split(" ");
  return (
    <section className="section py-64 pb-0 md:pt-48">
      <div ref={ref} className="relative">
        <p className="text-large font-medium max-w-[70rem] mx-auto whitespace-pre-line">
          {tokens.map((token, i) => {
            const startToken = i / tokens.length;
            const endToken = (i + 1) / tokens.length;
            const step = (endToken - startToken) / token.length;
            const characters = token.split("");
            return (
              <motion.span key={i}>
                <span>
                  {characters.map((character, j) => {
                    const start = startToken + j * step;
                    const end = startToken + (j + 1) * step;
                    return (
                      <Character
                        key={j}
                        character={character}
                        scrollYProgress={scrollYProgress}
                        range={[start, end]}
                      />
                    );
                  })}
                </span>{" "}
              </motion.span>
            );
          })}
        </p>
        <p className="absolute inset-0 text-secondary/50 -z-10 text-large font-medium max-w-[70rem] mx-auto whitespace-pre-line">
          {content}
        </p>
      </div>
    </section>
  );
}

function Character({
  character,
  range,
  scrollYProgress,
}: {
  character: string;
  range: [number, number];
  scrollYProgress: MotionValue<number>;
}) {
  const opacity = useTransform(scrollYProgress, range, [0, 1]);
  return (
    <motion.span
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      style={{
        opacity,
      }}
      className="transition-all duration-75"
    >
      {character}
    </motion.span>
  );
}
