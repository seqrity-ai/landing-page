export const SITE = {
  appName: "seqrity.ai",
  title: "seqrity.ai — Unified DevSecOps & application security operations",
  tagline: "Turn fragmented security findings into one actionable Signal feed.",
  logo: "/logo_placeholder.svg",
  logoSmall: "/logo_small_placeholder.svg",
  primaryCTA: "Book a demo",
  secondaryCTA: "Watch tour",
  description:
    "seqrity.ai connects your apps, APIs, mobile apps, code and infrastructure to unify noisy scanner outputs into prioritized Signals, orchestrate findings from discovery to remediation, and give security and engineering leaders a single view of application risk.",
} as const;

export type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: "/#how-it-works", label: "Product" },
  { href: "/#why-seqrity", label: "Why seqrity" },
  { href: "/#analytics", label: "Analytics" },
  { href: "/#use-cases", label: "Use cases" },
  { href: "/#pricing", label: "Pricing" },
];

export const HERO_HIGHLIGHTS: string[] = [
  "Single Signal feed across SAST, DAST, pentests and cloud",
  "Lifecycle workflows from detection to verified fix",
  "Asset-centric view across apps, APIs, mobile, code and network",
];

export type HowItWorksStep = {
  id: number;
  label: string;
  title: string;
  description: string;
};

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    id: 1,
    label: "Step 1",
    title: "Connect tools, repos and assets",
    description:
      "Hook up scanners, CI/CD, code hosting, cloud and network inventory so seqrity.ai can see your application surface in one place.",
  },
  {
    id: 2,
    label: "Step 2",
    title: "Normalize findings into Signals",
    description:
      "seqrity.ai ingests findings from SAST, DAST, SCA, pentests and custom sources, deduplicates noise and turns them into prioritized Signals with severity and state.",
  },
  {
    id: 3,
    label: "Step 3",
    title: "Triage and assign with full context",
    description:
      "Work from a single Signal queue that ties each finding back to assets, endpoints, code refs and owners so AppSec, DevSecOps and engineers can act quickly.",
  },
  {
    id: 4,
    label: "Step 4",
    title: "Automate workflows with the Marketplace",
    description:
      "Extend seqrity.ai with marketplace tools, agent-like workflows and automations that sync status, create tickets and verify fixes across workspaces.",
  },
];

export type FeatureCard = {
  id: string;
  name: string;
  description: string;
  icon: string;
  badge?: string;
};

export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: "unified-signals",
    name: "Unified Signals feed",
    description:
      "Ingest and normalize findings from scanners, pentests and cloud sources into a single Signal queue with severity, state and ownership.",
    icon: "sparkles",
    badge: "Noise-aware",
  },
  {
    id: "asset-visibility",
    name: "Asset-centric visibility",
    description:
      "View risk by asset across web apps, APIs, mobile, source code, hosts and locations, with Signals tied back to endpoints and git references.",
    icon: "panelsTopLeft",
  },
  {
    id: "lifecycle-workflow",
    name: "Finding lifecycle & workflow",
    description:
      "Model the full lifecycle of a finding from open to mitigated, deferred or closed with states, assignments, SLAs and reviews across teams.",
    icon: "sliders",
  },
  {
    id: "marketplace-automation",
    name: "Marketplace & automation",
    description:
      "Browse and deploy security tools, integrations and agent-like workflows from the built-in Marketplace without custom engineering.",
    icon: "squareStack",
  },
  {
    id: "multi-workspace",
    name: "Multi-workspace & roles",
    description:
      "Segment tenants, environments or business units with workspaces and roles for admins, resources and end users, all on one platform.",
    icon: "users",
  },
  {
    id: "security-analytics",
    name: "Security posture analytics",
    description:
      "Track open vs closed Signals, MTTR, risk by severity and asset type with exec-ready dashboards and workspace-level reporting.",
    icon: "lineChart",
  },
];

export type TemplateItem = {
  id: string;
  label: string;
  category: string;
  duration: string;
  name?: string;
  description?: string;
  aspect?: string;
  channels?: string;
  automationTag?: string;
  badge?: string;
};

