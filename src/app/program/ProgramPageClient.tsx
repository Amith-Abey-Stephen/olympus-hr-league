"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Users,
  Briefcase,
  Scale,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const electiveChallenges = [
  {
    icon: AlertTriangle,
    title: "The 5 PM Friday Decision",
    description:
      "Handle a critical layoff announcement that arrives just before the weekend. Balance empathy, legal obligations, and organizational needs.",
  },
  {
    icon: Users,
    title: "Friendship or Fiduciary",
    description:
      "Navigate a conflict of interest when a close friend's performance issues become impossible to ignore.",
  },
  {
    icon: Scale,
    title: "The HR Lead's Decision",
    description:
      "Make a strategic call between promoting a high-performer with ethical concerns vs. a consistent team player.",
  },
];

const mandatoryTaskPoints = [
  "Demonstrate initiative without overstepping",
  "Balance transparency with discretion",
  "Build trust with a new team during uncertainty",
  "Communicate effectively with senior leadership",
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ProgramPageClient() {
  return (
    <div className="flex flex-col">
      {/* Hero - Centered Elegant Typography (Reference Style) */}
      <section className="min-h-screen flex flex-col justify-center items-center py-20 md:py-32 bg-muted/20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-heading text-foreground leading-[1.1] mb-8"
            >
              Two{" "}
              <span className="relative inline-block">
                <span className="relative">
                  Ph
                  <motion.span 
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                    className="absolute -top-2 left-1/2 -translate-x-1/2 text-primary text-2xl"
                  >
                                  <Sparkles className="h-4 w-4 text-foreground" />

                  </motion.span>
                </span>
                <span className="text-primary">a</span>ses
              </span>,
              <br />
              <span className="text-primary">Infinite</span> Growth.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-sm md:text-base text-foreground/50 uppercase tracking-[0.2em] mb-16"
            >
              Experiential Learning, Leadership Development,
              <br />
              HR Challenges & Growth.
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom half-circle image */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary overflow-hidden flex items-start justify-center pt-8">
           
          </div>
        </motion.div>
      </section>
      {/* How It Works - Numbered Process Section (Reference 1 Style) */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-sm text-foreground/50 uppercase tracking-widest mb-4">
              How It Works
            </p>
          </motion.div>

          <div className="space-y-0">
            {/* Phase 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-baseline gap-8 py-8 border-b border-border group cursor-pointer hover:bg-muted/30 transition-colors px-4 -mx-4"
            >
              <span className="text-foreground/30 font-medium text-sm w-8">01</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-foreground group-hover:text-primary transition-colors">
                ONLINE
              </h2>
              <span className="hidden md:block text-sm text-foreground/50 ml-auto max-w-xs">
                Complete challenges from anywhere. Demonstrate your leadership potential.
              </span>
            </motion.div>

            {/* Phase 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-baseline gap-8 py-8 border-b border-border group cursor-pointer hover:bg-muted/30 transition-colors px-4 -mx-4"
            >
              <span className="text-foreground/30 font-medium text-sm w-8">02</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-foreground group-hover:text-primary transition-colors">
                SHORTLIST
              </h2>
              <span className="hidden md:block text-sm text-foreground/50 ml-auto max-w-xs">
                Top performers selected based on ethical judgment and leadership.
              </span>
            </motion.div>

            {/* Phase 3 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-baseline gap-8 py-8 border-b border-border group cursor-pointer hover:bg-muted/30 transition-colors px-4 -mx-4"
            >
              <span className="text-foreground/30 font-medium text-sm w-8">03</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-foreground group-hover:text-primary transition-colors">
                FINALE
              </h2>
              <span className="hidden md:block text-sm text-foreground/50 ml-auto max-w-xs">
                Immersive full-day offline experience with real HR scenarios.
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mandatory Challenge - Full Width Card */}
      <section id="challenges" className="py-20 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="px-3 py-1 rounded-full bg-background/10 text-sm font-medium">
                  Mandatory Task
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading mb-6">
                Ghost Manager
                <br />
                Onboarding
              </h2>
              <p className="text-background/60 text-lg mb-8 leading-relaxed">
                You've just joined as an HR associate. Your reporting manager has 
                been absent for two weeks with no communication. The team is 
                struggling, decisions are pending, and senior leadership expects 
                updates.
              </p>
              <Button asChild variant="white" size="xl" className="rounded-full">
                <Link href="#register">
                  Start This Challenge
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            {/* Right: Skills List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <p className="text-sm text-background/50 uppercase tracking-widest mb-8">
                Skills You'll Demonstrate
              </p>
              <div className="space-y-6">
                {mandatoryTaskPoints.map((item, index) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Elective Challenges - Horizontal Cards (Reference Style) */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          {/* Large Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-9xl font-extrabold font-heading text-primary mb-12"
          >
            Elective
            Challenges
          </motion.h2>

          {/* Horizontal Card Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {electiveChallenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" } 
                }}
                whileTap={{ scale: 0.98 }}
                className="group rounded-3xl p-8 cursor-pointer min-h-[280px] flex flex-col transition-all duration-300 bg-background border border-border hover:bg-primary hover:border-primary hover:shadow-lg hover:shadow-primary/20 relative overflow-hidden"
              >
                {/* Large Background Icon */}
                <challenge.icon className="absolute -right-8 -bottom-8 h-40 w-40 text-primary/10 group-hover:text-primary-foreground/20 transition-colors duration-300" />

              

                {/* Content - pushed to bottom */}
                <div className="grow flex flex-col justify-end relative z-10">
                  <h3 className="text-xl font-bold font-heading mb-3 text-foreground group-hover:text-primary-foreground transition-colors">
                    {challenge.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/60 group-hover:text-primary-foreground/80 transition-colors">
                    {challenge.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-foreground mb-6">
              Ready to prove
              <br />
              your leadership?
            </h2>
            <p className="text-lg text-foreground/60 mb-10">
              Join the next generation of HR leaders. Show us your ethical judgment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="default" size="xl" className="rounded-full px-10">
                <Link href="/dates-contact">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="rounded-full px-10">
                <Link href="/finale">
                  View Finale Details
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
