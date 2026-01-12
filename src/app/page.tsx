import Link from "next/link";
import { ArrowRight, Users, Trophy, Target, Sparkles } from "lucide-react";
import LottiePlayer from "@/components/ui/Lottieplayer";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center py-20 md:py-32 overflow-hidden">
        {/* Yellow Semi-Circle Background */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 w-[70vw] h-[80vh] md:w-[80vw] md:h-[90vh] rounded-t-full bg-primary z-0" />
        
        {/* Birds Lottie Animation */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 z-1">
          <LottiePlayer src="/animations/birdies.lottie" invert />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-primary mb-6">
              <Sparkles className="h-4 w-4 text-foreground" />
              <span className="text-sm font-medium text-foreground">
                Pre-Challenges Are Live!
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-heading text-foreground mb-4">
              Olympus
            </h1>
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-2 mb-4">
              <p className="text-xl md:text-2xl font-semibold">
                The HR League
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground/80 mb-6">
              The Bridge to Professional Excellence
            </h2>

            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
              Olympus – The HR League is a hybrid HR and leadership challenge
              designed to bridge the gap between academic learning and real-world
              corporate decision-making. Organized by the HR Interest Group under
              the µLearn organization.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="white" size="xl">
                <Link href="#register">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="xl">
                <Link href="/program">
                  View Program Structure
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Olympus Exists - Pro Studio Design */}
      <section className="min-h-screen flex flex-col justify-center py-16 md:py-24 bg-card relative overflow-hidden">
        {/* Decorative Wave Svg */}
        <div className="absolute top-20 right-0 hidden md:block opacity-10">
           <svg width="200" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>Decorative wave pattern</title>
            <path d="M0 20C40 20 50 0 90 0C130 0 140 20 180 20" stroke="currentColor" strokeWidth="2" />
            <path d="M0 40C40 40 50 20 90 20C130 20 140 40 180 40" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            
            {/* Left: Image Composition */}
            <div className="w-full md:w-1/2 relative flex justify-center items-end h-[500px] md:h-[600px]">

              {/* Statue Image */}
              <div className="relative z-10 w-full">
                 <img 
                  src="/olympus-statue-ring.webp" 
                  alt="Olympus Statue" 
                  className="w-full h-full object-contain drop-shadow-2xl translate-y-24"
                 />
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full md:w-1/2 text-left">
              <div className="mb-6">
                <svg width="40" height="12" viewBox="0 0 40 12" fill="none" className="text-primary mb-4">
                  <title>Decorative zigzag pattern</title>
                  <path d="M0 0L5 6L10 0L15 6L20 0L25 6L30 0L35 6L40 0" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M0 6L5 12L10 6L15 12L20 6L25 12L30 6L35 12L40 6" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-card-foreground leading-tight uppercase tracking-tight">
                  Why Olympus <br/>
                  <span className="text-foreground/80">Exists</span>
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-card-foreground/70 leading-relaxed mb-8 border-l-4 border-primary pl-6">
                Academic institutions teach concepts. The professional world demands
                <span className="font-semibold text-foreground"> leadership under pressure</span>, ethical judgment, and real decision-making skills. 
              </p>
              
              <p className="text-base text-card-foreground/60 mb-10 max-w-md">
                Olympus places students in realistic HR and management
                scenarios that test how they think, decide, and lead.
              </p>

              <Button
              asChild
              variant="secondary"
              >
                <Link href="/program">
                  View Program Structure
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program at a Glance */}
      <section className="min-h-screen flex flex-col justify-center py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left: Title Section */}
            <div className="lg:sticky lg:top-32">
              <span className="inline-block px-4 py-1.5 rounded-full bg-foreground text-background text-sm font-medium mb-6">
                Program
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-foreground leading-tight mb-6">
                A Comprehensive look at what we offer
              </h2>
              <p className="text-lg text-foreground/60 mb-8">
                A comprehensive look at our program phases and how we deliver excellence.
              </p>
              <Button asChild variant="default" size="xl" className="rounded-full">
                <Link href="/program">
                  Explore Program
                </Link>
              </Button>
            </div>

            {/* Right: Cards Stack */}
            <div className="flex flex-col gap-6">
              <Card variant="interactive" showDecorativeLines className="min-h-[280px] flex flex-col justify-between">
                <div>
                  <CardTitle className="mb-4 text-2xl">
                    Phase 1 – Online Pre-Challenge
                  </CardTitle>
                  <CardDescription className="text-base">
                    Complete mandatory and elective ethical challenges to demonstrate
                    your leadership potential and decision-making skills.
                  </CardDescription>
                </div>
                <div className="mt-6 flex justify-end">
                  <ArrowRight className="h-6 w-6 text-foreground/30 group-hover:text-primary transition-colors" />
                </div>
              </Card>

              <Card variant="interactive" showDecorativeLines className="min-h-[280px] flex flex-col justify-between">
                <div>
                  <CardTitle className="mb-4 text-2xl">
                    Phase 2 – Offline Finale
                  </CardTitle>
                  <CardDescription className="text-base">
                    Shortlisted candidates advance to a full-day immersive leadership
                    experience with real-world activities.
                  </CardDescription>
                </div>
                <div className="mt-6 flex justify-end">
                  <ArrowRight className="h-6 w-6 text-foreground/30 group-hover:text-primary transition-colors" />
                </div>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Who Should Participate */}
      <section className="min-h-screen flex flex-col justify-center py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-foreground mb-4">
              Who Should Participate
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Olympus is designed for ambitious individuals ready to bridge the gap between academic learning and professional excellence.
            </p>
          </div>

          {/* Scattered Layout */}
          <div className="relative min-h-[600px] md:min-h-[700px] max-w-6xl mx-auto">
            
            {/* Engineering Students - Top Left */}
            <div className="absolute top-0 left-0 md:left-[5%] flex flex-col items-center md:items-start gap-4 w-[45%] md:w-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-full scale-90 -z-10 translate-x-4 translate-y-4" />
                <img 
                  src="/engineering-students.webp" 
                  alt="Engineering Students" 
                  className="w-40 h-40 md:w-56 md:h-56 object-contain relative z-10"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="text-xs uppercase tracking-widest text-foreground/50 mb-1">For Students</p>
                <h3 className="text-lg md:text-xl font-bold text-foreground">Engineering<br/>Students</h3>
              </div>
            </div>

            {/* MBA Graduates - Center/Bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-full scale-90 -z-10 translate-x-2 translate-y-2" />
                <img 
                  src="/mba-graduates.webp" 
                  alt="MBA Graduates" 
                  className="w-44 h-44 md:w-64 md:h-64 object-contain relative z-10"
                />
              </div>
              <div className="text-center">
                <p className="text-xs uppercase tracking-widest text-foreground/50 mb-1">For Aspirants</p>
                <h3 className="text-lg md:text-xl font-bold text-foreground">Management &<br/>MBA Aspirants</h3>
              </div>
            </div>

            {/* HR Enthusiasts - Top Right */}
            <div className="absolute top-8 right-0 md:right-[5%] flex flex-col items-center md:items-end gap-4 w-[45%] md:w-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-full scale-90 -z-10 -translate-x-4 translate-y-4" />
                <img 
                  src="/hr.webp" 
                  alt="HR Enthusiasts" 
                  className="w-40 h-40 md:w-56 md:h-56 object-contain relative z-10"
                />
              </div>
              <div className="text-center md:text-right">
                <p className="text-xs uppercase tracking-widest text-foreground/50 mb-1">For Professionals</p>
                <h3 className="text-lg md:text-xl font-bold text-foreground">HR & Leadership<br/>Enthusiasts</h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Recognition */}
      {/* Recognition */}
      <section className="min-h-screen flex flex-col justify-center py-20 md:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Floating Trophy Composition */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 scale-150 rounded-full border border-primary/10 animate-pulse" />
              <div className="absolute inset-0 scale-125 rounded-full border border-primary/20" />
              
              {/* Main trophy container */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center backdrop-blur-sm border border-primary/20 shadow-2xl">
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-inner">
                  <Trophy className="h-12 w-12 md:h-16 md:w-16 text-primary-foreground drop-shadow-lg" />
                </div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/30 blur-sm" />
              <div className="absolute -bottom-2 -left-6 w-6 h-6 rounded-full bg-primary/20 blur-sm" />
              <div className="absolute top-1/2 -right-8 w-4 h-4 rounded-full bg-foreground/10" />
            </div>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest text-foreground/50 mb-4">
              ★ Recognition & Awards
            </p>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-foreground leading-tight mb-6">
              A simple path to
              <br />
              <span className="text-primary">People Champion</span>
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Top performers earn the prestigious People Champion title, 
              recognizing exceptional leadership, ethical decision-making, 
              and the ability to inspire others.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="default" size="xl" className="rounded-full px-8">
                <Link href="/dates-contact">
                  See Recognition Details
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="rounded-full px-8">
                <Link href="/program">
                  View Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
