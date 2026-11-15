import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { ArrowRight, Award, Heart, Leaf, Users } from "lucide-react";
import team from "@/assets/team.jpg";
import hero from "@/assets/hero-clinic.jpg";

const values = [
  { icon: Heart, t: "Gentle by default", d: "Comfort isn't a premium add-on. It's how every appointment starts." },
  { icon: Award, t: "Craft over volume", d: "We see fewer patients per day so we can do better work for each one." },
  { icon: Leaf, t: "Quietly sustainable", d: "Digital records, low-waste sterilization, and locally-milled crowns." },
  { icon: Users, t: "Family-owned", d: "Independently run since 2010. No private-equity playbook here." },
];

const people = [
  { name: "Dr. Elena Marín", role: "Founder · Cosmetic & Restorative", bio: "NYU College of Dentistry. 15 years shaping smiles that still look like the person who came in." },
  { name: "Dr. Kwame Asante", role: "Endodontics & Implants", bio: "Board-certified endodontist. Believes anesthesia should be so good you forget it happened." },
  { name: "Dr. Rina Patel", role: "Family & Pediatric", bio: "Actually enjoys treating four-year-olds. They can tell." },
  { name: "Nora Chen, RDH", role: "Lead Hygienist", bio: "Has convinced dozens of self-declared flossophobes to floss. Miracle worker." },
];

export default function About() {
  return (
    <>
      <section className="gradient-hero">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 grid lg:grid-cols-2 gap-12 items-end">
          <Reveal>
            <span className="chip">Our story</span>
            <h1 className="text-5xl md:text-7xl mt-4 text-balance">
              A neighborhood practice with big-city precision.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground">
              We started Denytis in 2010 with one belief: dentistry shouldn't feel like an assembly line.
              Fourteen years later, we're still small on purpose — one clinic, one team, one very high bar.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Reveal>
            <div className="rounded-3xl overflow-hidden aspect-[4/5]">
              <img src={hero} alt="Denytis clinic interior" loading="lazy" width={1600} height={1200} className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="chip">Values</span>
            <h2 className="text-4xl md:text-5xl mt-4">What we hold to.</h2>
            <div className="mt-8 space-y-6">
              {values.map(v => (
                <div key={v.t} className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <v.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl">{v.t}</h3>
                    <p className="text-muted-foreground mt-1">{v.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <Reveal>
            <span className="chip">The team</span>
            <h2 className="text-4xl md:text-5xl mt-4 max-w-2xl">Faces you'll get to know.</h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {people.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <div className="rounded-3xl overflow-hidden border border-border bg-background">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={team} alt={p.name} loading="lazy" width={1400} height={1000} className="w-full h-full object-cover" style={{ objectPosition: `${20 + i * 20}% center` }} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl">{p.name}</h3>
                    <div className="text-sm text-primary mt-1">{p.role}</div>
                    <p className="mt-3 text-muted-foreground text-sm">{p.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <div className="rounded-3xl border border-border p-12 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl">Come say hi.</h2>
          <p className="mt-4 text-muted-foreground text-lg">Walk in for a coffee, leave with a treatment plan you actually understand.</p>
          <Link to="/contact" className="btn-primary mt-8 inline-flex">Book a visit <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </Section>
    </>
  );
}
