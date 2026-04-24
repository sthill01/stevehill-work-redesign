// Shared wireframe primitives

const Frame = ({ url = "stevehill.work", children, style }) => (
  <div className="wf-frame" style={style}>
    <div className="wf-frame-bar">
      <span className="wf-frame-dot" style={{background:"#ff6b6b"}}></span>
      <span className="wf-frame-dot" style={{background:"#ffd93d"}}></span>
      <span className="wf-frame-dot" style={{background:"#6bcf7f"}}></span>
      <span style={{marginLeft: 12}}>{url}</span>
    </div>
    <div>{children}</div>
  </div>
);

const Sticky = ({ children, style }) => (
  <div className="wf-sticky" style={style}>{children}</div>
);

const Annot = ({ children, color = "var(--accent-red)", style }) => (
  <div style={{ fontFamily: "var(--hand)", fontSize: 13, color, ...style }}>{children}</div>
);

const Eyebrow = ({ children }) => (
  <div className="wf-caption" style={{ marginBottom: 6 }}>{children}</div>
);

const SectionTitle = ({ children, kicker }) => (
  <div style={{ marginBottom: 28 }}>
    {kicker && <div className="wf-caption" style={{ color: "var(--accent-amber)", marginBottom: 6 }}>{kicker}</div>}
    <div style={{ fontFamily: "var(--sans)", fontSize: 24, fontWeight: 700, letterSpacing: "-0.01em", color: "var(--ink)" }}>{children}</div>
  </div>
);

const Placeholder = ({ label, h = 120, style }) => (
  <div className="wf-img" style={{ height: h, width: "100%", ...style }}>{label || "img"}</div>
);

const MiniChart = ({ kind = "line", color = "var(--ink)" }) => {
  if (kind === "line") return (
    <svg viewBox="0 0 100 40" style={{ width: "100%", height: "100%" }} preserveAspectRatio="none">
      <path d="M 2 32 L 18 28 L 32 30 L 48 18 L 64 22 L 80 8 L 98 12" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M 2 32 L 18 28 L 32 30 L 48 18 L 64 22 L 80 8 L 98 12 L 98 38 L 2 38 Z" fill={color} opacity="0.08"/>
    </svg>
  );
  if (kind === "bar") return (
    <svg viewBox="0 0 100 40" style={{ width: "100%", height: "100%" }} preserveAspectRatio="none">
      {[12,22,16,28,20,32,26,36].map((h,i)=>(
        <rect key={i} x={i*12+2} y={40-h} width="8" height={h} fill={color} opacity={0.35 + i*0.08}/>
      ))}
    </svg>
  );
  if (kind === "funnel") return (
    <svg viewBox="0 0 100 40" style={{ width: "100%", height: "100%" }} preserveAspectRatio="none">
      <rect x="4" y="6" width="92" height="5" fill={color} opacity="0.9"/>
      <rect x="14" y="14" width="72" height="5" fill={color} opacity="0.7"/>
      <rect x="24" y="22" width="52" height="5" fill={color} opacity="0.55"/>
      <rect x="34" y="30" width="32" height="5" fill={color} opacity="0.4"/>
    </svg>
  );
  return null;
};

const Box = ({ children, style, dashed, rough }) => (
  <div className={dashed ? "wf-box-dashed" : rough ? "wf-rough" : "wf-box"} style={{ padding: 14, ...style }}>
    {children}
  </div>
);

const Btn = ({ children, filled, amber, style }) => (
  <span className={`wf-btn ${filled ? "wf-btn-filled" : ""} ${amber ? "wf-btn-amber" : ""}`} style={style}>{children}</span>
);

const Tag = ({ children, amber, green, style }) => (
  <span className={`wf-tag ${amber?"wf-tag-amber":""} ${green?"wf-tag-green":""}`} style={style}>{children}</span>
);

const HR = () => <div className="wf-hr" />;

Object.assign(window, { Frame, Sticky, Annot, Eyebrow, SectionTitle, Placeholder, MiniChart, Box, Btn, Tag, HR });
