import Image from "next/image";
import { Icon } from "@iconify/react";
import WorkList from "./WorkList";
import Button from "../general/Button";

export default function Work() {
  return (
    <section className="relative">
      <div className="relative">
        <Image
          src="/images/abstract-white.png"
          width={1000}
          height={1000}
          alt="Abstract white image"
          className="absolute inset- -z-10  opacity-50 w-full h-full object-cover"
        />
        <div className="section text-center flex items-center justify-center py-48 flex-col xs:items-start md:py-24">
          <p className="text-body text-secondary mb-3 border border-border px-6 py-1.5 rounded-full sm:py-0.5 sm:px-4">
            My Most Recent Work
          </p>
          <div className="relative mt-4 sm:mt-2">
            <div className="inline-block absolute -left-[12%] lg:-left-[16%] md:-left-[18%] top-0 bg-accent rounded-full text-white p-6 md:p-4  w-fit aspect-square sm:hidden">
              <Icon
                icon={"clarity:arrow-line"}
                className="-rotate-135 text-[clamp(1rem,5vw,1.5rem)]"
              />
            </div>

            <h3 className="text-heading font-semibold! xs:text-left">
              Highlights of the most recent <br className="xs:hidden" />{" "}
              projects I’ve worked on.{" "}
              <span className="text-secondary font-medium! text-medium align-middle">
                012
              </span>
            </h3>
          </div>
          <p className="text-body text-secondary mt-6 max-w-[30rem] xs:text-left">
            A list of projects I have contributed to, including competition
            entries and independent passion projects
          </p>
        </div>
      </div>
      <WorkList />
      <div className="overflow-hidden pt-4">
        <div className="section relative flex items-center justify-center flex-col py-48 pt-24 md:py-28 sm:pt-12">
          <p className="px-4 py-1 border border-border rounded-full text-body">
            See All Projects?
          </p>
          <h2 className="text-heading font-semibold max-w-[50rem] text-center mb-8 mt-2">
            Interested in exploring <br className="xs:hidden" /> more of my
            work?
          </h2>
          <Button>See Full Catalog</Button>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 right-0 -z-10 overflow-y-hidden w-full max-w-[70rem] mx-auto md:max-w-full md:min-w-[150%]">
            <Image
              src={"/svgs/circular-sonar.svg"}
              alt="circular sonar"
              height={1000}
              width={1000}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
