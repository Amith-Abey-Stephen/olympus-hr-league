"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const whyOlympusCards = [
  {
    title: "Real-World Scenarios",
    description:
      "Equip with authentic HR insights that go beyond textbook knowledge. Navigate complex workplace dynamics through structured simulations.",
    bg: "bg-[#FDF6E3]", // Cream
    accent: "bg-[#2D5A27]", // Deep Green
    pattern: (
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20">
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#2D5A27] rotate-45 translate-x-16 translate-y-16" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-[#2D5A27] rounded-full" />
      </div>
    ),
  },
  {
    title: "Crisis-Ready Leaders",
    description:
      "Build leaders capable of acting when people matter the most. Develop the emotional intelligence and strategic grit required for high-stakes decisions.",
    bg: "bg-white",
    accent: "bg-[#D4A017]", // Gold
    pattern: (
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20">
        <div className="absolute bottom-0 right-0 w-40 h-12 bg-[#D4A017] -rotate-12 translate-x-10 translate-y-10" />
        <div className="absolute bottom-12 right-20 w-12 h-40 bg-[#D4A017] rotate-12 translate-x-10 translate-y-10" />
      </div>
    ),
  },
  {
    title: "Meaningful Connections",
    description:
      "Create lasting mentorship opportunities and professional relationships. Bridge the gap between emerging talent and established industry icons.",
    bg: "#F5F3FF", // Soft Purple/Pink hint
    accent: "bg-[#8B5CF6]", // Purple
    pattern: (
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20">
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#8B5CF6] rounded-full scale-125" />
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-[#FDF6E3] rounded-full" />
      </div>
    ),
  },
];

export function WhyOlympusScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section ref={targetRef} className="relative md:h-[500vh] bg-background">
      <div className="relative md:sticky top-0 md:min-h-screen flex flex-col justify-center overflow-hidden py-16 ">
        <div className="container mx-auto px-4 mb-4">
          <div className="max-w-xl">
            <svg
              width="40"
              height="12"
              viewBox="0 0 40 12"
              fill="none"
              className="text-primary mb-4"
            >
              <title>Decorative zigzag pattern</title>
              <path
                d="M0 0L5 6L10 0L15 6L20 0L25 6L30 0L35 6L40 0"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M0 6L5 12L10 6L15 12L20 6L25 12L30 6L35 12L40 6"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-heading text-foreground uppercase tracking-tight mb-4">
              Why Olympus <br />
              <span className="text-primary">Exists</span>
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Bridging theory with the complexities of modern people management
              through real-world exposure and strategic connection.
            </p>
          </div>
        </div>

        {/* Mobile: Vertical Stack | Desktop: Horizontal Scroll */}
        <div className="md:hidden flex flex-col gap-6 px-4">
          {whyOlympusCards.map((card) => (
            <div
              key={card.title}
              className={`relative w-full rounded-[32px] p-8 overflow-hidden shadow-lg border border-border flex flex-col justify-between ${card.bg.startsWith("bg-") ? card.bg : ""}`}
              style={{
                backgroundColor: !card.bg.startsWith("bg-")
                  ? card.bg
                  : undefined,
                minHeight: "320px",
              }}
            >
              {card.pattern}
              <div className="relative z-10 flex flex-col h-full">
                <div className="mt-auto">
                  <div className={`w-12 h-1 gap-1 mb-6 ${card.accent}`} />
                  <h3 className="text-2xl font-extrabold font-heading text-foreground mb-4 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="relative w-full rounded-[32px] p-8 bg-foreground flex flex-col justify-center items-center text-center min-h-[300px]">
            <h3 className="text-3xl font-extrabold font-heading text-background mb-6 leading-tight">
              Ready to Lead?
            </h3>
            <Button
              asChild
              variant="white"
              size="lg"
              className="rounded-full px-8"
            >
              <Link href="/about">About Olympus</Link>
            </Button>
          </div>
        </div>

        {/* Desktop: Horizontal Motion */}
        <motion.div
          style={{ x }}
          className="hidden md:flex gap-8 px-4 md:px-[10%]"
        >
          {whyOlympusCards.map((card) => (
            <div
              key={card.title}
              className={`relative shrink-0 w-[600px] h-[400px] max-h-[50vh] rounded-[40px] p-12 overflow-hidden shadow-2xl border border-border flex flex-col justify-between ${card.bg.startsWith("bg-") ? card.bg : ""}`}
              style={{
                backgroundColor: !card.bg.startsWith("bg-")
                  ? card.bg
                  : undefined,
              }}
            >
              {card.pattern}

              <div className="relative z-10 flex flex-col h-full">
                <div className="mt-auto">
                  <div className={`w-12 h-1 gap-1 mb-6 ${card.accent}`} />
                  <h3 className="text-5xl font-extrabold font-heading text-foreground mb-6 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-lg text-foreground/70 max-w-md leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="relative shrink-0 w-[600px]  h-[400px] max-h-[50vh] rounded-[40px] p-12 bg-foreground flex flex-col justify-center items-center text-center">
            <h3 className="text-5xl font-extrabold font-heading text-background mb-8 leading-tight">
              Ready to Lead?
            </h3>
            <Button
              asChild
              variant="white"
              size="xl"
              className="rounded-full px-10"
            >
              <Link href="/about">About Olympus</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
