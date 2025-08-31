import { cn } from "@/lib/utils";
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
        "rounded-full px-8 py-3",
        variants[variant],
        props.className
      )}
    >
      {children}
    </button>
  );
}
