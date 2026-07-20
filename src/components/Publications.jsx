import { C, publications } from "../data/constants";
import SectionLabel from "./SectionLabel";

const typeColors = {
  "Book":             { bg: "rgba(29,78,216,0.1)",  color: "#1d4ed8" },
  "Research Article": { bg: "rgba(13,148,136,0.1)", color: "#0d9488" },
  "Policy Briefs":    { bg: "rgba(245,158,11,0.1)", color: "#d97706" },
  "Thesis":           { bg: "rgba(220,38,38,0.09)", color: "#dc2626" },
  "Dissertation":     { bg: "rgba(37,99,235,0.1)",  color: "#2563eb" },
  "Conference Paper": { bg: "rgba(245,158,11,0.1)", color: "#d97706" },
};

export default function Publications() {
  return (
    <section id="publications" style={{ 
      background: C.paper, 
      padding: "100px 5vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "center", // Centers the section content
      textAlign: "center"    // Centers the text globally
    }}>
      
      {/* Header Section */}
      <div style={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: "12px" }}>
        <SectionLabel>Publications & Research</SectionLabel>
      </div>
      
      <h2 style={{ 
        fontFamily: "Playfair Display, serif", 
        fontSize: "clamp(32px,5vw,52px)", 
        fontWeight: 700, 
        lineHeight: 1.2, 
        marginBottom: 16, 
        color: C.ink,
        maxWidth: "850px"
      }}>
        Contributing to the Discourse
      </h2>
      
      <p style={{ 
        fontSize: "clamp(17px,2.2vw,19px)", 
        color: C.inkMid, 
        maxWidth: 700, 
        lineHeight: 1.8, 
        marginBottom: 60,
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        From books on leadership to doctoral climate research and 10+ policy briefs adopted by government and donors across East Africa.
      </p>

      {/* Responsive Centered Grid */}
      <div className="pub-grid" style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", 
        gap: 24, 
        maxWidth: "1100px",
        width: "100%",
        justifyContent: "center"
      }}>
        {publications.map((p, i) => {
          const tc = typeColors[p.type] || { bg: "rgba(13,148,136,0.1)", color: C.teal };
          return (
            <div key={i} style={{
              background: C.cream, 
              borderRadius: 6,
              border: `1px solid rgba(13,148,136,0.15)`,
              padding: 32, 
              position: "relative", 
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Center elements inside the card
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "default"
            }}>
              {/* Centered Accent Bar (Top instead of Left) */}
              <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60px", height: 3, background: p.accent }} />
              
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", color: p.accent }}>{p.year}</span>
                <span style={{ 
                  background: tc.bg, 
                  color: tc.color, 
                  fontSize: 10, 
                  padding: "4px 12px", 
                  borderRadius: 100, 
                  fontWeight: 700,
                  textTransform: "uppercase" 
                }}>
                  {p.type}
                </span>
              </div>
              
              <h4 style={{ 
                fontFamily: "Playfair Display, serif", 
                fontSize: 18, 
                fontWeight: 700, 
                color: C.ink, 
                marginBottom: 10, 
                lineHeight: 1.4,
                maxWidth: "100%"
              }}>
                {p.title}
              </h4>
              
              <p style={{ 
                fontSize: 14, 
                color: C.inkLight, 
                lineHeight: 1.7,
                fontStyle: "italic" 
              }}>
                {p.publisher}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