export const TEMPLATE_GALLERY: TemplateItem[] = [
  {
    id: "severity-heatmap",
    label: "Severity heatmap",
    category: "Signals overview",
    duration: "Real-time",
    description:
      "Visualize how many Signals sit in Info, Low, Medium, High and Critical across workspaces.",
    aspect: "Dashboard",
    channels: "All workspaces",
    automationTag: "Live posture",
    badge: "Exec-ready",
  },
  {
    id: "mttr-trend",
    label: "MTTR over time",
    category: "Remediation analytics",
    duration: "Last 90 days",
    description:
      "Track mean time to remediate by severity so AppSec and Eng leaders can align on SLAs.",
    aspect: "Line chart",
    channels: "Signals lifecycle",
    automationTag: "Trend analysis",
  },
  {
    id: "coverage-by-asset",
    label: "Coverage by asset type",
    category: "Asset coverage",
    duration: "Snapshot",
    description:
      "See how well web apps, APIs, mobile apps, code repos and network locations are covered by testing.",
    aspect: "Grid",
    channels: "Apps · APIs · Mobile · Network",
    automationTag: "Surface mapping",
  },
  {
    id: "workflow-throughput",
    label: "Workflow throughput",
    category: "Operations",
    duration: "Rolling 30 days",
    description:
      "Understand how many Signals were opened, triaged, mitigated and closed to spot bottlenecks.",
    aspect: "Bars",
    channels: "Teams & workspaces",
    automationTag: "Ops telemetry",
  },
  {
    id: "sla-breaches",
    label: "SLA breaches",
    category: "Risk & compliance",
    duration: "Current period",
    description:
      "Highlight Signals approaching or breaching SLA so teams can prioritize before audits.",
    aspect: "Table",
    channels: "Critical & High",
    automationTag: "Exception focus",
  },
  {
    id: "exec-summary",
    label: "Executive summary",
    category: "Reporting",
    duration: "Quarter",
    description:
      "Summarize posture, coverage and trends into a single view to brief executives and customers.",
    aspect: "Summary",
    channels: "Stakeholders",
    automationTag: "Shareable view",
  },
];

export type ComparisonProduct = {
  name: string;
  isOurProduct?: boolean;
  metrics: {
    category: string;
    value: string;
  }[];
};

export const COMPARISON_PRODUCTS: ComparisonProduct[] = [
  {
    name: "Isolated scanner dashboards",
    metrics: [
      { category: "Unified Signals", value: "Per-tool views only" },
      { category: "Finding lifecycle", value: "Basic statuses" },
      { category: "Asset coverage", value: "Scoped to a single surface" },
      { category: "Automation & AI", value: "Limited or none" },
    ],
  },
  {
    name: "Ticket queues & spreadsheets",
    metrics: [
      { category: "Unified Signals", value: "Manually stitched data" },
      { category: "Finding lifecycle", value: "Ad-hoc, hard to audit" },
      { category: "Asset coverage", value: "No live view" },
      { category: "Automation & AI", value: "Manual updates" },
    ],
  },
  {
    name: "Legacy GRC tools",
    metrics: [
      { category: "Unified Signals", value: "High-level, not tool-native" },
      { category: "Finding lifecycle", value: "Process-heavy workflows" },
      { category: "Asset coverage", value: "Static inventories" },
      { category: "Automation & AI", value: "Slow to extend" },
    ],
  },
  {
    name: "seqrity.ai",
    isOurProduct: true,
    metrics: [
      { category: "Unified Signals", value: "Single, normalized Signal feed" },
      {
        category: "Finding lifecycle",
        value: "Lifecycle-aware workflows & SLAs",
      },
      {
        category: "Asset coverage",
        value: "Apps, APIs, mobile, code, hosts & locations",
      },
      {
        category: "Automation & AI",
        value: "Marketplace, agents & workflow automations",
      },
    ],
  },
];

export type DemoState = {
  id: "before" | "after";
  label: string;
  description: string;
  metrics: string[];
};

export const DEMO_STATES: DemoState[] = [
  {
    id: "before",
    label: "Before seqrity.ai",
    description:
      "Multiple scanner dashboards, spreadsheets and ticket queues with no single source of truth.",
    metrics: [
      "Hours spent reconciling findings every week",
      "Separate views for code, apps, APIs and network",
      "Hard to prove posture to leadership and auditors",
    ],
  },
  {
    id: "after",
    label: "With seqrity.ai",
    description:
      "One Signals feed, asset-aware views and workflows that automate status, ownership and verification.",
    metrics: [
      "Minutes to understand posture across workspaces",
      "Shared context between AppSec, DevSecOps and Eng",
      "Audit-ready view of lifecycle and SLA performance",
    ],
  },
];

