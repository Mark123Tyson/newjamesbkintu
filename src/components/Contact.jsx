import { C, contacts } from "../data/constants";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section id="contact" style={{ 
      background: "#EAE4C1", 
      padding: "100px 5vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <div style={{ maxWidth: 800, width: "100%", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
          <SectionLabel>Contact</SectionLabel>
        </div>
        
        <h2 style={{ 
          fontFamily: "Playfair Display, serif", 
          fontSize: "clamp(32px,5vw,52px)", 
          fontWeight: 700, 
          lineHeight: 1.2, 
          marginBottom: 16, 
          color: C.ink 
        }}>
          Let's Connect
        </h2>
        
        <p style={{ 
          fontSize: "clamp(17px,2.2vw,19px)", 
          color: C.inkMid, 
          maxWidth: 640, 
          lineHeight: 1.8, 
          marginBottom: 60,
          margin: "0 auto 60px" 
        }}>
          Available for contract-based roles in public administration, development, consultancy, or academia. Reach out for collaboration, speaking engagements, or research partnerships.
        </p>

        {/* Contact cards - Responsive 2-column grid */}
        <div className="contact-grid" style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: 24, 
          marginBottom: 64 
        }}>
          {contacts.map((c, i) => (
            <div key={i} style={{ 
              background: "rgba(13,148,136,0.03)",
              border: `1px solid rgba(13,148,136,0.15)`, 
              borderRadius: 6, 
              padding: 28, 
              display: "flex", 
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 16 
            }}>
              <div style={{ 
                width: 50, 
                height: 50, 
                background: c.bg, 
                borderRadius: "50%", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                fontSize: 20, 
                flexShrink: 0,
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
              }}>
                {c.icon}
              </div>
              <div>
                <div style={{ 
                  fontSize: 11, 
                  letterSpacing: "0.12em", 
                  textTransform: "uppercase", 
                  color: C.inkLight, 
                  marginBottom: 6,
                  fontWeight: 700 
                }}>
                  {c.type}
                </div>
                <div style={{ fontSize: 16, color: C.ink, fontWeight: 600 }}>{c.val}</div>
                {c.sub && <div style={{ fontSize: 13, color: C.inkLight, marginTop: 4 }}>{c.sub}</div>}
              </div>
            </div>
          ))}
        </div>

        {/* Contact form - Centered and polished */}
        <div style={{ 
          background: C.paper, 
          border: `1px solid rgba(13,148,136,0.2)`, 
          borderRadius: 8, 
          padding: "48px 40px",
          maxWidth: "700px",
          margin: "0 auto",
          boxShadow: "0 10px 30px rgba(0,0,0,0.03)"
        }}>
          <h3 style={{ 
            fontFamily: "Playfair Display, serif", 
            fontSize: 22, 
            color: C.navy, 
            marginBottom: 32 
          }}>
            Send a Message
          </h3>
          
          <form onSubmit={e => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
              gap: 20 
            }}>
              {[
                { placeholder: "Your Name",    type: "text"  },
                { placeholder: "Your Email",   type: "email" },
              ].map((f, i) => (
                <input key={i} type={f.type} placeholder={f.placeholder} required style={{
                  padding: "14px 18px", 
                  borderRadius: 4, 
                  fontSize: 15,
                  border: `1px solid rgba(13,148,136,0.2)`,
                  background: C.cream, 
                  color: C.ink, 
                  outline: "none",
                  fontFamily: "Inter, sans-serif",
                  transition: "border-color 0.2s"
                }} 
                onFocus={e => e.target.style.borderColor = C.teal}
                onBlur={e => e.target.style.borderColor = "rgba(13,148,136,0.2)"}
                />
              ))}
            </div>
            
            <textarea placeholder="Your Message" rows={6} required style={{
              padding: "14px 18px", 
              borderRadius: 4, 
              fontSize: 15,
              border: `1px solid rgba(13,148,136,0.2)`,
              background: C.cream, 
              color: C.ink, 
              outline: "none",
              fontFamily: "Inter, sans-serif", 
              resize: "vertical",
              transition: "border-color 0.2s"
            }} 
            onFocus={e => e.target.style.borderColor = C.teal}
            onBlur={e => e.target.style.borderColor = "rgba(13,148,136,0.2)"}
            />
            
            <button type="submit" style={{
              background: C.teal, 
              color: C.white,
              padding: "16px 48px", 
              borderRadius: 4,
              fontWeight: 700, 
              fontSize: 15, 
              border: "none",
              cursor: "pointer", 
              alignSelf: "center", // Perfectly centered button
              letterSpacing: "0.05em", 
              textTransform: "uppercase",
              transition: "all 0.3s ease",
              marginTop: 10,
              boxShadow: "0 4px 15px rgba(13,148,136,0.2)"
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#0f9d8a";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = C.teal;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}