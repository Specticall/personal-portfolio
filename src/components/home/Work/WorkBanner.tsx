import Button from "@/components/general/Button";
import Image from "next/image";

export default function WorkBanner() {
  return (
    <div className="overflow-hidden pt-4">
      <div className="section relative flex items-center justify-center flex-col py-48 pt-24 md:py-28 sm:pt-12">
        <p className="px-4 py-1 border border-border rounded-full text-body">
          See All Projects?
        </p>
        <h2 className="text-heading font-semibold max-w-[50rem] text-center mb-8 mt-2">
          Interested in exploring <br className="xs:hidden" /> more of my work?
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
  );
}
