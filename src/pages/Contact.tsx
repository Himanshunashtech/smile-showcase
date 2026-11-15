import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Mail, MapPin, Phone, Clock, Check } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <>
      <section className="gradient-hero">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-16">
          <Reveal>
            <span className="chip">Contact</span>
            <h1 className="text-5xl md:text-7xl mt-4 max-w-3xl text-balance">Let's get you on the schedule.</h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Tell us a bit about what you need. We reply within one business hour.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-5 gap-12">
          <Reveal className="lg:col-span-3">
            <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-8 md:p-10">
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl mt-4">Thanks — we'll be in touch.</h3>
                  <p className="text-muted-foreground mt-2">We usually reply within an hour during clinic hours.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="First name" name="first" />
                    <Field label="Last name" name="last" />
                  </div>
                  <Field label="Email" name="email" type="email" />
                  <Field label="Phone" name="phone" type="tel" />
                  <div>
                    <label className="text-sm font-medium">What can we help with?</label>
                    <select className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-primary">
                      <option>New patient visit</option>
                      <option>Cosmetic consult</option>
                      <option>Emergency</option>
                      <option>Something else</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Message</label>
                    <textarea rows={4} className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-primary resize-none" placeholder="Tell us a little more…" />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">Send request</button>
                </div>
              )}
            </form>
          </Reveal>

          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: MapPin, t: "Visit us", d: "24 Linden Ave, Suite 300\nBrooklyn, NY 11201" },
              { icon: Phone, t: "Call", d: "(555) 010-0100" },
              { icon: Mail, t: "Email", d: "hello@denytis.com" },
              { icon: Clock, t: "Hours", d: "Mon–Fri · 8am–7pm\nSat · 9am–3pm\nSun · Closed" },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.05}>
                <div className="p-6 rounded-2xl border border-border bg-card flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">{c.t}</div>
                    <div className="text-muted-foreground whitespace-pre-line mt-1">{c.d}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-sm font-medium" htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-primary" />
    </div>
  );
}
