import { HTMLMotionProps, motion } from "motion/react";
import { Icon } from "@iconify/react";
import { SLOW_DOWN_EASING } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function HeroStar(props: HTMLMotionProps<"div">) {
  return (
    <motion.div
      {...props}
      initial={{ rotate: 180, scale: 0, opacity: 0 }}
      whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
      transition={{
        duration: 1,
        ease: SLOW_DOWN_EASING,
      }}
      className={cn("", props.className)}
    >
      <Icon
        icon={"iconoir:spark-solid"}
        className="[&_*]:stroke-none! text-accent"
      />
    </motion.div>
  );
}
