 // @ts-nocheck
"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/ui/button";
import { cn } from "@/lib/utils";

type TourStep = {
  id: string;
  label: string;
  title: string;
  summary: string;
  primaryTitle: string;
  primaryPoints: string[];
  secondaryTitle?: string;
  secondaryPoints?: string[];
};

const TOUR_STEPS: TourStep[] = [
  {
    id: "signals-feed",
    label: "Signals feed",
    title: "Start in the unified Signals feed",
    summary:
      "seqrity.ai normalizes findings from SAST, DAST, SCA, pentests, CSPM and other sources into a single queue your team can actually work from.",
    primaryTitle: "What you see in the workspace",
    primaryPoints: [
      "A prioritized Signals list with severity, state and owner on each row.",
      "Filters like “All surfaces”, “Critical & High”, “SLA & breach”, “Unassigned” to slice the queue in seconds.",
      "Signal rows that tie scanners, assets, endpoints and git references together in one place.",
    ],
    secondaryTitle: "What it replaces",
    secondaryPoints: [
      "Jumping between isolated scanner dashboards and spreadsheets.",
      "Manually stitching together where a finding lives in code, which app it affects and who should own it.",
      "Ad-hoc ticket queues that are hard to audit or report on.",
    ],
  },
  {
    id: "asset-views",
    label: "Assets",
    title: "Pivot into asset-centric views",
    summary:
      "From any Signal, you can pivot into an asset view to understand risk by app, API, mobile app, codebase or host.",
    primaryTitle: "For each asset you can see",
    primaryPoints: [
      "Open, in-triage and closed Signals over time, not just point-in-time scans.",
      "Which scanners, pentests and monitors are covering the asset.",
      "Linked endpoints, repositories and owners so there is no ambiguity on who should act.",
    ],
    secondaryTitle: "Surfaces, not silos",
    secondaryPoints: [
      "Web apps and internal portals.",
      "Public and internal APIs.",
      "Mobile applications.",
      "Services, code and repositories.",
      "Cloud and network locations.",
    ],
  },
  {
    id: "lifecycle",
    label: "Lifecycle",
    title: "Model the lifecycle of every finding",
    summary:
      "The workspace is built around the lifecycle of a Signal: detection, triage, mitigation, verification, closure.",
    primaryTitle: "Lifecycle inside seqrity.ai",
    primaryPoints: [
      "Configurable states, for example: New → In triage → In progress → Mitigated → Verified closed.",
      "Assignments, reviewers and watchers so the right people stay in the loop.",
      "SLA policies by severity and asset type, with approaching‑breach views for AppSec and Eng leaders.",
      "Comments and activity history to keep audit trails in one place.",
    ],
    secondaryTitle: "Example workflows",
    secondaryPoints: [
      "Auto‑assign new Signals on critical payment services to a specific squad.",
      "Require a reviewer for Signals marked as “risk accepted”.",
      "Sync state with tickets in your issue tracker without losing the application context.",
    ],
  },
  {
    id: "marketplace",
    label: "Marketplace",
    title: "Extend with Marketplace and automations",
    summary:
      "Connect scanners, ticketing systems, messaging tools and custom workflows without building glue code for each team.",
    primaryTitle: "What you configure",
    primaryPoints: [
      "Integrations for scanners, CSPM, code hosts and CI/CD pipelines.",
      "“Recipes” that create tickets, mention owners or trigger runbooks when new Signals arrive.",
      "Automation blocks that verify fixes or re‑open Signals when an issue reappears.",
    ],
    secondaryTitle: "How it feels in the UI",
    secondaryPoints: [
      "Turn integrations on from a Marketplace‑style catalog.",
      "Compose automations from small, understandable building blocks.",
      "Preview how a new recipe will behave before enabling it for a workspace.",
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    title: "See posture and SLAs in one analytics layer",
    summary:
      "On top of Signals and workflows, seqrity.ai provides exec‑ready analytics for AppSec, DevSecOps and engineering leadership.",
    primaryTitle: "Analytics views",
    primaryPoints: [
      "Severity heatmaps: Info, Low, Medium, High and Critical across workspaces and assets.",
      "MTTR trends by severity and asset type so you can prove improvements over time.",
      "Executive summaries that roll posture, coverage and lifecycle into a single view.",
    ],
    secondaryTitle: "Who uses these views",
    secondaryPoints: [
      "AppSec teams tracking remediation performance.",
      "Platform and DevSecOps teams proving the impact of guardrails.",
      "Engineering and security leaders preparing board‑ and customer‑ready summaries.",
    ],
  },
];

const stepCardVariants = {
  initial: { opacity: 0, y: 16, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.25, ease: [0.21, 0.79, 0.29, 0.99] },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.98,
    transition: { duration: 0.18, ease: [0.21, 0.79, 0.29, 0.99] },
  },
};

