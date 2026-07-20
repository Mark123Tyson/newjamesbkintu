import { C, education, certifications, training, affiliations } from "../data/constants";
import SectionLabel from "./SectionLabel";

const paragraphs = [
  "Dr James Kintu is an experienced leader based in Kampala, Uganda, with over 20 years of transformative experience in public service, governance, international development, and academia. He holds a PhD in Global Governance and Human Security from the University of Massachusetts Boston (conferred May 2026), and his career is dedicated to promoting Uganda's nation-building through inclusive, evidence-based solutions, focusing on climate change governance and gender-inclusive food security.",
  "He has held influential roles across the Ugandan government, UN-funded programs, World Bank and AfDB consultancies, and academic positions — leading multi-million-dollar reforms in health equity, youth empowerment, and sustainable development. In 2026, he received the Ubuntu Recognition Award and the Ubuntu African Scholars Student Research Award from UMass Boston's Africa Scholars Forum.",
  "Rooted in Amartya Sen's Capability Approach, his work combines global best practices with local realities to foster stakeholder collaboration and measurable outcomes. He co-founded Bukanga United for Development Action to mentor remote students in Luuka — especially girls — and has served as Youth Secretary and Fathers' Union Chair in Mukono's Kiwanga parishes.",
  "As of 2026, he is available for high-impact contract-based roles in public administration, development, consultancy, or academia — with a passion for serving humanity worldwide.",
];

