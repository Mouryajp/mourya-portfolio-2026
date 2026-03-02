"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

import { stagger as staggerVariant } from "@/lib/animations";

type StaggerGroupProps = HTMLMotionProps<"div"> & {
  staggerChildren?: number;
  delayChildren?: number;
};

export function StaggerGroup({
  children,
  staggerChildren,
  delayChildren,
  ...props
}: StaggerGroupProps) {
  return (
    <motion.div
      variants={staggerVariant(staggerChildren, delayChildren)}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {children}
    </motion.div>
  );
}
