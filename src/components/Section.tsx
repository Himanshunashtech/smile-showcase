import type { ReactNode } from "react";

export function Section({
  id, eyebrow, title, kicker, children, className = "",
}: {
  id?: string; eyebrow?: string; title?: ReactNode; kicker?: ReactNode; children?: ReactNode; className?: string;
}) {
  return (
    <section id={id} className={`max-w-7xl mx-auto px-6 py-24 ${className}`}>
      {(eyebrow || title || kicker) && (
        <div className="max-w-3xl mb-14">
          {eyebrow && <span className="chip">{eyebrow}</span>}
          {title && <h2 className="text-4xl md:text-5xl mt-4 text-balance">{title}</h2>}
          {kicker && <p className="mt-4 text-lg text-muted-foreground text-balance">{kicker}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
