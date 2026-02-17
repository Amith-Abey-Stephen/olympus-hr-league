import { CurvedTimeline } from "@/components/CurvedTimeline";
import { RegisterButton } from "@/components/RegisterButton";
import { Button } from "@/components/ui/button";

export default function AgendaPage() {
  return (
    <div className="flex flex-col md:min-h-screen bg-[#0A0D10]">
      {/* Immersive Curved Timeline Section */}
      <CurvedTimeline />

      {/* Footer CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">
            Be part of the founding cohort of Olympus
          </h2>
          <Button
            asChild
            variant="white"
            size="xl"
            className="rounded-full px-10"
          >
            <RegisterButton>Register Now</RegisterButton>
          </Button>
        </div>
      </section>
    </div>
  );
}
