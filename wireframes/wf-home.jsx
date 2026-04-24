// Home page wireframe variants — 5 directions

// ============ V1: Terminal / IDE home ============
const HomeV1 = () => (
  <Frame url="stevehill.work">
    <div style={{ background: "#0d0d0d", color: "#e5e5e5", padding: "18px 28px", fontFamily: "var(--mono)", fontSize: 12, display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1.5px solid #2a2a2a" }}>
      <div style={{display:"flex", alignItems:"center", gap:10}}>
        <span style={{color:"#4ade80"}}>$</span><span style={{fontWeight:700}}>sh</span>
        <span style={{color:"#666", marginLeft:8}}>~/portfolio</span>
      </div>
      <div style={{display:"flex", gap:18, color:"#aaa"}}>
        <span>home</span><span>work</span><span>resume</span><span style={{color:"#4ade80"}}>contact →</span>
      </div>
    </div>
    <div style={{ background: "#0d0d0d", color: "#e5e5e5", padding: "56px 28px 40px", fontFamily: "var(--mono)" }}>
      <div style={{ color: "#4ade80", fontSize: 11, letterSpacing: "0.1em", marginBottom: 14 }}>&gt; run --role=bi-marketing --exp=13y</div>
      <div style={{ fontSize: 34, fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.01em", marginBottom: 22 }}>
        Marketing &amp; revenue<br/>analytics for the<br/><span style={{ color: "#4ade80" }}>messy middle_</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, marginTop: 32, borderTop: "1px dashed #333", borderBottom: "1px dashed #333", padding: "22px 0" }}>
        {[["+250%","mid-funnel lift"],["60%+","CAC reduction"],["72hr","saved / wk"],["13yr","revops"]].map(([n,l])=>(
          <div key={n}>
            <div style={{fontSize:28, fontWeight:700, color:"#4ade80"}}>{n}</div>
            <div style={{fontSize:10, color:"#888", letterSpacing:"0.08em", textTransform:"uppercase", marginTop:4}}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{display:"flex", gap:14, marginTop: 26}}>
        <Btn filled style={{background:"#4ade80", color:"#0d0d0d", borderColor:"#4ade80"}}>&gt; cat resume.md</Btn>
        <Btn style={{background:"transparent", color:"#e5e5e5", borderColor:"#555"}}>view --examples</Btn>
      </div>
    </div>
    <div style={{padding:"32px 28px", background:"var(--paper)"}}>
      <Annot>featured dashboards — grid of 6 cards w/ mini chart previews</Annot>
      <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12, marginTop:12}}>
        {["netgain","foxit","UTA","sqrl","healthcty","hill cap"].map(n=>(
          <div key={n} style={{border:"1.5px solid var(--ink)", borderRadius:4, padding:10}}>
            <div style={{fontFamily:"var(--mono)", fontSize:10, color:"var(--ink-light)"}}>{n}</div>
            <div style={{height:36, marginTop:6}}><MiniChart kind={["line","bar","funnel","line","bar","line"][["netgain","foxit","UTA","sqrl","healthcty","hill cap"].indexOf(n)]}/></div>
          </div>
        ))}
      </div>
    </div>
  </Frame>
);

// ============ V2: Editorial / magazine ============
const HomeV2 = () => (
  <Frame url="stevehill.work">
    <div style={{ padding: "18px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1.5px solid var(--ink)", background: "var(--paper-warm)" }}>
      <div style={{fontFamily:"var(--sans)", fontWeight:700, fontSize:18, letterSpacing:"-0.02em"}}>Steve Hill<span style={{color:"var(--accent-amber)"}}>.</span></div>
      <div style={{display:"flex", gap:22, fontFamily:"var(--sans)", fontSize:13, fontWeight:500}}>
        <span>Work</span><span>How I work</span><span>Resume</span><span>Writing</span>
      </div>
    </div>
    <div style={{ padding: "60px 40px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, borderBottom: "1.5px solid var(--ink)" }}>
      <div>
        <div className="wf-caption" style={{marginBottom:14}}>VOL.01 · PORTFOLIO · 2026</div>
        <div style={{fontFamily:"var(--sans)", fontWeight:700, fontSize:46, lineHeight:1.02, letterSpacing:"-0.03em", marginBottom:20}}>
          Dashboards,<br/>models &amp; the <span className="wf-underline-wavy">messy middle</span> of the funnel.
        </div>
        <div className="wf-lorem" style={{fontFamily:"var(--sans)", fontSize:14, color:"var(--ink-soft)", lineHeight:1.6, maxWidth:440}}>
          13 years of RevOps across SaaS, local services, healthcare &amp; public sector. Built for hiring teams that need a trustworthy operator.
        </div>
        <div style={{display:"flex", gap:10, marginTop:22}}>
          <Btn filled>Read resume</Btn><Btn>How I work</Btn>
        </div>
      </div>
      <div style={{border:"1.5px solid var(--ink)", padding:0}}>
        <Placeholder label="featured dashboard — netgain" h={260} style={{border:"none"}}/>
        <div style={{padding:"14px 18px", borderTop:"1.5px solid var(--ink)", fontFamily:"var(--sans)", fontSize:13}}>
          <b>Netgain</b> · +250% mid-funnel lift — multi-touch attribution across 6 products.
        </div>
      </div>
    </div>
    <div style={{padding:"36px 40px", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:20}}>
      {[["+250%","mid-funnel lift"],["60%+","CAC reduction"],["72hr","saved per week"],["$2M","fare context"]].map(([n,l])=>(
        <div key={n} style={{borderTop:"2px solid var(--ink)", paddingTop:12}}>
          <div className="wf-bignum" style={{fontSize:38, fontFamily:"var(--sans)"}}>{n}</div>
          <div style={{fontFamily:"var(--sans)", fontSize:12, color:"var(--ink-soft)", marginTop:4}}>{l}</div>
        </div>
      ))}
    </div>
  </Frame>
);

// ============ V3: Bloomberg terminal ============
const HomeV3 = () => (
  <Frame url="stevehill.work">
    <div style={{ background: "#1a1410", color: "#ffb000", fontFamily: "var(--mono)", fontSize: 11 }}>
      <div style={{ padding: "6px 14px", background: "#2a1f17", display: "flex", justifyContent: "space-between", borderBottom: "1px solid #ffb000" }}>
        <span>&lt;SHILL&gt; PORTFOLIO TERMINAL v1.0</span>
        <span>REVOPS · BI · MKTG · AI</span>
        <span>HIT &lt;GO&gt;</span>
      </div>
      <div style={{ padding: "20px 14px", display: "grid", gridTemplateColumns: "140px 1fr 140px", gap: 14, borderBottom: "1px solid #ffb000" }}>
        <div>
          <div style={{color:"#fff", marginBottom:8}}>&gt; NAV</div>
          {["01 HOME","02 WORK","03 MODELS","04 RESUME","05 PLAN","06 WRITING"].map(x=>(
            <div key={x} style={{padding:"2px 0", opacity: x==="01 HOME"?1:0.7}}>{x==="01 HOME"?"▸ ":"  "}{x}</div>
          ))}
        </div>
        <div>
          <div style={{fontSize:22, color:"#fff", fontWeight:700, marginBottom:14, letterSpacing:"0.02em"}}>MARKETING &amp; REVENUE ANALYTICS</div>
          <div style={{marginBottom:16, opacity:0.85}}>Dashboards, marketing models, BI models, resume &amp; an interview-ready 120-day plan.</div>
          <div style={{border:"1px solid #ffb000", padding:10, marginBottom:12}}>
            <div style={{color:"#fff", marginBottom:6}}>&gt; RESULTS (SELECT)</div>
            <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:10}}>
              {[["+250%","MID-FNL"],["60%+","CAC DROP"],["72H","SAVED/WK"],["$300M","FARE ANL"]].map(([a,b])=>(
                <div key={a}><div style={{fontSize:18, fontWeight:700, color:"#4ade80"}}>{a}</div><div style={{fontSize:9, opacity:0.7}}>{b}</div></div>
              ))}
            </div>
          </div>
          <div style={{border:"1px solid #ffb000", padding:10}}>
            <div style={{color:"#fff", marginBottom:6}}>&gt; FEATURED DASHBOARDS</div>
            {[
              ["NTGN","Netgain · B2B SaaS mid-funnel","+250% lift"],
              ["FOXT","Foxit · API client growth","72hr/wk"],
              ["UTA","Utah Transit · fare elasticity","$300M"],
              ["SQRL","Website Squirrel · CAC scoring","60%+"],
            ].map(([t,d,m])=>(
              <div key={t} style={{display:"grid", gridTemplateColumns:"60px 1fr 90px", gap:10, padding:"4px 0", borderBottom:"1px dashed #553"}}>
                <span style={{color:"#fff"}}>{t}</span><span>{d}</span><span style={{color:"#4ade80", textAlign:"right"}}>{m}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{color:"#fff", marginBottom:8}}>&gt; STATUS</div>
          <div style={{padding:"4px 0"}}>OPEN TO: fulltime</div>
          <div style={{padding:"4px 0"}}>OPEN TO: consulting</div>
          <div style={{padding:"4px 0"}}>LOC: Utah</div>
          <div style={{padding:"4px 0"}}>EXP: 13y</div>
          <div style={{marginTop:16, color:"#fff"}}>&gt; CONTACT</div>
          <div style={{padding:"4px 0"}}>sthill01@gmail</div>
          <div style={{padding:"4px 0"}}>801-850-1253</div>
        </div>
      </div>
      <div style={{padding:"6px 14px", background:"#2a1f17", fontSize:10, opacity:0.7}}>F1:HELP F2:RESUME F3:WORK F4:CONTACT · MON APR 24 2026 · LIVE</div>
    </div>
  </Frame>
);

// ============ V4: Minimal Swiss / grid ============
const HomeV4 = () => (
  <Frame url="stevehill.work">
    <div style={{padding:"20px 48px", display:"flex", justifyContent:"space-between", borderBottom:"1px solid var(--line-soft)", fontFamily:"var(--sans)"}}>
      <div style={{fontWeight:700, letterSpacing:"-0.02em"}}>Steve Hill</div>
      <div style={{display:"flex", gap:32, fontSize:13, color:"var(--ink-soft)"}}>
        <span>Index</span><span>Work</span><span>Process</span><span>CV</span><span>→ Contact</span>
      </div>
    </div>
    <div style={{padding:"80px 48px 40px", display:"grid", gridTemplateColumns:"repeat(12, 1fr)", gap:24, minHeight:380}}>
      <div style={{gridColumn:"1 / 3"}} className="wf-caption">001 · index</div>
      <div style={{gridColumn:"3 / 13"}}>
        <div style={{fontFamily:"var(--sans)", fontSize:72, fontWeight:500, lineHeight:0.95, letterSpacing:"-0.04em", color:"var(--ink)"}}>
          Marketing<br/>&amp; revenue<br/><span style={{color:"var(--ink-light)"}}>analytics.</span>
        </div>
        <div style={{marginTop:32, fontFamily:"var(--sans)", fontSize:14, color:"var(--ink-soft)", maxWidth:520, lineHeight:1.6}}>
          Dashboards, marketing models, BI models, examples, a focused resume and an interview-ready 120-day plan.
        </div>
      </div>
    </div>
    <div style={{padding:"24px 48px", display:"grid", gridTemplateColumns:"repeat(12, 1fr)", gap:24, borderTop:"1px solid var(--line-soft)"}}>
      {[
        ["01","Netgain","+250%","mid-funnel"],
        ["02","Foxit","72h/wk","saved"],
        ["03","Website Squirrel","60%+","CAC drop"],
        ["04","Healthicity","2×","conv lift"],
      ].map(([n,t,v,l])=>(
        <div key={n} style={{gridColumn:"span 3", borderTop:"1px solid var(--ink)", paddingTop:10, fontFamily:"var(--sans)"}}>
          <div style={{fontSize:10, color:"var(--ink-light)", letterSpacing:"0.1em"}}>{n}</div>
          <div style={{fontSize:14, fontWeight:600, margin:"4px 0 10px"}}>{t}</div>
          <div style={{fontSize:28, fontWeight:600, letterSpacing:"-0.02em"}}>{v}</div>
          <div style={{fontSize:11, color:"var(--ink-soft)"}}>{l}</div>
        </div>
      ))}
    </div>
  </Frame>
);

// ============ V5: Big-number / proof-first ============
const HomeV5 = () => (
  <Frame url="stevehill.work">
    <div style={{padding:"18px 36px", display:"flex", justifyContent:"space-between", borderBottom:"1.5px solid var(--ink)", background:"var(--ink)", color:"var(--paper)"}}>
      <div style={{fontFamily:"var(--mono)", fontWeight:700, fontSize:13}}>[SH]_ steve hill</div>
      <div style={{display:"flex", gap:22, fontFamily:"var(--mono)", fontSize:12}}>
        <span>work</span><span>models</span><span>resume</span><span style={{color:"var(--accent-amber)"}}>↳ hire me</span>
      </div>
    </div>
    <div style={{padding:"48px 36px 24px"}}>
      <div className="wf-caption" style={{marginBottom:20}}>13 YRS · BI · MKTG · REVOPS</div>
      <div style={{fontFamily:"var(--sans)", fontWeight:800, fontSize:180, lineHeight:0.85, letterSpacing:"-0.05em", color:"var(--ink)"}}>250<span style={{color:"var(--accent-amber)"}}>%</span></div>
      <div style={{fontFamily:"var(--sans)", fontSize:20, fontWeight:500, marginTop:12, maxWidth:500}}>
        mid-funnel lift at Netgain. And that&apos;s one example — <span className="wf-underline-amber">here are three more</span>.
      </div>
    </div>
    <div style={{padding:"0 36px 40px", display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:18}}>
      {[
        ["60%+","CAC reduction","Website Squirrel — scored quality over volume"],
        ["72h","saved per week","Foxit — unified reporting across 4 products"],
        ["2×","conversion lift","Healthicity — 7-dim lead scoring framework"],
      ].map(([n,l,d])=>(
        <div key={n} style={{border:"1.5px solid var(--ink)", padding:"18px 16px"}}>
          <div style={{fontFamily:"var(--sans)", fontWeight:800, fontSize:56, letterSpacing:"-0.03em", lineHeight:1}}>{n}</div>
          <div style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.08em", textTransform:"uppercase", marginTop:6, color:"var(--ink-light)"}}>{l}</div>
          <div style={{fontFamily:"var(--sans)", fontSize:13, color:"var(--ink-soft)", marginTop:10, lineHeight:1.4}}>{d}</div>
        </div>
      ))}
    </div>
    <div style={{padding:"22px 36px", background:"var(--accent-amber)", borderTop:"1.5px solid var(--ink)", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
      <div style={{fontFamily:"var(--sans)", fontWeight:600}}>Hiring for a marketing / BI lead? Start with the resume.</div>
      <Btn filled>Resume →</Btn>
    </div>
  </Frame>
);

Object.assign(window, { HomeV1, HomeV2, HomeV3, HomeV4, HomeV5 });
