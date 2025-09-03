import WorkListContents from "./WorkListContents";

import WorkHeader from "./WorkHeader";
import { workData } from "@/data/work-data";

export default function WorkList() {
  return (
    <ul className="grid divide-y divide-border/25">
      {workData.map((data, i) => {
        return (
          <li key={i} className="py-24 md:py-12">
            <WorkHeader data={data} />
            <WorkListContents data={data} />
          </li>
        );
      })}
    </ul>
  );
}