export default function TourPage() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const activeStep = TOUR_STEPS[activeIndex];
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === TOUR_STEPS.length - 1;

  function goToStep(index: number) {
    setActiveIndex(index);
  }

  function handleNext() {
    if (!isLast) {
      setActiveIndex((prev) => Math.min(prev + 1, TOUR_STEPS.length - 1));
    }
  }

  function handlePrev() {
    if (!isFirst) {
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }
  }

  return (
    <>
      <SiteHeader />
      <main className="app-page">
        <section className="section" aria-labelledby="tour-heading">
          <div className="app-container max-w-5xl">
            <SectionHeader
              align="left"
              eyebrow="Interactive tour"
              title="Guided walkthrough of the seqrity.ai Signals workspace"
              description="Click through each step to see how seqrity.ai turns noisy scanner outputs into a single Signal feed, asset-aware views and workflows your security and engineering teams can use every day."
              className="mb-6 sm:mb-8"
            />

            <div className="glass-panel px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-7 space-y-6 sm:space-y-7 text-sm text-slate-200">
              {/* Stepper header */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {TOUR_STEPS.map((step, index) => {
                      const isActive = index === activeIndex;
                      return (
                        <button
                          key={step.id}
                          type="button"
                          onClick={() => goToStep(index)}
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[0.7rem] transition-colors",
                            isActive
                              ? "border-primary/80 bg-primary/10 text-primary-100 shadow-[0_0_0_1px_rgba(129,140,248,0.35)]"
                              : "border-slate-700/70 bg-slate-900/80 text-slate-300 hover:border-primary/60 hover:text-slate-50"
                          )}
                          aria-current={isActive ? "step" : undefined}
                        >
                          <span className="numeric text-[0.65rem] uppercase tracking-[0.18em]">
                            {index + 1 < 10
                              ? `0${index + 1}`
                              : index + 1}
                          </span>
                          <span>{step.label}</span>
                        </button>
                      );
                    })}
                  </div>
                  <span className="numeric text-[0.7rem] text-slate-400">
                    Step {activeIndex + 1} of {TOUR_STEPS.length}
                  </span>
                </div>

                <div className="h-1 w-full rounded-full bg-slate-900/80 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300"
                    style={{
                      width: `${
                        ((activeIndex + 1) / TOUR_STEPS.length) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>

              {/* Active step content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.id}
                  variants={stepCardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="grid gap-5 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
                >
                  <div className="space-y-3">
                    <div>
                      <p className="text-[0.75rem] uppercase tracking-[0.18em] text-slate-400 numeric">
                        Step {activeIndex + 1} · {activeStep.label}
                      </p>
                      <h2 className="mt-1 text-base font-semibold text-slate-50">
                        {activeStep.title}
                      </h2>
                      <p className="mt-1.5 text-slate-300">
                        {activeStep.summary}
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-800/80 bg-slate-950/90 p-4">
                      <p className="text-[0.8rem] uppercase tracking-[0.18em] text-slate-400 numeric">
                        {activeStep.primaryTitle}
                      </p>
                      <ul className="mt-2 space-y-1.5 text-slate-300">
                        {activeStep.primaryPoints.map((point) => (
                          <li key={point}>• {point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-xl border border-slate-800/80 bg-slate-950/90 p-4">
                      <p className="text-[0.8rem] uppercase tracking-[0.18em] text-slate-400 numeric">
                        How it looks in the app
                      </p>
                      <p className="mt-2 text-[0.78rem] text-slate-300">
                        This card represents the part of the seqrity.ai
                        workspace you would be looking at for this step. In the
                        live product, this would be a real, interactive view
                        you can filter, search and drill into.
                      </p>
                      <div className="mt-3 rounded-lg border border-slate-800/80 bg-slate-900/90 p-3 text-[0.7rem]">
                        {activeStep.id === "signals-feed" && (
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-slate-300">
                              <span className="numeric uppercase tracking-[0.18em] text-[0.65rem]">
                                Signals feed
                              </span>
                              <span className="numeric text-[0.65rem] text-slate-400">
                                Critical 18 · High 42
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1.5 text-[0.6rem]">
                              {[
                                "All surfaces",
                                "Critical & High",
                                "SLA & breach",
                                "Unassigned",
                              ].map((chip, idx) => (
                                <span
                                  key={chip}
                                  className={cn(
                                    "inline-flex items-center gap-1 rounded-full border border-slate-700/70 bg-slate-950/80 px-2 py-1 text-slate-200",
                                    idx === 1 &&
                                      "border-primary/80 bg-primary/10"
                                  )}
                                >
                                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                  <span className="numeric">{chip}</span>
                                </span>
                              ))}
                            </div>
                            <div className="mt-2 space-y-1.5">
                              {[
                                "Privileged access from unknown workstation",
                                "Public S3 bucket with PII discovered",
                                "Unpatched critical vuln in payment service",
                              ].map((row, idx) => (
                                <div
                                  key={row}
                                  className={cn(
                                    "flex items-start gap-2 rounded-lg border pl-2.5 pr-3 py-2 bg-slate-900/90 text-[0.68rem]",
                                    idx === 0 &&
                                      "border-rose-500/60 bg-gradient-to-r from-rose-500/10 via-rose-500/5 to-transparent",
                                    idx === 1 &&
                                      "border-amber-400/70 bg-gradient-to-r from-amber-400/10 via-amber-400/5 to-transparent",
                                    idx === 2 &&
                                      "border-sky-400/70 bg-gradient-to-r from-sky-400/10 via-sky-400/5 to-transparent"
                                  )}
                                >
                                  <span className="mt-[4px] h-2 w-2 rounded-full bg-gradient-to-br from-primary to-secondary" />
                                  <span className="flex-1 text-slate-100">
                                    {row}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {activeStep.id === "asset-views" && (
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-slate-300">
                              <span className="numeric text-[0.65rem] uppercase tracking-[0.18em]">
                                Asset · Payments API
                              </span>
                              <span className="text-[0.65rem] text-slate-400">
                                6 Signals · 3 scanners
                              </span>
                            </div>
                            <div className="mt-1 grid grid-cols-2 gap-2 text-[0.65rem]">
                              <div className="rounded-md bg-slate-900/90 p-2">
                                <p className="numeric text-slate-400">
                                  Signals by state
                                </p>
                                <div className="mt-1 h-1.5 w-full rounded-full bg-slate-950 overflow-hidden">
                                  <div className="h-full w-[50%] bg-emerald-400/80" />
                                </div>
                              </div>
                              <div className="rounded-md bg-slate-900/90 p-2">
                                <p className="numeric text-slate-400">
                                  Coverage
                                </p>
                                <ul className="mt-1 space-y-0.5">
                                  <li className="flex items-center justify-between">
                                    <span>SAST</span>
                                    <span className="numeric text-emerald-400">
                                      On
                                    </span>
                                  </li>
                                  <li className="flex items-center justify-between">
                                    <span>DAST</span>
                                    <span className="numeric text-emerald-400">
                                      On
                                    </span>
                                  </li>
                                  <li className="flex items-center justify-between">
                                    <span>CSPM</span>
                                    <span className="numeric text-amber-300">
                                      Partial
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}

                        {activeStep.id === "lifecycle" && (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-[0.65rem] text-slate-300">
                              <span className="numeric uppercase tracking-[0.18em]">
                                Signal lifecycle
                              </span>
                              <span className="numeric text-slate-400">
                                SLA: 5 days · 2 elapsed
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1.5 text-[0.65rem]">
                              {[
                                "New",
                                "In triage",
                                "In progress",
                                "Mitigated",
                                "Verified closed",
                              ].map((state, idx) => (
                                <span
                                  key={state}
                                  className={cn(
                                    "inline-flex items-center gap-1 rounded-full border px-2 py-1",
                                    idx <= 2
                                      ? "border-primary/60 bg-primary/10 text-primary-100"
                                      : "border-slate-700/70 bg-slate-900/80 text-slate-300"
                                  )}
                                >
                                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                  <span className="numeric">{state}</span>
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {activeStep.id === "marketplace" && (
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-[0.65rem] text-slate-300">
                              <span className="numeric uppercase tracking-[0.18em]">
                                Marketplace
                              </span>
                              <span className="numeric text-slate-400">
                                12 integrations
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-1.5 text-[0.65rem]">
                              {[
                                "SAST connector",
                                "DAST connector",
                                "CSPM",
                                "Issue tracker",
                                "Chat alerts",
                                "Custom webhook",
                              ].map((item) => (
                                <div
                                  key={item}
                                  className="rounded-md bg-slate-900/90 px-2 py-1.5"
                                >
                                  <span className="text-slate-200">
                                    {item}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {activeStep.id === "analytics" && (
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-[0.65rem] text-slate-300">
                              <span className="numeric uppercase tracking-[0.18em]">
                                Analytics overview
                              </span>
                              <span className="numeric text-slate-400">
                                Last 30 days
                              </span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-[0.65rem]">
                              <div className="rounded-md bg-slate-900/90 p-2">
                                <p className="numeric text-slate-400">
                                  Severity mix
                                </p>
                                <div className="mt-1 h-10 w-full rounded-md bg-[conic-gradient(from_210deg,_#22c55e_0deg,_#22c55e_220deg,_#f97316_220deg,_#f97316_280deg,_#ef4444_280deg,_#ef4444_360deg)]" />
                              </div>
                              <div className="rounded-md bg-slate-900/90 p-2">
                                <p className="numeric text-slate-400">
                                  MTTR (High)
                                </p>
                                <p className="mt-1 text-slate-100">3.2 days</p>
                              </div>
                              <div className="rounded-md bg-slate-900/90 p-2">
                                <p className="numeric text-slate-400">
                                  Exec views
                                </p>
                                <p className="mt-1 text-slate-100">4 boards</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {activeStep.secondaryTitle &&
                      activeStep.secondaryPoints && (
                        <div className="rounded-xl border border-slate-800/80 bg-slate-950/90 p-4">
                          <p className="text-[0.8rem] uppercase tracking-[0.18em] text-slate-400 numeric">
                            {activeStep.secondaryTitle}
                          </p>
                          <ul className="mt-2 space-y-1.5 text-slate-300">
                            {activeStep.secondaryPoints.map((point) => (
                              <li key={point}>• {point}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Step controls */}
              <div className="flex flex-col gap-3 border-t border-slate-800/70 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-[0.75rem] text-slate-400">
                  <span className="numeric rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-1">
                    {activeIndex + 1}/{TOUR_STEPS.length}
                  </span>
                  <span>
                    {isLast
                      ? "You’ve reached the end of the tour. You can revisit any step from the row above."
                      : "Use Next or click any step pill above to jump around the tour."}
                  </span>
                </div>
                <div className="flex items-center gap-2 justify-end">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="gap-1.5"
                    onClick={handlePrev}
                    disabled={isFirst}
                  >
                    <span className="numeric">Previous</span>
                  </Button>
                  <Button
                    size="sm"
                    className="gap-1.5"
                    onClick={handleNext}
                    disabled={isLast}
                  >
                    <span className="numeric">
                      {isLast ? "Done" : "Next step"}
                    </span>
                  </Button>
                </div>
              </div>

              <p className="text-[0.7rem] text-slate-500 border-t border-slate-800/70 pt-4">
                This interactive tour describes an illustrative version of the
                seqrity.ai workspace to help you understand how a unified
                Signals feed, asset views, workflows, automations and analytics
                could fit into your application security program.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
