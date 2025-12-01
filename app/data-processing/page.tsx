"use client";

import * as React from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeader } from "@/components/section-header";

export default function DataProcessingPage() {
  return (
    <>
      <SiteHeader />
      <main className="app-page">
        <section className="section" aria-labelledby="data-processing-heading">
          <div className="app-container max-w-4xl">
            <SectionHeader
              align="left"
              eyebrow="Data processing"
              title="Illustrative Data Processing Addendum (DPA) overview"
              description="This page summarizes, at a high level, how a platform like seqrity.ai may approach data processing commitments when acting as a processor or service provider."
              className="mb-10"
            />

            <div className="glass-panel px-5 py-6 sm:px-8 sm:py-8 space-y-8 text-sm text-slate-200">
              <section aria-labelledby="roles-heading">
                <h2
                  id="roles-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Roles of the parties
                </h2>
                <p className="mt-2 text-slate-300">
                  seqrity.ai is typically engaged by customer organizations to
                  provide an application security operations platform. Under
                  frameworks such as the GDPR, the parties usually have the
                  following roles:
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>
                    • The{" "}
                    <span className="font-medium">customer organization</span>{" "}
                    acts as controller of the personal data it chooses to
                    process through seqrity.ai.
                  </li>
                  <li>
                    • <span className="font-medium">seqrity.ai</span> acts as
                    processor (or service provider/processor under other
                    regimes) with respect to that data.
                  </li>
                  <li>
                    • Each party remains independently responsible for its own
                    compliance obligations under applicable law.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="subject-matter-heading">
                <h2
                  id="subject-matter-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Subject matter, duration and nature of processing
                </h2>
                <p className="mt-2 text-slate-300">
                  The DPA typically describes the subject matter and duration of
                  processing as the provision of the seqrity.ai platform and
                  related support services for the term of the customer
                  agreement, plus any retention periods required for audit,
                  security and legal obligations.
                </p>
                <p className="mt-3 text-slate-300">
                  The nature of processing includes collecting, storing,
                  organizing, analyzing and presenting data related to Signals,
                  assets, findings and workflow activity, as instructed by the
                  customer.
                </p>
              </section>

              <section aria-labelledby="instructions-heading">
                <h2
                  id="instructions-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Customer instructions
                </h2>
                <p className="mt-2 text-slate-300">
                  seqrity.ai processes personal data only on documented
                  instructions from the customer, except where required to do so
                  by applicable law.
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>
                    • The primary instruction is embodied in the customer's
                    configuration of workspaces, integrations and users.
                  </li>
                  <li>
                    • seqrity.ai will notify the customer if it is required by
                    law to process data in a way that conflicts with customer
                    instructions, where permitted to do so.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="subprocessors-heading">
                <h2
                  id="subprocessors-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Sub‑processors
                </h2>
                <p className="mt-2 text-slate-300">
                  seqrity.ai may engage sub‑processors, such as cloud
                  infrastructure providers and support tools, to help deliver
                  the service.
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>
                    • Sub‑processors are bound by written agreements that
                    include data protection obligations no less protective than
                    those in the DPA.
                  </li>
                  <li>
                    • Customers are typically notified of core sub‑processors,
                    and may have the opportunity to subscribe to updates.
                  </li>
                  <li>
                    • Where required, seqrity.ai will work with customers to
                    assess the impact of new or changed sub‑processors.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="security-measures-heading">
                <h2
                  id="security-measures-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Technical and organizational measures
                </h2>
                <p className="mt-2 text-slate-300">
                  seqrity.ai implements technical and organizational measures
                  designed to protect customer data against unauthorized access,
                  loss or alteration. High‑level themes may include:
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>• Encryption in transit and at rest for customer data.</li>
                  <li>
                    • Access controls, least‑privilege permissions and
                    segregation of duties.
                  </li>
                  <li>
                    • Secure software development lifecycle practices, including
                    code review and vulnerability management.
                  </li>
                  <li>
                    • Logging and monitoring of key administrative operations.
                  </li>
                  <li>
                    • Business continuity and disaster recovery procedures for
                    the platform.
                  </li>
                </ul>
                <p className="mt-3 text-slate-300">
                  Further detail is typically available in separate security
                  documentation or annexes to the DPA.
                </p>
              </section>

              <section aria-labelledby="data-subject-heading">
                <h2
                  id="data-subject-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Assistance with data subject requests and assessments
                </h2>
                <p className="mt-2 text-slate-300">
                  seqrity.ai supports customers in meeting their own obligations
                  under data protection law, to the extent reasonably possible
                  and as described in the DPA.
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>
                    • Providing information about the service needed to complete
                    data protection impact assessments.
                  </li>
                  <li>
                    • Assisting, where appropriate, with responses to data
                    subject requests that involve seqrity.ai systems.
                  </li>
                  <li>
                    • Notifying customers of personal data breaches without
                    undue delay, and cooperating in investigations and
                    notifications, as required.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="audit-heading">
                <h2
                  id="audit-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Audit, certification and documentation
                </h2>
                <p className="mt-2 text-slate-300">
                  The DPA normally describes how seqrity.ai's compliance
                  posture can be assessed.
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>
                    • Access to third‑party reports (for example, SOC 2 or ISO
                    certifications) where available.
                  </li>
                  <li>
                    • Reasonable customer audit rights, subject to safeguards
                    and scheduling requirements, as set out in the agreement.
                  </li>
                  <li>
                    • Documentation of technical and organizational measures in
                    security or compliance portals.
                  </li>
                </ul>
              </section>

              <p className="text-[0.7rem] text-slate-500 border-t border-slate-800/70 pt-4">
                This Data Processing overview is illustrative marketing copy for
                seqrity.ai and does not constitute a full Data Processing
                Addendum or legal advice. Any production deployment should be
                supported by an executed DPA, detailed security documentation
                and jurisdiction‑specific contractual terms agreed between
                seqrity.ai and each customer.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
