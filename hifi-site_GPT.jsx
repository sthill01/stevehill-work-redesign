const SITE_NAV_GPT = [
  ["home", "Home", "Home_GPT.html"],
  ["process", "How I Work", "HowIWork_GPT.html"],
  ["dash", "Dashboards", "Dashboards_GPT.html"],
  ["blog", "Blog", "Blog_GPT.html"],
  ["ex", "Examples", "Examples_GPT.html"],
  ["resume", "Resume", "Resume_GPT.html"],
];

const NavHiFiGPT = ({ active = "home" }) => {
  const { Logo } = window;
  return (
    <nav className="nav nav-flat">
      <div className="nav-inner">
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <a href="Home_GPT.html" className="nav-logo">
            <Logo compact />
          </a>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--ink-light)",
            }}
          >
            Consulting, Contract, Employment - 801-850-1253
          </div>
        </div>
        <div className="nav-links">
          {SITE_NAV_GPT.map(([key, label, href]) => (
            <a key={key} className={`nav-link ${active === key ? "is-active" : ""}`} href={href}>
              {label}
            </a>
          ))}
        </div>
        <a href="mailto:me@stevehill.work" className="nav-cta">
          me@stevehill.work
        </a>
      </div>
    </nav>
  );
};

const SiteFooterHiFiGPT = () => (
  <footer className="site-footer-gpt">
    <div className="site-footer-gpt-inner">
      <div>
        <strong>Steve Hill</strong>
        <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "rgba(251,250,245,.62)", marginTop: 5 }}>
          Marketing Ops, BI and Analytics
        </div>
      </div>
      <div style={{ display: "flex", gap: 18, flexWrap: "wrap", fontSize: 14 }}>
        <a href="mailto:me@stevehill.work">me@stevehill.work</a>
        <a href="tel:8018501253">801-850-1253</a>
        <a href="assets/steve-hill-resume.pdf">Resume PDF</a>
      </div>
    </div>
  </footer>
);

const SiteShellHiFiGPT = ({ active, children }) => (
  <div className="blog-mock">
    <NavHiFiGPT active={active} />
    {children}
    <SiteFooterHiFiGPT />
  </div>
);

const BlogHeroHiFiGPT = ({ eyebrow, title, lead, noteTitle, note, actions }) => (
  <section className="blog-hero">
    <div className="blog-hero-inner">
      <div>
        <div className="blog-kicker">{eyebrow}</div>
        <h1 className="blog-title">{title}</h1>
        <p className="blog-lede">{lead}</p>
        {actions && <div className="site-page-actions">{actions}</div>}
      </div>
      <aside className="blog-hero-aside">
        <img className="blog-brand-stamp" src="assets/logo-square.svg" alt="Steve Hill logo" />
        <h2>{noteTitle}</h2>
        <p>{note}</p>
      </aside>
    </div>
  </section>
);

const SideRailHiFiGPT = ({ label = "On this page", links }) => (
  <aside className="blog-side-rail" aria-label={label}>
    <div className="blog-side-label">{label}</div>
    <nav>
      {links.map(([href, text]) => (
        <a href={href} key={href}>{text}</a>
      ))}
    </nav>
  </aside>
);

const SectionIntroHiFiGPT = ({ eyebrow, title, copy }) => (
  <div className="blog-section-head">
    <div className="blog-kicker">{eyebrow}</div>
    <div>
      <h2>{title}</h2>
      {copy && <p style={{ color: "var(--ink-soft)", lineHeight: 1.66, maxWidth: 760 }}>{copy}</p>}
    </div>
  </div>
);

const LedgerHiFiGPT = ({ items }) => (
  <div className="site-ledger-grid">
    {items.map(([value, label]) => (
      <div className="site-ledger-cell" key={label}>
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    ))}
  </div>
);

const MethodStripHiFiGPT = ({ steps }) => (
  <div className="method-strip">
    {steps.map(([n, label]) => (
      <div className="method-step" key={label}>
        <span>{n}</span>
        <b>{label}</b>
      </div>
    ))}
  </div>
);

