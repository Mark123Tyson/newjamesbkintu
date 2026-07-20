import { C, stats } from "../data/constants";
import { useViewport } from "../hooks/useViewport";

function HeroPhoto() {
  useViewport();
  return (
    <div id="home" style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      paddingTop: 110, paddingBottom: 56,
      background: `linear-gradient(160deg, ${C.navy} 0%, #0a1f3d 55%, #030d1a 100%)`,
      position: "relative", overflow: "hidden",
    }}>
      {/* Decorative rings */}
      {[600, 420, 260].map((size, i) => (
        <div key={i} style={{
          position: "absolute", top: 50 + i * 30, left: "50%",
          transform: "translateX(-50%)",
          width: size, height: size, borderRadius: "50%",
          border: `1px solid rgba(13,148,136,${[0.12, 0.08, 0.05][i]})`,
          pointerEvents: "none",
        }} />
      ))}

      {/* Profile photo */}
      <div style={{
        position: "relative", zIndex: 1,
        width: "clamp(180px, 35vw, 280px)",
        height: "clamp(180px, 35vw, 280px)",
        borderRadius: "50%",
        border: `5px solid ${C.teal}`,
        overflow: "hidden", marginBottom: 32,
        boxShadow: `0 0 0 10px rgba(13,148,136,0.12), 0 20px 60px rgba(0,0,0,0.5)`,
      }}>
        <img
          src="/images/profile.jpg"
          alt="Dr James Kintu"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
          onError={e => {
            e.target.style.display = "none";
            e.target.parentNode.style.background = C.navyMid;
            e.target.parentNode.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:clamp(40px,8vw,72px);color:${C.tealLight};font-weight:700;">JK</div>`;
          }}
        />
      </div>

      {/* Name */}
      <h1 style={{
        fontFamily: "Playfair Display, serif",
        fontSize: "clamp(40px, 7vw, 70px)",
        fontWeight: 700, color: C.white,
        textAlign: "center", lineHeight: 1.12,
        marginBottom: 14, position: "relative", zIndex: 1,
        padding: "0 20px",
      }}>
        Dr James <em style={{ fontStyle: "italic", color: C.tealLight }}>Kintu</em>
      </h1>

      {/* Tagline */}
      <p style={{
        fontSize: "clamp(15px, 2.2vw, 19px)",
        color: "rgba(255,255,255,0.6)", textAlign: "center",
        letterSpacing: "0.05em", marginBottom: 12,
        fontWeight: 300, position: "relative", zIndex: 1,
        padding: "0 24px",
      }}>
        Governance · Development · Academia
      </p>
      <p style={{
        fontSize: "clamp(14px, 1.8vw, 17px)",
        color: "rgba(255,255,255,0.5)", textAlign: "center",
        marginBottom: 40, fontWeight: 300,
        position: "relative", zIndex: 1,
        padding: "0 24px", maxWidth: 620, lineHeight: 1.7,
      }}>
        20+ years in public service, international development & academia.<br />
        PhD in Global Governance & Human Security (UMass Boston, 2026) — climate-food governance in Uganda's Busoga region.
      </p>

      <div style={{ width: 48, height: 1, background: C.teal, marginBottom: 40, position: "relative", zIndex: 1 }} />

      {/* CTAs */}
      <div className="hero-cta" style={{
        display: "flex", gap: 16, position: "relative", zIndex: 1,
        flexWrap: "wrap", justifyContent: "center", padding: "0 24px",
      }}>
        <a href="#contact" style={{
          background: C.teal, color: C.white,
          padding: "15px 38px", borderRadius: 3,
          fontWeight: 600, fontSize: "clamp(14px, 2vw, 16px)",
          textDecoration: "none", letterSpacing: "0.04em",
          transition: "background 0.2s, transform 0.15s",
        }}
          onMouseEnter={e => { e.currentTarget.style.background = "#0f9d8a"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = C.teal; e.currentTarget.style.transform = "translateY(0)"; }}
        >Get in Touch</a>
        <a href="#experience" style={{
          border: `1px solid rgba(163,238,224,0.4)`,
          color: "rgba(255,255,255,0.85)",
          padding: "15px 38px", borderRadius: 3,
          fontSize: "clamp(14px, 2vw, 16px)",
          textDecoration: "none", letterSpacing: "0.04em",
          transition: "border-color 0.2s, color 0.2s",
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = C.tealLight; e.currentTarget.style.color = C.tealLight; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(163,238,224,0.4)"; e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}
        >View Experience</a>
      </div>
    </div>
  );
}

function HeroStats() {
  useViewport();
  return (
    <div className="stats-grid" style={{
      background: `linear-gradient(160deg, ${C.navy} 0%, #0a1f3d 55%, #030d1a 100%)`,
      padding: "0 5vw 80px",
      display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20,
    }}>
      {stats.map((s, i) => (
        <div key={i} style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderLeft: `3px solid ${s.accent}`,
          borderRadius: 4, padding: "24px 28px",
          display: "flex", gap: 20, alignItems: "flex-start",
        }}>
          <div style={{
            width: 46, height: 46, borderRadius: "50%",
            background: `${s.accent}22`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22, flexShrink: 0,
          }}>{s.icon}</div>
          <div>
            <div style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700,
              color: C.tealLight, lineHeight: 1, marginBottom: 6,
            }}>{s.num}</div>
            <div style={{ fontSize: "clamp(13px, 1.5vw, 15px)", color: "rgba(255,255,255,0.55)", fontWeight: 300, lineHeight: 1.5 }}>
              {s.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (<><HeroPhoto /><HeroStats /></>);
}
