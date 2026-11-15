import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Sparkles, ShieldCheck, HeartPulse, Smile, Stethoscope, Baby,
  ArrowRight, Star, Clock, MapPin, Phone, Quote, Check, Calendar,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import hero from "@/assets/hero-clinic.jpg";
import portrait from "@/assets/smile-portrait.jpg";
import tools from "@/assets/tools.jpg";
import team from "@/assets/team.jpg";
import tooth from "@/assets/tooth-3d.jpg";

const services = [
  { icon: Smile, title: "Cosmetic Dentistry", body: "Veneers, bonding, and whitening tuned to your face — never off-the-shelf." },
  { icon: ShieldCheck, title: "Preventive Care", body: "Cleanings, sealants, and check-ups that catch issues years before they show up." },
  { icon: HeartPulse, title: "Restorative Work", body: "Modern crowns, bridges, and implants built to feel like the teeth you were born with." },
  { icon: Sparkles, title: "Teeth Whitening", body: "In-office and at-home systems calibrated to your enamel — no zings, real results." },
  { icon: Stethoscope, title: "Root Canal Therapy", body: "Rotary endodontics under microscope. Most single-visit, most painless." },
  { icon: Baby, title: "Family & Pediatric", body: "Gentle care from first tooth through college. Kids actually ask to come back." },
];

const stats = [
  { k: "12k+", v: "Smiles cared for" },
  { k: "4.9★", v: "Google rating" },
  { k: "14", v: "Years in practice" },
  { k: "0", v: "Rushed appointments" },
];

const steps = [
  { n: "01", t: "Book online", d: "Pick a time in under a minute. Same-week visits, most weeks." },
  { n: "02", t: "Meet & map", d: "A calm consultation. We listen first, then plan together." },
  { n: "03", t: "Treat with care", d: "Modern tools, gentle hands, and honest pricing — no surprises." },
  { n: "04", t: "Aftercare", d: "Follow-ups by text. We're here long after you leave the chair." },
];

const faqs = [
  { q: "Do you take insurance?", a: "Yes — we accept most major PPO plans and file claims for you. We're happy to verify your coverage before your first visit." },
  { q: "How gentle is 'gentle'?", a: "We use micro-anesthetic delivery, warm-light sedation options, and take our time. Anxiety is a design problem, and we've solved for it." },
  { q: "Are same-day emergencies possible?", a: "Almost always. Call before noon and we'll do our best to fit you in that day." },
  { q: "Can kids come in with adults?", a: "Absolutely. We block back-to-back family slots so no one has to arrange childcare." },
];

