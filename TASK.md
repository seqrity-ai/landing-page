## Prompt to generate a modern landing page for `seqrity.ai`

You are an expert SaaS product marketer, UX copywriter, and front-end designer.

Your task is to __concept, write, and (if asked) design/implement__ a next‑generation, modern marketing landing page for an existing product called __`seqrity.ai`__.

Use the detailed product context and requirements below. Do __not__ invent features that contradict the description, but you may polish the narrative, clarify value, and propose opinionated modern design patterns.

---

### 1. Product & domain context (from existing app)

This landing page is for an existing __DevSecOps / application security operations platform__ whose UI codebase you are given by description:

__Tech + structure observed from the app:__

- Built with __Angular 20__ and __standalone components__

- Uses __Taiga UI__ as the primary component library (e.g., `tui-root`, `tui-aside`, `tui-tabs`, `tui-drawer`, `tui-line-chart`)

- Uses __Tailwind CSS__ (configured via `tailwind.config.js`) plus custom `.less` styles

- Multi-route application with sections like:

  - `/dashboard/signals` (Signals)
  - `/dashboard/assets/web-apps`
  - `/dashboard/assets/web-services`
  - `/dashboard/assets/code-repos`
  - `/dashboard/assets/network/hosts`
  - `/dashboard/assets/network/locations`
  - `/dashboard/summary`
  - `/dashboard/jobs`
  - `/dashboard/marketplace`
  - `/management` (configuration / profile / management)
  - `/workspace` (workspace switching)
  - `/login`, `/auth/callback/:source` (auth flows)

- Uses a __side navigation__ with groups such as:

  - Signals, Findings, Jobs
  - Network → Hosts, Locations
  - Apps → Web, Mobile, API
  - Source Code → Code Repos, Management
  - Testing (test routes)
  - Marketplace, Workspaces, Logout

__Core concepts inferred from code:__

- __Signals__: A primary object representing __security findings__ aggregated across tools.

  - Served by `SignalsApi` via endpoints like:

    - `GET api/v1/devsecops/workspace/signals-meta-data`
    - `GET api/v1/devsecops/workspace/signals/{engagement_type}?finding_state=...`
    - `GET api/v1/devsecops/signal/findings/{id}`

  - Signals have metadata like:

    - `severity` (INFO/LOW/MEDIUM/HIGH/CRITICAL)
    - `last_status_update`
    - `description[]` (markdown)
    - `endpoints[]`
    - `meta_data.git_remote`, `meta_data.git_ref`
    - `mitigation` (markdown)

- __Findings lifecycle__ (states & severity):

  - Severity: `Info`, `Low`, `Medium`, `High`, `Critical`, `Unknown`
  - Finding states include:
    - `OPEN`, `UNDER_INVESTIGATION`, `MITIGATED`, `CLOSED`, `PENDING_REVIEW`, `DEFERRED`, `FALSE_POSITIVE`, `RESOLVED`, `ESCALATED`, `REOPENED`
  - There are derived “closed” states (e.g. mitigated, closed, deferred, false positive, resolved).

- __Engagement types & workflow__:

  - Engagement types: `SAST`, `DAST`, `PENTEST`
  - Engagement lifecycle (states like `DRAFT`, `OPEN`, `IN_PROGRESS`, `UNDER_REVIEW`, `ACCEPTED`, `REJECTED`, `CLOSED`, `ARCHIVED`)
  - There is an internal notion of __transition states__ for automated workflows (queued, started, finished, parsing, etc.).

- __Assets & coverage__ (what the platform secures):

  - Platforms: `WEBAPP`, `WEBSERVICE`, `IOS`, `ANDROID`

  - Asset categories in UI:

    - Web apps
    - Web services / APIs
    - Source code repositories
    - Network hosts and locations

- __Workspaces & roles__:

  - Workspaces: multi-workspace support (`/workspace`, workspace API)
  - Security roles: `SUPERADMIN`, `ADMIN`, `RESOURCE` (can take tasks and view assigned assessments), `USER`, `ENDUSER` (view-only reports/permissions)

