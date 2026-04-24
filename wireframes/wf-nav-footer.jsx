// Nav and footer variations

// Nav 1 — flat (current approach, kept visible)
const Nav1 = () => (
  <div className="wf-frame">
    <div className="wf-frame-bar"><span className="wf-frame-dot"></span><span className="wf-frame-dot"></span><span className="wf-frame-dot"></span><span style={{marginLeft:12}}>nav · flat / all visible</span></div>
    <div style={{padding:"16px 28px", display:"flex", justifyContent:"space-between", alignItems:"center", fontFamily:"var(--sans)"}}>
      <div style={{fontFamily:"var(--mono)", fontWeight:700}}>[SH]_</div>
      <div style={{display:"flex", gap:18, fontSize:13}}>
        <span>Home</span><span>How I Work</span><span>Dashboards</span><span>Models</span><span>BI</span><span>AI</span><span>Blog</span><span>Examples</span><span>Resume</span><span>Plan</span>
      </div>
      <Btn amber>Contact</Btn>
    </div>
  </div>
);

// Nav 2 — categorized dropdowns
const Nav2 = () => (
  <div className="wf-frame">
    <div className="wf-frame-bar"><span className="wf-frame-dot"></span><span className="wf-frame-dot"></span><span className="wf-frame-dot"></span><span style={{marginLeft:12}}>nav · categorized dropdowns</span></div>
    <div style={{padding:"16px 28px", display:"flex", justifyContent:"space-between", alignItems:"center", fontFamily:"var(--sans)", borderBottom:"1.5px solid var(--ink)"}}>
      <div style={{fontFamily:"var(--mono)", fontWeight:700}}>[SH]_</div>
      <div style={{display:"flex", gap:28, fontSize:14}}>
        <span>Work ▾</span>
        <span style={{color:"var(--accent-amber)"}}>Process ▾</span>
        <span>About ▾</span>
        <span>Resume</span>
      </div>
      <Btn amber>Get in touch</Btn>
    </div>
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", padding:"20px 28px", borderTop:"1.5px dashed var(--line-soft)", background:"var(--paper-warm)"}}>
      <div>
        <div className="wf-caption" style={{marginBottom:8}}>Work ▾</div>
        <div style={{fontSize:13}}>— Dashboards (6)</div>
        <div style={{fontSize:13}}>— Case examples (4)</div>
        <div style={{fontSize:13}}>— Marketing models</div>
        <div style={{fontSize:13}}>— BI models</div>
      </div>
      <div style={{background:"var(--paper)", padding:12, border:"1.5px solid var(--accent-amber)"}}>
        <div className="wf-caption" style={{color:"var(--accent-amber)", marginBottom:8}}>Process ▾ (open)</div>
        <div style={{fontSize:13}}>— How I Work</div>
        <div style={{fontSize:13}}>— Marketing AI</div>
        <div style={{fontSize:13}}>— 120-day plan</div>
        <div style={{fontSize:13}}>— Blog</div>
      </div>
      <div>
        <div className="wf-caption" style={{marginBottom:8}}>About ▾</div>
        <div style={{fontSize:13}}>— Bio</div>
        <div style={{fontSize:13}}>— Resume PDF</div>
        <div style={{fontSize:13}}>— LinkedIn</div>
      </div>
    </div>
  </div>
);

// Nav 3 — terminal command palette
const Nav3 = () => (
  <div className="wf-frame">
    <div className="wf-frame-bar"><span className="wf-frame-dot"></span><span className="wf-frame-dot"></span><span className="wf-frame-dot"></span><span style={{marginLeft:12}}>nav · terminal / cmd-k</span></div>
    <div style={{background:"#0d0d0d", padding:"14px 22px", display:"flex", justifyContent:"space-between", alignItems:"center", color:"#e5e5e5", fontFamily:"var(--mono)", fontSize:13}}>
      <span style={{color:"#4ade80"}}>$ sh</span>
      <div style={{border:"1px solid #333", padding:"6px 12px", borderRadius:4, color:"#888", minWidth:280, display:"flex", justifyContent:"space-between"}}>
        <span>&gt; jump to page...</span>
        <span style={{color:"#4ade80"}}>⌘K</span>
      </div>
      <span style={{color:"#4ade80"}}>contact →</span>
    </div>
    <div style={{background:"#0d0d0d", padding:"10px 22px", borderTop:"1px solid #222", display:"flex", gap:18, fontFamily:"var(--mono)", fontSize:11, color:"#888"}}>
      <span style={{color:"#4ade80"}}>▸ home</span><span>work/</span><span>models/</span><span>resume.md</span><span>plan.md</span><span>blog/</span>
    </div>
  </div>
);

// Nav 4 — minimal sidebar rail
const Nav4 = () => (
  <div className="wf-frame" style={{minHeight:280}}>
    <div className="wf-frame-bar"><span className="wf-frame-dot"></span><span className="wf-frame-dot"></span><span className="wf-frame-dot"></span><span style={{marginLeft:12}}>nav · left sidebar rail</span></div>
    <div style={{display:"grid", gridTemplateColumns:"180px 1fr", minHeight:250}}>
      <div style={{borderRight:"1.5px solid var(--ink)", padding:"20px 16px", background:"var(--paper-warm)", fontFamily:"var(--sans)", fontSize:13}}>
        <div style={{fontFamily:"var(--mono)", fontWeight:700, marginBottom:22}}>[SH]_</div>
        <div className="wf-caption" style={{marginBottom:8}}>Work</div>
        <div style={{padding:"4px 0"}}>Dashboards</div>
        <div style={{padding:"4px 0"}}>Examples</div>
        <div style={{padding:"4px 0"}}>Models</div>
        <div className="wf-caption" style={{marginTop:16, marginBottom:8}}>About</div>
        <div style={{padding:"4px 0"}}>How I work</div>
        <div style={{padding:"4px 0"}}>Resume</div>
        <div style={{padding:"4px 0"}}>Plan</div>
        <div className="wf-caption" style={{marginTop:16, marginBottom:8}}>More</div>
        <div style={{padding:"4px 0"}}>Blog</div>
        <div style={{padding:"4px 0"}}>AI</div>
      </div>
      <div style={{padding:"28px", color:"var(--ink-soft)"}}>
        <Annot>page content — sidebar collapses on mobile</Annot>
      </div>
    </div>
  </div>
);

