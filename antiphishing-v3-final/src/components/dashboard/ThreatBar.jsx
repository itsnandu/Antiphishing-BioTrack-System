const getColor = (v) =>
  v > 70 ? "#dc2626" : v > 50 ? "#d97706" : "#16a34a";

export default function ThreatBar({ label, value }) {
  const color = getColor(value);
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, alignItems: "center" }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: "var(--text-2)" }}>{label}</span>
        <span style={{ fontSize: 11, fontFamily: "var(--mono)", fontWeight: 700, color }}>{value}%</span>
      </div>
      <div className="threat-bar">
        <div className="threat-fill" style={{ width: `${value}%`, background: color }} />
      </div>
    </div>
  );
}
