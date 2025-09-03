"use client";

import Image from "next/image";
import Parallax from "../../animated/Parallax";
import { WorkData } from "@/data/work-data";
import { motion } from "motion/react";
import { SMOOTH_EASING } from "@/lib/constants";

export default function WorkListContents({ data }: { data: WorkData }) {
  return (
    <article className="grid grid-cols-[5fr_2fr] lg:grid-cols-1 lg:[&>*]:nth-2:hidden overflow-hidden gap-8 xl:gap-6 section xs:p-0! min-h-[40rem] md:min-h-0">
      {data.showcase.map((showcase, i) => {
        return <ContentScrollReveal showcase={showcase} data={data} key={i} />;
      })}
    </article>
  );
}

type ContentProps = {
  data: WorkData;
  showcase: WorkData["showcase"][number];
};
function ContentScrollReveal(props: ContentProps) {
  return (
    <motion.div
      initial={{ clipPath: "inset(0 100% 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0% 0)" }}
      transition={{
        duration: 0.75,
        ease: SMOOTH_EASING,
      }}
      viewport={{ once: true }}
      className="min-h-full relative"
    >
      <motion.div
        transition={{
          duration: 0.75,
          ease: SMOOTH_EASING,
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="origin-top-left h-full"
      >
        <Content {...props} />
      </motion.div>
    </motion.div>
  );
}

function Content({ data, showcase }: ContentProps) {
  // Media files are stored in the public folder following the convention:
  // /work/{name.lowercased}/{media file name}, e.g., /proxyits/work-proxyits-1.png
  const link = `/work/${data.name.toLowerCase()}/${showcase.link}`;

  if (showcase.type === "video") {
    return (
      <video
        className="rounded-xl h-full object-cover xs:rounded-none"
        key={link}
        src={link}
        muted
        autoPlay
        loop
        playsInline
      ></video>
    );
  }

  if (showcase.type === "image") {
    return (
      <div
        key={link}
        className="rounded-xl overflow-hidden md:aspect-video md:rounded-none h-full"
      >
        <Parallax speed={-200} className="h-[130%] -mt-32">
          <div className="relative object-cover h-full w-full">
            <Image
              src={link}
              className="object-cover"
              fill
              alt={data.name + " showcase"}
            />
          </div>
        </Parallax>
      </div>
    );
  }
}
