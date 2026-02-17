"use client";

import { motion } from "framer-motion";

export const ContactPhone = () => {
  // Handset movement values
  const moveX = [0, 20, 0];
  const moveY = [0, -60, 0];
  const moveRotate = [-15, 10, -15];

  return (
    <div className="relative w-full max-w-[600px] aspect-4/3 mx-auto z-10 overflow-visible">
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full overflow-visible drop-shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
        fill="none"
        stroke="black"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* 1. THE BASE (Trapezoid Retro Style) */}
        <g>
          {/* The main body */}
          <path d="M 40,260 L 70,180 L 150,180 L 180,260 Z" fill="black" />
          {/* Handset cradle hooks */}
          <path
            d="M 70,180 L 60,165 M 150,180 L 160,165"
            stroke="black"
            strokeWidth="12"
          />

          {/* Dial Pad Grid */}
          <rect x="80" y="205" width="60" height="35" rx="5" fill="#111" />
          <g fill="#333">
            {[0, 1, 2].map((row) =>
              [0, 1, 2].map((col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={90 + col * 20}
                  cy={214 + row * 9}
                  r="2.5"
                />
              )),
            )}
          </g>
        </g>

        {/* 2. THE WIRE (Unified connection) */}
        {/* 
                    The wire connects from x=110, y=240 on the base
                    to the handset's start point x=300, y=180 (animated)
                */}
        <motion.path
          animate={{
            d: [
              "M 110,240 C 120,280 140,280 160,240 S 190,200 210,240 S 240,280 260,240 S 290,200 320,180",
              "M 110,240 C 120,300 140,300 160,240 S 190,180 210,240 S 240,300 260,240 S 290,180 320,120",
              "M 110,240 C 120,280 140,280 160,240 S 190,200 210,240 S 240,280 260,240 S 290,200 320,180",
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          strokeWidth="8"
          stroke="black"
        />

        {/* 3. THE HANDSET (Iconic Bone Silhouette) */}
        <motion.g
          animate={{
            x: moveX,
            y: moveY,
            rotate: moveRotate,
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ originX: "340px", originY: "180px" }}
        >
          {/* The Body (The 'Bar') */}
          <rect x="290" y="165" width="100" height="30" rx="15" fill="black" />

          {/* The Ends (Handpiece circles) */}
          <circle cx="290" cy="180" r="35" fill="black" />
          <circle cx="390" cy="180" r="35" fill="black" />

          {/* Aesthetic Inner Marks */}
          <g opacity="0.1" fill="white">
            <circle cx="280" cy="180" r="2" />
            <circle cx="290" cy="180" r="2" />
            <circle cx="300" cy="180" r="2" />
            <circle cx="290" cy="170" r="2" />
            <circle cx="290" cy="190" r="2" />

            <circle cx="380" cy="180" r="2" />
            <circle cx="390" cy="180" r="2" />
            <circle cx="400" cy="180" r="2" />
            <circle cx="390" cy="170" r="2" />
            <circle cx="390" cy="190" r="2" />
          </g>

          {/* Ringing / Notification Marks */}
          <motion.g
            animate={{ opacity: [0, 1, 0], scale: [0.8, 1.3, 0.8] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1.5 }}
          >
            <path d="M 410,140 L 430,120" stroke="#FFD93D" strokeWidth="5" />
            <path d="M 390,120 L 390,100" stroke="#FFD93D" strokeWidth="5" />
            <path d="M 370,140 L 350,120" stroke="#FFD93D" strokeWidth="5" />
          </motion.g>
        </motion.g>
      </svg>
    </div>
  );
};
