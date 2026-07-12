import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import {
  Smile, ShieldCheck, HeartPulse, Sparkles, Stethoscope, Baby,
  Zap, Layers, Wrench, ArrowRight, Check,
} from "lucide-react";
import tools from "@/assets/tools.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Denytis Dental" },
      { name: "description", content: "Explore Denytis dental services: preventive care, cosmetic dentistry, restorative work, whitening, and family dentistry." },
      { property: "og:title", content: "Services — Denytis Dental" },
      { property: "og:description", content: "Preventive, cosmetic, restorative, and family dental care under one calm roof." },
    ],
  }),
  component: ServicesPage,
});

const groups = [
  {
    title: "Preventive",
    icon: ShieldCheck,
    items: ["Cleanings & exams", "Digital X-rays", "Sealants", "Fluoride treatments", "Oral cancer screening"],
  },
  {
    title: "Cosmetic",
    icon: Smile,
    items: ["Porcelain veneers", "Composite bonding", "Whitening", "Smile design", "Gum contouring"],
  },
  {
    title: "Restorative",
    icon: HeartPulse,
    items: ["Same-day crowns", "Bridges", "Dental implants", "Full-mouth rehab", "Dentures & partials"],
  },
  {
    title: "Endodontics",
    icon: Stethoscope,
    items: ["Rotary root canals", "Microscope-assisted therapy", "Retreatment", "Pulp preservation"],
  },
  {
    title: "Family & Pediatric",
    icon: Baby,
    items: ["First-tooth visits", "Kid-friendly rooms", "Teen orthodontics", "Family blocks"],
  },
  {
    title: "Emergency",
    icon: Zap,
    items: ["Same-day slots", "Chipped/broken teeth", "Lost fillings", "Toothache triage"],
  },
  {
    title: "Orthodontics",
    icon: Layers,
    items: ["Clear aligners", "Ceramic braces", "Retainers", "Progress scans"],
  },
  {
    title: "Surgical",
    icon: Wrench,
    items: ["Wisdom teeth", "Extractions", "Bone grafting", "Sinus lifts"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="gradient-hero">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-20">
          <Reveal>
            <span className="chip">Services</span>
            <h1 className="text-5xl md:text-7xl mt-4 max-w-3xl text-balance">
              Full-scope dentistry, thoughtfully practiced.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              A modern menu of care — from your quarterly cleaning to complex smile design — delivered by
              a small team that stays with you from consult to aftercare.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.04}>
              <div className="h-full p-8 rounded-3xl border border-border bg-card">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <g.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl mb-4">{g.title}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {g.items.map(x => (
                    <li key={x} className="flex items-start gap-2"><Check className="w-4 h-4 text-primary mt-1 shrink-0" /> {x}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="chip">Signature</span>
            <h2 className="text-4xl md:text-5xl mt-4">The Denytis Smile Design.</h2>
            <p className="mt-6 text-muted-foreground text-lg">
              A three-visit journey: 3D scan and mockup, preview in your own mouth,
              then final craftsmanship — porcelain shaped to your bite, your face, your light.
            </p>
            <ul className="mt-8 space-y-3">
              {["Digital preview before any drill", "Lifetime warranty on veneers", "Complimentary annual polish"].map(x => (
                <li key={x} className="flex items-start gap-2"><Sparkles className="w-5 h-5 text-primary mt-0.5" /> {x}</li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary mt-8">Book a design consult <ArrowRight className="w-4 h-4" /></Link>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-3xl overflow-hidden aspect-[4/3]">
              <img src={tools} alt="Dental instruments" loading="lazy" width={1400} height={1000} className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
