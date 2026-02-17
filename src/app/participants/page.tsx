import { ArrowRight } from "lucide-react";
import { AudienceShowcase } from "@/components/participants/AudienceShowcase";
import { ParticipantHero } from "@/components/participants/ParticipantHero";
import { RegisterButton } from "@/components/RegisterButton";
import { Button } from "@/components/ui/button";

export default function ParticipantsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-[#1A1C1E] mt-12">
      {/* High-Fidelity Hero Section */}
      <ParticipantHero />

      {/* Target Audience Scattered Layout - Restored from original */}
      <AudienceShowcase />

      {/* Final CTA */}
      <section className="py-24 bg-[#1A1C1E] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black font-heading mb-10 uppercase tracking-tighter">
            READY TO ACCELERATE <br />
            YOUR <span className="text-primary italic">HR CAREER?</span>
          </h2>
          <Button
            asChild
            size="xl"
            className="rounded-full px-12 h-16 text-lg font-bold group"
          >
            <RegisterButton className="flex items-center gap-3">
              Register Now
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </RegisterButton>
          </Button>
        </div>
      </section>
    </div>
  );
}
