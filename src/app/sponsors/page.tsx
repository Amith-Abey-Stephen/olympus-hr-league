"use client"

import Link from "next/link";
import { Users, Target, TrendingUp, ArrowRight, Star, Heart, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const visibilityImpact = [
    {
        title: "200+ High-Potential Talents",
        description: "Direct access to emerging professionals and top-tier student leaders from across the region.",
        icon: <Users className="h-6 w-6" />,
        color: "bg-[#FFF9E6]"
    },
    {
        title: "100% Targeted Reach",
        description: "HR-focused audience alignment ensuring your brand reaches those who matter most in the ecosystem.",
        icon: <Target className="h-6 w-6" />,
        color: "bg-[#FFF9E6]"
    },
    {
        title: "Long-Term Association",
        description: "A recurring event series partnership providing multi-year visibility, trust, and lasting impact.",
        icon: <TrendingUp className="h-6 w-6" />,
        color: "bg-[#FFF9E6]"
    },
];

export default function SponsorsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-[#1A1C1E]">
            {/* Playful & Modern Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Organic Curved Track */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[500px] pointer-events-none opacity-40">
                    <svg viewBox="0 0 1000 500" className="w-full h-full">
                        <path
                            d="M-100,250 Q250,50 500,250 T1100,250"
                            fill="none"
                            stroke="url(#rainbow-grad)"
                            strokeWidth="80"
                            strokeLinecap="round"
                            opacity="0.2"
                        />
                        <defs>
                            <linearGradient id="rainbow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#FF6B6B" />
                                <stop offset="50%" stopColor="#FFD93D" />
                                <stop offset="100%" stopColor="#6BCB77" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-6 py-2 rounded-full bg-[#1A1C1E] text-white text-xs font-bold uppercase tracking-widest mb-8"
                    >
                        Partnerships
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="max-w-4xl mx-auto"
                    >
                        {/* Custom Mascots/Asset Illustration Area */}
                        <div className="relative mb-8 flex justify-center">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="relative z-20"
                            >
                                <img
                                    src="/sponsors-hero.png"
                                    alt="Sponsors Synergy"
                                    className="w-48 md:w-64 lg:w-80 h-auto rounded-3xl"
                                />
                                {/* Playful Floating Elements */}
                                <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute -top-4 -left-4 text-primary opacity-40">
                                    <Star className="h-8 w-8 fill-current" />
                                </motion.div>
                                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -bottom-4 -right-4 text-[#FF6B6B] opacity-40">
                                    <Heart className="h-8 w-8 fill-current" />
                                </motion.div>
                            </motion.div>
                        </div>

                        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black font-heading leading-[0.9] tracking-tighter uppercase mb-6">
                            SYNERGIZING IMPACT THROUGH <br />
                            <span className="text-primary italic">ELITE PARTNERSHIPS.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto font-medium">
                            Partner with Olympus to connect with the next generation of HR leaders
                            and position your brand at the heart of the HR ecosystem.
                        </p>

                        <div className="mt-12 flex justify-center">
                            <Button asChild size="xl" className="rounded-2xl px-12 h-16 text-lg font-bold group">
                                <Link href="/contact" className="flex items-center gap-3">
                                    Contact to Sponsor
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Visibility & Impact Grid */}
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
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-white overflow-hidden rounded-[3rem] border border-[#E5E7EB] shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-700 h-full flex flex-col"
                            >
                                {/* Vibrant 3D Glassmorphic Background Area */}
                                <div className="relative h-48 w-full overflow-hidden">
                                    <div className={`absolute inset-0 opacity-80 transition-transform duration-700 group-hover:scale-110 ${idx === 0 ? "bg-linear-to-br from-[#FF6B6B] via-[#FFB7B7] to-white" :
                                        idx === 1 ? "bg-linear-to-br from-[#A78BFA] via-[#C4B5FD] to-white" :
                                            "bg-linear-to-br from-[#38BDF8] via-[#BAE6FD] to-white"
                                        }`} />

                                    {/* Organic Blobs */}
                                    <div className={`absolute -top-10 -left-10 w-40 h-40 blur-3xl opacity-60 animate-pulse ${idx === 0 ? "bg-[#FFD93D]" :
                                        idx === 1 ? "bg-[#6BCB77]" :
                                            "bg-[#F472B6]"
                                        }`} />

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

            {/* Visual Social Proof / Character Layout inspired by 'Kin' Reference */}
            <section className="py-24 flex flex-col items-center justify-center bg-white overflow-hidden relative">
                <div className="container mx-auto px-6 text-center z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mb-16"
                    >
                        <h3 className="text-xl md:text-3xl font-bold max-w-3xl mx-auto leading-tight">
                            "Olympus is more than an event; it's a creative
                            synergy of HR thought leadership and talent branding."
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
                                className={`w-8 md:w-12 rounded-full bg-primary/${i * 10} h-${(i % 3 + 4) * 4} opacity-30`}
                            />
                        ))}
                        <Cloud className="absolute top-1/2 left-10 text-primary opacity-10 h-16 w-16" />
                        <Cloud className="absolute top-1/4 right-20 text-primary opacity-10 h-24 w-24" />
                    </div>
                </div>
            </section>

            {/* Final Partnerships CTA */}
            <section className="py-24 bg-[#1A1C1E] text-white relative overflow-hidden">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black font-heading mb-10 uppercase tracking-tighter">
                        READY TO SCALE YOUR <br />
                        <span className="text-primary italic">BRAND IMPACT?</span>
                    </h2>
                    <div className="flex justify-center">
                        <Button asChild size="xl" className="rounded-2xl px-12 h-16 text-lg font-bold group">
                            <Link href="/contact" className="flex items-center gap-3">
                                Contact to Sponsor
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </div>
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full translate-x-1/2 translate-y-[-20%]" />
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
