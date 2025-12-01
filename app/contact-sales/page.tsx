"use client";

import * as React from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/ui/button";
import { useToast } from "@/components/toast-provider";

export default function ContactSalesPage() {
  const { showToast } = useToast();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    form.reset();

    showToast({
      title: "Sales request received",
      description:
        "Thanks for your interest in seqrity.ai. Our team will review your details and follow up with next steps shortly.",
    });
  }

  return (
    <>
      <SiteHeader />
      <main className="app-page">
        <section className="section" aria-labelledby="contact-sales-heading">
          <div className="app-container max-w-3xl">
            <SectionHeader
              align="left"
              eyebrow="Contact sales"
              title="Evaluate seqrity.ai for your security program"
              description="Share a bit about your environment so we can tailor a demo, pricing options and deployment guidance for your team."
              className="mb-10"
            />

            <div className="glass-panel px-5 py-6 sm:px-8 sm:py-8 space-y-6">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-medium text-slate-200"
                    >
                      Full name
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
                      Work email
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
                      Company
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
                      placeholder="CISO, Head of AppSec, Platform Lead…"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="company-size"
                      className="text-xs font-medium text-slate-200"
                    >
                      Company size
                    </label>
                    <select
                      id="company-size"
                      name="companySize"
                      className="h-9 w-full rounded-md border border-slate-700/70 bg-slate-950/70 px-3 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary/70"
                      defaultValue="50-250"
                    >
                      <option value="1-49">1–49</option>
                      <option value="50-250">50–250</option>
                      <option value="251-1000">251–1,000</option>
                      <option value="1001-5000">1,001–5,000</option>
                      <option value="5000+">5,000+</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="regions"
                      className="text-xs font-medium text-slate-200"
                    >
                      Primary regions
                    </label>
                    <select
                      id="regions"
                      name="regions"
                      multiple
                      className="min-h-[2.5rem] w-full rounded-md border border-slate-700/70 bg-slate-950/70 px-3 py-1.5 text-xs text-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary/70"
                    >
                      <option value="na">North America</option>
                      <option value="eu">Europe / UK</option>
                      <option value="apac">APAC</option>
                      <option value="latam">LATAM</option>
                      <option value="mea">Middle East & Africa</option>
                    </select>
                    <p className="text-[0.7rem] text-slate-500">
                      Helps us route you to the right regional team and discuss
                      data residency if relevant.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="security-focus"
                      className="text-xs font-medium text-slate-200"
                    >
                      Primary focus
                    </label>
                    <select
                      id="security-focus"
                      name="securityFocus"
                      className="h-9 w-full rounded-md border border-slate-700/70 bg-slate-950/70 px-3 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary/70"
                      defaultValue="appsec"
                    >
                      <option value="appsec">
                        Application security / product security
                      </option>
                      <option value="devsecops">DevSecOps / platform</option>
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
                      <option value="asap">ASAP (in active evaluation)</option>
                      <option value="30-60">30–60 days</option>
                      <option value="60-90">60–90 days</option>
                      <option value="90+">90+ days / exploratory</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="context"
                    className="text-xs font-medium text-slate-200"
                  >
                    What would you like to see in a session?
                  </label>
                  <textarea
                    id="context"
                    name="context"
                    required
                    rows={4}
                    className="w-full rounded-md border border-slate-700/70 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary/70"
                    placeholder="Share current tooling, key challenges and any specific workflows or integrations you care about."
                  />
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between pt-2">
                  <p className="text-[0.7rem] text-slate-400 max-w-sm">
                    We use this information to prepare a relevant demo and to
                    contact you about seqrity.ai. For how we handle your data,
                    see our Privacy Policy and Data Processing Addendum.
                  </p>
                  <Button type="submit" size="sm" className="mt-2 sm:mt-0">
                    Submit to sales
                  </Button>
                </div>
              </form>

              <div className="grid gap-4 border-t border-slate-800/60 pt-4 text-xs text-slate-300 sm:grid-cols-2">
                <div>
                  <div className="font-semibold text-slate-100">
                    Existing customers
                  </div>
                  <p className="text-slate-400">
                    If you already use seqrity.ai, you can also raise requests
                    via your workspace or through the Support & Complaints
                    form for operational issues.
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-slate-100">
                    Security & compliance teams
                  </div>
                  <p className="text-slate-400">
                    For security questionnaires, DPAs or procurement workflows,
                    you can reference the Security, Privacy and Data Processing
                    pages linked in the footer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
