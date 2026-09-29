const links = [{label: "Project Life Lab", href: "/lab/packhappens"}, {label: "Privacy Policy", href: "/privacy"}, {label: "Terms", href: "/terms"}, {label: "Contact", href: "mailto:projectlifebycv@gmail.com"}];

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-espresso">
      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-amber text-[0.95rem]">
                🎒
              </span>
              <span className="text-[1.05rem] font-extrabold tracking-tight text-cream">
                Packhappens
              </span>
            </div>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-cream/60">
              Pack smart. Travel light. Come back with everything.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[0.9rem] font-semibold text-cream/70">
            {links.map((link, i) => (
              <span key={link.label} className="flex items-center gap-5">
                <a href={link.href} className="transition-colors hover:text-amber">
                  {link.label}
                </a>
                {i < links.length - 1 && (
                  <span className="h-1 w-1 rounded-full bg-cream/25" aria-hidden />
                )}
              </span>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-7 text-[0.82rem] text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>Built with 🕯️ by Project Life by CV</p>
          <p>© 2026 Project Life by CV</p>
        </div>
      </div>
    </footer>
  );
}
