"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SLOW_DOWN_EASING } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Props = {
  iconClassName: string;
};
export default function Star({
  iconClassName,
  ...props
}: Props & HTMLMotionProps<"div">) {
  return (
    <motion.div
      {...props}
      initial={{ rotate: 180, scale: 0, opacity: 0 }}
      whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
      transition={{
        duration: 1,
        ease: SLOW_DOWN_EASING,
      }}
      className={cn("w-fit origin-center", props.className)}
    >
      <Icon
        icon={"iconoir:spark-solid"}
        className={cn("[&_*]:stroke-none! text-accent", iconClassName)}
      />
    </motion.div>
  );
}
