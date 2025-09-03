import CharacterMaskReveal from "@/components/animated/CharacterMaskReveal";
import Button from "@/components/general/Button";
import Image from "next/image";

export default function WorkBanner() {
  return (
    <div className="overflow-hidden pt-4">
      <div className="section relative flex items-center justify-center flex-col py-48 pt-24 md:py-28 sm:pt-12">
        <h2 className="text-black text-heading-large flex-1 text-center mb-8 xs:text-start">
          <CharacterMaskReveal content="INTERESTED" />
          <br /> <CharacterMaskReveal content="TO SEE" />
          <span className="font-cursive italic">
            {" "}
            <CharacterMaskReveal content="MORE?" />
          </span>{" "}
        </h2>
        <Button className="py-4 px-8">See Full Catalog</Button>
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
  );
}
