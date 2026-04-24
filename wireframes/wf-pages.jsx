// Dashboards index + Examples index + Single case study wireframes

// ======= DASHBOARDS INDEX — 2 variants shown side-by-side =======
const DashboardsIndexA = () => (
  <Frame url="stevehill.work/Dashboards">
    <div style={{padding:"14px 28px", borderBottom:"1.5px solid var(--ink)", display:"flex", justifyContent:"space-between", fontFamily:"var(--sans)"}}>
      <div style={{fontFamily:"var(--mono)", fontWeight:700}}>[SH]_</div>
      <div style={{display:"flex", gap:18, fontSize:12}}><span style={{color:"var(--accent-amber)"}}>Dashboards</span><span>Examples</span><span>Models</span><span>Resume</span></div>
    </div>
    <div style={{padding:"36px 28px 16px"}}>
      <Eyebrow>DASHBOARDS · 6</Eyebrow>
      <div style={{fontFamily:"var(--sans)", fontSize:36, fontWeight:700, letterSpacing:"-0.02em", maxWidth:640}}>Built in the <span className="wf-underline-wavy">visual language</span> of the brands they support.</div>
      <div style={{display:"flex", gap:8, marginTop:18}}>
        {["all","revops","bi","saas","compliance","quant"].map((t,i)=><Tag key={t} amber={i===0}>{t}</Tag>)}
      </div>
    </div>
    <div style={{padding:"20px 28px 32px", display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14}}>
      {[
        ["N","Netgain","B2B SaaS mid-funnel","+250% lift"],
        ["F","Foxit","API client growth funnel","72 hrs/wk"],
        ["UTA","Utah Transit","Fare revenue & elasticity","$300M+"],
        ["S","Website Squirrel","Lead segmentation & CAC","60%+ drop"],
        ["H","Healthicity","Lead scoring framework","2× conv"],
        ["HC","Hill Capital","Quant equity portfolio","LIVE"],
      ].map(([tag,t,d,m])=>(
        <div key={t} className="wf-box" style={{padding:0, overflow:"hidden"}}>
          <div style={{height:90, position:"relative", borderBottom:"1.5px solid var(--ink)", padding:10}}><MiniChart kind={["line","funnel","bar","line","funnel","line"][["Netgain","Foxit","Utah Transit","Website Squirrel","Healthicity","Hill Capital"].indexOf(t)]}/></div>
          <div style={{padding:12}}>
            <div style={{display:"flex", alignItems:"center", gap:8, marginBottom:4}}>
              <span style={{width:22, height:22, border:"1.5px solid var(--ink)", borderRadius:3, display:"inline-flex", alignItems:"center", justifyContent:"center", fontSize:10, fontFamily:"var(--mono)", fontWeight:700}}>{tag}</span>
              <span style={{fontFamily:"var(--sans)", fontWeight:700, fontSize:14}}>{t}</span>
            </div>
            <div style={{fontFamily:"var(--sans)", fontSize:12, color:"var(--ink-soft)"}}>{d}</div>
            <div style={{marginTop:10, display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <Tag amber>{m}</Tag>
              <span style={{fontFamily:"var(--mono)", fontSize:11}}>open →</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Frame>
);

// Terminal table variant
const DashboardsIndexB = () => (
  <Frame url="stevehill.work/Dashboards">
    <div style={{background:"#0d0d0d", color:"#e5e5e5", fontFamily:"var(--mono)", padding:"20px 26px"}}>
      <div style={{fontSize:11, color:"#4ade80", marginBottom:8}}>&gt; ls -la ./dashboards</div>
      <div style={{fontSize:22, color:"#fff", fontWeight:700, marginBottom:16}}>6 dashboards, filtered by outcome.</div>
      <div style={{display:"flex", gap:12, fontSize:11, marginBottom:16, opacity:0.8}}>
        <span style={{color:"#4ade80"}}>▸ all</span><span>revops</span><span>bi</span><span>saas</span><span>compliance</span><span>quant</span>
      </div>
      <div style={{border:"1px solid #333"}}>
        <div style={{display:"grid", gridTemplateColumns:"40px 150px 1fr 110px 80px", gap:10, padding:"8px 12px", borderBottom:"1px solid #333", color:"#888", fontSize:10, letterSpacing:"0.08em", textTransform:"uppercase"}}>
          <span>#</span><span>brand</span><span>description</span><span>outcome</span><span></span>
        </div>
        {[
          ["01","Netgain","B2B SaaS mid-funnel · MQL→SQL→Opp, attrib. 6 products","+250% lift"],
          ["02","Foxit","API client growth · Trial→Activated→Paid + MRR waterfall","72 hrs/wk"],
          ["03","UTA","Fare revenue & elasticity · 3-scenario projections","$300M+"],
          ["04","Squirrel","Lead segmentation & CAC · A-D tiered scoring","60%+ drop"],
          ["05","Healthicity","Lead scoring · 7-dim HubSpot + SF (A+–F)","2× conv"],
          ["06","Hill Capital","Quant equity · factor, momentum, mean-rev, options","LIVE"],
        ].map(([n,b,d,o])=>(
          <div key={n} style={{display:"grid", gridTemplateColumns:"40px 150px 1fr 110px 80px", gap:10, padding:"10px 12px", borderBottom:"1px dashed #222", fontSize:12, alignItems:"center"}}>
            <span style={{color:"#666"}}>{n}</span>
            <span style={{color:"#fff", fontWeight:600}}>{b}</span>
            <span style={{opacity:0.8}}>{d}</span>
            <span style={{color:"#4ade80"}}>{o}</span>
            <span style={{textAlign:"right", color:"#ffb000"}}>open →</span>
          </div>
        ))}
      </div>
    </div>
  </Frame>
);

// ======= EXAMPLES / CASE STUDIES INDEX =======
const ExamplesIndexA = () => (
  <Frame url="stevehill.work/CaseStudies">
    <div style={{padding:"14px 28px", borderBottom:"1.5px solid var(--ink)", display:"flex", justifyContent:"space-between", fontFamily:"var(--sans)"}}>
      <div style={{fontFamily:"var(--mono)", fontWeight:700}}>[SH]_</div>
      <div style={{display:"flex", gap:18, fontSize:12}}><span>Dashboards</span><span style={{color:"var(--accent-amber)"}}>Examples</span><span>Models</span><span>Resume</span></div>
    </div>
    <div style={{padding:"36px 28px 24px"}}>
      <Eyebrow>4 STAR EXAMPLES · FOR HIRING TEAMS</Eyebrow>
      <div style={{fontFamily:"var(--sans)", fontSize:36, fontWeight:700, letterSpacing:"-0.02em"}}>The strongest four work samples.</div>
    </div>
    <div style={{padding:"0 28px 36px", display:"flex", flexDirection:"column", gap:14}}>
      {[
        ["01","Foxit","Unified the reporting layer and freed 72 hours a week.","Cross-system lifecycle infra · product, billing, support, mktg.",["72 hrs/wk","3× ROI","4 products"]],
        ["02","Squirrel","Cut lead CAC by 60%+ by scoring quality not volume.","Segmentation, scoring &amp; routing tied to profit, not top-of-funnel.",["60%+ CAC","15 hrs/wk","15% YoY"]],
        ["03","Netgain","Found the north star in a 30-touchpoint buyer journey.","Attribution + scoring + high-velocity testing on moments that matter.",["+250% mid","+15% qual","30 touches"]],
        ["04","UTA","Mapped ticket-machine failure paths into an action queue.","Rebuilt rider purchase paths; ranked failure sequences.",["$2M context","250+ TVMs","$15K recov."]],
      ].map(([n,b,t,d,stats])=>(
        <div key={n} style={{border:"1.5px solid var(--ink)", borderRadius:6, padding:"18px 20px", display:"grid", gridTemplateColumns:"60px 1fr 200px", gap:20, alignItems:"center"}}>
          <div style={{fontFamily:"var(--mono)", fontSize:11, color:"var(--ink-light)"}}>{n}<br/>{b}</div>
          <div>
            <div style={{fontFamily:"var(--sans)", fontWeight:700, fontSize:18, marginBottom:6}}>{t}</div>
            <div style={{fontFamily:"var(--sans)", fontSize:13, color:"var(--ink-soft)"}} dangerouslySetInnerHTML={{__html:d}}/>
          </div>
          <div style={{display:"flex", flexDirection:"column", gap:6, alignItems:"flex-end"}}>
            {stats.map(s=><Tag key={s} amber>{s}</Tag>)}
            <span style={{fontFamily:"var(--mono)", fontSize:11, marginTop:4}}>read →</span>
          </div>
        </div>
      ))}
    </div>
  </Frame>
);

// ======= SINGLE CASE STUDY =======
const CaseStudy = () => (
  <Frame url="stevehill.work/CaseStudies/netgain">
    <div style={{padding:"14px 28px", borderBottom:"1.5px solid var(--ink)", display:"flex", justifyContent:"space-between", fontFamily:"var(--sans)"}}>
      <div style={{fontFamily:"var(--mono)", fontWeight:700}}>[SH]_</div>
      <div style={{display:"flex", gap:18, fontSize:12}}><span>Dashboards</span><span style={{color:"var(--accent-amber)"}}>Examples</span><span>Resume</span></div>
    </div>
    <div style={{padding:"12px 28px", fontFamily:"var(--mono)", fontSize:11, color:"var(--ink-light)", borderBottom:"1px dashed var(--line-soft)"}}>
      examples / <span style={{color:"var(--ink)"}}>netgain · 6-product saas</span>
    </div>
    <div style={{padding:"36px 28px 20px"}}>
      <Tag amber>STAR · 6 MIN READ</Tag>
      <div style={{fontFamily:"var(--sans)", fontSize:40, fontWeight:700, letterSpacing:"-0.02em", marginTop:14, maxWidth:680, lineHeight:1.1}}>Found the north star inside a 30-touchpoint buyer journey.</div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:18, marginTop:26, borderTop:"2px solid var(--ink)", borderBottom:"2px solid var(--ink)", padding:"18px 0"}}>
        <div><div className="wf-bignum" style={{fontSize:44, fontFamily:"var(--sans)"}}>+250%</div><div className="wf-caption" style={{marginTop:4}}>mid-funnel lift</div></div>
        <div><div className="wf-bignum" style={{fontSize:44, fontFamily:"var(--sans)"}}>+15%</div><div className="wf-caption" style={{marginTop:4}}>qualified lead lift</div></div>
        <div><div className="wf-bignum" style={{fontSize:44, fontFamily:"var(--sans)"}}>30</div><div className="wf-caption" style={{marginTop:4}}>touchpoints avg.</div></div>
      </div>
    </div>
    <div style={{padding:"0 28px 36px", display:"grid", gridTemplateColumns:"120px 1fr", gap:24}}>
      {[
        ["S · Situation","6-product SaaS portfolio, disconnected attribution, 30-touch journey, no shared definition of mid-funnel quality."],
        ["T · Task","Find the moments that matter and build the reporting + testing engine around them."],
        ["A · Action","5-layer attribution stack (first, last, linear, multi-touch, position). Funnel redefined around 7 mid-funnel events. High-velocity testing cadence w/ MOps."],
        ["R · Result","+250% mid-funnel lift, +15% qualified lead lift, unified reporting consumed by leadership weekly."],
      ].map(([h,b])=>(
        <React.Fragment key={h}>
          <div className="wf-caption" style={{paddingTop:4, color:"var(--accent-amber)"}}>{h}</div>
          <div style={{fontFamily:"var(--sans)", fontSize:14, color:"var(--ink-soft)", lineHeight:1.6, paddingBottom:16, borderBottom:"1px dashed var(--line-soft)"}}>{b}</div>
        </React.Fragment>
      ))}
      <div className="wf-caption" style={{paddingTop:4, color:"var(--accent-amber)"}}>Artifacts</div>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10}}>
        <div style={{border:"1.5px solid var(--ink)", padding:10}}><div style={{height:50}}><MiniChart kind="funnel"/></div><div style={{fontFamily:"var(--mono)", fontSize:11, marginTop:6}}>dashboard →</div></div>
        <div style={{border:"1.5px solid var(--ink)", padding:10}}><div style={{height:50}}><MiniChart kind="bar"/></div><div style={{fontFamily:"var(--mono)", fontSize:11, marginTop:6}}>model →</div></div>
      </div>
    </div>
  </Frame>
);

// ======= HOW I WORK =======
const HowIWork = () => (
  <Frame url="stevehill.work/MOps">
    <div style={{padding:"14px 28px", borderBottom:"1.5px solid var(--ink)", display:"flex", justifyContent:"space-between", fontFamily:"var(--sans)"}}>
      <div style={{fontFamily:"var(--mono)", fontWeight:700}}>[SH]_</div>
      <div style={{display:"flex", gap:18, fontSize:12}}><span>Dashboards</span><span>Examples</span><span style={{color:"var(--accent-amber)"}}>How I Work</span><span>Resume</span></div>
    </div>
    <div style={{padding:"40px 28px 24px"}}>
      <Eyebrow>PROCESS · OPERATING APPROACH</Eyebrow>
      <div style={{fontFamily:"var(--sans)", fontSize:36, fontWeight:700, letterSpacing:"-0.02em"}}>How I work.</div>
      <div style={{fontFamily:"var(--sans)", fontSize:15, color:"var(--ink-soft)", maxWidth:620, marginTop:12, lineHeight:1.6}}>Funnel tracking, attribution, integrations, call-center handoffs, and the metrics marketing leaders care about first.</div>
    </div>
    <div style={{padding:"0 28px 36px"}}>
      <div style={{border:"1.5px solid var(--ink)", padding:18, background:"var(--paper-warm)", marginBottom:16}}>
        <div className="wf-caption" style={{marginBottom:8}}>THE 4-PHASE LOOP</div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr) 80px", alignItems:"center", gap:10}}>
          {[
            ["01","Baseline","inventory stack, tracking gaps, metric definitions"],
            ["02","Measure","shared scorecard, weekly rhythm, source-of-truth"],
            ["03","Test","hypotheses tied to mid-funnel moments"],
            ["04","Scale","ROAS + budget-move logic across brands"],
          ].map(([n,t,d])=>(
            <div key={n} style={{border:"1.5px solid var(--ink)", background:"var(--paper)", padding:10}}>
              <div style={{fontFamily:"var(--mono)", fontSize:10, color:"var(--ink-light)"}}>{n}</div>
              <div style={{fontFamily:"var(--sans)", fontWeight:700, fontSize:14, margin:"2px 0 4px"}}>{t}</div>
              <div style={{fontFamily:"var(--sans)", fontSize:11, color:"var(--ink-soft)"}}>{d}</div>
            </div>
          ))}
          <div style={{textAlign:"center", fontSize:24, color:"var(--accent-amber)", fontFamily:"var(--hand)"}}>↻ loop</div>
        </div>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:14}}>
        {[
          ["Tooling","HubSpot · Salesforce · GA4 · Looker · dbt · Snowflake · Python"],
          ["Metrics I care about","MQL→SQL conv, mid-funnel velocity, CAC by segment, LTV:CAC, payback"],
          ["Integrations","CRM↔MAP sync, call-center handoffs, product-usage signals into scoring"],
          ["Reporting cadence","Weekly scorecard · monthly deep-dive · quarterly narrative"],
        ].map(([h,d])=>(
          <div key={h} style={{border:"1.5px solid var(--ink)", padding:14}}>
            <div style={{fontFamily:"var(--sans)", fontWeight:700, fontSize:14, marginBottom:4}}>{h}</div>
            <div style={{fontFamily:"var(--sans)", fontSize:12, color:"var(--ink-soft)", lineHeight:1.5}}>{d}</div>
          </div>
        ))}
      </div>
    </div>
  </Frame>
);

