"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AudienceShowcase() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4">
            The Cohort
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-heading text-center">
            WHO IS THIS FOR?
          </h2>
        </div>

        <div className="relative flex flex-col gap-16 lg:block md:min-h-[700px] lg:min-h-[700px] max-w-6xl mx-auto ">
          {/* Engineering Students */}
          <motion.div
            whileHover={{ y: -10 }}
            className="relative lg:absolute lg:top-0 lg:left-[5%] flex flex-col items-center lg:items-start gap-6 w-full lg:max-w-[300px]"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-full scale-110 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image
                src="/engineering-students.webp"
                alt="Engineering"
                width={224}
                height={224}
                className="w-40 h-40 md:w-56 md:h-56 object-contain relative z-10"
              />
            </div>
            <div className="text-center lg:text-left bg-white/80 backdrop-blur-sm p-4 rounded-2xl relative z-10">
              <p className="text-[10px] uppercase tracking-widest text-[#1A1C1E]/50 mb-2">
                Technical Leadership
              </p>
              <h3 className="text-xl font-bold mb-2">Engineering Students</h3>
              <p className="text-sm text-[#1A1C1E]/60 leading-relaxed">
                Exploring management pathways and human-side tech leadership.
              </p>
            </div>
          </motion.div>

          {/* BBA/MBA Students */}
          <motion.div
            whileHover={{ y: -10 }}
            className="relative lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 flex flex-col items-center gap-6 w-full lg:max-w-[350px]"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-full scale-110 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image
                src="/mba-graduates.webp"
                alt="MBA"
                width={256}
                height={256}
                className="w-44 h-44 md:w-64 md:h-64 object-contain relative z-10"
              />
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm p-4 rounded-2xl relative z-10">
              <p className="text-[10px] uppercase tracking-widest text-[#1A1C1E]/50 mb-2">
                Business Excellence
              </p>
              <h3 className="text-xl font-bold mb-2">
                BBA / MBA / HR Students
              </h3>
              <p className="text-sm text-[#1A1C1E]/60 leading-relaxed">
                Seeking practical exposure to complement theoretical learning.
              </p>
            </div>
          </motion.div>

          {/* HR Aspirants */}
          <motion.div
            whileHover={{ y: -10 }}
            className="relative lg:absolute lg:top-12 lg:right-[5%] flex flex-col items-center lg:items-end gap-6 w-full lg:max-w-[300px]"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-full scale-110 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image
                src="/hr.webp"
                alt="HR Professionals"
                width={224}
                height={224}
                className="w-40 h-40 md:w-56 md:h-56 object-contain relative z-10"
              />
            </div>
            <div className="text-center lg:text-right bg-white/80 backdrop-blur-sm p-4 rounded-2xl relative z-10">
              <p className="text-[10px] uppercase tracking-widest text-[#1A1C1E]/50 mb-2">
                Strategic HR
              </p>
              <h3 className="text-xl font-bold mb-2">
                HR Aspirants & Professionals
              </h3>
              <p className="text-sm text-[#1A1C1E]/60 leading-relaxed">
                Entering the HR profession or advancing in early career stages.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
