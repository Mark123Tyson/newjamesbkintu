import { C, community } from "../data/constants";
import SectionLabel from "./SectionLabel";

export default function Community() {
  return (
    <section id="community" style={{ 
      background: C.navy, 
      padding: "100px 5vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "center" // Centers all content in the section
    }}>
      
      {/* Header Section */}
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
          <SectionLabel light>Community & Values</SectionLabel>
        </div>
        
        <h2 style={{ 
          fontFamily: "Playfair Display, serif", 
          fontSize: "clamp(32px,5vw,52px)", 
          fontWeight: 700, 
          lineHeight: 1.2, 
          marginBottom: 16, 
          color: C.white,
          maxWidth: "800px" 
        }}>
          Beyond the Boardroom
        </h2>
        
        <p style={{ 
          fontSize: "clamp(17px,2.2vw,19px)", 
          color: "rgba(255,255,255,0.55)", 
          maxWidth: 640, 
          lineHeight: 1.8,
          margin: "0 auto" 
        }}>
          True development happens when people are empowered to lead lives they value. These commitments reflect that philosophy in action.
        </p>
      </div>

      {/* Community Grid - 2 columns on desktop, centered 1 column on mobile */}
      <div className="community-grid" style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", 
        gap: 30,
        width: "100%",
        maxWidth: "1100px"
      }}>
        {community.map((item, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.04)", // Slightly softer background
            border: `1px solid rgba(163,238,224,0.1)`,
            borderRadius: 6, 
            padding: "40px 32px",
            display: "flex", 
            flexDirection: "column", // Stacked vertically
            alignItems: "center",    // Centered content
            textAlign: "center",      // Centered text
            transition: "transform 0.3s ease"
          }}>
            {/* Centered Indicator Dot */}
            <div style={{ 
              width: 10, 
              height: 10, 
              flexShrink: 0, 
              background: item.dot, 
              borderRadius: "50%", 
              marginBottom: 20,
              boxShadow: `0 0 10px ${item.dot}66` // Subtle glow
            }} />
            
            <div>
              <h4 style={{ 
                fontFamily: "Playfair Display, serif", 
                fontSize: 20, 
                color: C.tealLight, 
                marginBottom: 12,
                letterSpacing: "0.02em" 
              }}>
                {item.title}
              </h4>
              
              <p style={{ 
                fontSize: 14, 
                color: "rgba(255,255,255,0.6)", 
                lineHeight: 1.8,
                maxWidth: "320px", // Keeps text lines from getting too long
                margin: "0 auto"
              }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}