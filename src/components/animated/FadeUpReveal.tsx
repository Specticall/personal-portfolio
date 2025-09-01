import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "motion/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function FadeUpReveal({
  children,
  ...props
}: Props & HTMLMotionProps<"div">) {
  return (
    <motion.div {...props} className={cn("", props.className)}>
      {children}
    </motion.div>
  );
}