// ======= RESUME =======
const Resume = () => (
  <Frame url="stevehill.work/Accomplishments">
    <div style={{padding:"14px 28px", borderBottom:"1.5px solid var(--ink)", display:"flex", justifyContent:"space-between", fontFamily:"var(--sans)"}}>
      <div style={{fontFamily:"var(--mono)", fontWeight:700}}>[SH]_</div>
      <div style={{display:"flex", gap:18, fontSize:12}}><span>Dashboards</span><span>Examples</span><span>How I Work</span><span style={{color:"var(--accent-amber)"}}>Resume</span></div>
    </div>
    <div style={{padding:"36px 28px 20px", display:"grid", gridTemplateColumns:"1fr 180px", gap:24, alignItems:"end", borderBottom:"2px solid var(--ink)"}}>
      <div>
        <Eyebrow>RESUME · 13 YEARS</Eyebrow>
        <div style={{fontFamily:"var(--sans)", fontSize:40, fontWeight:700, letterSpacing:"-0.02em"}}>Steve Hill</div>
        <div style={{fontFamily:"var(--sans)", fontSize:15, color:"var(--ink-soft)", marginTop:4}}>BI &amp; Marketing Analytics · Salt Lake City, UT</div>
      </div>
      <div style={{display:"flex", flexDirection:"column", gap:6, alignItems:"flex-end"}}>
        <Btn amber>↓ Download PDF</Btn>
        <span style={{fontFamily:"var(--mono)", fontSize:10, color:"var(--ink-light)"}}>updated Apr 2026</span>
      </div>
    </div>
    <div style={{padding:"24px 28px"}}>
      <div className="wf-caption" style={{marginBottom:12}}>EXPERIENCE</div>
      {[
        ["2023–now","Foxit","Sr. Mktg Ops / Analytics","Unified 4-product data layer → 72 hrs/wk saved, 3× ROI."],
        ["2021–23","Netgain","Marketing Analytics Lead","Multi-touch attribution → +250% mid-funnel, +15% qualified."],
        ["2019–21","Website Squirrel","Growth Analytics","A-D lead scoring → 60%+ CAC reduction, 15% YoY profit."],
        ["2017–19","Healthicity","BI / MOps","7-dim lead scoring → 2× app-form conversion."],
        ["2014–17","UTA (contract)","BI Analyst","Fare revenue + elasticity analysis ($300M+ context)."],
      ].map(([y,co,role,r])=>(
        <div key={y} style={{display:"grid", gridTemplateColumns:"120px 160px 1fr 200px", gap:16, padding:"14px 0", borderBottom:"1px dashed var(--line-soft)", fontFamily:"var(--sans)", fontSize:13}}>
          <span style={{fontFamily:"var(--mono)", fontSize:11, color:"var(--ink-light)"}}>{y}</span>
          <span style={{fontWeight:700}}>{co}</span>
          <span style={{color:"var(--ink-soft)"}}>{role}</span>
          <span style={{color:"var(--accent-amber)", fontWeight:600}}>{r}</span>
        </div>
      ))}
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:14, marginTop:28}}>
        <div><div className="wf-caption" style={{marginBottom:8}}>SKILLS</div><div style={{fontFamily:"var(--sans)", fontSize:12, color:"var(--ink-soft)"}}>SQL · dbt · Snowflake · HubSpot · SF · GA4 · Looker · Python · R</div></div>
        <div><div className="wf-caption" style={{marginBottom:8}}>DOMAINS</div><div style={{fontFamily:"var(--sans)", fontSize:12, color:"var(--ink-soft)"}}>B2B SaaS · local services · healthcare compliance · public sector · quant</div></div>
        <div><div className="wf-caption" style={{marginBottom:8}}>CONTACT</div><div style={{fontFamily:"var(--sans)", fontSize:12, color:"var(--ink-soft)"}}>sthill01@gmail · 801-850-1253 · linkedin.com/in/sthill</div></div>
      </div>
    </div>
  </Frame>
);

Object.assign(window, { DashboardsIndexA, DashboardsIndexB, ExamplesIndexA, CaseStudy, HowIWork, Resume });
