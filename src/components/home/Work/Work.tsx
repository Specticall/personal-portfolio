import WorkList from "./WorkList";
import WorkBanner from "./WorkBanner";
import Star from "@/components/general/Star";
import CharacterMaskReveal from "@/components/animated/CharacterMaskReveal";
import TextMaskReveal from "@/components/animated/TextMaskReveal";
import Parallax from "@/components/animated/Parallax";

export default function Work() {
  return (
    <section className="relative -mt-120 md:-mt-90">
      <div className="pt-92 pb-32 section md:pt-72 sm:pt-42 sm:pb-16 border-b border-border/50">
        <div className="flex items-center justify-between 2xl:flex-col 2xl:items-start 2xl:gap-12">
          <h2 className="text-black text-heading-large flex-1">
            <CharacterMaskReveal content="FRESH FROM " />
            <br /> <CharacterMaskReveal content="THE" />
            <span className="font-cursive italic">
              {" "}
              <CharacterMaskReveal content="STUDIO " />
            </span>{" "}
            <Star
              iconClassName="text-black"
              className="inline-block align-top"
            />
          </h2>
          <div className="place-self-end max-w-[40rem] 2xl:place-self-start">
            <h3 className="text-subtitle font-semibold! mb-4">
              <CharacterMaskReveal content="MY RECENT WORK" />{" "}
              <span className="text-secondary text-[1.25rem] font-medium! tracking-[0.125rem]! ml-4">
                <CharacterMaskReveal content="04" />{" "}
              </span>
            </h3>
            <p className="text-subtitle text-secondary leading-[150%]!">
              <TextMaskReveal content="A list of projects I have contributed to, including competition entries and independent passion projects" />
            </p>
          </div>
        </div>
      </div>
      <WorkList />
      <WorkBanner />
    </section>
  );
}
