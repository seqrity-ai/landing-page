import Link from "next/link";
import { SITE, FOOTER_LINKS, SOCIAL_LINKS } from "@/constants/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/95 mt-16">
      <div className="app-container py-8 sm:py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2 max-w-sm">
            <Link
              href="/"
              aria-label="Go to seqrity.ai home"
              className="inline-flex items-center gap-2"
            >
              <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent shadow-glow-primary flex items-center justify-center">
                <span className="numeric text-[0.65rem] text-[0.65rem] text-slate-950 font-semibold">
                  AI
                </span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  {SITE.appName}
                </span>
                <span className="text-[0.7rem] font-medium text-slate-100">
                  Unified DevSecOps & application security operations
                </span>
              </div>
            </Link>
            <p className="text-xs text-slate-400">
              seqrity.ai is designed for global, security-conscious teams. These
              links cover how we handle data, security, and governance as a
              modern international SaaS platform.
            </p>
          </div>

          <div className="grid gap-6 text-xs text-slate-300 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <div className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Product & posture
              </div>
              <ul className="space-y-1.5">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="hover:text-slate-50 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Connect
              </div>
              <ul className="space-y-1.5">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-slate-50 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Compliance snapshot
              </div>
              <ul className="space-y-1.5">
                <li className="text-slate-400">
                  Built with enterprise security, privacy and auditability in
                  mind.
                </li>
                <li className="text-slate-400">
                  Supports common frameworks (e.g., SOC 2, ISO 27001, GDPR) as
                  part of your broader program.
                </li>
                <li className="text-slate-500 text-[0.68rem]">
                  This site content is illustrative and not legal advice.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-slate-800/60 pt-4 text-[0.7rem] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {SITE.appName}. All rights reserved.
          </p>
          <p className="text-slate-600">
            seqrity.ai is a fictional marketing example for a DevSecOps and
            application security operations platform.
          </p>
        </div>
      </div>
    </footer>
  );
}
