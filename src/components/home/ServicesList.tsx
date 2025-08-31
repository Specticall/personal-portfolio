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
              {item.title}
            </h3>
            <div className="lg:col-start-2 sm:col-start-1">
              <p className="text-secondary text-body mb-6">
                {item.description}
              </p>
              <TagsList items={item.tags} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function TagsList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      {items.map((item) => {
        return (
          <div
            className="bg-secondary/25 text-white/90 text-body rounded-full px-5 py-0.5"
            key={item}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