- __Marketplace & automation__:

  - There is a __Marketplace__ section that lists “tools” with:

    - `title`, `description`, `icon`
    - `nodes` (sub-nodes with their own icons/titles)

  - Marketplace copy in the app:
    - “Browse and deploy a wide range of security tools and plugins from the built-in Marketplace.”

  - There is `agent-workflow-ui` and a `not-a-bot-ai` folder, indicating __workflow automation / AI-assisted workflows / agent-like integrations__.

- __Visual/UX flavor from existing UI__:

  - Taiga UI look & feel: clean, compact, slightly enterprise-oriented.
  - Left __collapsible aside navigation__ with groups and chevrons.
  - Use of __drawers__ (`tui-drawer`) for details panels (e.g., signal details).
  - Use of __cards and avatars__ in Marketplace.
  - Chart-like __summary dashboard__ using `tui-axes` + `tui-line-chart`.
  - Extensive use of iconography via Taiga icons and custom SVG sprite.
  - Tailwind utility classes (flex, grid, spacing, etc.).

__Brand names / strings present:__

- Modules: `MODULE_SEQRITY = 'seqrity.ai'`, `MODULE_SOCIALAI = 'social.ai'`
- Active module currently `social.ai`, but UI still surfaces `seqrity.ai` (e.g., Marketplace header “seqrity.ai”).
- Environment/app name historically: `'cyclops-ai'`, but public-facing brand for landing should be __`seqrity.ai`__.
- API host: `https://api.meddler.io` (do not hard-sell “meddler” brand; treat it as backend infra; public brand is `seqrity.ai`).

---

### 2. High-level product narrative to reflect in landing page

Turn the above into a coherent, __user-facing narrative__. The landing page should present `seqrity.ai` as:

- A __unified DevSecOps & application security operations platform__ that:

  - Connects to your __apps, APIs, mobile apps, source code, and cloud/network infrastructure__
  - Ingests and normalizes findings from multiple security tools (SAST, DAST, pentests, etc.)
  - Surfaces __Signals__—prioritized, enriched security findings tied to assets and code
  - Provides an __actionable workflow__ to triage, assign, investigate, mitigate, and close findings across their lifecycle
  - Includes a __Marketplace__ of security tools, plugins, and workflows to extend and automate security operations
  - Supports __multi-workspace__ / multi-tenant setups with role-based access (admins, resources, end users)

- Positioning emphasis:

  - Reduce noise from fragmented security tools into a __single, prioritized Signal feed__
  - Close the loop from __detection → triage → fix → verification__ across assets and teams
  - Provide __visibility across web, APIs, mobile, source, and network__ in one place
  - Bring __automation & AI-driven workflows__ (hinted by agent workflow UI and AI folders) to scale security.

You should:

- Name & explain __Signals__ in simple, compelling language.

- Explain how `seqrity.ai` connects to:

  - Web apps, APIs, mobile apps, and network infrastructure
  - Code repositories
  - External security scanners and pentest workflows

- Explain the __lifecycle of a finding__ in normal language (discovered → under investigation → mitigated/closed, etc.), using the underlying states as inspiration.

- Highlight the __Marketplace__ as a way to extend and automate security operations with pluggable tools and agent-like workflows.

---

### 3. Target audience & personas

Assume the landing page is aimed at:

- __Primary:__

  - Heads of Security / CISOs
  - DevSecOps leaders
  - Application Security / Product Security teams

- __Secondary:__

  - Engineering leaders (VP Eng, Director of Eng)
  - Individual security engineers and DevOps engineers

These users:

- Care about __risk reduction, coverage, and SLAs__.
- Are overwhelmed by __too many tools and noisy findings__.
- Need to __prove security posture__ to executives, auditors, and customers.
- Want __modern, automation-first__ solutions that integrate with existing tools.

Reflect these motivations in messaging, examples, and section copy.

---

### 4. Brand, tone, and voice

Tone requirements:

- __Professional, confident, and technically credible__, without being dry.

- Minimal buzzword fluff; prefer __concrete outcomes__ over vague promises.

- Emphasize:

  - Clarity: what you get, who it’s for, how it helps.
  - Trust: security is a high-stakes domain.
  - Modernity: AI, automation, integrations, and clean UX.

Style of wording:

- Short, strong headlines.
- Support with 1–2 sentence subheadlines.
- Use bullet lists for feature summaries.
- Avoid overly cute language; keep it __enterprise‑friendly__ but modern.

---

### 5. Information architecture – sections to include

