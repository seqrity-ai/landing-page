 // @ts-nocheck
"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Play, Sparkles, LayoutTemplate, Zap } from "lucide-react";
import { SITE, HERO_HIGHLIGHTS } from "@/constants/site";
import { Button } from "@/ui/button";
import { cn } from "@/lib/utils";

const MotionCardDiv = motion.div as any;

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.79, 0.29, 0.99],
    },
  },
};

const staggeredVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25 + i * 0.08,
      duration: 0.6,
      ease: [0.21, 0.79, 0.29, 0.99],
    },
  }),
};

const cardFloatVariants = {
  initial: { opacity: 0, y: 24, scale: 0.96 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.4,
      duration: 0.9,
      ease: [0.21, 0.79, 0.29, 0.99],
    },
  },
};

function useParallaxCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-20, 20], [8, -8]);
  const rotateY = useTransform(x, [-20, 20], [-8, 8]);

  const springConfig = { damping: 18, stiffness: 220, mass: 0.6 };
  const springX = useSpring(rotateX, springConfig);
  const springY = useSpring(rotateY, springConfig);

  const handleMouseMove = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const relativeX = event.clientX - (rect.left + rect.width / 2);
      const relativeY = event.clientY - (rect.top + rect.height / 2);
      x.set(relativeX / 10);
      y.set(relativeY / 10);
    },
    [x, y]
  );

  const handleMouseLeave = React.useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return { springX, springY, handleMouseMove, handleMouseLeave };
}