// Footer A — classic, organized
const FooterA = () => (
  <div className="wf-frame">
    <div className="wf-frame-bar"><span className="wf-frame-dot"></span><span className="wf-frame-dot"></span><span className="wf-frame-dot"></span><span style={{marginLeft:12}}>footer · organized</span></div>
    <div style={{padding:"40px 36px 24px", background:"var(--ink)", color:"var(--paper)", display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:28}}>
      <div>
        <div style={{fontFamily:"var(--mono)", fontWeight:700, fontSize:18, marginBottom:10}}>[SH]_</div>
        <div style={{fontFamily:"var(--sans)", fontSize:13, opacity:0.7, maxWidth:260, lineHeight:1.5}}>BI &amp; marketing analytics for the messy middle of the funnel.</div>
      </div>
      <div>
        <div className="wf-caption" style={{color:"var(--accent-amber)", marginBottom:10}}>Work</div>
        <div style={{fontFamily:"var(--sans)", fontSize:12, opacity:0.75, lineHeight:1.9}}>Dashboards<br/>Examples<br/>Models<br/>BI</div>
      </div>
      <div>
        <div className="wf-caption" style={{color:"var(--accent-amber)", marginBottom:10}}>About</div>
        <div style={{fontFamily:"var(--sans)", fontSize:12, opacity:0.75, lineHeight:1.9}}>How I work<br/>Resume<br/>120-day plan<br/>Blog</div>
      </div>
      <div>
        <div className="wf-caption" style={{color:"var(--accent-amber)", marginBottom:10}}>Contact</div>
        <div style={{fontFamily:"var(--sans)", fontSize:12, opacity:0.75, lineHeight:1.9}}>sthill01@gmail<br/>801-850-1253<br/>LinkedIn ↗</div>
      </div>
    </div>
    <div style={{padding:"12px 36px", background:"#000", color:"var(--paper)", fontFamily:"var(--mono)", fontSize:11, opacity:0.6, display:"flex", justifyContent:"space-between"}}>
      <span>© 2026 Steve Hill</span><span>built in SLC</span>
    </div>
  </div>
);

// Footer B — big text / editorial
const FooterB = () => (
  <div className="wf-frame">
    <div className="wf-frame-bar"><span className="wf-frame-dot"></span><span className="wf-frame-dot"></span><span className="wf-frame-dot"></span><span style={{marginLeft:12}}>footer · big editorial signoff</span></div>
    <div style={{padding:"48px 36px", background:"var(--paper-warm)"}}>
      <div style={{fontFamily:"var(--sans)", fontWeight:800, fontSize:84, lineHeight:0.9, letterSpacing:"-0.04em"}}>
        Let&apos;s<br/>talk<span style={{color:"var(--accent-amber)"}}>.</span>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20, marginTop:30, borderTop:"1.5px solid var(--ink)", paddingTop:18}}>
        <div><div className="wf-caption">email</div><div style={{fontFamily:"var(--sans)", fontSize:14, marginTop:4}}>sthill01@gmail.com</div></div>
        <div><div className="wf-caption">phone</div><div style={{fontFamily:"var(--sans)", fontSize:14, marginTop:4}}>(801) 850-1253</div></div>
        <div><div className="wf-caption">linkedin</div><div style={{fontFamily:"var(--sans)", fontSize:14, marginTop:4}}>linkedin.com/in/sthill</div></div>
      </div>
      <div style={{marginTop:22, fontFamily:"var(--mono)", fontSize:10, opacity:0.6}}>© 2026 · Steve Hill · Salt Lake City, UT</div>
    </div>
  </div>
);

// Footer C — terminal status bar
const FooterC = () => (
  <div className="wf-frame">
    <div className="wf-frame-bar"><span className="wf-frame-dot"></span><span className="wf-frame-dot"></span><span className="wf-frame-dot"></span><span style={{marginLeft:12}}>footer · terminal status</span></div>
    <div style={{background:"#0d0d0d", color:"#e5e5e5", padding:"18px 22px", fontFamily:"var(--mono)", fontSize:12}}>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:20, marginBottom:14}}>
        <div><span style={{color:"#4ade80"}}>$</span> contact --email<br/><span style={{opacity:0.7, paddingLeft:14}}>sthill01@gmail.com</span></div>
        <div><span style={{color:"#4ade80"}}>$</span> contact --phone<br/><span style={{opacity:0.7, paddingLeft:14}}>801-850-1253</span></div>
        <div><span style={{color:"#4ade80"}}>$</span> cat links<br/><span style={{opacity:0.7, paddingLeft:14}}>linkedin ↗ · github ↗</span></div>
      </div>
      <div style={{borderTop:"1px solid #333", paddingTop:10, display:"flex", justifyContent:"space-between", opacity:0.6, fontSize:10}}>
        <span>MON APR 24 2026 · 13:42 MST · UP 13.4y</span><span>© sh · built w/ care</span>
      </div>
    </div>
  </div>
);

Object.assign(window, { Nav1, Nav2, Nav3, Nav4, FooterA, FooterB, FooterC });