Design a __single-page landing__ with a clear scroll narrative.

At minimum, include the following sections, with compelling headlines + subcopy + content blocks:

1. __Hero section__

   - Elements:

     - Brand name & logo placeholder: `seqrity.ai`

     - Punchy headline summarizing outcome (e.g., “Turn fragmented security findings into one actionable Signal feed” – feel free to improve)

     - Subheadline explaining the platform in 2–3 lines.

     - Primary CTA: e.g., __“Book a demo”__ or __“Request early access”__ (you choose the best phrase).

     - Secondary CTA: e.g., __“Explore product tour”__ or __“View sample Signals”__.

     - Simple visual:

       - Abstract representation of the Signals dashboard: charts, a table of findings with severities, a details drawer.
       - It should conceptually resemble the existing app’s __Signals drawer__ (list of findings + detail view) and __summary dashboard charts__, but in a simplified, marketing-friendly mock.

2. __Problem framing / Why seqrity.ai__

   - Describe the current pain:

     - Multiple tools (SAST, DAST, pentest reports, cloud scanners) all generating findings.
     - Security & engineering teams drowning in noisy alerts and spreadsheets.
     - No single view across apps, APIs, mobile, code, and infrastructure.

   - Then pivot to seqrity.ai’s solution:

     - “One Signals feed across your entire application surface.”
     - “Lifecycle management for every finding.”
     - “Automation and workflows that keep your team ahead.”

3. __Core capabilities / feature overview__ Break features into 3–5 concise pillars. Example structure (you may rename and refine):

   - __Unified Signals Feed__

     - Explain that all findings across SAST, DAST, pentests, and other security tools are normalized into Signals with severity, state, and context.
     - Mention severity levels (Info → Critical) and state transitions (Open → Under Investigation → Mitigated/Closed, etc.) in user-friendly terms.

   - __Asset-Centric Visibility__

     - Highlight coverage for:

       - Web applications
       - APIs & web services
       - Mobile (iOS & Android)
       - Source code repositories
       - Network hosts & locations

     - Explain that Signals are tied back to assets and code references (e.g., git remote & ref).

   - __Lifecycle & Workflow__

     - Explain the lifecycle states as a simple workflow:
       - Draft/open → In progress → Under review → Accepted/Closed → Archived/Deferred/False positive.
     - Mention assignment, hand-offs between roles (admin, resource, end user view), and workspaces.

   - __Marketplace & Automation__

     - Explain that there is a Marketplace where you “browse and deploy security tools and plugins.”
     - Mention that tools can represent scanners, integrations, or agent-based workflows.
     - Convey that this lets teams extend seqrity.ai without custom engineering.

   - __Multi-workspace & Roles__

     - Explain:

       - Multiple workspaces (e.g., environments, business units, or customers).
       - Roles like superadmin/admin/resource/user/enduser.
       - End users get read-only reports; resources handle remediation tasks.

4. __In-depth product walkthrough (visual concept section)__

   - Create a __3–4 step horizontal or vertical “tour”__ showing the product flow, e.g.:

     1. “Connect your tools & assets” – show icons/logos for platforms (web, API, mobile, network providers like AWS/Azure/GCP).
     2. “See Signals across your attack surface” – a mock screenshot/card showing the Signals grid with severity tags.
     3. “Drill into details & context” – call-out of the drawer with details: description, endpoints, git repo/ref, mitigation markdown.
     4. “Automate and extend with the Marketplace” – cards representing marketplace tools with avatars.

   - For each step:

     - Provide a short heading and 1–2 sentence explanation.
     - Suggest a corresponding visual/wireframe idea that could be implemented using Taiga UI + Tailwind.

5. __Use cases & personas__

   - Provide 3–4 __use case blocks__, e.g.:

     - “For AppSec teams” – unify scanner outputs, track remediation SLAs.
     - “For DevSecOps” – embed security into CI/CD and workflows.
     - “For engineering leaders” – at-a-glance posture, quality of remediation, and trends.

   - Each use case:
     - Include a headline, a short description, and 3 bullet benefits.

6. __Security posture & analytics__

   - Reference the existing __summary dashboard__ (line charts / axes) to describe:

     - Trend of open vs. closed findings.
     - Time to remediation.
     - Risk by severity or asset type.

   - Propose how this appears visually on the landing page (e.g., a “Security posture at a glance” panel).

