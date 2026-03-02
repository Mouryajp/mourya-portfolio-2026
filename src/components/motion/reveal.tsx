"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

import { fadeUp } from "@/lib/animations";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function Reveal({ children, delay = 0, ...props }: RevealProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...fadeUp.visible.transition, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
