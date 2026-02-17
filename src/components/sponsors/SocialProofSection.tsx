"use client";

import { motion } from "framer-motion";
import { Cloud } from "lucide-react";

export function SocialProofSection() {
  return (
    <section className="py-24 flex flex-col items-center justify-center bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-16"
        >
          <h3 className="text-xl md:text-3xl font-bold max-w-3xl mx-auto leading-tight">
            "Olympus is more than an event; it's a creative synergy of HR
            thought leadership and talent branding."
          </h3>
        </motion.div>

        {/* Line of illustrated characters (Placeholder/SVG) */}
        <div className="flex justify-center flex-wrap gap-8 items-end h-40">
          {/* We'll use simple animated pill shapes as placeholder characters if actual SVGs aren't available */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`w-8 md:w-12 rounded-full bg-primary/${i * 10} h-${((i % 3) + 4) * 4} opacity-30`}
            />
          ))}
          <Cloud className="absolute top-1/2 left-10 text-primary opacity-10 h-16 w-16" />
          <Cloud className="absolute top-1/4 right-20 text-primary opacity-10 h-24 w-24" />
        </div>
      </div>
    </section>
  );
}
