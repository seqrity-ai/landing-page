"use client";

import * as React from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeader } from "@/components/section-header";

export default function AcceptableUsePage() {
  return (
    <>
      <SiteHeader />
      <main className="app-page">
        <section
          className="section"
          aria-labelledby="acceptable-use-heading"
        >
          <div className="app-container max-w-4xl">
            <SectionHeader
              align="left"
              eyebrow="Acceptable use"
              title="Acceptable Use Policy for seqrity.ai"
              description="This page provides an illustrative overview of how organizations and users are expected to use a platform like seqrity.ai responsibly."
              className="mb-10"
            />

            <div className="glass-panel px-5 py-6 sm:px-8 sm:py-8 space-y-8 text-sm text-slate-200">
              <section aria-labelledby="intent-heading">
                <h2
                  id="intent-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Purpose of this policy
                </h2>
                <p className="mt-2 text-slate-300">
                  seqrity.ai is intended to help organizations run unified,
                  governed application security operations. This Acceptable Use
                  Policy (AUP) describes behaviours that are consistent with
                  that purpose and outlines activities that are not permitted.
                </p>
                <p className="mt-3 text-slate-300">
                  This overview is not exhaustive; customers should apply their
                  own internal standards in addition to these principles.
                </p>
              </section>

              <section aria-labelledby="authorized-use-heading">
                <h2
                  id="authorized-use-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Authorized users and accounts
                </h2>
                <ul className="mt-2 space-y-1.5 text-slate-300">
                  <li>
                    • Only properly authorized employees, contractors and
                    service providers of a customer organization may access that
                    customer's workspaces.
                  </li>
                  <li>
                    • Users must not share passwords or use generic accounts
                    except where explicitly agreed and appropriately controlled.
                  </li>
                  <li>
                    • Customers should use SSO and role‑based access controls to
                    align seqrity.ai access with their internal policies.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="security-testing-heading">
                <h2
                  id="security-testing-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Security testing and automation
                </h2>
                <p className="mt-2 text-slate-300">
                  seqrity.ai is designed to centralize and orchestrate security
                  Signals from other systems. It is not intended to be used as a
                  target for unsanctioned penetration testing or hostile
                  activity.
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>
                    • Customers must not conduct penetration testing or load
                    testing of seqrity.ai infrastructure without prior written
                    approval.
                  </li>
                  <li>
                    • Automated usage (for example, API integrations or bots)
                    must respect documented rate limits and must not degrade the
                    service for other customers.
                  </li>
                  <li>
                    • Integrations should be configured using official APIs,
                    webhooks and connectors rather than scraping or reverse
                    engineering.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="prohibited-content-heading">
                <h2
                  id="prohibited-content-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Prohibited content and behaviour
                </h2>
                <p className="mt-2 text-slate-300">
                  Customers and users may not use seqrity.ai to store,
                  transmit or facilitate any of the following:
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>
                    • Unlawful content, including content that infringes
                    intellectual property rights or violates export controls.
                  </li>
                  <li>
                    • Harassing, discriminatory or abusive material directed at
                    individuals or groups.
                  </li>
                  <li>
                    • Malicious code or payloads except to the extent strictly
                    necessary for legitimate security testing workflows managed
                    by the customer.
                  </li>
                  <li>
                    • Personal data that is outside the scope of the customer's
                    agreement with seqrity.ai or internal policies.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="integrity-heading">
                <h2
                  id="integrity-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Protection of the service and other customers
                </h2>
                <p className="mt-2 text-slate-300">
                  Customers must not take actions that could compromise the
                  security, availability or integrity of seqrity.ai or other
                  customers' data.
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>
                    • No attempts to bypass authentication, authorization or
                    isolation controls.
                  </li>
                  <li>
                    • No interference with or disruption of the infrastructure,
                    including attempts to overwhelm systems with traffic.
                  </li>
                  <li>
                    • No use of seqrity.ai to build a competing service by
                    systematically copying features, workflows or data in breach
                    of contract.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="reporting-heading">
                <h2
                  id="reporting-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Reporting concerns or violations
                </h2>
                <p className="mt-2 text-slate-300">
                  If you believe this Acceptable Use Policy has been violated,
                  or if you identify a potential security issue, seqrity.ai
                  encourages responsible reporting using the Security or Support
                  contact paths described elsewhere on this site.
                </p>
                <p className="mt-3 text-slate-300">
                  seqrity.ai may investigate suspected violations and, where
                  appropriate, suspend or limit access in order to protect the
                  platform and other customers.
                </p>
              </section>

              <section aria-labelledby="relationship-docs-heading">
                <h2
                  id="relationship-docs-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Relationship to other documents
                </h2>
                <p className="mt-2 text-slate-300">
                  This Acceptable Use overview should be read together with the
                  Terms of Use, Privacy, Security & Trust and Data
                  Processing pages. In case of conflict, the executed agreement
                  between seqrity.ai and each customer usually prevails.
                </p>
              </section>

              <p className="text-[0.7rem] text-slate-500 border-t border-slate-800/70 pt-4">
                This Acceptable Use Policy overview is illustrative marketing
                copy for seqrity.ai and does not create legal rights or
                obligations. Any production deployment should be supported by
                an executed agreement, a binding acceptable use policy and
                jurisdiction‑specific provisions agreed between seqrity.ai and
                each customer.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
