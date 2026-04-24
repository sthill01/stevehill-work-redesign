// Logo / mark exploration — 5 directions

const LogoCard = ({ title, desc, children, bg = "var(--paper)" }) => (
  <div style={{
    display: "flex", flexDirection: "column", gap: 10,
    padding: "24px 20px 18px", background: bg,
    border: "1.5px solid var(--ink)", borderRadius: 8,
    minHeight: 180, justifyContent: "space-between"
  }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1, minHeight: 100 }}>
      {children}
    </div>
    <div>
      <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-light)" }}>{title}</div>
      <div style={{ fontFamily: "var(--hand)", fontSize: 14, color: "var(--ink-soft)" }}>{desc}</div>
    </div>
  </div>
);

// 1. SH monogram — bracketed, IDE-style
const Logo1 = () => (
  <div style={{ display: "flex", alignItems: "baseline", gap: 0, fontFamily: "var(--mono)" }}>
    <span style={{ fontSize: 56, fontWeight: 300, color: "var(--ink-light)" }}>[</span>
    <span style={{ fontSize: 52, fontWeight: 700, letterSpacing: "-0.02em" }}>SH</span>
    <span style={{ fontSize: 56, fontWeight: 300, color: "var(--ink-light)" }}>]</span>
    <span style={{ fontSize: 52, fontWeight: 700, color: "var(--accent-amber)", marginLeft: 2 }}>_</span>
  </div>
);

// 2. Monogram as data chart — S and H formed from bar-chart bars
const Logo2 = () => (
  <svg width="140" height="90" viewBox="0 0 140 90" fill="none">
    {/* S formed from stacked bars */}
    <rect x="8" y="14" width="48" height="8" fill="var(--ink)"/>
    <rect x="8" y="30" width="8" height="16" fill="var(--ink)"/>
    <rect x="8" y="40" width="48" height="8" fill="var(--ink)"/>
    <rect x="48" y="52" width="8" height="16" fill="var(--ink)"/>
    <rect x="8" y="66" width="48" height="8" fill="var(--ink)"/>
    {/* H formed from two columns + bar */}
    <rect x="80" y="14" width="8" height="60" fill="var(--ink)"/>
    <rect x="80" y="40" width="48" height="8" fill="var(--accent-amber)"/>
    <rect x="120" y="14" width="8" height="60" fill="var(--ink)"/>
  </svg>
);

// 3. Abstract mark — ascending line chart forming an "H"
const Logo3 = () => (
  <svg width="140" height="90" viewBox="0 0 140 90" fill="none">
    <path d="M 10 75 L 30 55 L 50 60 L 70 35 L 90 40 L 110 15 L 130 20"
      stroke="var(--ink)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="110" cy="15" r="5" fill="var(--accent-amber)" stroke="var(--ink)" strokeWidth="2"/>
    <line x1="10" y1="85" x2="130" y2="85" stroke="var(--ink)" strokeWidth="1.5"/>
    <line x1="10" y1="85" x2="10" y2="10" stroke="var(--ink)" strokeWidth="1.5"/>
  </svg>
);

// 4. Stacked wordmark — editorial
const Logo4 = () => (
  <div style={{ fontFamily: "var(--sans)", textAlign: "left", lineHeight: 0.9 }}>
    <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: "-0.03em" }}>Steve</div>
    <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: "-0.03em" }}>Hill<span style={{ color: "var(--accent-amber)" }}>.</span></div>
    <div style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink-light)", marginTop: 6 }}>
      BI · Marketing Analytics
    </div>
  </div>
);

// 5. Terminal prompt — $ sh
const Logo5 = () => (
  <div style={{ background: "#0d0d0d", color: "#4ade80", padding: "14px 18px", borderRadius: 4, fontFamily: "var(--mono)", fontSize: 22, fontWeight: 500, display: "flex", alignItems: "center", gap: 8 }}>
    <span style={{ opacity: 0.6 }}>~/</span>
    <span>$ sh</span>
    <span style={{ display: "inline-block", width: 10, height: 20, background: "#4ade80", marginLeft: 2 }}></span>
  </div>
);

// 6. Diamond / node — S+H as connected data points
const Logo6 = () => (
  <svg width="120" height="90" viewBox="0 0 120 90" fill="none">
    <line x1="20" y1="25" x2="60" y2="45" stroke="var(--ink)" strokeWidth="1.5"/>
    <line x1="60" y1="45" x2="100" y2="25" stroke="var(--ink)" strokeWidth="1.5"/>
    <line x1="20" y1="65" x2="60" y2="45" stroke="var(--ink)" strokeWidth="1.5"/>
    <line x1="60" y1="45" x2="100" y2="65" stroke="var(--ink)" strokeWidth="1.5"/>
    <circle cx="20" cy="25" r="7" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2"/>
    <circle cx="100" cy="25" r="7" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2"/>
    <circle cx="20" cy="65" r="7" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2"/>
    <circle cx="100" cy="65" r="7" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2"/>
    <circle cx="60" cy="45" r="9" fill="var(--accent-amber)" stroke="var(--ink)" strokeWidth="2"/>
    <text x="60" y="49" fontSize="11" fontFamily="var(--mono)" fontWeight="700" textAnchor="middle" fill="var(--ink)">SH</text>
  </svg>
);

const LogoExplorations = () => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, padding: 24, maxWidth: 900 }}>
    <LogoCard title="01 · Bracketed SH" desc="IDE / code-bracket monogram with cursor"><Logo1/></LogoCard>
    <LogoCard title="02 · SH as chart" desc="Letters built from bar-chart bars"><Logo2/></LogoCard>
    <LogoCard title="03 · Rising line" desc="Abstract ascending-trend mark"><Logo3/></LogoCard>
    <LogoCard title="04 · Stacked wordmark" desc="Editorial two-line w/ tagline"><Logo4/></LogoCard>
    <LogoCard title="05 · Terminal prompt" desc="$ sh — shell / Steve Hill pun" bg="#0d0d0d"><Logo5/></LogoCard>
    <LogoCard title="06 · Node graph" desc="SH as connected data nodes"><Logo6/></LogoCard>
  </div>
);

window.LogoExplorations = LogoExplorations;
window.Logo1 = Logo1; window.Logo2 = Logo2; window.Logo3 = Logo3;
window.Logo4 = Logo4; window.Logo5 = Logo5; window.Logo6 = Logo6;
