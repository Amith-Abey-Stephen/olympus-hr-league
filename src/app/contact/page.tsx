"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Twitter, Linkedin, Github, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: "#" },
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { icon: <Github className="h-5 w-5" />, href: "#" },
];

const floatingTags = [
    { text: "CONTACT", top: "15%", left: "15%", rotate: -15 },
    { text: "OLYMPUS", top: "25%", right: "12%", rotate: 12 },
    { text: "REGISTRATION", top: "45%", left: "8%", rotate: -8 },
    { text: "HR ICON", top: "10%", right: "25%", rotate: 5 },
    { text: "REACH OUT", bottom: "35%", right: "18%", rotate: -12 },
];

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#F9FAFB] text-[#1A1C1E]">
            {/* Playful Duck-Style Hero */}
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
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="absolute hidden lg:block px-4 py-1.5 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-widest shadow-sm"
                                style={{
                                    top: tag.top,
                                    left: tag.left,
                                    right: tag.right,
                                    bottom: tag.bottom,
                                    transform: `rotate(${tag.rotate}deg)`
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
                            <span className="font-serif italic font-normal lowercase opacity-80">Hesitate</span> <br />
                            to Reach <br />
                            <span className="text-black italic relative inline-block">
                                Out!
                            </span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Split Pane Contact Section */}
            <section className="py-24 bg-white relative z-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                        {/* Left: Contact Info */}
                        <div className="lg:col-span-5 space-y-12">
                            <div>
                                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black font-heading uppercase tracking-tighter leading-none mb-12">
                                    Contact <span className="text-primary italic">Us.</span>
                                </h2>

                                <div className="space-y-12 mt-12">
                                    <div className="group">
                                        <h3 className="text-3xl font-black uppercase tracking-tight mb-2">Prapanch J</h3>
                                        <div className="flex flex-col gap-1">
                                            <a href="mailto:prapanch@mulearn.org" className="text-lg font-medium text-foreground/60 hover:text-primary transition-colors">prapanch@mulearn.org</a>
                                            <a href="tel:+919446447965" className="text-lg font-medium text-foreground/60 hover:text-primary transition-colors">+91 94464 47965</a>
                                            <a href="https://www.linkedin.com/in/prapanch-j-86bb46334" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-2 text-primary font-bold hover:underline">
                                                <Linkedin className="h-5 w-5" />
                                                LinkedIn Profile
                                            </a>
                                        </div>
                                    </div>

                                    <div className="group">
                                        <h3 className="text-3xl font-black uppercase tracking-tight mb-2">Diya Benny</h3>
                                        <div className="flex flex-col gap-1">
                                            <a href="mailto:diya@mulearn.org" className="text-lg font-medium text-foreground/60 hover:text-primary transition-colors">diya@mulearn.org</a>
                                            <a href="tel:+918301073978" className="text-lg font-medium text-foreground/60 hover:text-primary transition-colors">+91 83010 73978</a>
                                            <a href="https://www.linkedin.com/in/diyabenny" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-2 text-primary font-bold hover:underline">
                                                <Linkedin className="h-5 w-5" />
                                                LinkedIn Profile
                                            </a>
                                        </div>
                                    </div>

                                    <div className="group">
                                        <h3 className="text-3xl font-black uppercase tracking-tight mb-2">Nandana Vipin</h3>
                                        <div className="flex flex-col gap-1">
                                            <a href="mailto:nandana@mulearn.org" className="text-lg font-medium text-foreground/60 hover:text-primary transition-colors">nandana@mulearn.org</a>
                                            <a href="tel:+917559910963" className="text-lg font-medium text-foreground/60 hover:text-primary transition-colors">+91 75599 10963</a>
                                            <a href="https://www.linkedin.com/in/nandana-vipin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-2 text-primary font-bold hover:underline">
                                                <Linkedin className="h-5 w-5" />
                                                LinkedIn Profile
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Social Links */}
                            <div className="pt-8 flex gap-4">
                                {socialLinks.map((social, i) => (
                                    <Link key={i} href={social.href} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-black transition-all">
                                        {social.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Right: Modern Underline Form */}
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-primary p-10 md:p-14 rounded-[3rem] shadow-2xl"
                            >
                                <form className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-black/60">First Name</label>
                                            <input
                                                type="text"
                                                placeholder="John"
                                                className="w-full bg-transparent border-b-2 border-black/10 focus:border-black py-2 outline-none placeholder:text-black/30 font-bold transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-black/60">Last Name</label>
                                            <input
                                                type="text"
                                                placeholder="Doe"
                                                className="w-full bg-transparent border-b-2 border-black/10 focus:border-black py-2 outline-none placeholder:text-black/30 font-bold transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-black/60">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="you@company.com"
                                            className="w-full bg-transparent border-b-2 border-black/10 focus:border-black py-2 outline-none placeholder:text-black/30 font-bold transition-colors"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-black/60">Tell us about your interest</label>
                                        <textarea
                                            rows={2}
                                            placeholder="Tell us a little about your project..."
                                            className="w-full bg-transparent border-b-2 border-black/10 focus:border-black py-2 outline-none placeholder:text-black/30 font-bold transition-colors resize-none"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <p className="text-xs font-black uppercase tracking-widest text-black/60">How can we help?</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                "Partnership",
                                                "Registration Query",
                                                "Sponsorship",
                                                "Speaking Slot",
                                                "Volunteer",
                                                "Other"
                                            ].map((item) => (
                                                <label key={item} className="flex items-center gap-3 group cursor-pointer">
                                                    <div className="w-5 h-5 rounded border-2 border-black/20 group-hover:border-black flex items-center justify-center transition-colors">
                                                        <div className="w-2 h-2 bg-black rounded-sm opacity-0 group-has-checked:opacity-100 transition-opacity" />
                                                    </div>
                                                    <input type="checkbox" className="hidden" />
                                                    <span className="font-bold text-sm tracking-tight">{item}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <Button size="xl" className="w-full rounded-2xl h-16 text-lg font-black bg-black text-white hover:bg-black/90 group mt-4">
                                        Let's get started!
                                        <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
