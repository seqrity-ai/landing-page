"use client";

import * as React from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/ui/button";
import { useToast } from "@/components/toast-provider";

export default function BookDemoPage() {
  const { showToast } = useToast();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    form.reset();

    showToast({
      title: "Demo request received",
      description:
        "Thanks for your interest in seqrity.ai. We\u2019ll review your details and follow up shortly to schedule a tailored demo.",
    });
  }

  return (
    <>
      <SiteHeader />
      <main className="app-page">
        <section className="section" aria-labelledby="book-demo-heading">
          <div className="app-container max-w-5xl">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
              {/* Left: pitch + expectations */}
              <div>
                <SectionHeader
                  align="left"
                  eyebrow="Book a live demo"
                  title="See seqrity.ai in the context of your own AppSec program"
                  description="Share a bit about your environment, and we\u2019ll tailor a walkthrough that focuses on your Signals, workflows and stakeholders \u2014 not a generic slide deck."
                  className="mb-8"
                />

                <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                  <div className="glass-panel border border-primary/25 bg-slate-950/80 px-4 py-4 space-y-3">
                    <div className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary/80">
                      What we\u2019ll cover
                    </div>
                    <ul className="space-y-2">
                      {[
                        "How Signals unify findings across SAST, DAST, cloud and pentests into one queue.",
                        "Asset-centric views across apps, APIs, mobile, code and infrastructure.",
                        "Workflow patterns for triage, assignment, SLAs and verification that match your team.",
                        "What rollout could look like for your org over the first 30, 60 and 90 days.",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 rounded-lg border border-slate-800/70 bg-slate-950/80 px-3 py-2"
                        >
                          <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                          <p>{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="glass-panel border border-slate-800/70 bg-slate-950/80 px-4 py-3">
                      <div className="text-[0.7rem] font-semibold text-slate-100">
                        Who it\u2019s for
                      </div>
                      <p className="mt-1 text-[0.7rem] text-slate-400">
                        AppSec, DevSecOps, platform, security operations and
                        engineering leaders evaluating how to run application
                        security as an ongoing operation.
                      </p>
                    </div>
                    <div className="glass-panel border border-slate-800/70 bg-slate-950/80 px-4 py-3">
                      <div className="text-[0.7rem] font-semibold text-slate-100">
                        What you\u2019ll leave with
                      </div>
                      <p className="mt-1 text-[0.7rem] text-slate-400">
                        A clear view of how seqrity.ai could plug into your
                        current stack, where Signals would come from, and what
                        day-to-day workflows could look like for your teams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: demo request form */}
              <div className="glass-panel px-5 py-6 sm:px-7 sm:py-7 space-y-5">
                <div className="space-y-1">
                  <h2
                    id="book-demo-heading"
                    className="text-sm font-semibold text-slate-100"
                  >
                    Tell us a bit about your team
                  </h2>
                  <p className="text-[0.7rem] text-slate-400">
                    The more context you share, the more tailored your session
                    will be. All fields marked with * are required.
                  </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-medium text-slate-200"
                      >
                        Full name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        className="h-9 w-full rounded-md border border-slate-700/70 bg-slate-950/70 px-3 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary/70"
                        placeholder="Alex Rivera"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-medium text-slate-200"
                      >
                        Work email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="h-9 w-full rounded-md border border-slate-700/70 bg-slate-950/70 px-3 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary/70"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="company"
                        className="text-xs font-medium text-slate-200"
                      >
                        Company *
                      </label>
                      <input
                        id="company"
                        name="company"
                        required
                        className="h-9 w-full rounded-md border border-slate-700/70 bg-slate-950/70 px-3 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary/70"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="role"
                        className="text-xs font-medium text-slate-200"
                      >
                        Role
                      </label>
                      <input
                        id="role"
                        name="role"
                        className="h-9 w-full rounded-md border border-slate-700/70 bg-slate-950/70 px-3 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary/70"
                        placeholder="CISO, Head of AppSec, Platform Lead\u2026"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="team-type"
                        className="text-xs font-medium text-slate-200"
                      >
                        Your team
                      </label>
                      <select
                        id="team-type"
                        name="teamType"
                        className="h-9 w-full rounded-md border border-slate-700/70 bg-slate-950/70 px-3 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary/70"
                        defaultValue="appsec"
                      >
                        <option value="appsec">
                          Application security / product security
                        </option>
                        <option value="devsecops">
                          DevSecOps / platform engineering
                        </option>
                        <option value="security-ops">
                          Security operations / SOC
                        </option>
                        <option value="eng-leadership">
                          Engineering leadership
                        </option>
                        <option value="compliance">
                          Compliance / risk & audit
                        </option>
                        <option value="mssp">MSSP / services provider</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="timeline"
                        className="text-xs font-medium text-slate-200"
                      >
                        Ideal timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        className="h-9 w-full rounded-md border border-slate-700/70 bg-slate-950/70 px-3 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary/70"
                        defaultValue="30-60"
                      >
                        <option value="asap">
                          ASAP (actively evaluating)
                        </option>
                        <option value="30-60">30\u201360 days</option>
                        <option value="60-90">60\u201390 days</option>
                        <option value="90+">90+ days / exploratory</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="stack"
                      className="text-xs font-medium text-slate-200"
                    >
                      Current tooling & surfaces
                    </label>
                    <textarea
                      id="stack"
                      name="stack"
                      rows={3}
                      className="w-full rounded-md border border-slate-700/70 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary/70"
                      placeholder="Share scanners (e.g., SAST/DAST/SCA), CI/CD, cloud providers and key app surfaces you care about."
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="focus-areas"
                      className="text-xs font-medium text-slate-200"
                    >
                      What should we focus on in the session? *
                    </label>
                    <textarea
                      id="focus-areas"
                      name="focusAreas"
                      rows={4}
                      required
                      className="w-full rounded-md border border-slate-700/70 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary/70"
                      placeholder="For example: unifying findings across tools, improving triage workflows, SLA reporting, or multi-tenant workspaces."
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="preferred-format"
                        className="text-xs font-medium text-slate-200"
                      >
                        Preferred format
                      </label>
                      <select
                        id="preferred-format"
                        name="preferredFormat"
                        className="h-9 w-full rounded-md border border-slate-700/70 bg-slate-950/70 px-3 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary/70"
                        defaultValue="live"
                      >
                        <option value="live">
                          Live product walkthrough (recommended)
                        </option>
                        <option value="deep-dive">
                          Deep-dive with your security & platform leads
                        </option>
                        <option value="exec">
                          Executive overview with posture & ROI focus
                        </option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="timezones"
                        className="text-xs font-medium text-slate-200"
                      >
                        Timezones & availability
                      </label>
                      <input
                        id="timezones"
                        name="timezones"
                        className="h-9 w-full rounded-md border border-slate-700/70 bg-slate-950/70 px-3 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary/70"
                        placeholder="E.g. PST mornings, CET afternoons"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between pt-2">
                    <p className="text-[0.7rem] text-slate-400 max-w-sm">
                      We\u2019ll only use these details to coordinate your demo
                      and follow up about seqrity.ai. For more, see our Privacy
                      Policy and Data Processing Addendum.
                    </p>
                    <Button type="submit" size="sm" className="mt-2 sm:mt-0">
                      Request demo
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
