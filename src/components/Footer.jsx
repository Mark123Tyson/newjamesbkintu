import { C } from "../data/constants";

const styles = {
  footer: {
    background: "#030d1a",
    color: "rgba(255,255,255,0.4)",
    textAlign: "center",
    padding: "32px 5vw",
    fontSize: 14,
    borderTop: `1px solid rgba(13,148,136,0.2)`,
  },
  divider: {
    width: 40, height: 1,
    background: "rgba(13,148,136,0.25)",
    margin: "14px auto",
  },
  devLink: {
    color: "rgba(255,255,255,0.35)",
    textDecoration: "none",
    fontSize: 13,
    letterSpacing: "0.04em",
    display: "inline-block",
    transition: "color 0.2s",
  },
  devName: {
    color: C.teal,
    fontWeight: 600,
    letterSpacing: "0.08em",
  },
};

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>
        © 2025{" "}
        <span style={{ color: C.tealLight }}>Dr James Kintu</span>
        {" "}· Governance · Development · Academia · Kampala, Uganda
      </p>
      <div style={styles.divider} />
      <a
        href="https://marktyson.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.devLink}
        onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.65)"}
        onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}
      >
        Built by <span style={styles.devName}>MARK TYSON</span>
      </a>
    </footer>
  );
}
