"use client";

import { motion } from "framer-motion";

const floatingTags = [
  { text: "CONTACT", top: "15%", left: "15%", rotate: -15 },
  { text: "OLYMPUS", top: "25%", right: "12%", rotate: 12 },
  { text: "REGISTRATION", top: "45%", left: "8%", rotate: -8 },
  { text: "HR ICON", top: "10%", right: "25%", rotate: 5 },
  { text: "REACH OUT", bottom: "35%", right: "18%", rotate: -12 },
];

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-10 overflow-hidden bg-[#F9FAFB] min-h-[70vh] flex flex-col items-center justify-center">
      {/* 1. Background Layer (Deep beneath text) */}
      <div className="absolute inset-x-0 bottom-0 top-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "45%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180vw] md:w-[140vw] lg:w-[120vw] aspect-square bg-primary rounded-full shadow-[0_-20px_120px_rgba(255,217,61,0.25)]"
        />
      </div>

      {/* 2. Content Layer (Text & Asset) */}
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        {/* Floating Tags (Explicit z-index) */}
        <div className="absolute inset-0 pointer-events-none overflow-visible z-20">
          {floatingTags.map((tag, i) => (
            <motion.div
              key={tag.text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="absolute hidden lg:block px-4 py-1.5 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-widest shadow-sm"
              style={{
                top: tag.top,
                left: tag.left,
                right: tag.right,
                bottom: tag.bottom,
                transform: `rotate(${tag.rotate}deg)`,
              }}
            >
              {tag.text}
            </motion.div>
          ))}
        </div>

        {/* Main Title Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto z-30 mb-8"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black font-heading leading-[0.8] tracking-tighter uppercase">
            Don't <br />
            <span className="font-serif italic font-normal lowercase opacity-80">
              Hesitate
            </span>{" "}
            <br />
            to Reach <br />
            <span className="text-black italic relative inline-block">
              Out!
            </span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
