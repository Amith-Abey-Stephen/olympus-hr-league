"use client";

import { motion } from "framer-motion";
import { Target, TrendingUp, Users } from "lucide-react";
import type { ReactNode } from "react";

interface VisibilityItem {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
}

const visibilityImpact: VisibilityItem[] = [
  {
    title: "200+ High-Potential Talents",
    description:
      "Direct access to emerging professionals and top-tier student leaders from across the region.",
    icon: <Users className="h-6 w-6" />,
    color: "bg-[#FFF9E6]",
  },
  {
    title: "100% Targeted Reach",
    description:
      "HR-focused audience alignment ensuring your brand reaches those who matter most in the ecosystem.",
    icon: <Target className="h-6 w-6" />,
    color: "bg-[#FFF9E6]",
  },
  {
    title: "Long-Term Association",
    description:
      "A recurring event series partnership providing multi-year visibility, trust, and lasting impact.",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "bg-[#FFF9E6]",
  },
];

export function VisibilityCards() {
  return (
    <section className="py-24 relative overflow-hidden bg-white/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-black font-heading uppercase tracking-tighter">
            Sponsor Visibility & Impact
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
          {visibilityImpact.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white overflow-hidden rounded-[3rem] border border-[#E5E7EB] shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-700 h-full flex flex-col"
            >
              {/* Vibrant 3D Glassmorphic Background Area */}
              <div className="relative h-48 w-full overflow-hidden">
                <div
                  className={`absolute inset-0 opacity-80 transition-transform duration-700 group-hover:scale-110 ${
                    idx === 0
                      ? "bg-linear-to-br from-[#FF6B6B] via-[#FFB7B7] to-white"
                      : idx === 1
                        ? "bg-linear-to-br from-[#A78BFA] via-[#C4B5FD] to-white"
                        : "bg-linear-to-br from-[#38BDF8] via-[#BAE6FD] to-white"
                  }`}
                />

                {/* Organic Blobs */}
                <div
                  className={`absolute -top-10 -left-10 w-40 h-40 blur-3xl opacity-60 animate-pulse ${
                    idx === 0
                      ? "bg-[#FFD93D]"
                      : idx === 1
                        ? "bg-[#6BCB77]"
                        : "bg-[#F472B6]"
                  }`}
                />

                {/* Glass Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white to-transparent" />
              </div>

              {/* Content Area */}
              <div className="p-8 md:p-10 pt-0 text-center flex-1 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-black font-heading text-[#1A1C1E] mb-4 uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed font-semibold text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
