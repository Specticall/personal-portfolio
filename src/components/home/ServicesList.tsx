import { motion, Variants } from "motion/react";
import TextMaskReveal from "../animated/TextMaskReveal";
import { SMOOTH_EASING } from "@/lib/constants";
import ServicesTagsList from "./ServicesTagsList";

const data = [
  {
    title: "Fullstack Development.",
    description:
      "Designing engaging digital experiences that connect people with technology in intuitive and meaningful ways.",
    tags: ["Frontend", "Backend", "Database", "System Design"],
  },
  {
    title: "Product Design.",
    description:
      "Designing engaging digital experiences that connect people with technology in intuitive and meaningful ways.",
    tags: ["UI/UX Design", "Prototyping", "Usability Testing"],
  },
  {
    title: "Devops Engineering.",
    description:
      "Designing engaging digital experiences that connect people with technology in intuitive and meaningful ways.",
    tags: ["CI/CD Pipelines", "Infrastructure", "Cloud"],
  },
];

export default function ServicesList() {
  return (
    <ul className="section grid divide-y-2">
      {data.map((item, i) => {
        return (
          <li
            key={i}
            className="py-16 grid grid-cols-[auto_1fr_1fr] lg:grid-cols-[auto_1fr] items-start gap-8 md:gap-3 sm:grid-cols-1 sm:py-12"
          >
            <p className="text-body text-secondary pr-8 md:pr-4 sm:mb-2">
              0{i + 1}
            </p>
            <h3 className="text-medium text-white leading-[100%]! lg:col-start-2 sm:col-start-1">
              <TextMaskReveal content={item.title} />
            </h3>
            <div className="lg:col-start-2 sm:col-start-1">
              <p className="text-secondary text-subtitle leading-[175%]! mb-6">
                <TextMaskReveal content={item.description} />
              </p>
              <ServicesTagsList items={item.tags} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
