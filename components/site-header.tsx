"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Play, ArrowRight } from "lucide-react";
import { SITE, NAV_LINKS } from "@/constants/site";
import { Button } from "@/ui/button";
import { cn } from "@/lib/utils";

function LogoMark() {
  return (
    <div className="inline-flex items-center gap-2">
      <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent shadow-glow-primary flex items-center justify-center">
        <span className="numeric text-[0.65rem] text-slate-950 font-semibold">
          AI
        </span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-xs uppercase tracking-[0.22em] text-slate-200">
          {SITE.appName}
        </span>
        {/* Show a shorter tagline only on larger screens to avoid header overflow */}
        <span className="hidden lg:block max-w-[11rem] truncate text-[0.7rem] font-medium text-slate-400">
          {SITE.tagline}
        </span>
      </div>
    </div>
  );
}

function getLinkHash(href: string): string {
  const hashIndex = href.indexOf("#");
  return hashIndex >= 0 ? href.slice(hashIndex) : href;
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    // Observe the hero section as well as in-page nav sections.
    // When the hero is the most visible, we clear the active nav highlight.
    const hero = document.getElementById("hero");

    const sectionIds = NAV_LINKS.map((link) => {
      const hashIndex = link.href.indexOf("#");
      return hashIndex >= 0 ? link.href.slice(hashIndex + 1) : "";
    }).filter(Boolean);

    const sections = [
      ...(hero ? [hero] : []),
      ...sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean),
    ] as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const top = visible[0];

        if (top?.target.id) {
          if (top.target.id === "hero") {
            // At the very top: hero is dominant, so no nav item is active.
            setActiveSection(null);
          } else {
            setActiveSection(`#${top.target.id}`);
          }
        }
      },
      {
        root: null,
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/70 bg-slate-950/95 backdrop-blur shadow-[0_12px_40px_rgba(15,23,42,0.9)]">
      <div className="app-container flex h-14 sm:h-16 items-center justify-between gap-3">
        <Link href="/" aria-label="Go to seqrity.ai home" className="inline-flex items-center gap-2">
          <LogoMark />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-300">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "group relative inline-flex flex-col items-start gap-1 transition-colors",
                activeSection === getLinkHash(link.href)
                  ? "text-slate-50"
                  : "text-slate-300 hover:text-slate-50"
              )}
            >
              <span className="whitespace-nowrap">{link.label}</span>
              <span
                className={cn(
                  "h-[1px] bg-gradient-to-r from-primary to-secondary transition-all duration-200",
                  activeSection === getLinkHash(link.href)
                    ? "w-6"
                    : "w-0 group-hover:w-6"
                )}
              />
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="secondary"
            size="sm"
            className="gap-1.5"
            aria-label={SITE.secondaryCTA}
          >
            <Play className="h-3.5 w-3.5" />
            <span className="whitespace-nowrap">{SITE.secondaryCTA}</span>
          </Button>
          <Link href="/book-demo" aria-label={SITE.primaryCTA}>
            <Button
              size="sm"
              className="gap-1.5"
            >
              <span className="whitespace-nowrap">{SITE.primaryCTA}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/70 text-slate-200 hover:border-primary/60 hover:text-white transition-all"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile nav: full-screen solid menu overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 nav-overlay-bg">
          <div className="flex flex-col min-h-screen nav-overlay-bg">
            {/* Overlay header (logo + close) */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/70">
              <Link
                href="/"
                aria-label="Go to seqrity.ai home"
                className="inline-flex items-center gap-2"
              >
                <LogoMark />
              </Link>
              <button
                type="button"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/80 text-slate-200 hover:border-primary/60 hover:text-white transition-all"
                aria-label="Close navigation"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Nav links from top, scrollable if needed */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
              <nav className="flex flex-col gap-2 text-sm text-slate-200">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-3 py-2 bg-slate-900 hover:bg-slate-800",
                      activeSection === getLinkHash(link.href) &&
                        "border border-primary/40 shadow-[0_0_16px_rgba(109,93,246,0.6)]"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-500" />
                  </a>
                ))}
              </nav>
            </div>

            {/* CTAs pinned to bottom */}
            <div className="border-t border-slate-800/70 px-4 py-3">
              <div className="flex flex-col gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  fullWidth
                  className="gap-1.5"
                >
                  <Play className="h-3.5 w-3.5" />
                  <span className="whitespace-nowrap">
                    {SITE.secondaryCTA}
                  </span>
                </Button>
                <Link href="/book-demo">
                  <Button size="sm" fullWidth className="gap-1.5">
                    <span className="whitespace-nowrap">
                      {SITE.primaryCTA}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
