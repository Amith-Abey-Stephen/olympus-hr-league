"use client"
import Link from "next/link";
import { CheckCircle2, Users, GraduationCap, Briefcase, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const targetAudience = [
    {
        title: "Engineering Students",
        description: "Those exploring management pathways and seeking to understand the human side of technology leadership.",
        icon: <Rocket className="h-6 w-6" />,
    },
    {
        title: "BBA/MBA/HR Students",
        description: "Students pursuing business and HR degrees who need practical exposure to complement theoretical learning.",
        icon: <GraduationCap className="h-6 w-6" />,
    },
    {
        title: "HR Career Aspirants",
        description: "A career-focused graduate aiming to enter the HR profession with a solid foundation.",
        icon: <Users className="h-6 w-6" />,
    },
    {
        title: "Early-Career Professionals",
        description: "HR professionals in their early career stages and lateral entrants seeking HR specialization.",
        icon: <Briefcase className="h-6 w-6" />,
    },
];

const gains = [
    { label: "100%", sublabel: "Real-World Mastery", detail: "Direct exposure to authentic HR scenarios and workplace challenges." },
    { label: "Elite", sublabel: "Industry Access", detail: "Face-to-face mentorship with seasoned global HR leaders." },
    { label: "Founding", sublabel: "Cohort Status", detail: "Exclusive recognition as a pioneer in the Olympus ecosystem." },
    { label: "Strategic", sublabel: "Career Growth", detail: "Accelerated pathway to leadership through authority and flow." }
];

export default function ParticipantsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-[#1A1C1E]">
            {/* High-Fidelity Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    {/* High-Fidelity Grid: Continuous Flow & Absolute Separation */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 items-start relative max-w-6xl mx-auto">

                        {/* 1. Header Column (Left) */}
                        <div className="lg:col-span-12 xl:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="pr-4"
                            >
                                <h1 className="text-5xl md:text-7xl lg:text-[50px] font-black font-heading leading-[0.85] tracking-tighter uppercase text-[#1A1C1E]">
                                    UPHOLDING THE <br />
                                    FOUNDATIONS OF <br />
                                    <span className="text-primary italic">AUTHORITY & FLOW</span>
                                </h1>
                            </motion.div>
                        </div>

                        {/* 2. Subtext Column (Right) */}
                        <div className="lg:col-span-12 xl:col-span-5 lg:text-right flex flex-col justify-end xl:pb-6">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="max-w-md ml-auto"
                            >
                                <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-semibold">
                                    We merge immersive pedagogy with professional execution to create
                                    impactful HR leaders. Olympus is a meticulously designed ecosystem
                                    that redefines the boundaries of modern people management.
                                </p>
                            </motion.div>
                        </div>

                        {/* 3. The Visionary Liquid Track (Center-Right focused) */}
                        <div className="lg:col-span-10 relative mt-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 1 }}
                                className="relative w-full h-[350px] md:h-[500px] z-10"
                            >
                                <div className="absolute inset-0 overflow-hidden" style={{
                                    clipPath: "url(#fluidSnakeMask)"
                                }}>
                                    <img
                                        src="/participants-hero.png"
                                        alt="Olympus Visionary Growth"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-tr from-black/20 via-transparent to-black/10" />
                                </div>
                            </motion.div>
                        </div>

                        {/* 4. Strategic Context Stat (Right Pocket) */}
                        <div className="lg:col-span-2 pt-20 flex justify-center lg:justify-end">
                            <StatItem {...gains[3]} />
                        </div>

                        {/* 5. Core Value Statistics (Bottom Row - Absolute Separation) */}
                        <div className="lg:col-span-12 mt-12">
                            <div className="flex flex-wrap md:flex-nowrap justify-between items-start gap-12 lg:pr-[20%]">
                                <StatItem {...gains[0]} />
                                <StatItem {...gains[1]} />
                                <StatItem {...gains[2]} />
                            </div>
                        </div>

                        {/* Liquid Track SVG ClipPath Definition */}
                        <svg width="0" height="0" className="absolute">
                            <defs>
                                <clipPath id="fluidSnakeMask" clipPathUnits="objectBoundingBox">
                                    {/* A continuous organic meander path: 3 tiers with large smooth radii */}
                                    <path d="
                                        M 0,0.1 
                                        H 0.82 
                                        C 0.95,0.1 0.95,0.4 0.82,0.4 
                                        H 0.18 
                                        C 0.05,0.4 0.05,0.7 0.18,0.7 
                                        H 1 
                                        V 0.9 
                                        H 0.18 
                                        C 0,0.9 0,0.5 0.18,0.5 
                                        H 0.82 
                                        C 1,0.5 1,0.1 0.82,0.1 
                                        L 0,0.1 
                                        Z"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </section>

            {/* Target Audience Scattered Layout - Restored from original */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center mb-20">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4">The Cohort</span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-center">
                            WHO IS THIS FOR?
                        </h2>
                    </div>

                    <div className="relative min-h-[600px] md:min-h-[700px] max-w-6xl mx-auto">
                        {/* Engineering Students */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="absolute top-0 left-0 md:left-[5%] flex flex-col items-center md:items-start gap-6 max-w-[300px]"
                        >
                            <div className="relative group">
                                <div className="absolute inset-0 bg-primary/20 rounded-full scale-110 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <img src="/engineering-students.webp" alt="Engineering" className="w-40 h-40 md:w-56 md:h-56 object-contain relative z-10" />
                            </div>
                            <div className="text-center md:text-left bg-white/80 backdrop-blur-sm p-4 rounded-2xl relative z-10">
                                <p className="text-[10px] uppercase tracking-widest text-[#1A1C1E]/50 mb-2">Technical Leadership</p>
                                <h3 className="text-xl font-bold mb-2">Engineering Students</h3>
                                <p className="text-sm text-[#1A1C1E]/60 leading-relaxed">Exploring management pathways and human-side tech leadership.</p>
                            </div>
                        </motion.div>

                        {/* BBA/MBA Students */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 max-w-[350px]"
                        >
                            <div className="relative group">
                                <div className="absolute inset-0 bg-primary/20 rounded-full scale-110 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <img src="/mba-graduates.webp" alt="MBA" className="w-44 h-44 md:w-64 md:h-64 object-contain relative z-10" />
                            </div>
                            <div className="text-center bg-white/80 backdrop-blur-sm p-4 rounded-2xl relative z-10">
                                <p className="text-[10px] uppercase tracking-widest text-[#1A1C1E]/50 mb-2">Business Excellence</p>
                                <h3 className="text-xl font-bold mb-2">BBA / MBA / HR Students</h3>
                                <p className="text-sm text-[#1A1C1E]/60 leading-relaxed">Seeking practical exposure to complement theoretical learning.</p>
                            </div>
                        </motion.div>

                        {/* HR Aspirants */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="absolute top-12 right-0 md:right-[5%] flex flex-col items-center md:items-end gap-6 max-w-[300px]"
                        >
                            <div className="relative group">
                                <div className="absolute inset-0 bg-primary/20 rounded-full scale-110 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <img src="/hr.webp" alt="HR Professionals" className="w-40 h-40 md:w-56 md:h-56 object-contain relative z-10" />
                            </div>
                            <div className="text-center md:text-right bg-white/80 backdrop-blur-sm p-4 rounded-2xl relative z-10">
                                <p className="text-[10px] uppercase tracking-widest text-[#1A1C1E]/50 mb-2">Strategic HR</p>
                                <h3 className="text-xl font-bold mb-2">HR Aspirants & Professionals</h3>
                                <p className="text-sm text-[#1A1C1E]/60 leading-relaxed">Entering the HR profession or advancing in early career stages.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-[#1A1C1E] text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-black font-heading mb-10 uppercase tracking-tighter">
                        READY TO ACCELERATE <br />
                        YOUR <span className="text-primary italic">HR CAREER?</span>
                    </h2>
                    <Button asChild size="xl" className="rounded-full px-12 h-16 text-lg font-bold group">
                        <Link href="/contact" className="flex items-center gap-3">
                            Register Now
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}

const StatItem = ({ label, sublabel, detail }: { label: string; sublabel: string; detail: string }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex flex-col items-center lg:items-start text-center lg:text-left group cursor-default"
    >
        <span className="text-3xl md:text-5xl font-black text-foreground tracking-tighter mb-1 relative overflow-hidden">
            {label}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
        </span>
        <span className="text-xs font-bold uppercase tracking-widest text-[#1A1C1E]/60 mb-2">{sublabel}</span>
        <p className="text-[10px] md:text-xs text-foreground/40 max-w-[150px] leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {detail}
        </p>
    </motion.div>
);
