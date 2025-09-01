"use client";

import { WorkData } from "@/data/work-data";
import TextMaskReveal from "../animated/TextMaskReveal";
import { motion } from "motion/react";
import { SMOOTH_EASING } from "@/lib/constants";
import { Icon } from "@iconify/react";

export default function WorkHeader({ data }: { data: WorkData }) {
  return (
    <header className="flex justify-between items-end mb-12 xl:flex-col xl:items-start xl:gap-4 md:gap-2 section">
      <div>
        <p className="text-body flex flex-wrap items-center gap-3">
          <span>
            <TextMaskReveal once content={data.name} />
          </span>
          <motion.span
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: SMOOTH_EASING,
            }}
            viewport={{ once: true }}
            className="inline-block w-1 h-1 bg-black rounded-full"
          ></motion.span>
          <span className="text-secondary">
            <TextMaskReveal once content={String(data.year)} />
          </span>
        </p>
        <h3 className="text-medium mt-1 relative group cursor-pointer">
          <span className="after:absolute after:left-0 after:w-full after:bottom-0 after:h-[1.5px] after:bg-black/50 relative after:transition-[scale] after:duration-600 after:origin-right after:scale-x-0 group-hover:after:origin-left group-hover:after:scale-x-100 py-2 group-hover:opacity-80 transition">
            <TextMaskReveal
              duration={0.7}
              once
              staggerValue={0.02}
              content={data.title}
            />
          </span>
          <motion.div
            transition={{
              duration: 0.75,
              ease: SMOOTH_EASING,
            }}
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="group-hover:rotate-45 transition duration-500 group-hover:bg-accent inline-block align-text-bottom bg-black rounded-full text-white p-5 -mb-2 ml-5 w-fit aspect-square md:hidden"
          >
            <Icon
              icon={"clarity:arrow-line"}
              className="rotate-45 text-[clamp(1rem,2vw,2rem)]"
            />
          </motion.div>
        </h3>
      </div>
      <div className="flex gap-3 items-center">
        {data.note.icon && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: SMOOTH_EASING,
            }}
            viewport={{ once: true }}
            className="bg-secondary/20 rounded-full aspect-square w-7 flex items-center justify-center text-black/80"
          >
            <Icon icon={data.note.icon} />
          </motion.div>
        )}
        <p className="text-body text-secondary">
          <TextMaskReveal once content={data.note.content} />
        </p>
      </div>
    </header>
  );
}
