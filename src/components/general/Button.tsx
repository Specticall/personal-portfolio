import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ButtonHTMLAttributes, ReactNode } from "react";

const variants = {
  default: "bg-black text-body text-white",
  secondary: "bg-white font-medium text-body text-black",
};

type Props = {
  children: ReactNode;
  variant?: keyof typeof variants;
};
export default function Button({
  children,
  variant = "default",
  ...props
}: Props & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "rounded-full px-5 py-2 flex items-center gap-2 group cursor-pointer",
        variants[variant],
        props.className
      )}
    >
      {children}
      <div className="overflow-hidden">
        <div className="relative">
          <Icon
            icon={"clarity:arrow-line"}
            className="group-hover:duration-600  group-hover:-translate-y-[75%] group-hover:translate-x-[75%] group-hover:transition-all ease-[cubic-bezier(.4,0,.1,1)]  rotate-45 text-[clamp(1rem,5vw,1.5rem)]"
          />
          <Icon
            icon={"clarity:arrow-line"}
            className="group-hover:duration-600 group-hover:-translate-y-[0%] group-hover:translate-x-[0%] group-hover:transition-all ease-[cubic-bezier(.4,0,.1,1)] text-inherit translate-y-[75%] -translate-x-[75%] absolute inset-0 rotate-45 text-[clamp(1rem,5vw,1.5rem)]"
          />
        </div>
      </div>
    </button>
  );
}
