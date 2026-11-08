"use client";

import { useState } from "react";

type IconName =
  | "compute"
  | "storage"
  | "serverless"
  | "database"
  | "shield"
  | "network"
  | "arrow"
  | "check"
  | "spark";

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    compute: <><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 9h8M8 13h5M8 17h3"/></>,
    storage: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></>,
    serverless: <><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></>,
    database: <><path d="M4 6c0-2 3.6-3.5 8-3.5S20 4 20 6v12c0 2-3.6 3.5-8 3.5S4 20 4 18V6Z"/><path d="M4 6c0 2 3.6 3.5 8 3.5S20 8 20 6M4 12c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5"/></>,
    shield: <><path d="M12 22s8-3.8 8-10.5V5l-8-3-8 3v6.5C4 18.2 12 22 12 22Z"/><path d="m9 12 2 2 4-5"/></>,
    network: <><circle cx="5" cy="12" r="3"/><circle cx="19" cy="5" r="3"/><circle cx="19" cy="19" r="3"/><path d="m8 11 8-5M8 13l8 5"/></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    spark: <><path d="m12 3 1.2 4.3L17 9l-3.8 1.7L12 15l-1.2-4.3L7 9l3.8-1.7L12 3Z"/><path d="m19 15 .6 2.2L22 18l-2.4.8L19 21l-.6-2.2L16 18l2.4-.8L19 15Z"/></>,
  };

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

const serviceCards = [
  { icon: "compute" as const, code: "EC2", title: "Elastic compute", text: "Right-size virtual servers for every workload, from prototypes to production systems.", tone: "orange" },
  { icon: "storage" as const, code: "S3", title: "Durable object storage", text: "Store, protect, and retrieve data for applications, analytics, backups, and archives.", tone: "blue" },
  { icon: "serverless" as const, code: "Lambda", title: "Serverless functions", text: "Run event-driven code without managing servers and pay only for the compute you use.", tone: "mint" },
  { icon: "database" as const, code: "RDS", title: "Managed databases", text: "Build on familiar relational engines while AWS handles routine infrastructure operations.", tone: "violet" },
];

const workloads = {
  "Web apps": {
    kicker: "Always-on experiences",
    title: "From first request to global response.",
    copy: "A resilient web stack that keeps the edge fast, the application flexible, and your data protected.",
    services: ["CloudFront", "Application Load Balancer", "Amazon ECS", "Amazon Aurora"],
    metric: "Multi-AZ ready",
  },
  "Data platforms": {
    kicker: "Data at every scale",
    title: "Turn raw signals into useful decisions.",
    copy: "Collect, organize, query, and visualize data with managed services that grow alongside your teams.",
    services: ["Amazon Kinesis", "Amazon S3", "AWS Glue", "Amazon Redshift"],
    metric: "Analytics ready",
  },
  "AI workloads": {
    kicker: "Practical intelligence",
    title: "Move AI ideas into real applications.",
    copy: "Prepare data, build models, and ship generative AI experiences on a secure cloud foundation.",
    services: ["Amazon Bedrock", "Amazon SageMaker", "AWS Lambda", "Amazon OpenSearch"],
    metric: "Model ready",
  },
};

type Workload = keyof typeof workloads;

