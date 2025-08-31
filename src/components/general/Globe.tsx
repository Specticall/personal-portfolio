import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export default function Globe(props: HTMLAttributes<HTMLElement>) {
  return (
    <div {...props} className={cn("relative", props.className)}>
      <div className="globe text-[0.75rem] ">
        <div className="globe-wrap">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle-hor"></div>
          <div className="circle-hor-middle"></div>
        </div>
      </div>
    </div>
  );
}
