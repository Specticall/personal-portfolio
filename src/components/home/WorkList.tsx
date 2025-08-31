import { WorkData, workData } from "@/data/work-data";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Parallax from "../animated/Parallax";

export default function WorkList() {
  return (
    <ul className="grid divide-y divide-border/25">
      {workData.map((data, i) => {
        return (
          <li key={i} className="py-24 md:py-12">
            <Header data={data} />
            <Showcase data={data} />
          </li>
        );
      })}
    </ul>
  );
}

function Header({ data }: { data: WorkData }) {
  return (
    <header className="flex justify-between items-end mb-12 xl:flex-col xl:items-start xl:gap-4 md:gap-2 section">
      <div>
        <p className="text-body flex flex-wrap items-center gap-3">
          <span>{data.name}</span>
          <span className="inline-block w-1 h-1 bg-black rounded-full"></span>
          <span className="text-secondary">{data.year}</span>
        </p>
        <h3 className="text-medium mt-1 relative">
          {data.title}
          <div className="inline-block align-text-bottom bg-black rounded-full text-white p-5 -mb-2 ml-5 w-fit aspect-square md:hidden">
            <Icon
              icon={"clarity:arrow-line"}
              className="rotate-45 text-[clamp(1rem,2vw,2rem)]"
            />
          </div>
        </h3>
      </div>
      <div className="flex gap-3 items-center">
        {data.note.icon && (
          <div className="bg-secondary/20 rounded-full aspect-square w-7 flex items-center justify-center text-black/80">
            <Icon icon={data.note.icon} />
          </div>
        )}
        <p className="text-body text-secondary">{data.note.content}</p>
      </div>
    </header>
  );
}

function Showcase({ data }: { data: WorkData }) {
  return (
    <article className="grid grid-cols-[5fr_2fr] lg:grid-cols-1 lg:[&>*]:nth-2:hidden overflow-hidden gap-8 xl:gap-6 section xs:p-0! ">
      {data.showcase.map((showcase) => {
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
              className="rounded-xl overflow-hidden min-h-[35rem] md:min-h-0 md:aspect-video md:rounded-none"
            >
              <Parallax speed={100} className="h-full scale-120 mt-20">
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
      })}
    </article>
  );
}
