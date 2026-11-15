import { Link } from "react-router-dom";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border mt-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-2xl">
            <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-glow" />
            denytis<span className="text-primary">.</span>
          </div>
          <p className="mt-4 text-muted-foreground max-w-sm">
            Calm, modern dentistry. We treat your teeth like they're ours — because a great smile shouldn't be complicated.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-muted-foreground text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-primary">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Visit</h4>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>24 Linden Ave, Suite 300</li>
            <li>Brooklyn, NY 11201</li>
            <li>Mon–Sat · 8am–7pm</li>
            <li>hello@denytis.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between text-xs text-muted-foreground gap-2">
          <span>© {new Date().getFullYear()} Denytis Dental. All rights reserved.</span>
          <span>Designed with care in NYC.</span>
        </div>
      </div>
    </footer>
  );
}
