import { useState } from "react";
import { C, expertise } from "../data/constants";
import SectionLabel from "./SectionLabel";

export default function Expertise() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      
      {/* Header Section - Explicitly Centered */}
      <section id="expertise" style={{ 
        background: C.paper, 
        padding: "100px 5vw 60px", 
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
      }}>
        <div style={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: "20px" }}>
            <SectionLabel>Areas of Expertise</SectionLabel>
        </div>
        
        <h2 style={{ 
          fontFamily: "Playfair Display, serif", 
          fontSize: "clamp(32px,5vw,52px)", 
          fontWeight: 700, 
          lineHeight: 1.2, 
          marginBottom: 24, 
          color: C.ink,
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto"
        }}>
          Where Knowledge Meets Impact
        </h2>
        
        <p style={{ 
          fontSize: "clamp(17px,2.2vw,19px)", 
          color: C.inkMid, 
          maxWidth: 700, 
          lineHeight: 1.8, 
          margin: "0 auto 40px auto", // Centers the paragraph block
          textAlign: "center"
        }}>
          Two decades of hands-on governance, development, and academia — distilled into six domains, each grounded in evidence and practice.
        </p>
      </section>

      {/* Grid Container - Centered and Responsive */}
      <div className="expertise-grid" style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
        gap: "2px", 
        background: "#e5e5e5", 
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto" 
      }}>
        {expertise.map((e, i) => (
          <div key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === i ? C.navy : C.cream,
              padding: "60px 40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Forces the icon and title to the middle
              justifyContent: "center",
              textAlign: "center", // Forces the description text to the middle
              borderTop: `5px solid ${hovered === i ? C.teal : e.accent}`,
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "default",
              minHeight: "350px"
            }}>
            
            <span style={{ 
              fontSize: "45px", 
              marginBottom: "20px", 
              display: "block",
              transition: "transform 0.3s ease",
              transform: hovered === i ? "scale(1.2)" : "scale(1)"
            }}>
              {e.icon}
            </span>
            
            <h3 style={{ 
              fontFamily: "Playfair Display, serif", 
              fontSize: "22px", 
              marginBottom: "16px", 
              color: hovered === i ? C.tealLight : e.accent, 
              fontWeight: 700,
              width: "100%"
            }}>
              {e.title}
            </h3>
            
            <p style={{ 
              fontSize: "15px", 
              color: hovered === i ? "rgba(255,255,255,0.85)" : C.inkMid, 
              lineHeight: "1.8", 
              textAlign: "center", 
              maxWidth: "280px",
              margin: "0 auto"
            }}>
              {e.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}