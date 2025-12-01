"use client";

import * as React from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/ui/button";
import { useToast } from "@/components/toast-provider";

export default function ContactPage() {
  const { showToast } = useToast();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    form.reset();

    showToast({
      title: "Request received",
      description:
        "Thanks for reaching out to seqrity.ai. We’ve logged your message and will get back to you shortly.",
    });
  }

  return (
    <>
      <SiteHeader />
      <main className="app-page">
        <section className="section" aria-labelledby="contact-heading">
          <div className="app-container max-w-3xl">
            <SectionHeader
              align="left"
              eyebrow="Contact seqrity.ai"
              title="Talk to the team behind your Signals"
              description="Use this form for general enquiries about seqrity.ai. For sales, support or security-related topics, you can also use the dedicated flows below."
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
                      className="h-9 w-full rounded-md border border-slate-700/70 bg-slate-950/70 px-3 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary/70"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="topic"
                      className="text-xs font-medium text-slate-200"
                    >
                      Topic
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      className="h-9 w-full rounded-md border border-slate-700/70 bg-slate-950/70 px-3 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary/70"
                      defaultValue="general"
                    >
                      <option value="general">General question</option>
                      <option value="sales">Sales / pricing</option>
                      <option value="support">Support / issue</option>
                      <option value="security">Security / trust</option>
                      <option value="privacy">Privacy / data protection</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium text-slate-200"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full rounded-md border border-slate-700/70 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary/70"
                    placeholder="Share a bit of context so we can route your request to the right team."
                  />
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between pt-2">
                  <p className="text-[0.7rem] text-slate-400 max-w-sm">
                    By submitting this form you acknowledge that seqrity.ai may
                    contact you about your request. For details, see our Privacy
                    Policy and Data Processing Addendum.
                  </p>
                  <Button type="submit" size="sm" className="mt-2 sm:mt-0">
                    Submit message
                  </Button>
                </div>
              </form>

              <div className="grid gap-4 border-t border-slate-800/60 pt-4 text-xs text-slate-300 sm:grid-cols-3">
                <div>
                  <div className="font-semibold text-slate-100">
                    Sales & partnerships
                  </div>
                  <p className="text-slate-400">
                    Evaluating seqrity.ai for your organization? Use the Contact
                    Sales page for a more tailored flow.
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-slate-100">
                    Support & complaints
                  </div>
                  <p className="text-slate-400">
                    Existing customers with workspace access can raise
                    operational issues or complaints via the Support form.
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-slate-100">
                    Security & privacy
                  </div>
                  <p className="text-slate-400">
                    For security incidents, vulnerability reports or privacy
                    rights requests, see the Security & Privacy sections on
                    this site.
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