export default function CloudPlatform() {
  const [activeWorkload, setActiveWorkload] = useState<Workload>("Web apps");
  const current = workloads[activeWorkload];

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <section className="hero-grid relative isolate min-h-[760px] border-b border-white/10">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_25%,rgba(42,94,136,0.34),transparent_28%),radial-gradient(circle_at_35%_0%,rgba(255,153,0,0.09),transparent_24%)]" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <nav className="flex h-20 items-center justify-between border-b border-white/10" aria-label="Main navigation">
            <a href="#top" className="group flex items-center gap-3" aria-label="Cloud Atlas home">
              <span className="relative grid h-9 w-9 place-items-center rounded-lg border border-orange/50 bg-orange/10 text-orange">
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-mint shadow-[0_0_12px_#72e6c3]" />
                <Icon name="network" className="h-5 w-5" />
              </span>
              <span className="text-sm font-bold tracking-[0.16em]">CLOUD ATLAS</span>
            </a>
            <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
              <a className="nav-link" href="#services">Services</a>
              <a className="nav-link" href="#architectures">Architectures</a>
              <a className="nav-link" href="#security">Security</a>
              <a className="nav-link" href="#learn">Learn</a>
            </div>
            <a href="https://console.aws.amazon.com/" target="_blank" rel="noreferrer" className="button button-small">
              Open AWS Console <Icon name="arrow" className="h-4 w-4" />
            </a>
          </nav>

          <div id="top" className="grid items-center gap-16 pb-24 pt-20 lg:grid-cols-[1.05fr_.95fr] lg:pb-28 lg:pt-24">
            <div className="max-w-2xl">
              <div className="eyebrow mb-7"><span /> AWS, clearly mapped</div>
              <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[78px]">
                Build boldly.<br /><span className="text-gradient">Operate calmly.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
                A practical field guide to the AWS cloud—designed to help teams choose the right services, shape resilient architectures, and move with confidence.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#architectures" className="button justify-center">Explore architectures <Icon name="arrow" className="h-4 w-4" /></a>
                <a href="#services" className="button button-ghost justify-center">Browse AWS services</a>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                {['Resilient by design', 'Cost-aware', 'Security-first'].map((item) => (
                  <span key={item} className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-mint" />{item}</span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px] lg:mx-0">
              <div className="absolute -inset-8 -z-10 rounded-full bg-orange/10 blur-3xl" />
              <div className="console-card overflow-hidden rounded-2xl border border-white/15 bg-[#091625]/90 shadow-2xl shadow-black/50 backdrop-blur">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b5f]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd45]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Architecture / Production</span>
                </div>
                <div className="p-5 sm:p-7">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-500">System overview</p>
                      <h2 className="mt-1 text-lg font-semibold">Global web application</h2>
                    </div>
                    <span className="rounded-full border border-mint/20 bg-mint/10 px-3 py-1 text-xs text-mint">Healthy</span>
                  </div>
                  <div className="architecture-map relative rounded-xl border border-white/10 bg-[#06101c] p-5 sm:p-6">
                    <div className="arch-line arch-line-one" /><div className="arch-line arch-line-two" /><div className="arch-line arch-line-three" />
                    <div className="relative z-10 grid grid-cols-3 items-center gap-3">
                      <ServiceNode icon="network" label="CloudFront" active />
                      <ServiceNode icon="compute" label="ECS" />
                      <ServiceNode icon="database" label="Aurora" />
                    </div>
                    <div className="relative z-10 mt-7 grid grid-cols-3 gap-3">
                      <div />
                      <ServiceNode icon="serverless" label="Lambda" compact />
                      <ServiceNode icon="storage" label="S3" compact />
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <MiniMetric label="Regions" value="2" />
                    <MiniMetric label="Availability" value="Multi-AZ" />
                    <MiniMetric label="Status" value="Ready" accent />
                  </div>
                </div>
              </div>
              <div className="float-card absolute -bottom-7 -left-3 hidden items-center gap-3 rounded-xl border border-white/15 bg-[#102237] px-4 py-3 shadow-xl sm:flex lg:-left-10">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-orange/15 text-orange"><Icon name="spark" /></span>
                <div><p className="text-[10px] uppercase tracking-wider text-slate-500">Architecture signal</p><p className="text-sm font-medium">Well-Architected</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-cream py-24 text-ink sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 border-b border-ink/15 pb-10 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Core building blocks</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Start with the services that make ideas real.</h2>
            </div>
            <p className="max-w-sm text-base leading-7 text-slate-600">The AWS catalog is vast. These foundational services are a practical place to begin.</p>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((service, index) => (
              <article key={service.code} className="service-card group bg-cream p-7 lg:min-h-[350px]">
                <div className={`service-icon service-icon-${service.tone}`}><Icon name={service.icon} /></div>
                <div className="mt-16 flex items-center justify-between border-b border-ink/10 pb-3">
                  <span className="font-mono text-xs font-bold tracking-[0.16em] text-slate-500">0{index + 1} / {service.code}</span>
                  <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="architectures" className="relative border-y border-white/10 bg-[#07131f] py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_50%,rgba(114,230,195,.06),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-8">
              <p className="section-kicker text-orange">Reference architectures</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Choose a workload. See the path.</h2>
              <p className="mt-5 max-w-md leading-7 text-slate-400">Explore illustrative service patterns for common cloud workloads. Adapt every pattern to your scale, constraints, and compliance needs.</p>
              <div className="mt-10 flex flex-col gap-2" role="tablist" aria-label="Workload types">
                {(Object.keys(workloads) as Workload[]).map((name, index) => (
                  <button
                    key={name}
                    role="tab"
                    aria-selected={activeWorkload === name}
                    onClick={() => setActiveWorkload(name)}
                    className={`workload-tab ${activeWorkload === name ? "workload-tab-active" : ""}`}
                  >
                    <span className="font-mono text-xs text-slate-500">0{index + 1}</span>
                    <span>{name}</span>
                    <Icon name="arrow" className="ml-auto h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-8">
              <div className="flex flex-col justify-between gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-start">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint">{current.kicker}</p>
                  <h3 className="mt-3 max-w-xl text-3xl font-semibold tracking-[-0.035em]">{current.title}</h3>
                </div>
                <span className="w-fit rounded-full border border-mint/20 bg-mint/10 px-3 py-1.5 text-xs text-mint">{current.metric}</span>
              </div>
              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400">{current.copy}</p>
              <div className="relative mt-10 min-h-[340px] overflow-hidden rounded-xl border border-white/10 bg-[#050d17] p-6 sm:p-9">
                <div className="absolute inset-0 architecture-dots opacity-50" />
                <div className="relative grid min-h-[270px] items-center gap-5 sm:grid-cols-2">
                  {current.services.map((service, index) => (
                    <div key={service} className="arch-service group relative flex items-center gap-4 rounded-xl border border-white/10 bg-[#0c1b2b]/90 p-4 shadow-lg">
                      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg ${index === 0 ? 'bg-orange/15 text-orange' : 'bg-white/5 text-slate-300'}`}>
                        <Icon name={(["network", "compute", "serverless", "database"] as IconName[])[index]} />
                      </span>
                      <div><p className="text-[10px] uppercase tracking-[0.15em] text-slate-500">Step 0{index + 1}</p><p className="mt-1 text-sm font-semibold">{service}</p></div>
                      {index < 3 && <span className="pulse-dot" />}
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-500">Illustrative reference pattern only. Production architectures should be reviewed against the AWS Well-Architected Framework.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="security" className="bg-[#d9e9e5] py-24 text-ink sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid overflow-hidden rounded-3xl bg-[#0a1828] text-white shadow-2xl lg:grid-cols-[1.05fr_.95fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="mb-10 grid h-14 w-14 place-items-center rounded-2xl border border-mint/30 bg-mint/10 text-mint"><Icon name="shield" className="h-7 w-7" /></div>
              <p className="section-kicker text-mint">Security is the foundation</p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Design every layer with trust in mind.</h2>
              <p className="mt-6 max-w-xl leading-7 text-slate-300">Use identity, encryption, logging, and network controls together. On AWS, security is a shared responsibility—and good architecture makes that responsibility visible.</p>
              <a href="https://aws.amazon.com/architecture/security-identity-compliance/" target="_blank" rel="noreferrer" className="button mt-9">Explore AWS security <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <div className="security-panel relative min-h-[440px] border-t border-white/10 p-8 sm:p-12 lg:border-l lg:border-t-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(114,230,195,.14),transparent_38%)]" />
              <div className="relative flex h-full flex-col justify-center gap-4">
                {[
                  ["01", "Identity first", "Grant the minimum access needed and review it continuously."],
                  ["02", "Encrypt by default", "Protect data in transit and at rest across every workload."],
                  ["03", "Observe everything", "Centralize useful logs, metrics, alerts, and audit trails."],
                  ["04", "Automate guardrails", "Turn policy into repeatable infrastructure and controls."],
                ].map(([num, title, text]) => (
                  <div key={num} className="group flex gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-mint/30 hover:bg-white/[0.07]">
                    <span className="font-mono text-xs text-mint">{num}</span>
                    <div><h3 className="text-sm font-semibold">{title}</h3><p className="mt-1 text-xs leading-5 text-slate-400">{text}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="learn" className="relative bg-orange py-24 text-ink sm:py-28">
        <div className="absolute inset-0 cta-lines opacity-30" />
        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-10 px-5 sm:px-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em]">Your next move</p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl">Turn the map into momentum.</h2>
          </div>
          <a href="https://aws.amazon.com/getting-started/" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-ink px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#10243a]">Start building on AWS <Icon name="arrow" className="h-4 w-4" /></a>
        </div>
      </section>

      <footer className="bg-[#040b13] py-10 text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 text-xs sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-white"><span className="grid h-8 w-8 place-items-center rounded-lg border border-orange/30 bg-orange/10 text-orange"><Icon name="network" className="h-4 w-4" /></span><span className="font-bold tracking-[0.14em]">CLOUD ATLAS</span></div>
          <p>Independent educational concept. Amazon Web Services and AWS are trademarks of Amazon.com, Inc.</p>
          <div className="flex gap-5"><a className="hover:text-white" href="#top">Top</a><a className="hover:text-white" href="https://aws.amazon.com/" target="_blank" rel="noreferrer">AWS.com</a></div>
        </div>
      </footer>
    </main>
  );
}

function ServiceNode({ icon, label, active, compact }: { icon: IconName; label: string; active?: boolean; compact?: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-2 ${compact ? "scale-90" : ""}`}>
      <span className={`grid h-12 w-12 place-items-center rounded-xl border ${active ? "border-orange/50 bg-orange/15 text-orange shadow-glow" : "border-white/10 bg-white/5 text-slate-400"}`}><Icon name={icon} /></span>
      <span className="text-[10px] font-medium text-slate-400">{label}</span>
    </div>
  );
}

function MiniMetric({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return <div className="rounded-lg border border-white/10 bg-white/[0.025] p-3"><p className="text-[9px] uppercase tracking-wider text-slate-600">{label}</p><p className={`mt-1 text-xs font-semibold ${accent ? "text-mint" : "text-slate-300"}`}>{value}</p></div>;
}