7. __Integrations & ecosystem__

   - Even if we don’t list specific vendors, describe __categories__:

     - Code hosting (e.g., git-based)
     - CI/CD pipelines
     - Security testing tools (SAST, DAST, SCA, pentest reports)
     - Cloud/network providers (AWS, Azure, GCP, etc. – inferred from `NetworkProviderEnum`)

   - Provide copy that promises __easy integration via Marketplace and APIs__, without naming tools that don’t exist in the repo.

8. __Pricing / call-to-action section__

   - You don’t need to define specific pricing tiers, but:
     - Suggest a layout for 2–3 high-level plans (e.g., “Team”, “Enterprise”) OR a “Contact sales / Request demo” emphasis if pricing is bespoke.

   - Include a strong CTA:

     - “Talk to security experts”
     - “Book a live demo”
     - “Request access to seqrity.ai”

   - Include supporting trust signals placeholders (e.g., logos of customers, compliance badges), but keep them generic and obviously placeholders.

9. __Footer__

   - Links to: Product, Docs (placeholder), Security, Privacy, Terms, Contact.
   - Brief one-line tagline reiterating seqrity.ai’s value.

---

### 6. Visual & design direction

You are not constrained to the current app’s exact visuals, but you should:

- __Align with a modern SaaS aesthetic__:

  - Clean, high-contrast layout.
  - Plenty of whitespace.
  - Crisp typography (e.g., system sans, or something like Inter).
  - Subtle gradients or glows to hint at “Signals” and “AI”.

- __Color & severity cues__ (informed by `ColorSeverity`):

  - Consider using severity colors conceptually in illustrations:

    - Info: `#3498db` (blue)
    - Low: `#2ecc71` (green)
    - Medium: `#e67e22` (orange)
    - High: `#e74c3c` (red)
    - Critical: `#c0392b` (dark red)

  - Use them in tags, chips, status indicators in visuals.

- __Iconography__:

  - Use a visual language compatible with Taiga UI icons and the existing assets set (web apps, network, Android, iOS, etc.).
  - You may suggest new icons conceptually, but keep them simple and security/infra oriented.

- __Layout__:

  - Desktop-first layout with clear responsiveness for tablet and mobile.
  - Use grids, cards, and sections that can be implemented with Tailwind + Taiga UI components.

If you produce code, prefer:

- Semantic HTML5
- Tailwind utility classes for spacing/layout/typography
- Componentization that can be mapped to Angular & Taiga later (e.g., hero component, features component, etc.)

---

### 7. Implementation constraints (if code is requested)

If asked to output implementation, follow these constraints:

- __Framework__: Angular (standalone component), compatible with Angular 20+.

- __UI kit__: Use Taiga UI components where helpful (buttons, tabs, cards, badges, drawers).

- __Styling__:

  - Prefer Tailwind CSS classes for layout/spacing.
  - Use minimal custom CSS, ideally in `.less` if needed.

- __Structure__:

  - Wrap the landing page in a dedicated component (e.g., `LandingPageComponent`) separate from the existing authenticated dashboard.
  - Do not break existing routing; assume this landing page would live at a public route like `/` or `/landing`.

- __Copy__:

  - Use the copy you generate from the above narrative.
  - Keep strings externalizable if practical (e.g., easily moved to a constants file).

If not asked for full code, just focus on __detailed copy, layout description, and wireframe-level design guidance__ that a front-end engineer could easily translate into Angular + Taiga + Tailwind.

---

### 8. Output format

Your response should include:

1. __A complete set of landing page copy__, section by section, with headings and text ready to paste into a UI.
2. __A short layout/wireframe description per section__, explaining the structure and how it might look visually.
3. (Optional, if explicitly requested) __Angular/Taiga/Tailwind component skeletons__ illustrating how to implement the hero and 1–2 key sections.

Ensure everything is __consistent, realistic, and grounded in the product context above.__ Do not introduce features that contradict the repo (e.g., don’t claim it’s a password manager or EDR); keep it centered on DevSecOps, Signals, findings lifecycle, assets, workspaces, and the marketplace.


IMPORTANT: Cuurent repo is nextjs based landing page template, but content is way different from the requirement. Instead of creating from scratch, modify the current project to meet the requirement.