export default function About() {
  return (
    <section id="about" style={{ 
      background: C.paper, 
      padding: "100px 5vw", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center" 
    }}>

      {/* Header Section */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
        <SectionLabel>About</SectionLabel>
      </div>
      
      <h2 style={{ 
        fontFamily: "Playfair Display, serif", 
        fontSize: "clamp(32px,5vw,52px)", 
        fontWeight: 700, 
        lineHeight: 1.2, 
        marginBottom: 48, 
        color: C.ink,
        textAlign: "center",
        maxWidth: "900px" 
      }}>
        Capability-Led Leadership<br />for a Better Uganda
      </h2>

      {/* Main Narrative Text */}
      <div style={{ maxWidth: "800px", width: "100%", marginBottom: 80 }}>
        {paragraphs.map((p, i) => (
          <div key={i}>
            {i === 1 && (
              <blockquote style={{
                fontFamily: "Playfair Display, serif",
                fontSize: 21, fontStyle: "italic", color: C.navyMid,
                borderLeft: `3px solid ${C.teal}`, 
                borderRight: `3px solid ${C.teal}`,
                padding: "0 24px",
                margin: "40px auto", 
                lineHeight: 1.55,
                textAlign: "center"
              }}>
                "Empowering individuals and communities with the skills, freedom, and agency to create and lead lives they value most."
              </blockquote>
            )}
            <p style={{ marginBottom: 20, textAlign: "center", fontSize: 16, color: C.inkMid, lineHeight: 1.9 }}>{p}</p>
          </div>
        ))}
      </div>

      {/* ══ 2-COLUMN FLEX GRID (Personal & Professional) ══ */}
      <div style={{ 
        display: "flex", 
        flexWrap: "wrap", 
        gap: "30px", 
        justifyContent: "center", 
        width: "100%", 
        maxWidth: "1100px",
        marginBottom: 30
      }}>
        
        {/* Personal Profile Card */}
        <div style={{ 
          flex: "1 1 450px", 
          background: C.navy, 
          color: C.white, 
          padding: 40, 
          borderRadius: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 18, fontWeight: 400, color: C.tealLight, marginBottom: 24, textAlign: "center" }}>Personal Profile</h3>
          <div style={{ width: "100%" }}>
            {[
              ["Nationality", "Ugandan"],
              ["Based in",    "Kampala, Uganda"],
              ["Institution", "Uganda Management Institute"],
              ["University",  "UMass Boston (PhD, 2026)"],
              ["Email",       "jamesbkintu@gmail.com"],
              ["Languages",   "English, Luganda"],
            ].map(([label, val]) => (
              <div key={label} style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                padding: "12px 0", 
                borderBottom: "1px solid rgba(255,255,255,0.09)", 
                fontSize: 14 
              }}>
                <span style={{ color: "rgba(255,255,255,0.45)" }}>{label}</span>
                <span style={{ color: "rgba(255,255,255,0.88)", textAlign: "right" }}>{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Affiliations Card */}
        <div style={{ 
          flex: "1 1 450px", 
          background: C.paper, 
          border: `1px solid rgba(13,148,136,0.2)`, 
          padding: 40, 
          borderRadius: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 18, color: C.navy, marginBottom: 24, textAlign: "center" }}>Professional Affiliations</h3>
          <div style={{ width: "100%" }}>
            {affiliations.map((a, i) => (
              <div key={i} style={{ 
                display: "flex", 
                gap: 15, 
                padding: "12px 0", 
                borderBottom: i < affiliations.length - 1 ? `1px solid ${C.cream}` : "none" 
              }}>
                <div style={{ width: 6, height: 6, background: C.teal, borderRadius: "50%", marginTop: 8, flexShrink: 0 }} />
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: C.ink }}>{a.name}</div>
                  <div style={{ fontSize: 13, color: C.inkLight }}>{a.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Card (Spans Full Width) */}
        <div style={{ 
          flex: "1 1 100%", 
          maxWidth: "930px", 
          background: C.paper, 
          border: `1px solid rgba(13,148,136,0.2)`, 
          padding: 40, 
          borderRadius: 4
        }}>
          <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 18, color: C.navy, marginBottom: 24, textAlign: "center" }}>Certifications & Training</h3>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
            gap: 40 
          }}>
            <div>
              {certifications.map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: `1px solid ${C.cream}`, fontSize: 13 }}>
                  <span style={{ color: C.teal, fontWeight: 700, width: 40 }}>{c.year}</span>
                  <span style={{ color: C.inkMid }}>{c.title}{c.org ? ` — ${c.org}` : ""}</span>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 12, color: C.teal, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 15 }}>Additional Training</div>
              {training.map((t, i) => (
                <div key={i} style={{ fontSize: 13, color: C.inkMid, padding: "4px 0" }}>• {t}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══ EDUCATION SECTION (Centered Fix) ══ */}
      <div style={{ 
        marginTop: 100, 
        width: "100%", 
        maxWidth: "1100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
            <SectionLabel>Education</SectionLabel>
          </div>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, color: C.ink }}>Academic Foundation</h2>
        </div>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
          gap: 24,
          width: "100%",
          justifyContent: "center"
        }}>
          {education.map((e, i) => (
            <div key={i} style={{ 
              background: C.paper,
              border: `1px solid rgba(13,148,136,0.2)`, 
              borderRadius: 4, 
              padding: 40, 
              position: "relative", 
              overflow: "hidden",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}>
              {/* Centered Accent Bar */}
              <div style={{ 
                position: "absolute", 
                top: 0, 
                left: "50%", 
                transform: "translateX(-50%)", 
                width: "60px", 
                height: 3, 
                background: e.accent 
              }} />
              
              <div style={{ 
                fontSize: 12, 
                color: e.accent, 
                textTransform: "uppercase", 
                letterSpacing: "0.12em", 
                fontWeight: 700, 
                marginBottom: 10, 
                marginTop: 8 
              }}>{e.year}</div>
              
              <h3 style={{ 
                fontFamily: "Playfair Display, serif", 
                fontSize: 18, 
                fontWeight: 700, 
                color: C.ink, 
                marginBottom: 8,
                maxWidth: "280px"
              }}>{e.degree}</h3>
              
              <div style={{ fontSize: 14, color: C.inkLight }}>{e.inst}</div>
              {e.note && <div style={{ fontSize: 13, color: C.teal, fontStyle: "italic", marginTop: 12, maxWidth: "250px" }}>{e.note}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
