import { C } from "../data/constants";

export default function SectionLabel({ children, light = false }) {
  const color = light ? C.tealLight : C.teal;
  return (
    <div style={{
      fontSize: 11, fontWeight: 600,
      letterSpacing: "0.22em", textTransform: "uppercase",
      color, marginBottom: 12,
      display: "flex", alignItems: "center", gap: 10,
    }}>
      {children}
      <span style={{ width: 40, height: 1, background: color, display: "inline-block" }} />
    </div>
  );
}