const DASH_GPT_HIFI = [
  ["N", "Netgain", "B2B SaaS", "Mid-Funnel Velocity Dashboard", "Attribution, scoring and stage velocity across a six-product portfolio.", "+250% lift", "Case-Netgain_GPT.html", "brand-netgain", "PreviewNetgain"],
  ["F", "Foxit", "Document SaaS", "API Client Growth and Activation Funnel", "Activation, expansion and lifecycle visibility across four products.", "72 hrs/wk", "Case-Foxit_GPT.html", "brand-foxit", "PreviewFoxit"],
  ["UTA", "Utah Transit Authority", "Operations BI", "TVM Failure Sequences and Service Recovery", "Failure-path analysis, support visibility and recovery prioritization.", "$15K view", "Case-UTA_GPT.html", "brand-uta", "PreviewUTA"],
  ["WS", "Website Squirrel", "Lead Gen", "Lead Segmentation and CAC Dashboard", "Lead quality, source economics and CAC payback for spend decisions.", "60%+ CAC drop", "Case-Squirrel_GPT.html", "brand-squirrel", "PreviewSquirrel"],
];

const DashGridHiFiGPT = () => (
  <div className="dash-grid">
    {DASH_GPT_HIFI.map(([tag, brand, sub, title, desc, metric, href, brandClass, previewName]) => {
      const Preview = window[previewName];
      return (
        <a key={brand} className={`dash-card ${brandClass}`} href={href}>
          <div className="dash-card-preview">
            <Preview />
          </div>
          <div className="dash-card-body">
            <div className="dash-card-tag">
              <span className="dash-card-mark">{tag}</span>
              <div>
                <div className="dash-card-brand">{brand}</div>
                <div className="dash-card-sub">{sub}</div>
              </div>
            </div>
            <div className="dash-card-title">{title}</div>
            <div className="dash-card-desc">{desc}</div>
            <div className="dash-card-foot">
              <span className="tag tag-amber">{metric}</span>
              <span className="dash-card-open">open GPT example -&gt;</span>
            </div>
          </div>
        </a>
      );
    })}
  </div>
);

const EXAMPLES_GPT_HIFI = [
  ["01", "Foxit", "Lifecycle reporting", "Unified product, billing, support and marketing signals into one lifecycle system.", "Reporting trust", "Case-Foxit_GPT.html"],
  ["02", "Website Squirrel", "Acquisition quality", "Cut lead CAC by prioritizing source feedback, routing and segment quality.", "CAC efficiency", "Case-Squirrel_GPT.html"],
  ["03", "Netgain", "Attribution and velocity", "Found the mid-funnel signal inside a long, multi-touch SaaS buyer journey.", "Conversion lift", "Case-Netgain_GPT.html"],
  ["04", "UTA", "Operations BI", "Mapped ticket-machine failure paths into an action queue and vendor accountability view.", "Service visibility", "Case-UTA_GPT.html"],
];

const ExamplesListHiFiGPT = () => (
  <div className="examples-list">
    {EXAMPLES_GPT_HIFI.map(([idx, brand, theme, title, lever, href]) => (
      <a key={brand} className="example-row" href={href}>
        <div className="example-row-idx">
          <b>{idx}</b>
          <br />
          {brand}
        </div>
        <div>
          <div className="caption" style={{ marginBottom: 8 }}>{theme}</div>
          <h3 className="example-row-title">{title}</h3>
          <p className="example-row-desc">
            A concise STAR proof point with lifecycle context, the operating lever, and the result.
          </p>
        </div>
        <div className="example-row-stats">
          <span className="tag tag-amber">{lever}</span>
          <span style={{ fontFamily: "var(--mono)", fontSize: 12, marginTop: 6, fontWeight: 600 }}>
            read GPT example -&gt;
          </span>
        </div>
      </a>
    ))}
  </div>
);