const reviews = [
  { name: "Amelia R.", role: "Patient · 3 years", body: "I used to dread the dentist. Denytis feels more like a spa with better lighting. Painless whitening, zero pressure to upsell." },
  { name: "Marcus T.", role: "Patient · 2 years", body: "They quoted me half of what my old dentist wanted for a crown — and the work is genuinely beautiful." },
  { name: "Priya S.", role: "Patient · 5 years", body: "Kind, funny, on-time. My kids ask when we're going back. That's all I need to know." },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title span", {
        yPercent: 110, opacity: 0, duration: 1.1, ease: "expo.out", stagger: 0.08,
      });
      gsap.from(".hero-sub", { y: 20, opacity: 0, duration: 1, delay: 0.5, ease: "power3.out" });
      gsap.from(".hero-cta", { y: 16, opacity: 0, duration: 0.9, delay: 0.8, ease: "power3.out", stagger: 0.1 });
      gsap.from(".hero-img", { scale: 1.15, opacity: 0, duration: 1.6, ease: "expo.out" });

      if (marqueeRef.current) {
        const el = marqueeRef.current.querySelector<HTMLDivElement>(".marquee-track");
        if (el) {
          gsap.to(el, { xPercent: -50, duration: 30, ease: "none", repeat: -1 });
        }
      }
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="gradient-hero relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="chip">Modern dental care</span>
            <h1 className="hero-title text-5xl md:text-7xl leading-[1.02] mt-6">
              {["A calmer", "way to love", "your smile."].map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <span className="inline-block">{line}</span>
                </span>
              ))}
            </h1>
            <p className="hero-sub mt-6 text-lg text-muted-foreground max-w-lg text-balance">
              Denytis is a modern practice built around gentle care, honest pricing, and results
              that look like <em className="font-display italic text-foreground">you</em> — only brighter.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="hero-cta btn-primary">
                Book a visit <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="hero-cta btn-ghost">Explore services</Link>
            </div>
            <div className="hero-cta mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                <span className="ml-2">4.9 · 1,200+ reviews</span>
              </div>
              <span className="hidden sm:flex items-center gap-1"><Clock className="w-4 h-4" /> Same-week visits</span>
            </div>
          </div>

          <motion.div style={{ y, opacity }} className="lg:col-span-6 relative">
            <div className="hero-img relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img src={hero} alt="Modern Denytis dental clinic" className="w-full h-full object-cover" width={1600} height={1200} />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-xl w-56"
            >
              <div className="flex items-center gap-2 text-sm font-medium"><Sparkles className="w-4 h-4 text-primary" /> Whitening</div>
              <div className="text-2xl font-display mt-1">+8 shades</div>
              <div className="text-xs text-muted-foreground">Avg. patient result</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15, duration: 0.8 }}
              className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl p-4 shadow-xl w-48"
            >
              <div className="flex items-center gap-2 text-sm font-medium"><HeartPulse className="w-4 h-4 text-primary" /> Comfort-first</div>
              <div className="text-xs text-muted-foreground mt-1">Warm blankets, noise-cancelling headphones, weighted throws.</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <section ref={marqueeRef} className="border-y border-border bg-card overflow-hidden py-6">
        <div className="marquee-track flex gap-16 whitespace-nowrap font-display text-2xl md:text-3xl text-muted-foreground">
          {[...Array(2)].map((_, r) => (
            <div key={r} className="flex gap-16 shrink-0">
              {["Gentle care", "Modern tools", "Honest pricing", "Same-week visits", "Insurance friendly", "Family-owned"].map((w, i) => (
                <span key={i} className="flex items-center gap-16">
                  {w}<span className="text-primary">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <Section
        id="services"
        eyebrow="What we do"
        title={<>Every service you'd expect, <em className="italic font-normal">nothing</em> you wouldn't.</>}
        kicker="From routine cleanings to full smile design — under one roof, with one team that actually knows your name."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group relative h-full rounded-3xl border border-border bg-card p-8 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl mb-2">{s.title}</h3>
                <p className="text-muted-foreground">{s.body}</p>
                <ArrowRight className="w-5 h-5 mt-6 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SPLIT FEATURE */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="rounded-3xl overflow-hidden aspect-[5/6]">
              <img src={portrait} alt="Patient with a bright, natural smile" loading="lazy" width={1200} height={1400} className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="chip">Why Denytis</span>
            <h2 className="text-4xl md:text-5xl mt-4">Dentistry designed around the person, not the procedure.</h2>
            <p className="mt-6 text-muted-foreground text-lg">
              We think a great dental visit should feel closer to a good haircut than a medical appointment.
              Quiet rooms, unhurried consults, and a plan that respects your time and your budget.
            </p>
            <ul className="mt-8 space-y-3">
              {["Board-certified team, not rotating locums", "Transparent quotes before we start", "Digital records you actually own", "Same-day emergency slots"].map(x => (
                <li key={x} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 shrink-0" /> <span>{x}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-ghost mt-8">More about us <ArrowRight className="w-4 h-4" /></Link>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.v} delay={i * 0.08}>
              <div className="text-center md:text-left">
                <div className="text-5xl md:text-6xl font-display text-primary">{s.k}</div>
                <div className="mt-2 text-muted-foreground">{s.v}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section
        eyebrow="How it works"
        title={<>Four calm steps from <em className="italic font-normal">hello</em> to healed.</>}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07}>
              <div className="relative h-full p-8 rounded-3xl border border-border">
                <div className="text-sm text-primary font-mono">{s.n}</div>
                <h3 className="text-2xl mt-3">{s.t}</h3>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* TECH / TOOLS */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="chip !bg-primary-foreground/15 !text-primary-foreground">Technology</span>
            <h2 className="text-4xl md:text-5xl mt-4">Precision tools. Human touch.</h2>
            <p className="mt-6 text-primary-foreground/80 text-lg">
              3D intra-oral scanning, CBCT imaging, and same-day CEREC crowns — the boring bits, done brilliantly, so the appointment stays short.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { k: "3D Scans", v: "Zero impressions" },
                { k: "Same-day crowns", v: "In ~90 minutes" },
                { k: "Digital X-rays", v: "90% less radiation" },
                { k: "Micro-anesthesia", v: "Barely a pinch" },
              ].map(t => (
                <div key={t.k} className="rounded-2xl bg-primary-foreground/10 p-4">
                  <div className="font-display text-xl">{t.k}</div>
                  <div className="text-sm text-primary-foreground/70">{t.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-3xl overflow-hidden aspect-[4/3]">
              <img src={tools} alt="Dental tools flatlay" loading="lazy" width={1400} height={1000} className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Section eyebrow="Kind words" title="Patients say it best.">
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <figure className="h-full p-8 rounded-3xl border border-border bg-card flex flex-col">
                <Quote className="w-8 h-8 text-primary/30" />
                <blockquote className="mt-4 text-lg leading-relaxed flex-1">"{r.body}"</blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <div className="font-medium">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PRICING */}
      <Section eyebrow="Membership" title="Care without the paperwork." kicker="Skip insurance drama with the Denytis Membership — one flat annual fee, everything preventive included.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Essentials", price: "$29", per: "/mo", perks: ["2 cleanings per year", "2 exams + X-rays", "20% off all treatments"] },
            { name: "Family", price: "$79", per: "/mo", perks: ["Up to 4 members", "8 cleanings per year", "25% off all treatments", "Priority booking"], featured: true },
            { name: "Whitening+", price: "$49", per: "/mo", perks: ["All Essentials perks", "Free annual whitening top-up", "Custom trays included"] },
          ].map((p, i) => (
            <Reveal key={p.name} delay={i * 0.07}>
              <div className={`h-full rounded-3xl p-8 border transition-all ${p.featured ? "bg-foreground text-background border-foreground shadow-2xl scale-[1.02]" : "bg-card border-border"}`}>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-2xl">{p.name}</h3>
                  {p.featured && <span className="chip !bg-accent/30 !text-foreground">Popular</span>}
                </div>
                <div className="mt-6 flex items-end gap-1">
                  <span className="text-5xl font-display">{p.price}</span>
                  <span className={p.featured ? "text-background/60" : "text-muted-foreground"}>{p.per}</span>
                </div>
                <ul className="mt-8 space-y-3">
                  {p.perks.map(x => (
                    <li key={x} className="flex items-start gap-2"><Check className={`w-5 h-5 mt-0.5 ${p.featured ? "text-accent" : "text-primary"}`} /> {x}</li>
                  ))}
                </ul>
                <Link to="/contact" className={`mt-8 inline-flex ${p.featured ? "btn-primary" : "btn-ghost"}`}>Get started</Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* TEAM */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal delay={0.15}>
            <div className="rounded-3xl overflow-hidden aspect-[4/3]">
              <img src={team} alt="Denytis dental team" loading="lazy" width={1400} height={1000} className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal>
            <span className="chip">The team</span>
            <h2 className="text-4xl md:text-5xl mt-4">People you'll actually remember.</h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Six clinicians, one hygiene team, and zero hidden juniors. The dentist who greets you today
              is the same one who follows up next week.
            </p>
            <Link to="/about" className="btn-primary mt-8">Meet the team <ArrowRight className="w-4 h-4" /></Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <Section eyebrow="Answers" title="Common questions.">
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <div className="p-8 rounded-3xl border border-border">
                <h3 className="text-xl">{f.q}</h3>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] p-12 md:p-20 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
          <img src={tooth} alt="" aria-hidden="true" className="absolute -right-20 -top-20 w-[36rem] opacity-20 pointer-events-none" />
          <div className="relative max-w-2xl">
            <h2 className="text-4xl md:text-6xl">Let's meet your future smile.</h2>
            <p className="mt-6 text-lg text-primary-foreground/80">
              Book online in 60 seconds. New patients get a complimentary 15-minute consult.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-foreground text-primary font-medium hover:-translate-y-0.5 transition-transform">
                <Calendar className="w-4 h-4" /> Book a visit
              </Link>
              <a href="tel:+15550100" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary-foreground/30">
                <Phone className="w-4 h-4" /> (555) 010-0100
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-primary-foreground/70">
              <MapPin className="w-4 h-4" /> 24 Linden Ave, Brooklyn NY
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
