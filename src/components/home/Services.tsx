import Image from "next/image";
import { Icon } from "@iconify/react";
import ServicesList from "./ServicesList";
import Parallax from "../animated/Parallax";

export default function Services() {
  return (
    <Parallax speed={800} className="relative z-10">
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
            <h2 className="text-white text-heading">
              The Skills and Expertise <br />
              <span className="text-secondary">I Bring to the Table</span>
              <span className="inline-flex text-body items-center justify-center border border-border/25 rounded-full px-6 py-2 align-middle ml-4 md:hidden">
                What I Do
              </span>
            </h2>
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
