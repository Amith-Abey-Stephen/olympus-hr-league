"use client"

import { motion } from "framer-motion";

export const ContactEyes = () => {
    return (
        <div className="flex gap-4 items-center justify-center translate-y-8">
            {/* Left Eye */}
            <motion.div
                className="w-24 md:w-32 lg:w-40 h-[100px] md:h-[130px] lg:h-[160px] bg-white rounded-full flex items-center justify-center relative overflow-hidden shadow-xl border border-black/5"
                animate={{
                    scaleY: [1, 1, 0.1, 1, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    times: [0, 0.45, 0.5, 0.55, 1],
                    ease: "easeInOut"
                }}
            >
                <motion.div
                    className="w-10 md:w-14 h-10 md:h-14 bg-black rounded-full"
                    animate={{
                        x: [0, 15, -15, 0],
                        y: [0, -5, 5, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>

            {/* Right Eye */}
            <motion.div
                className="w-24 md:w-32 lg:w-40 h-[100px] md:h-[130px] lg:h-[160px] bg-white rounded-full flex items-center justify-center relative overflow-hidden shadow-xl border border-black/5"
                animate={{
                    scaleY: [1, 1, 0.1, 1, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    times: [0, 0.45, 0.5, 0.55, 1],
                    ease: "easeInOut"
                }}
            >
                <motion.div
                    className="w-10 md:w-14 h-10 md:h-14 bg-black rounded-full"
                    animate={{
                        x: [0, 15, -15, 0],
                        y: [0, -5, 5, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>
        </div>
    );
};
