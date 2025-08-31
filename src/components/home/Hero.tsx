import Image from "next/image";
import { Icon } from "@iconify/react";
import Globe from "../general/Globe";

export default function Hero() {
  return (
    <section className="relative">
      <Image
        src="/images/abstract-white.png"
        width={1000}
        height={1000}
        alt="Abstract white image"
        className="absolute inset- -z-10  opacity-50 w-full h-full object-cover"
      />
      <div className="section relative">
        <div className="min-w-0 pt-64 py-54 md:pb-32 sm:pb-16">
          <Title />
          <Badges />
        </div>
        <DownArrow />
        <BottomDecoration />
      </div>
    </section>
  );
}

function Title() {
  return (
    <>
      <p className="text-secondary font-medium text-subtitle">Hi, My Name Is</p>
      <h1 className="text-black font-semibold text-title mt-4 ">
        JOSEPH CHRISTIAN YUSMITA{" "}
        <span className="inline-flex gap-6 items-center justify-center ml-6 md:ml-2 xs:ml-0">
          <div className="bg-accent rounded-full text-white p-6 xs:p-4 w-fit aspect-square">
            <Icon
              icon={"clarity:arrow-line"}
              className="-rotate-45 text-[clamp(1rem,5vw,2.25rem)]"
            />
          </div>
          <span className="inline-block text-subtitle font-medium lg:hidden">
            Bridging Technicality <br /> with Creativity.
          </span>
        </span>
      </h1>
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

function DownArrow() {
  return (
    <div className="absolute right-8 bottom-58  self-end flex flex-col items-center justify-center gap-4 pr-7 md:hidden">
      <p className="font-medium text-body vertical-rl">Scroll Down</p>
      <Image
        src={"/svgs/arrow-long.svg"}
        alt="long arrow"
        width={10}
        height={100}
      />
    </div>
  );
}

function BottomDecoration() {
  return (
    <div className=" pb-24 sm:pb-12 flex justify-between items-center md:gap-8 mt-8">
      <div className="max-w-[25rem] flex items-start gap-3">
        <div className="relative w-10 aspect-square rounded-full border border-border after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:aspect-square after:bg-secondary/50 after:rounded-full sm:hidden"></div>
        <p className="text-secondary text-body min-w-0">
          I blend art and engineering to create solutions that don’t just work
          flawlessly but also look amazing.
        </p>
      </div>
      <div className="flex items-center gap-4 text-secondary ">
        <p className="text-body whitespace-nowrap md:hidden">
          Based in Indonesia
        </p>
        <div className="bg-black w-16 aspect-square p-4 flex items-center justify-center rounded-full text-white  text-3xl">
          <Globe />
        </div>
      </div>
    </div>
  );
}
