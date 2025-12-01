"use client";

import * as React from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeader } from "@/components/section-header";

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="app-page">
        <section className="section" aria-labelledby="privacy-heading">
          <div className="app-container max-w-4xl">
            <SectionHeader
              align="left"
              eyebrow="Privacy"
              title="How seqrity.ai handles personal data"
              description="This page describes, at a high level, how a platform like seqrity.ai may handle personal data in the context of unified application security operations."
              className="mb-10"
            />

            <div className="glass-panel px-5 py-6 sm:px-8 sm:py-8 space-y-8 text-sm text-slate-200">
              <section aria-labelledby="scope-heading">
                <h2
                  id="scope-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Scope of this overview
                </h2>
                <p className="mt-2 text-slate-300">
                  seqrity.ai is designed as a B2B platform used by organizations
                  to manage application security Signals. In most cases,
                  seqrity.ai acts as a processor (or service provider) on behalf
                  of its customers, who remain controllers of their own data.
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>
                    • Applies to use of seqrity.ai by customer organizations and
                    their authorized users.
                  </li>
                  <li>
                    • Focuses on platform-related data; other websites or
                    marketing properties may have separate notices.
                  </li>
                  <li>
                    • Intended as illustrative content rather than a complete
                    privacy policy.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="data-categories-heading">
                <h2
                  id="data-categories-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Categories of data processed
                </h2>
                <p className="mt-2 text-slate-300">
                  The specific data processed in seqrity.ai depends on how each
                  customer configures and uses the platform. Typical categories
                  for an application security operations tool include:
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>
                    •{" "}
                    <span className="font-medium">
                      Account and workspace data
                    </span>{" "}
                    – names, work email addresses, roles and workspace metadata.
                  </li>
                  <li>
                    •{" "}
                    <span className="font-medium">
                      Authentication & access data
                    </span>{" "}
                    – identifiers required to manage login, SSO and access
                    controls.
                  </li>
                  <li>
                    •{" "}
                    <span className="font-medium">
                      Operational telemetry
                    </span>{" "}
                    – audit logs, configuration changes, Signal lifecycle
                    updates and workflow activity.
                  </li>
                  <li>
                    •{" "}
                    <span className="font-medium">
                      Integration metadata
                    </span>{" "}
                    – limited information necessary to connect to scanners,
                    ticketing tools and CI/CD systems.
                  </li>
                </ul>
                <p className="mt-3 text-slate-300">
                  Customers should avoid sending sensitive personal data to the
                  platform unless this is explicitly covered by agreement and
                  necessary for the intended use.
                </p>
              </section>

              <section aria-labelledby="use-of-data-heading">
                <h2
                  id="use-of-data-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  How data is used
                </h2>
                <p className="mt-2 text-slate-300">
                  seqrity.ai processes personal data primarily to deliver and
                  secure the service, in line with customer instructions.
                  Illustrative purposes include:
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>
                    • Providing access to workspaces and Signals appropriate to
                    each user's role.
                  </li>
                  <li>
                    • Sending operational notifications about Signals, workflow
                    activity or platform changes.
                  </li>
                  <li>
                    • Maintaining audit logs and security telemetry to help
                    customers evidence activity.
                  </li>
                  <li>
                    • Operating, maintaining and improving the platform in line
                    with contractual terms.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="legal-basis-heading">
                <h2
                  id="legal-basis-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Legal basis & roles
                </h2>
                <p className="mt-2 text-slate-300">
                  Under frameworks such as the GDPR, seqrity.ai generally acts
                  as a processor or service provider to its customers.
                  Customers, as controllers, are responsible for establishing a
                  lawful basis for their use of the service.
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>
                    • Processing is typically based on{" "}
                    <span className="font-medium">
                      performance of a contract
                    </span>{" "}
                    with customer organizations.
                  </li>
                  <li>
                    • seqrity.ai may also process certain data to comply with{" "}
                    <span className="font-medium">legal obligations</span> or
                    pursue{" "}
                    <span className="font-medium">legitimate interests</span>{" "}
                    related to security and service reliability.
                  </li>
                  <li>
                    • Roles, responsibilities and data protection commitments
                    are set out in the applicable Data Processing Addendum and
                    customer agreement.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="transfers-heading">
                <h2
                  id="transfers-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  International transfers & sub‑processors
                </h2>
                <p className="mt-2 text-slate-300">
                  seqrity.ai may rely on cloud infrastructure and service
                  providers located in multiple regions. Customers can review
                  and negotiate specific data residency needs during the sales
                  and onboarding process.
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>
                    • Use of sub‑processors is governed by written agreements
                    with appropriate safeguards.
                  </li>
                  <li>
                    • Where applicable, standard contractual clauses or
                    equivalent transfer mechanisms are used for cross‑border
                    transfers.
                  </li>
                  <li>
                    • A current list of core sub‑processors is typically made
                    available through documentation or customer portals.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="rights-heading">
                <h2
                  id="rights-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Individual rights
                </h2>
                <p className="mt-2 text-slate-300">
                  Data protection laws may grant individuals certain rights
                  (such as access, correction or deletion). As a processor,
                  seqrity.ai generally acts on instructions from the customer
                  controlling the data.
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>
                    • Individuals should first contact the organization that
                    provided their data to seqrity.ai.
                  </li>
                  <li>
                    • Where required, seqrity.ai will reasonably support
                    customers in responding to rights requests.
                  </li>
                  <li>
                    • Additional information is normally documented in the Data
                    Processing Addendum and customer agreement.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="retention-heading">
                <h2
                  id="retention-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Retention
                </h2>
                <p className="mt-2 text-slate-300">
                  Data is retained for as long as necessary to provide the
                  service, comply with legal obligations and support customers'
                  security and audit needs, subject to configuration and
                  contractual terms.
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>
                    • Customers may configure certain retention settings (for
                    example, how long Signals or logs are kept).
                  </li>
                  <li>
                    • Backups and archives may contain data for additional
                    periods in line with disaster recovery practices.
                  </li>
                </ul>
              </section>

              <p className="text-[0.7rem] text-slate-500 border-t border-slate-800/70 pt-4">
                This Privacy overview is illustrative marketing copy for
                seqrity.ai and is not a full privacy policy or legal advice.
                Any production deployment should be accompanied by a
                jurisdiction‑specific privacy notice, a Data Processing
                Addendum and contractual terms agreed between seqrity.ai and
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
