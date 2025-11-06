"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function FadeInOutWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      animate={{ opacity: [0, 0.3, 1, 0.8, 1], y: 0 }}
      className={className}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0, y: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        times: [0, 0.2, 0.4, 0.7, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export const FadeInWrapper = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className={cn(className)}
      initial={{ opacity: 0, y: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
