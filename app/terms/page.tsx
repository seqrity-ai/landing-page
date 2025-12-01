"use client";

import * as React from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeader } from "@/components/section-header";

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="app-page">
        <section className="section" aria-labelledby="terms-heading">
          <div className="app-container max-w-4xl">
            <SectionHeader
              align="left"
              eyebrow="Terms of use"
              title="Illustrative terms for using seqrity.ai"
              description="These Terms of Use describe, at a high level, how organizations might be permitted to use a platform like seqrity.ai for unified application security operations."
              className="mb-10"
            />

            <div className="glass-panel px-5 py-6 sm:px-8 sm:py-8 space-y-8 text-sm text-slate-200">
              <section aria-labelledby="agreement-heading">
                <h2
                  id="agreement-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  1. Agreement and scope
                </h2>
                <p className="mt-2 text-slate-300">
                  By accessing or using seqrity.ai, an organization agrees that
                  its use of the service will be governed by a written
                  agreement with seqrity.ai (for example, an Order Form and
                  Master Subscription Agreement) together with any applicable
                  Data Processing Addendum and these Terms of Use. In the event
                  of conflict, the executed agreement between seqrity.ai and the
                  customer typically takes precedence.
                </p>
              </section>

              <section aria-labelledby="eligibility-heading">
                <h2
                  id="eligibility-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  2. Eligibility and accounts
                </h2>
                <ul className="mt-2 space-y-1.5 text-slate-300">
                  <li>
                    • The service is intended for use by organizations, not
                    consumers or individuals in a personal capacity.
                  </li>
                  <li>
                    • Customers are responsible for the actions of users they
                    invite to their workspaces, including contractors and
                    administrators.
                  </li>
                  <li>
                    • Customers must ensure that account credentials, API
                    tokens and SSO integrations are configured and used
                    securely.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="license-heading">
                <h2
                  id="license-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  3. License and permitted use
                </h2>
                <p className="mt-2 text-slate-300">
                  Subject to payment of applicable fees and compliance with the
                  agreement, seqrity.ai grants customers a limited,
                  non-exclusive, non-transferable right to use the service for
                  their internal business purposes related to application
                  security and DevSecOps operations.
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>
                    • Customers may connect supported scanners, CI/CD systems,
                    cloud accounts and ticketing tools in line with
                    documentation.
                  </li>
                  <li>
                    • Use is limited to the number of workspaces, seats and
                    volumes defined in the applicable Order Form.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="prohibited-heading">
                <h2
                  id="prohibited-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  4. Prohibited activities
                </h2>
                <p className="mt-2 text-slate-300">
                  Customers agree not to misuse the service. Examples of
                  prohibited activity for an application security operations
                  platform include:
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>
                    • Attempting to gain unauthorized access to other customers'
                    workspaces or underlying infrastructure.
                  </li>
                  <li>
                    • Using the platform to store or transmit unlawful content
                    or content that infringes third‑party rights.
                  </li>
                  <li>
                    • Intentionally introducing malicious code or attempting to
                    circumvent technical controls.
                  </li>
                  <li>
                    • Using the service for high‑risk activities not agreed with
                    seqrity.ai (for example, life‑critical systems).
                  </li>
                </ul>
                <p className="mt-3 text-slate-300">
                  Additional examples of prohibited behavior are described on
                  the Acceptable Use page.
                </p>
              </section>

              <section aria-labelledby="customer-obligations-heading">
                <h2
                  id="customer-obligations-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  5. Customer obligations
                </h2>
                <ul className="mt-2 space-y-1.5 text-slate-300">
                  <li>
                    • Configure roles, permissions and workspaces in line with
                    internal policies and the principle of least privilege.
                  </li>
                  <li>
                    • Ensure that data sent to the platform is accurate and
                    necessary for the agreed purposes.
                  </li>
                  <li>
                    • Maintain appropriate backup, export and business
                    continuity strategies for their own obligations.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="warranty-heading">
                <h2
                  id="warranty-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  6. Disclaimers and limitation of liability
                </h2>
                <p className="mt-2 text-slate-300">
                  seqrity.ai is provided as an application security operations
                  tool and does not replace an organization's own security
                  program, risk assessments or regulatory obligations. Platform
                  findings and analytics should be interpreted by qualified
                  personnel.
                </p>
                <p className="mt-3 text-slate-300">
                  Any limitations of liability, exclusions and specific remedies
                  will be set out in the executed agreement between seqrity.ai
                  and each customer and may differ by jurisdiction.
                </p>
              </section>

              <section aria-labelledby="changes-heading">
                <h2
                  id="changes-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  7. Changes to the service and terms
                </h2>
                <p className="mt-2 text-slate-300">
                  seqrity.ai may evolve over time as new capabilities,
                  integrations and security features are introduced. Where
                  required by contract, customers will be notified of material
                  changes to the service or terms.
                </p>
              </section>

              <section aria-labelledby="law-heading">
                <h2
                  id="law-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  8. Governing law and disputes
                </h2>
                <p className="mt-2 text-slate-300">
                  Governing law, jurisdiction and dispute resolution mechanisms
                  for use of seqrity.ai are defined in the underlying agreement
                  between seqrity.ai and each customer and may vary depending on
                  region and contracting entity.
                </p>
              </section>

              <p className="text-[0.7rem] text-slate-500 border-t border-slate-800/70 pt-4">
                These Terms of Use are illustrative marketing copy for
                seqrity.ai and do not create legal rights or obligations. Any
                production deployment should be covered by executed agreements,
                including commercial terms, a Data Processing Addendum and
                jurisdiction‑specific provisions agreed between seqrity.ai and
                the customer.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