const HomeGPT = () => (
  <SiteShellHiFiGPT active="home">
    <BlogHeroHiFiGPT
      eyebrow="Steve Hill / marketing ops, BI and analytics"
      title={<>Make the <span className="paper-cut">messy middle</span> usable.</>}
      lead="I build the measurement layer between marketing spend and business outcomes: scorecards, attribution, lifecycle maps, operating dashboards and plain-English decision support."
      noteTitle="Practical, clear, and operating-minded."
      note="The work should feel senior without sounding inflated. It should show judgment, not just technical range."
      actions={<><a className="btn btn-filled" href="Examples_GPT.html">See examples</a><a className="btn" href="HowIWork_GPT.html">How I work</a></>}
    />
    <div className="blog-rail-layout">
      <SideRailHiFiGPT links={[["#proof", "Proof"], ["#operating-system", "Operating system"], ["#dashboards", "Dashboards"], ["#examples", "Examples"], ["#resume", "Resume"]]} />
      <div>
        <section id="proof" className="blog-section">
          <LedgerHiFiGPT items={[
            ["60%+", "lead CAC reduction through better segmentation and source-quality feedback"],
            ["250%", "mid-funnel lift by finding the moments that actually moved conversion"],
            ["72 hrs/wk", "manual reporting removed by reconciling product, billing, support and marketing"],
            ["13+", "years across marketing operations, BI, SaaS, local services and analytics"],
          ]} />
        </section>
        <section id="operating-system" className="blog-section">
          <SectionIntroHiFiGPT eyebrow="Operating system" title="The site should read like a working system, not a gallery." copy="Each page answers a different hiring-team question: how I think, what I have built, where the proof lives and what the numbers mean." />
          <div className="pillar-ledger">
            {[
              ["01 / Decision", "Start with the business decision.", "If no action changes, the analysis probably should not happen yet."],
              ["02 / Handoff", "Measure where the work changes hands.", "Marketing, intake, sales, service and follow-up all shape the outcome."],
              ["03 / Economics", "Connect cost to booked outcomes.", "ROAS, CAC and cost per booked customer need clean downstream handoffs."],
              ["04 / Loop", "Close the loop after the recommendation.", "The next readout should say whether the move actually worked."],
            ].map(([num, title, copy]) => (
              <div className="pillar-line" key={title}>
                <div className="pillar-number">{num}</div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="dashboards" className="blog-section site-dash-tight">
          <SectionIntroHiFiGPT eyebrow="Dashboards" title="Operating surfaces with a reason to exist." copy="The dashboard library keeps the original card system, but the framing is now about the decision each artifact supports." />
          <DashGridHiFiGPT />
        </section>
        <section id="examples" className="blog-section site-example-tight">
          <SectionIntroHiFiGPT eyebrow="Examples" title="Proof, not archive." copy="Concise STAR stories, lifecycle context and one clear operating takeaway." />
          <ExamplesListHiFiGPT />
        </section>
        <section id="resume" className="blog-section">
          <SectionIntroHiFiGPT eyebrow="Resume" title="The through-line is operating clarity." copy="Marketing operations, BI, attribution, funnel analytics and executive reporting across several operating contexts." />
          <a className="btn btn-filled" href="Resume_GPT.html">Open resume page</a>
        </section>
      </div>
    </div>
  </SiteShellHiFiGPT>
);

const HowIWorkGPT = () => (
  <SiteShellHiFiGPT active="process">
    <BlogHeroHiFiGPT
      eyebrow="How I Work"
      title={<>Decision first. <span className="paper-cut">Dashboard second.</span></>}
      lead="My best work starts by clarifying the business decision, then building the scorecard, source logic or automation that makes the decision easier to make again."
      noteTitle="The point is not more reporting."
      note="The point is a cleaner operating rhythm: fewer mystery metrics, faster diagnosis and a clearer handoff between marketing, sales, service and finance."
    />
    <div className="blog-rail-layout">
      <SideRailHiFiGPT links={[["#method", "Method"], ["#scorecard", "Scorecard"], ["#breaks", "What breaks"], ["#good", "What good looks like"]]} />
      <div>
        <section id="method" className="blog-section">
          <SectionIntroHiFiGPT eyebrow="Operating loop" title="The five-step loop I keep coming back to." copy="This is the compact version of the problem-solving framework behind the portfolio." />
          <MethodStripHiFiGPT steps={[["01", "Frame"], ["02", "Source"], ["03", "Diagnose"], ["04", "Translate"], ["05", "Learn"], ["06", "Automate"]]} />
        </section>
        <section id="scorecard" className="blog-section">
          <SectionIntroHiFiGPT eyebrow="Example scorecard" title="The metrics I want visible before a growth conversation." copy="A quick scan of demand, conversion, cost and quality." />
          <div className="site-score-row">
            {[["Spend", "$22K"], ["Calls / day", "41"], ["Services booked / day", "13"], ["Cost / lead", "$118"], ["Cost / booked customer", "$342"], ["ROAS", "4.2x"]].map(([label, value]) => (
              <div className="site-score-card" key={label}><span>{label}</span><strong>{value}</strong></div>
            ))}
          </div>
        </section>
        <section id="breaks" className="blog-section">
          <div className="blog-note-band">
            <h3>What usually breaks.</h3>
            <p>The reporting exists, but the handoff is unclear. Spend is visible, but booked work is not connected cleanly. Leads are counted, but quality is vague. A dashboard shows what happened, but not what to do next.</p>
          </div>
        </section>
        <section id="good" className="blog-section">
          <div className="pillar-ledger">
            {[["01 / Definitions", "Shared funnel language", "Source, lead, booking and revenue definitions are owned and documented."], ["02 / Confidence", "Measured versus inferred", "Attribution is labeled honestly so leaders know how much weight to place on it."], ["03 / Cadence", "Weekly action rhythm", "The scorecard leads to scale, fix, test or stop decisions."], ["04 / Automation", "Less manual reporting", "Repeatable pulls and summaries free time for diagnosis."]].map(([num, title, copy]) => (
              <div className="pillar-line" key={title}><div className="pillar-number">{num}</div><h3>{title}</h3><p>{copy}</p></div>
            ))}
          </div>
        </section>
      </div>
    </div>
  </SiteShellHiFiGPT>
);

const DashboardsGPT = () => (
  <SiteShellHiFiGPT active="dash">
    <BlogHeroHiFiGPT
      eyebrow="Dashboards"
      title={<>Operating surfaces, <span className="paper-cut">not metric museums.</span></>}
      lead="A useful dashboard makes the next action easier to see: scale, pause, fix, test, route, follow up or investigate."
      noteTitle="Same assets, sharper framing."
      note="This page keeps the card system but positions each dashboard around the operating question a leader would actually ask."
    />
    <div className="blog-rail-layout">
      <SideRailHiFiGPT links={[["#ledger", "Summary"], ["#grid", "Dashboard library"], ["#questions", "Operating questions"]]} />
      <div>
        <section id="ledger" className="blog-section">
          <LedgerHiFiGPT items={[["6", "dashboard surfaces"], ["18+", "KPIs tracked"], ["4", "stories tied to dashboards"], ["1", "analytics backbone"]]} />
        </section>
        <section id="grid" className="blog-section site-dash-tight">
          <SectionIntroHiFiGPT eyebrow="Dashboard library" title="Each dashboard answers a different operating question." copy="The design stays visual, but the point is decision support." />
          <DashGridHiFiGPT />
        </section>
        <section id="questions" className="blog-section">
          <div className="post-timeline">
            {[["Where is the funnel leaking?", "Lead, booking and stage-rate movement."], ["Which sources deserve more budget?", "CAC, ROAS and booked-customer economics."], ["Where is the handoff weak?", "Call intake, routing, follow-up and service completion."], ["Which insight should become automated?", "Repeatable reporting that saves time and improves cadence."]].map(([title, copy], idx) => (
              <div className="post-line" key={title}><div className="post-line-date">0{idx + 1}</div><div><h3>{title}</h3><p>{copy}</p></div><div className="post-line-topic">Question</div></div>
            ))}
          </div>
        </section>
      </div>
    </div>
  </SiteShellHiFiGPT>
);

const ExamplesGPT = () => (
  <SiteShellHiFiGPT active="ex">
    <BlogHeroHiFiGPT
      eyebrow="Examples"
      title={<>STAR stories with <span className="paper-cut">operating proof.</span></>}
      lead="These are not long case-study archives. They are concise proof points: what was broken, what I owned, what changed, and which lifecycle lever moved."
      noteTitle="The interview use case matters."
      note="The reader should be able to scan one story and understand both the business result and the kind of operator behind it."
    />
    <div className="blog-rail-layout">
      <SideRailHiFiGPT links={[["#comparison", "Comparison"], ["#stories", "Stories"]]} />
      <div>
        <section id="comparison" className="blog-section">
          <SectionIntroHiFiGPT eyebrow="Comparison layer" title="The four stories cover different operating muscles." copy="Together they show attribution, lifecycle reporting, CAC efficiency, mid-funnel strategy and operational BI." />
          <div className="post-timeline">
            {EXAMPLES_GPT_HIFI.map(([idx, brand, theme, title, lever, href]) => (
              <a className="post-line" href={href} key={brand}><div className="post-line-date">{idx}</div><div><h3>{brand}: {lever}</h3><p>{title}</p></div><div className="post-line-topic">{theme}</div></a>
            ))}
          </div>
        </section>
        <section id="stories" className="blog-section site-example-tight">
          <SectionIntroHiFiGPT eyebrow="Four stories" title="Concise, branded, and built for scanning." copy="Each page keeps a lifecycle visual and STAR summary." />
          <ExamplesListHiFiGPT />
        </section>
      </div>
    </div>
  </SiteShellHiFiGPT>
);

const ResumeGPT = () => {
  const { ResumeSection } = window;
  return (
    <SiteShellHiFiGPT active="resume">
      <BlogHeroHiFiGPT
        eyebrow="Resume"
        title={<>The through-line is <span className="paper-cut">operating clarity.</span></>}
        lead="Marketing operations, BI, attribution, funnel analytics and executive reporting across SaaS, local services, public-sector operations and independent analytical work."
        noteTitle="What I want the resume to do."
        note="Make the range easy to understand without making the reader work too hard. The story is not tools. The story is judgment plus systems."
        actions={<><a className="btn btn-filled" href="assets/steve-hill-resume.pdf">Download PDF</a><a className="btn" href="mailto:me@stevehill.work">Email me</a></>}
      />
      <div className="blog-rail-layout">
        <SideRailHiFiGPT links={[["#experience", "Experience"], ["#capabilities", "Capabilities"]]} />
        <div>
          <section id="experience" className="blog-section">
            <ResumeSection />
          </section>
          <section id="capabilities" className="blog-section">
            <SectionIntroHiFiGPT eyebrow="What I build" title="Four repeatable capabilities behind the job history." copy="This keeps the resume page useful for a hiring manager who wants to know what the experience adds up to." />
            <div className="pillar-ledger">
              {[["01 / MarTech", "Integration and data flows", "CRM, source fields, campaign data and process automation."], ["02 / Attribution", "CAC and ROAS clarity", "Measurement that connects spend to booked and retained outcomes."], ["03 / Scorecards", "Executive operating rhythm", "Weekly views that show what moved and what to do next."], ["04 / Lifecycle", "Handoff diagnostics", "Marketing, sales, service, support, follow-up and referral in one journey."]].map(([num, title, copy]) => (
                <div className="pillar-line" key={title}><div className="pillar-number">{num}</div><h3>{title}</h3><p>{copy}</p></div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </SiteShellHiFiGPT>
  );
};

const CaseStudyGPT = ({ cfg }) => {
  const Preview = cfg.preview;
  return (
    <SiteShellHiFiGPT active="ex">
      <div className={`site-case ${cfg.brandClass}`}>
        <section className="article-masthead">
          <div className="article-masthead-inner">
            <article>
              <a className="article-back" href="Examples_GPT.html">Back to examples</a>
              <div className="blog-kicker">{cfg.brand} / STAR proof / {cfg.industry}</div>
              <h1 className="article-title">{cfg.title}</h1>
              <p className="article-dek">{cfg.lead}</p>
              <div className="site-page-actions">
                <a className="btn btn-filled" href="Examples_GPT.html">Back to examples</a>
                <a className="btn" href="Dashboards_GPT.html">See dashboards</a>
              </div>
            </article>
            <aside className="article-snapshot">
              <div className="article-meta-line"><span className="tag tag-amber">{cfg.readTime}</span><span className="tag">{cfg.industry}</span></div>
              <h2>{cfg.dashTitle}</h2>
              <p>{cfg.dashSub}</p>
              <div style={{ height: 150, marginTop: 18 }}><Preview /></div>
            </aside>
          </div>
        </section>
        <div className="article-content-layout">
          <SideRailHiFiGPT label="Story sections" links={[["#metrics", "Metrics"], ["#lifecycle", "Lifecycle"], ["#star", "STAR"], ["#takeaway", "Takeaway"]]} />
          <article className="article-prose">
            <section id="metrics">
              <LedgerHiFiGPT items={cfg.stats} />
            </section>
            <section id="lifecycle">
              <h2>Where the work changed the journey.</h2>
              <p>{cfg.journeyIntro}</p>
              <div className="site-lifecycle-line">
                {cfg.journey.map((stage, idx) => (
                  <div key={stage.label} className={`site-lifecycle-stage ${stage.active ? "is-active" : ""}`}>
                    <span>Stage {idx + 1}</span>
                    <h3>{stage.label}</h3>
                    <p>{stage.note}</p>
                  </div>
                ))}
              </div>
            </section>
            <section id="star">
              <h2>The story in STAR format.</h2>
              <p>{cfg.starIntro}</p>
              <div className="site-star-list">
                {cfg.star.map(([label, copy]) => (
                  <div className="site-star-row" key={label}><h3>{label}</h3><p>{copy}</p></div>
                ))}
              </div>
            </section>
            <section id="takeaway">
              <div className="pull-quote">The value was not the artifact. The value was making the operating signal trustworthy enough to act on.</div>
              <p style={{ color: "var(--ink-light)", fontSize: 13 }}>All Raw Data Remains Proprietary</p>
            </section>
          </article>
          <aside className="article-side-note" aria-label="Story note">
            <div className="article-side-note-inner">
              <h3>Operating takeaway</h3>
              <p>{cfg.fix}</p>
            </div>
          </aside>
        </div>
      </div>
    </SiteShellHiFiGPT>
  );
};

const ReviewGPT = () => (
  <SiteShellHiFiGPT active="home">
    <BlogHeroHiFiGPT
      eyebrow="Review hub"
      title={<>HiFiBlog <span className="paper-cut">site set.</span></>}
      lead="This is the review entry point for the full GPT-suffixed site recreated in the HiFiBlog visual direction."
      noteTitle="What changed."
      note="The rest of the site now uses the same editorial heroes, side rails, ledgers, timelines and article-style story structure as the blog mock."
    />
    <div className="blog-rail-layout">
      <SideRailHiFiGPT links={[["#pages", "Pages"]]} />
      <section id="pages" className="blog-section">
        <SectionIntroHiFiGPT eyebrow="Pages" title="Review the HiFiBlog-style variants." copy="Original sandbox pages are still available. These are the GPT-suffixed review pages." />
        <div className="post-timeline">
          {[["Home", "Home_GPT.html", "Overall story and proof hierarchy"], ["How I Work", "HowIWork_GPT.html", "Operating principles and scorecard examples"], ["Dashboards", "Dashboards_GPT.html", "Dashboard framing as decision surfaces"], ["Blog", "Blog_GPT.html", "Blog index mock"], ["Examples", "Examples_GPT.html", "Story hub and comparison layer"], ["Resume", "Resume_GPT.html", "Resume as capability narrative"], ["Foxit", "Case-Foxit_GPT.html", "Lifecycle reporting story"], ["Website Squirrel", "Case-Squirrel_GPT.html", "CAC and lead-quality story"], ["Netgain", "Case-Netgain_GPT.html", "Attribution and mid-funnel story"], ["UTA", "Case-UTA_GPT.html", "Operations BI story"]].map(([name, href, copy]) => (
            <a className="post-line" href={href} key={name}><div className="post-line-date">{name}</div><div><h3>{copy}</h3><p>Open the GPT version and compare against the original sandbox page.</p></div><div className="post-line-topic">Open</div></a>
          ))}
        </div>
      </section>
    </div>
  </SiteShellHiFiGPT>
);

Object.assign(window, {
  NavHiFiGPT,
  SiteShellHiFiGPT,
  HomeGPT,
  HowIWorkGPT,
  DashboardsGPT,
  ExamplesGPT,
  ResumeGPT,
  CaseStudyGPT,
  ReviewGPT,
});
