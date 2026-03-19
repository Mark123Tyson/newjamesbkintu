import { C, timeline, projects } from "../data/constants";
import SectionLabel from "./SectionLabel";

function dotLabelColor(dot) {
  if (dot === C.teal)      return "#5eead4";
  if (dot === C.navyLight) return "#93c5fd";
  if (dot === C.red)       return "#fca5a5";
  if (dot === C.gold)      return C.goldLight;
  if (dot === C.blueMid)   return "#a5b4fc";
  return C.tealLight;
}

export default function Career() {
  return (
    <section id="experience" style={{ 
      background: C.navy, 
      padding: "100px 5vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "center" // Centers the entire section content
    }}>
      
      {/* Header Section */}
      <div style={{ textAlign: "center", marginBottom: 60, width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
          <SectionLabel light>Career Timeline</SectionLabel>
        </div>
        <h2 style={{ 
          fontFamily: "Playfair Display, serif", 
          fontSize: "clamp(32px,5vw,52px)", 
          fontWeight: 700, 
          lineHeight: 1.2, 
          marginBottom: 16, 
          color: C.white,
          maxWidth: "800px",
          margin: "0 auto 16px"
        }}>
          A Life in Service
        </h2>
        <p style={{ 
          fontSize: "clamp(17px,2.2vw,19px)", 
          color: "rgba(255,255,255,0.55)", 
          maxWidth: 640, 
          lineHeight: 1.8, 
          margin: "0 auto" 
        }}>
          From district-level administration to the Prime Minister's office, World Bank consultancies, and academia — over two decades of public impact.
        </p>
      </div>

      {/* Timeline - Now Centered horizontally */}
      <div style={{ 
        position: "relative", 
        paddingLeft: 32, 
        maxWidth: "800px", 
        width: "100%",
        marginBottom: 100,
        marginLeft: "20px" // Balances the absolute positioning of dots
      }}>
        {/* Vertical Line */}
        <div style={{ 
          position: "absolute", 
          left: 0, 
          top: 0, 
          bottom: 0, 
          width: 1, 
          background: `linear-gradient(to bottom, ${C.teal}, rgba(13,148,136,0.1))` 
        }} />
        
        {timeline.map((item, i) => (
          <div key={i} style={{ position: "relative", marginBottom: 52, paddingLeft: 28 }}>
            {/* The Timeline Dot */}
            <div style={{ 
              position: "absolute", 
              left: -36, 
              top: 6, 
              width: 9, 
              height: 9, 
              borderRadius: "50%", 
              background: item.dot, 
              border: `2px solid ${C.navy}`,
              zIndex: 2
            }} />
            
            <div style={{ 
              fontSize: 12, 
              fontWeight: 600, 
              letterSpacing: "0.15em", 
              textTransform: "uppercase", 
              color: dotLabelColor(item.dot), 
              marginBottom: 6 
            }}>
              {item.period}
            </div>
            
            <h3 style={{ 
              fontFamily: "Playfair Display, serif", 
              fontSize: 21, 
              fontWeight: 700, 
              color: C.white, 
              marginBottom: 6 
            }}>
              {item.role}
            </h3>
            
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", marginBottom: 12 }}>
              {item.org}
            </div>
            
            <p style={{ 
              fontSize: 15, 
              color: "rgba(255,255,255,0.72)", 
              lineHeight: 1.85, 
              textAlign: "left" // Changed from justify to left for better legibility on centered columns
            }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Key Projects Section Header */}
      <div style={{ textAlign: "center", marginBottom: 40, width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
          <SectionLabel light>Key Projects</SectionLabel>
        </div>
        <h2 style={{ 
          fontFamily: "Playfair Display, serif", 
          fontSize: "clamp(28px,4vw,44px)", 
          fontWeight: 700, 
          color: C.white 
        }}>
          Programmes & Impact
        </h2>
      </div>

      {/* Projects Grid - Centered and Responsive */}
      <div className="projects-grid" style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
        gap: 24,
        width: "100%",
        maxWidth: "1100px"
      }}>
        {projects.map((p, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.03)", // Slightly cleaner dark background
            border: `1px solid rgba(255,255,255,0.08)`,
            borderTop: `3px solid ${p.accent}`,
            borderRadius: 6, 
            padding: 32,
            transition: "transform 0.3s ease",
          }}>
            <div style={{ 
              fontSize: 11, 
              color: p.accent, 
              fontWeight: 700, 
              letterSpacing: "0.1em", 
              textTransform: "uppercase", 
              marginBottom: 12 
            }}>
              {p.tag}
            </div>
            
            <h4 style={{ 
              fontFamily: "Playfair Display, serif", 
              fontSize: 18, 
              color: C.white, 
              marginBottom: 16, 
              lineHeight: 1.4 
            }}>
              {p.title}
            </h4>
            
            <ul style={{ listStyle: "none", padding: 0 }}>
              {p.points.map((pt, j) => (
                <li key={j} style={{ 
                  fontSize: 14, 
                  color: "rgba(255,255,255,0.6)", 
                  lineHeight: 1.6, 
                  marginBottom: 10, 
                  display: "flex", 
                  gap: 10 
                }}>
                  <span style={{ color: p.accent, flexShrink: 0, fontWeight: "bold" }}>›</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}