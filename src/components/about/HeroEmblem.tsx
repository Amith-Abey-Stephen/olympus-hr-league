"use client";

import { motion } from "framer-motion";
import { ElevatedEmblem } from "@/components/ElevatedEmblem";

export function HeroEmblem() {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative z-20 w-full h-full"
    >
      <ElevatedEmblem />
    </motion.div>
  );
}
