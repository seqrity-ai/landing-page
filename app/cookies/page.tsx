"use client";

import * as React from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeader } from "@/components/section-header";

export default function CookiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="app-page">
        <section className="section" aria-labelledby="cookies-heading">
          <div className="app-container max-w-4xl">
            <SectionHeader
              align="left"
              eyebrow="Cookies"
              title="How seqrity.ai uses cookies and similar technologies"
              description="This page describes, at a high level, how a platform like seqrity.ai may use cookies and similar technologies in connection with its services."
              className="mb-10"
            />

            <div className="glass-panel px-5 py-6 sm:px-8 sm:py-8 space-y-8 text-sm text-slate-200">
              <section aria-labelledby="cookies-overview-heading">
                <h2
                  id="cookies-overview-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Overview
                </h2>
                <p className="mt-2 text-slate-300">
                  seqrity.ai primarily operates as a B2B platform for
                  application security and DevSecOps teams. Within the
                  authenticated product, cookies and similar technologies are
                  generally used to provide secure access, remember preferences
                  and support core functionality rather than for broad
                  advertising purposes.
                </p>
              </section>

              <section aria-labelledby="types-heading">
                <h2
                  id="types-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Types of cookies and similar technologies
                </h2>
                <p className="mt-2 text-slate-300">
                  The specific technologies used may change over time. Typical
                  categories for a security-focused SaaS platform include:
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>
                    •{" "}
                    <span className="font-medium">
                      Strictly necessary cookies
                    </span>{" "}
                    – required to sign in, route traffic and keep sessions
                    secure.
                  </li>
                  <li>
                    •{" "}
                    <span className="font-medium">
                      Preference or functional cookies
                    </span>{" "}
                    – used to remember workspace, language or UI settings.
                  </li>
                  <li>
                    •{" "}
                    <span className="font-medium">
                      Security and performance cookies
                    </span>{" "}
                    – may help detect abuse, understand error rates or balance
                    load.
                  </li>
                  <li>
                    •{" "}
                    <span className="font-medium">Analytics tools</span> – used
                    in some contexts to understand feature adoption and improve
                    the product, in a way consistent with customer agreements
                    and applicable law.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="product-vs-marketing-heading">
                <h2
                  id="product-vs-marketing-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Product cookies vs. marketing properties
                </h2>
                <p className="mt-2 text-slate-300">
                  Different properties associated with seqrity.ai may use
                  different technologies:
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>
                    • The{" "}
                    <span className="font-medium">
                      authenticated product
                    </span>{" "}
                    typically focuses on cookies that are necessary for
                    security, reliability and configuration.
                  </li>
                  <li>
                    • Public{" "}
                    <span className="font-medium">marketing websites</span>{" "}
                    may use additional analytics or campaign tools to understand
                    interest in seqrity.ai, subject to regional cookie and
                    privacy rules.
                  </li>
                </ul>
                <p className="mt-3 text-slate-300">
                  Any production deployment should document these differences
                  clearly, including where consent mechanisms are required.
                </p>
              </section>

              <section aria-labelledby="control-heading">
                <h2
                  id="control-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  How customers and users can control cookies
                </h2>
                <p className="mt-2 text-slate-300">
                  In a production environment, customers and users may have
                  several options to control or limit cookies:
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>
                    • Browser settings that block or delete cookies, subject to
                    the trade‑off that core functionality may no longer work.
                  </li>
                  <li>
                    • In‑product or on‑site controls (where implemented) that
                    allow selection of certain analytics or preference
                    categories.
                  </li>
                  <li>
                    • Workspace‑level configuration and contractual choices
                    about analytics and telemetry.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="relationship-heading">
                <h2
                  id="relationship-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Relationship to privacy and security
                </h2>
                <p className="mt-2 text-slate-300">
                  The way seqrity.ai uses cookies and similar technologies forms
                  part of its broader privacy and security posture. For more
                  context on how data is handled overall, see the Privacy and
                  Security & Trust pages.
                </p>
              </section>

              <p className="text-[0.7rem] text-slate-500 border-t border-slate-800/70 pt-4">
                This Cookies overview is illustrative marketing copy for
                seqrity.ai and does not replace a detailed cookie notice or
                consent mechanism. Any production deployment should be reviewed
                with legal and privacy counsel to ensure compliance with
                applicable e‑privacy and data protection laws.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
