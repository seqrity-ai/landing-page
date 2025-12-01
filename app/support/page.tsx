"use client";

import * as React from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/ui/button";
import { useToast } from "@/components/toast-provider";

export default function SupportPage() {
  const { showToast } = useToast();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    form.reset();

    showToast({
      title: "Support request received",
      description:
        "Thanks for contacting seqrity.ai support. We’ve logged your request and will get back to you shortly.",
    });
  }

  return (
    <>
      <SiteHeader />
      <main className="app-page">
        <section
          className="section"
          aria-labelledby="support-complaints-heading"
        >
          <div className="app-container max-w-3xl">
            <SectionHeader
              align="left"
              eyebrow="Support & complaints"
              title="Help for customers and workspace owners"
              description="Use this form to raise issues with your seqrity.ai workspace, submit a complaint or request help operating the platform."
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
                      htmlFor="workspace"
                      className="text-xs font-medium text-slate-200"
                    >
                      Workspace name / ID
                    </label>
                    <input
                      id="workspace"
                      name="workspace"
                      required
                      className="h-9 w-full rounded-md border border-slate-700/70 bg-slate-950/70 px-3 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary/70"
                      placeholder="acme-prod, acme-security, etc."
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="category"
                      className="text-xs font-medium text-slate-200"
                    >
                      Request type
                    </label>
                    <select
                      id="category"
                      name="category"
                      className="h-9 w-full rounded-md border border-slate-700/70 bg-slate-950/70 px-3 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary/70"
                      defaultValue="issue"
                    >
                      <option value="issue">Operational issue / incident</option>
                      <option value="access">Access / permissions</option>
                      <option value="billing">Billing / subscription</option>
                      <option value="complaint">Complaint / concern</option>
                      <option value="question">How-to question</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="severity"
                      className="text-xs font-medium text-slate-200"
                    >
                      Impact
                    </label>
                    <select
                      id="severity"
                      name="severity"
                      className="h-9 w-full rounded-md border border-slate-700/70 bg-slate-950/70 px-3 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary/70"
                      defaultValue="medium"
                    >
                      <option value="critical">
                        Critical – production system unavailable
                      </option>
                      <option value="high">
                        High – major functionality impaired
                      </option>
                      <option value="medium">
                        Medium – degraded experience
                      </option>
                      <option value="low">
                        Low – question / minor issue
                      </option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="preferred-channel"
                      className="text-xs font-medium text-slate-200"
                    >
                      Preferred contact channel
                    </label>
                    <select
                      id="preferred-channel"
                      name="preferredChannel"
                      className="h-9 w-full rounded-md border border-slate-700/70 bg-slate-950/70 px-3 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary/70"
                      defaultValue="email"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone (if provided below)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="details"
                    className="text-xs font-medium text-slate-200"
                  >
                    Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    required
                    rows={4}
                    className="w-full rounded-md border border-slate-700/70 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary/70"
                    placeholder="Describe what’s happening, when it started and any error messages or Signals involved."
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="callback"
                    className="text-xs font-medium text-slate-200"
                  >
                    Optional phone / callback details
                  </label>
                  <input
                    id="callback"
                    name="callback"
                    className="h-9 w-full rounded-md border border-slate-700/70 bg-slate-950/70 px-3 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary/70"
                    placeholder="+1 555 0100 123 – include country code and availability window"
                  />
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between pt-2">
                  <p className="text-[0.7rem] text-slate-400 max-w-sm">
                    Please avoid including secrets, passwords or full payloads in
                    this form. If we need additional diagnostic data we will
                    coordinate a secure channel with you.
                  </p>
                  <Button type="submit" size="sm" className="mt-2 sm:mt-0">
                    Submit support request
                  </Button>
                </div>
              </form>

              <div className="grid gap-4 border-t border-slate-800/60 pt-4 text-xs text-slate-300 sm:grid-cols-3">
                <div>
                  <div className="font-semibold text-slate-100">
                    Incident response
                  </div>
                  <p className="text-slate-400">
                    For potential security incidents involving seqrity.ai
                    itself, please follow the instructions on the Security page
                    for our incident contact path.
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-slate-100">
                    Complaints process
                  </div>
                  <p className="text-slate-400">
                    Use the "Complaint / concern" type if you want to
                    formally raise an issue with our service. We track these
                    separately for governance and quality reviews.
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-slate-100">
                    Workspace admins
                  </div>
                  <p className="text-slate-400">
                    If you are a workspace admin, you can also review audit logs
                    and configuration within the product to help triage
                    operational issues.
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
