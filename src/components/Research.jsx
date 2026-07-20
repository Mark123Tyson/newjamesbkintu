import { C, research } from "../data/constants";
import SectionLabel from "./SectionLabel";

export default function Research() {
  return (
    <section 
      id="research" 
      style={{ 
        background: C.paper, 
        padding: "100px 5vw", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", // Centers children horizontally
        textAlign: "center"   // Centers text inside elements
      }}
    >
      <SectionLabel>Research Interests</SectionLabel>
      
      <h2 style={{ 
        fontFamily: "Playfair Display, serif", 
        fontSize: "clamp(32px,5vw,52px)", 
        fontWeight: 700, 
        lineHeight: 1.2, 
        margin: "20px auto 30px", 
        color: C.ink,
        maxWidth: "800px" 
      }}>
        Tackling Systemic Inequities
      </h2>
      
      <p style={{ 
        fontSize: "clamp(17px,2.2vw,19px)", 
        color: C.inkMid, 
        maxWidth: 640, 
        lineHeight: 1.8, 
        margin: "0 auto 60px" 
      }}>
        Grounded in Amartya Sen's Capability Approach, this research aims to empower communities through inclusive, sustainable strategies in East Africa.
      </p>

      {/* Accordion List */}
      <div style={{ width: "100%", maxWidth: 800, margin: "0 auto 60px" }}>
        {research.map((r, i) => (
          <div
            key={i}
            style={{
              background: C.paper,
              marginBottom: 16,
              borderRadius: 4,
              border: `1px solid rgba(13,148,136,0.15)`,
              padding: "30px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Centers accordion content
              gap: 10,
            }}
          >
            {/* Title row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
              <span style={{ fontSize: 22 }}>{r.icon}</span>
              <span style={{
                fontFamily: "Playfair Display, serif",
                fontSize: 18,
                fontWeight: 700,
                color: r.accent,
              }}>
                {r.title}
              </span>
            </div>

            {/* Body */}
            <div style={{
              fontSize: 15,
              color: C.inkMid,
              lineHeight: 1.85,
              textAlign: "center", // Changed from justify to center
              maxWidth: "600px"
            }}>
              {r.body}
            </div>
          </div>
        ))}
      </div>

      {/* PhD note */}
      <div style={{
        background: C.navy, 
        borderRadius: 4,
        padding: "40px", 
        maxWidth: 800,
        width: "100%",
        borderTop: `4px solid ${C.teal}`, // Changed from borderLeft to top for center symmetry
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <div style={{ 
          fontSize: 11, 
          fontWeight: 600, 
          letterSpacing: "0.2em", 
          textTransform: "uppercase", 
          color: C.teal, 
          marginBottom: 12 
        }}>
          Doctoral Research
        </div>
        
        <p style={{ 
          fontFamily: "Playfair Display, serif", 
          fontSize: 18, 
          fontStyle: "italic", 
          color: C.white, 
          lineHeight: 1.65, 
          marginBottom: 16,
          textAlign: "center" 
        }}>
          "The Governance of Intensive Sugarcane-Growing and Climate Change for Sustainable Food Security in the Busoga Region of Eastern Uganda"
        </p>
        
        <p style={{ 
          fontSize: 14, 
          color: "rgba(255,255,255,0.55)", 
          lineHeight: 1.7,
          textAlign: "center",
          margin: 0
        }}>
          University of Massachusetts Boston · PhD conferred May 2026 · Fueled by tackling the paradox of food insecurity in a region with fertile soils and a supportive environment.
        </p>
      </div>
    </section>
  );
}