function HeroTemplateStack() {
  const { springX, springY, handleMouseLeave, handleMouseMove } =
    useParallaxCard();

  return (
    <MotionCardDiv
      className="relative aspect-[16/10] w-full max-w-xl rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-4 sm:p-5 md:p-6 shadow-soft-elevated overflow-hidden hero-bg"
      variants={cardFloatVariants}
      initial="initial"
      animate="animate"
      style={{
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient orbits */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-secondary/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18),transparent_55%)]" />
      </div>

      <motion.div
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
        }}
        className="relative flex h-full w-full flex-col gap-3 sm:gap-4"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between rounded-xl border border-slate-700/70 bg-slate-950/90 px-3.5 py-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-[0.6rem] font-semibold text-slate-950 shadow-glow-primary">
              AI
            </span>
            <div className="flex flex-col">
              <span className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">
                Signal Atlas
              </span>
              <span className="text-xs text-slate-100">
                Unified Signals · Production
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[0.7rem] text-slate-300">
            <Sparkles className="h-3.5 w-3.5 text-secondary" />
            <span className="numeric">1243 signals · 87 assets</span>
          </div>
        </div>

        <div className="grid flex-1 gap-3 sm:gap-4 md:grid-cols-[1.7fr,1.1fr]">
          {/* Signals feed */}
          <div className="relative flex flex-col gap-3 rounded-2xl border border-slate-700/70 bg-slate-950/90 p-3 sm:p-4 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(109,93,246,0.32),transparent_55%)] opacity-80" />
            <div className="relative flex flex-col gap-3">
              <div className="flex items-center justify-between text-[0.7rem]">
                <div className="flex items-center gap-1.5">
                  <span className="numeric text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">
                    Signals feed
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-secondary/40 bg-secondary/10 px-2 py-0.5 text-[0.6rem] text-secondary-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    Normalized
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[0.65rem] text-slate-300">
                  <span className="numeric">Critical 18</span>
                  <span className="h-1 w-1 rounded-full bg-slate-600" />
                  <span className="numeric">High 42</span>
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-1.5 text-[0.6rem]">
                {["All surfaces", "Critical & High", "SLA & breach", "Unassigned"].map(
                  (chip, idx) => (
                    <span
                      key={chip}
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full border border-slate-700/70 bg-slate-900/80 px-2 py-1 text-slate-200",
                        idx === 1 && "border-primary/80 bg-primary/10"
                      )}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span className="numeric">{chip}</span>
                    </span>
                  )
                )}
              </div>

              {/* Signals list */}
              <div className="mt-1 space-y-1.5 text-[0.7rem]">
                {[
                  {
                    sev: "Critical",
                    color:
                      "border-rose-500/80 bg-gradient-to-r from-rose-500/10 via-rose-500/5 to-transparent",
                    title: "Privileged access from unknown workstation",
                    surface: "Core admin · Web app",
                    meta: "SLA breach in 2h • Owner: AppSec",
                  },
                  {
                    sev: "High",
                    color:
                      "border-amber-400/80 bg-gradient-to-r from-amber-400/10 via-amber-400/5 to-transparent",
                    title: "Public S3 bucket with PII discovered",
                    surface: "Data lake · Cloud",
                    meta: "New asset • Discovered by CSPM",
                  },
                  {
                    sev: "High",
                    color:
                      "border-sky-400/80 bg-gradient-to-r from-sky-400/10 via-sky-400/5 to-transparent",
                    title: "Unpatched critical vuln in payment service",
                    surface: "Payments API · Services",
                    meta: "CVSS 9.8 • 3 signals merged",
                  },
                  {
                    sev: "Medium",
                    color:
                      "border-emerald-400/70 bg-gradient-to-r from-emerald-400/10 via-emerald-400/5 to-transparent",
                    title: "Excessive permissions on internal dashboard",
                    surface: "Ops portal · Web app",
                    meta: "Suggested fix ready • Needs review",
                  },
                ].map((row, idx) => (
                  <div
                    key={row.title}
                    className={cn(
                      "group flex items-start gap-2 rounded-xl border pl-2.5 pr-3 py-2.5 bg-slate-900/90 hover:bg-slate-900/95 transition-colors",
                      row.color
                    )}
                  >
                    <div className="mt-[5px] h-2 w-2 rounded-full bg-gradient-to-br from-primary to-secondary shadow-[0_0_0_3px_rgba(56,189,248,0.25)]" />
                    <div className="flex flex-1 flex-col gap-0.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="truncate text-[0.72rem] text-slate-50">
                          {row.title}
                        </span>
                        <span
                          className={cn(
                            "inline-flex shrink-0 items-center rounded-full px-1.5 py-0.5 text-[0.6rem] font-medium",
                            idx === 0
                              ? "bg-rose-500/15 text-rose-300 border border-rose-500/50"
                              : idx === 1
                              ? "bg-amber-400/15 text-amber-200 border border-amber-400/50"
                              : idx === 2
                              ? "bg-sky-400/15 text-sky-200 border border-sky-400/50"
                              : "bg-emerald-400/15 text-emerald-200 border border-emerald-400/50"
                          )}
                        >
                          {row.sev}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[0.62rem] text-slate-300">
                        <span className="numeric">{row.surface}</span>
                        <span className="h-1 w-1 rounded-full bg-slate-600" />
                        <span className="text-slate-400">{row.meta}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right-hand summary: assets + posture */}
          <div className="flex flex-col gap-3.5 text-[0.7rem] text-slate-200">
            {/* Risk score / posture */}
            <div className="rounded-2xl border border-slate-700/80 bg-slate-950/90 p-3.5">
              <div className="mb-3 flex items-center justify-between text-[0.65rem] text-slate-400">
                <span className="numeric uppercase tracking-[0.2em]">
                  Posture overview
                </span>
                <span>Last 30 days</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative h-16 w-16">
                  <div className="absolute inset-0 rounded-full border border-slate-700/80 bg-slate-900/80" />
                  <div className="absolute inset-[4px] rounded-full bg-[conic-gradient(from_210deg,_#22c55e_0deg,_#22c55e_220deg,_rgba(30,64,175,0.7)_220deg,_rgba(15,23,42,1)_360deg)] opacity-90" />
                  <div className="absolute inset-[10px] flex items-center justify-center rounded-full bg-slate-950/95">
                    <span className="numeric text-sm text-emerald-400">92</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-1 text-[0.65rem]">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Signals closed</span>
                    <span className="numeric text-emerald-400">+4.2x</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">
                      High & critical coverage
                    </span>
                    <span className="numeric text-sky-300">97%</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-900">
                    <div className="h-full w-[76%] rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
                  </div>
                </div>
              </div>
            </div>

            {/* Assets + SLAs */}
            <div className="rounded-2xl border border-slate-700/80 bg-slate-950/90 p-3.5">
              <div className="mb-2 flex items-center justify-between text-[0.65rem] text-slate-400">
                <span className="numeric uppercase tracking-[0.2em]">
                  Assets & SLAs
                </span>
                <span>By surface</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "Assets watched", value: "87", tone: "emerald" },
                  { label: "SLAs on track", value: "91%", tone: "sky" },
                  { label: "Integrations", value: "12", tone: "violet" },
                  { label: "Exec views", value: "4", tone: "amber" },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="flex flex-col gap-1 rounded-lg border border-slate-700/70 bg-slate-900/80 px-2.5 py-2"
                  >
                    <span className="numeric text-[0.6rem] text-slate-400">
                      {card.label}
                    </span>
                    <span className="numeric text-sm text-slate-100">
                      {card.value}
                    </span>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-950">
                      <div
                        className={cn(
                          "h-full w-[70%] rounded-full bg-gradient-to-r",
                          card.tone === "emerald" &&
                            "from-emerald-400/80 to-emerald-300/80",
                          card.tone === "sky" &&
                            "from-sky-400/80 to-sky-300/80",
                          card.tone === "violet" &&
                            "from-primary/80 to-secondary/80",
                          card.tone === "amber" &&
                            "from-amber-400/80 to-amber-300/80"
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Connected surfaces */}
            <div className="grid gap-3 sm:grid-cols-1">
              <motion.div
                className="card-floating relative flex flex-col gap-2 rounded-xl border border-slate-700/70 bg-slate-950/90 p-3"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center justify-between text-[0.7rem] text-slate-300">
                  <span className="inline-flex items-center gap-1 text-secondary">
                    <Zap className="h-3.5 w-3.5" />
                    Live surfaces
                  </span>
                  <span className="numeric text-[0.65rem] text-slate-400">
                    Streaming
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 text-[0.6rem]">
                  {["Web apps", "APIs", "Mobile", "Code", "Cloud"].map(
                    (platform) => (
                      <span
                        key={platform}
                        className="inline-flex items-center gap-1 rounded-full border border-slate-700/70 bg-slate-900/80 px-2 py-1 text-slate-200"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span className="numeric">{platform}</span>
                      </span>
                    )
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </MotionCardDiv>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="app-container grid min-h-[calc(100vh-4.5rem)] items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <motion.div
          className="space-y-6 sm:space-y-7"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            custom={0}
            variants={staggeredVariants}
            className="inline-flex items-center gap-2 rounded-pill border border-primary/40 bg-primary/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-primary/80"
          >
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-[0.6rem] text-slate-900">
              ★
            </span>
            <span className="numeric">
              Unified Signals for modern AppSec teams
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            custom={1}
            variants={staggeredVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] font-semibold font-heading tracking-tight leading-tight"
          >
            Turn fragmented security findings into{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              one actionable Signal feed
            </span>{" "}
            across apps, APIs, mobile and cloud.
          </motion.h1>

          <motion.p
            custom={2}
            variants={staggeredVariants}
            className="max-w-xl text-sm sm:text-base text-muted-foreground"
          >
            {SITE.description}
          </motion.p>

          <motion.div
            custom={3}
            variants={staggeredVariants}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <div className="flex items-center gap-3">
              <Link href="/book-demo" aria-label={SITE.primaryCTA}>
                <Button size="lg" className="gap-2">
                  <span>{SITE.primaryCTA}</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="secondary"
                size="lg"
                className="gap-2"
                aria-label={SITE.secondaryCTA}
              >
                <Play className="h-4 w-4" />
                <span>{SITE.secondaryCTA}</span>
              </Button>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-300">
              <div className="relative flex -space-x-2">
                {["AR", "ML", "JC"].map((initials) => (
                  <div
                    key={initials}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-900 bg-gradient-to-br from-slate-700 to-slate-900 text-[0.65rem] font-medium text-slate-50"
                  >
                    {initials}
                  </div>
                ))}
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-900 bg-slate-900/80 text-[0.65rem] font-medium text-slate-300">
                  +
                </div>
              </div>
              <span className="text-[0.7rem] leading-tight text-slate-300">
                <span className="numeric font-semibold text-slate-50">
                  Security & engineering teams
                </span>{" "}
                close critical findings faster, with shared context.
              </span>
            </div>
          </motion.div>

          <motion.ul
            custom={4}
            variants={staggeredVariants}
            className="mt-2 grid gap-2 text-xs text-slate-300 sm:grid-cols-3"
          >
            {HERO_HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-xl border border-slate-800/70 bg-slate-950/80 px-3 py-2"
              >
                <span className="mt-[2px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                <p>{item}</p>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <div className="relative order-first lg:order-last flex justify-center">
          {/* Vaporwave lines / grid */}
          <div className="pointer-events-none absolute -inset-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.25),transparent_55%)] opacity-60" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_right,rgba(148,163,184,0.16)_1px,transparent_1px)] bg-[size:100%_24px,24px_100%] opacity-25" />
          </div>
          <HeroTemplateStack />
        </div>
      </div>
    </section>
  );
}
