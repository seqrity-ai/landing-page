import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeader } from "@/components/section-header";

export default function LegalPage() {
  return (
    <>
      <SiteHeader />
      <main className="app-page">
        <section className="section" aria-labelledby="legal-heading">
          <div className="app-container max-w-3xl">
            <SectionHeader
              align="left"
              eyebrow="Legal & copyright"
              title="How seqrity.ai handles legal terms, rights and governance"
              description="This page gives a high-level overview of the key legal documents that govern your use of seqrity.ai, how we handle intellectual property, and how to contact us with legal or rights-related requests."
              className="mb-10"
            />

            <div className="glass-panel px-5 py-6 sm:px-8 sm:py-8 space-y-8 text-sm text-slate-200">
              <section aria-labelledby="governing-documents-heading" className="space-y-3">
                <h2
                  id="governing-documents-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Governing documents
                </h2>
                <p className="text-slate-300">
                  Your relationship with seqrity.ai is primarily governed by our{" "}
                  <a href="/terms" className="underline underline-offset-2 hover:text-slate-50">
                    Terms of Use
                  </a>
                  , which set out the contractual conditions for accessing and using the platform.
                  Depending on how you use seqrity.ai and where you are located, the following
                  documents also apply:
                </p>
                <ul className="list-disc space-y-1 pl-5 text-slate-300">
                  <li>
                    Our{" "}
                    <a
                      href="/privacy"
                      className="underline underline-offset-2 hover:text-slate-50"
                    >
                      Privacy Policy
                    </a>{" "}
                    describing how we handle personal data, including for customers, prospects and
                    website visitors.
                  </li>
                  <li>
                    Our{" "}
                    <a
                      href="/data-processing"
                      className="underline underline-offset-2 hover:text-slate-50"
                    >
                      Data Processing Addendum
                    </a>{" "}
                    (DPA), which applies when we act as a processor on your behalf and supports
                    common regulatory frameworks such as GDPR.
                  </li>
                  <li>
                    Our{" "}
                    <a
                      href="/acceptable-use"
                      className="underline underline-offset-2 hover:text-slate-50"
                    >
                      Acceptable Use Policy
                    </a>{" "}
                    outlining permitted and prohibited uses of the platform.
                  </li>
                  <li>
                    Our{" "}
                    <a
                      href="/cookies"
                      className="underline underline-offset-2 hover:text-slate-50"
                    >
                      Cookies Notice
                    </a>{" "}
                    describing how cookies and similar technologies are used on our sites.
                  </li>
                  <li>
                    Our{" "}
                    <a
                      href="/security"
                      className="underline underline-offset-2 hover:text-slate-50"
                    >
                      Security & Trust
                    </a>{" "}
                    information, which provides an overview of our technical and organizational
                    measures to protect customer data.
                  </li>
                </ul>
                <p className="text-[0.78rem] text-slate-400">
                  In the event of any inconsistency between this overview and the terms in those
                  documents, the terms in the formal documents will prevail.
                </p>
              </section>

              <section aria-labelledby="copyright-heading" className="space-y-3">
                <h2
                  id="copyright-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Copyright & intellectual property
                </h2>
                <p className="text-slate-300">
                  Unless otherwise stated, all content on seqrity.ai websites and within the
                  seqrity.ai service is protected by copyright and other intellectual property
                  rights. This includes, for example, text, graphics, logos, user interface
                  components, workflows, documentation and underlying software.
                </p>
                <p className="text-slate-300">
                  You may use the service and site content solely as permitted in the{" "}
                  <a href="/terms" className="underline underline-offset-2 hover:text-slate-50">
                    Terms of Use
                  </a>{" "}
                  and any applicable order form or agreement. Except as explicitly allowed there,
                  you may not copy, modify, distribute, reverse engineer or create derivative works
                  of seqrity.ai or its content.
                </p>
                <p className="text-[0.78rem] text-slate-400">
                  The seqrity.ai name, logos and product names are trade names or marks of
                  seqrity.ai or its affiliates. They may not be used without our prior written
                  permission, except as allowed by applicable law.
                </p>
              </section>

              <section aria-labelledby="customer-data-heading" className="space-y-3">
                <h2
                  id="customer-data-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Customer data, Signals and feedback
                </h2>
                <p className="text-slate-300">
                  You retain all rights, title and interest in and to the data you submit to
                  seqrity.ai, including security findings, configuration data and Signals derived
                  from your environment, except for the limited rights we require to operate and
                  improve the service as described in our Terms of Use and Data Processing
                  Addendum.
                </p>
                <p className="text-slate-300">
                  We may use de-identified or aggregated information for security research, product
                  improvement and benchmarking, provided it does not identify you or your users.
                  Where we act as a processor, we will treat your data in accordance with the DPA.
                </p>
                <p className="text-slate-300">
                  If you choose to provide feedback, suggestions or ideas about seqrity.ai, you
                  agree that we may use that feedback without restriction or obligation to you,
                  consistent with the Terms of Use.
                </p>
              </section>

              <section aria-labelledby="third-parties-heading" className="space-y-3">
                <h2
                  id="third-parties-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Third-party services and open source
                </h2>
                <p className="text-slate-300">
                  seqrity.ai may integrate with third-party products and services, including
                  scanners, ticketing systems and collaboration tools. Those third-party services
                  are governed by their own terms and privacy policies. You are responsible for
                  reviewing and complying with those terms.
                </p>
                <p className="text-slate-300">
                  The seqrity.ai platform may incorporate or be provided with components licensed
                  under open-source licenses. Where required, we will make notices and license terms
                  for such components available through the product or on request.
                </p>
              </section>

              <section aria-labelledby="jurisdiction-heading" className="space-y-3">
                <h2
                  id="jurisdiction-heading"
                  className="text-base font-semibold text-slate-50"
                >
                  Jurisdiction, changes and contact
                </h2>
                <p className="text-slate-300">
                  The applicable governing law, dispute resolution mechanisms and jurisdiction for
                  your use of seqrity.ai are described in the{" "}
                  <a href="/terms" className="underline underline-offset-2 hover:text-slate-50">
                    Terms of Use
                  </a>{" "}
                  or your applicable enterprise agreement. Because seqrity.ai is designed for use by
                  international teams, we aim to ensure that our terms align with common enterprise
                  security, compliance and procurement requirements.
                </p>
                <p className="text-slate-300">
                  We may update our legal terms and related documents from time to time to reflect
                  changes in applicable law, product capabilities or our business. Where required,
                  we will provide notice of material changes through the service or by other
                  appropriate means.
                </p>
                <p className="text-slate-300">
                  If you have questions about our legal terms, copyright or wish to exercise rights
                  related to your data, please reach out via the{" "}
                  <a href="/contact" className="underline underline-offset-2 hover:text-slate-50">
                    Contact
                  </a>{" "}
                  or{" "}
                  <a
                    href="/support"
                    className="underline underline-offset-2 hover:text-slate-50"
                  >
                    Support & complaints
                  </a>{" "}
                  forms. For privacy-specific requests, please use the channels described in our{" "}
                  <a
                    href="/privacy"
                    className="underline underline-offset-2 hover:text-slate-50"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
                <p className="text-[0.78rem] text-slate-400">
                  This page is provided for high-level informational purposes only and does not
                  constitute legal advice. You should consult with your own legal counsel regarding
                  your compliance obligations and use of seqrity.ai.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