export type UseCase = {
  id: string;
  label: string;
  description: string;
  icon: string;
};

export const USE_CASES: UseCase[] = [
  {
    id: "appsec-teams",
    label: "Application security teams",
    description:
      "Unify scanner outputs, coordinate triage and track remediation SLAs across product lines.",
    icon: "shield",
  },
  {
    id: "devsecops",
    label: "DevSecOps & platform",
    description:
      "Embed Signals into CI/CD, route findings to the right owners and automate status syncs.",
    icon: "pipeline",
  },
  {
    id: "security-ops",
    label: "Security operations",
    description:
      "Monitor application-layer risk alongside infrastructure, with clear ownership and workflows.",
    icon: "radar",
  },
  {
    id: "eng-leaders",
    label: "Engineering leadership",
    description:
      "Get an at-a-glance view of risk, remediation throughput and posture trends for your portfolio.",
    icon: "barChart",
  },
  {
    id: "mssp",
    label: "MSSPs & service providers",
    description:
      "Operate multi-tenant workspaces, standardize workflows and give clients read-only access.",
    icon: "briefcase",
  },
  {
    id: "compliance",
    label: "Risk & compliance",
    description:
      "Evidence coverage and lifecycle history for audits, certifications and customer due diligence.",
    icon: "fileCheck",
  },
];

export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  highlighted?: boolean;
  ctaLabel: string;
  features: string[];
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$0",
    cadence: "/mo",
    tagline: "Evaluate seqrity.ai with a single workspace and limited Signals.",
    ctaLabel: "Get started",
    features: [
      "Single workspace",
      "Limited Signals per month",
      "Core Signals feed & asset views",
      "Basic dashboards",
    ],
  },
  {
    id: "team",
    name: "Team",
    price: "Talk to us",
    cadence: "",
    tagline: "For product security and DevSecOps teams rolling out seqrity.ai.",
    highlighted: true,
    ctaLabel: "Book a demo",
    features: [
      "Multiple workspaces",
      "Full Signals lifecycle workflows",
      "Role-based access control",
      "Security posture & SLA dashboards",
      "Access to Marketplace & automations",
      "Priority support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    tagline: "For organizations standardizing application security operations.",
    ctaLabel: "Contact sales",
    features: [
      "Enterprise SSO & advanced RBAC",
      "Custom data retention & residency",
      "Dedicated workspace topology",
      "Custom integrations & workflows",
      "Onboarding & migration support",
      "Dedicated success team",
    ],
  },
];

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarInitials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "ciso-1",
    name: "Dana Patel",
    role: "CISO",
    company: "Growthline Commerce",
    quote:
      "seqrity.ai gave us, for the first time, a single view of application risk. My team stopped reconciling CSVs and started driving down MTTR.",
    avatarInitials: "DP",
  },
  {
    id: "head-appsec-1",
    name: "Michael Yang",
    role: "Head of Application Security",
    company: "Northwind Bank",
    quote:
      "Signals let us prioritize the 5% of findings that actually matter. Engineers get clear, asset-aware context instead of generic scanner dumps.",
    avatarInitials: "MY",
  },
  {
    id: "vp-eng-1",
    name: "Sarah Lopez",
    role: "VP Engineering",
    company: "Arcadia Labs",
    quote:
      "We finally have a shared language between security and engineering. seqrity.ai turned audits from a fire drill into a predictable process.",
    avatarInitials: "SL",
  },
];

export const FOOTER_LINKS: { label: string; href: string }[] = [
  { label: "Product overview", href: "/#how-it-works" },
  { label: "Posture & analytics", href: "/#analytics" },
  { label: "Security & trust", href: "/security" },
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms of use", href: "/terms" },
  { label: "Legal & copyright", href: "/legal" },
  { label: "Cookies", href: "/cookies" },
  { label: "Data processing addendum", href: "/data-processing" },
  { label: "Acceptable use", href: "/acceptable-use" },
  { label: "Contact us", href: "/contact" },
  { label: "Contact sales", href: "/contact-sales" },
  { label: "Support & complaints", href: "/support" },
];

export const SOCIAL_LINKS: { label: string; href: string }[] = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "X (Twitter)", href: "#" },
  { label: "Email", href: "#" },
];
