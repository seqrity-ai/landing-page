"use client";

import * as React from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeader } from "@/components/section-header";

export default function SecurityPage() {
  return (
    <>
      <SiteHeader />
      <main className="app-page">
        <section className="section" aria-labelledby="security-heading">
          <div className="app-container max-w-4xl">
            <SectionHeader
              align="left"
              eyebrow="Security & trust"
              title="How seqrity.ai thinks about security"
              description="seqrity.ai is designed as a security-first platform for organizations running modern application security and DevSecOps programs."
              className="mb-10"
            />

            <div className="glass-panel px-5 py-6 sm:px-8 sm:py-8 space-y-8 text-sm text-slate-200">
              <section aria-labelledby="platform-overview-heading">
                <h2
                  id="platform-overview-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Platform overview
                </h2>
                <p className="mt-2 text-slate-300">
                  seqrity.ai connects to your scanners, CI/CD systems, source
                  code and cloud environments to normalize findings into
                  Signals. The platform is designed to avoid storing more
                  sensitive data than necessary and to provide clear, auditable
                  workflows for the lifecycle of each finding.
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>
                    • Asset-centric view across applications, APIs, mobile, code
                    and infrastructure.
                  </li>
                  <li>
                    • Role-based access model intended to support least
                    privilege in complex teams.
                  </li>
                  <li>
                    • Workspace isolation to separate tenants, environments or
                    business units.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="security-controls-heading">
                <h2
                  id="security-controls-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Security controls (illustrative)
                </h2>
                <p className="mt-2 text-slate-300">
                  The implementation details below are representative of a
                  security-focused SaaS platform and should be validated against
                  your own due diligence process.
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>• Encryption in transit using modern TLS configurations.</li>
                  <li>
                    • Encryption at rest for customer data using cloud-native
                    key management.
                  </li>
                  <li>
                    • Segregated environments for development, staging and
                    production.
                  </li>
                  <li>
                    • Strong authentication and SSO/SAML support for enterprise
                    tenants.
                  </li>
                  <li>
                    • Scoped API tokens and service accounts for integrations.
                  </li>
                  <li>
                    • Change management and peer review across infrastructure
                    and application code.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="data-protection-heading">
                <h2
                  id="data-protection-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Data protection & privacy
                </h2>
                <p className="mt-2 text-slate-300">
                  seqrity.ai is intended to support customers' obligations
                  under common privacy and data protection frameworks (for
                  example, GDPR). Exact responsibilities are governed by the
                  agreement between seqrity.ai and each customer.
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>
                    • Data Processing Addendum (DPA) describing roles and
                    responsibilities.
                  </li>
                  <li>
                    • Configurable data retention policies aligned with your
                    internal standards.
                  </li>
                  <li>
                    • Support for regional hosting and residency discussions,
                    where available.
                  </li>
                  <li>
                    • Logical separation of customer workspaces and data
                    boundaries.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="compliance-heading">
                <h2
                  id="compliance-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Compliance posture (illustrative)
                </h2>
                <p className="mt-2 text-slate-300">
                  The seqrity.ai product is positioned to support customers who
                  operate under frameworks such as SOC 2, ISO 27001 and similar
                  regional regulations. The exact certification status of any
                  production service should be confirmed via the sales and legal
                  process.
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>• Focus on audit-ready logging around Signals and workflow.</li>
                  <li>
                    • Controls expected to map to common trust service criteria.
                  </li>
                  <li>
                    • Export capabilities to help evidence testing and
                    remediation activity.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="incident-response-heading">
                <h2
                  id="incident-response-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Incident response & vulnerability reporting
                </h2>
                <p className="mt-2 text-slate-300">
                  If you believe you have identified a security issue with
                  seqrity.ai, we encourage responsible disclosure.
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>
                    • Use the Security contact details referenced in your
                    customer agreement or, for this demo site, the Support form.
                  </li>
                  <li>
                    • Avoid sending exploit details through general contact
                    forms; we will coordinate a secure channel.
                  </li>
                  <li>
                    • seqrity.ai intends to follow a documented incident
                    response plan including triage, containment and customer
                    notification where appropriate.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="shared-responsibility-heading">
                <h2
                  id="shared-responsibility-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Shared responsibility
                </h2>
                <p className="mt-2 text-slate-300">
                  Operating a secure application security program is a shared
                  responsibility between seqrity.ai and each customer.
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>
                    • seqrity.ai manages the security of the platform and
                    underlying infrastructure.
                  </li>
                  <li>
                    • Customers manage who they grant access to, how they
                    configure workspaces and how Signals are acted on.
                  </li>
                  <li>
                    • Customers remain responsible for complying with their own
                    regulatory and contractual obligations.
                  </li>
                </ul>
              </section>

              <p className="text-[0.7rem] text-slate-500 border-t border-slate-800/70 pt-4">
                This Security & Trust page is illustrative marketing copy
                for seqrity.ai and does not constitute legal advice, a binding
                security commitment or a complete description of controls. Any
                production deployment should be accompanied by formal
                documentation and contractual terms.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
