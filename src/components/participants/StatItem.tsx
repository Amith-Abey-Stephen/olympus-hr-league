"use client";

import { motion } from "framer-motion";

interface StatItemProps {
  label: string;
  sublabel: string;
  detail: string;
}

export function StatItem({ label, sublabel, detail }: StatItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center lg:items-start text-center lg:text-left group cursor-default"
    >
      <span className="text-3xl md:text-5xl font-black text-foreground tracking-tighter mb-1 relative overflow-hidden">
        {label}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
      </span>
      <span className="text-xs font-bold uppercase tracking-widest text-[#1A1C1E]/60 mb-2">
        {sublabel}
      </span>
      <p className="text-[10px] md:text-xs text-foreground/40 max-w-[150px] leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {detail}
      </p>
    </motion.div>
  );
}
