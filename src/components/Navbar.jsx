import { useState, useEffect } from "react";
import { C, navLinks } from "../data/constants";
import { useViewport } from "../hooks/useViewport";

export default function Navbar({ activeSection }) {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const { width } = useViewport();

  // New height variable for easy management
  const navHeight = 88; 

  useEffect(() => {
    if (width > 900) setMenuOpen(false);
  }, [width]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY > 80) setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: C.navy,
      borderBottom: `2px solid ${C.teal}`,
      height: navHeight, // Increased from 68 to 88
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 5vw",
      boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.4)" : "none",
      transition: "all 0.3s ease",
    }}>
      {/* Tricolour top stripe — blue · teal · red */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 4, // Slightly thicker stripe
        background: `linear-gradient(to right, ${C.blue} 33%, ${C.teal} 33%, ${C.teal} 66%, ${C.red} 66%)`,
      }} />

      {/* Brand - Increased Font Size */}
      <a href="#home" style={{
        fontFamily: "Playfair Display, serif",
        fontSize: "clamp(20px, 4vw, 24px)", // Increased from 15-19px
        fontWeight: 700,
        color: C.tealLight,
        textDecoration: "none",
        letterSpacing: "0.02em",
        zIndex: 1, lineHeight: 1.2,
      }}>
        Dr James Kintu
      </a>

      {/* Desktop links - Increased Gap and Font Size */}
      <div className="nav-desktop" style={{ display: "flex", gap: 36, zIndex: 1 }}>
        {navLinks.map((link) => {
          const isActive = activeSection === link.label.toLowerCase();
          return (
            <a key={link.label} href={link.href} style={{
              color: isActive ? C.tealLight : "rgba(255,255,255,0.7)",
              textDecoration: "none", 
              fontSize: 15, // Increased from 13px
              fontWeight: 600, // Slightly bolder for better legibility
              letterSpacing: "0.12em", 
              textTransform: "uppercase",
              borderBottom: isActive ? `2px solid ${C.teal}` : "2px solid transparent",
              paddingBottom: 4, 
              transition: "all 0.2s",
            }}>{link.label}</a>
          );
        })}
      </div>

      {/* Hamburger */}
      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen(o => !o)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        style={{
          display: "none",
          background: "none",
          border: `1px solid rgba(163,238,224,0.35)`,
          borderRadius: 6, cursor: "pointer",
          color: C.tealLight, fontSize: 28, lineHeight: 1,
          zIndex: 1, width: 52, height: 52,
          alignItems: "center", justifyContent: "center", padding: 0,
          transition: "background 0.2s",
        }}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile dropdown - Kept compact (Top matches the new Nav Height) */}
      {menuOpen && (
        <div style={{
          position: "absolute", 
          top: navHeight, // Dynamic anchor so it sits flush under the new bar
          left: 0, right: 0,
          background: C.navy,
          borderTop: `1px solid rgba(163,238,224,0.2)`,
          borderBottom: `2px solid ${C.teal}`,
          padding: "8px 6vw 12px",
          display: "flex", flexDirection: "column", gap: 0,
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
        }}>
          <style>{`@keyframes dropIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}`}</style>
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.label.toLowerCase();
            return (
              <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} style={{
                color: isActive ? C.tealLight : "rgba(255,255,255,0.8)",
                textDecoration: "none", 
                fontSize: 13, // Kept small as per your request
                fontWeight: isActive ? 600 : 400,
                letterSpacing: "0.08em", 
                textTransform: "uppercase",
                padding: "12px 0",
                borderBottom: i < navLinks.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                borderLeft: isActive ? `3px solid ${C.teal}` : "3px solid transparent",
                paddingLeft: 10, 
                transition: "color 0.15s",
              }}>{link.label}</a>
            );
          })}
        </div>
      )}
    </nav>
  );
}