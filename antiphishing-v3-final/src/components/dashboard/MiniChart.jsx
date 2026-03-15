export default function MiniChart({ values, color = "var(--primary-200)", colorLatest = "var(--primary)" }) {
  return (
    <div>
      <div className="mini-chart">
        {values.map((v, i) => (
          <div
            key={i}
            className="mini-bar"
            style={{
              height:     `${v}%`,
              background: i >= values.length - 2 ? colorLatest : color,
              opacity:    i >= values.length - 2 ? 1 : 0.55,
            }}
            title={`Week ${i + 1}`}
          />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
        <span style={{ fontSize: 10, color: "var(--text-4)", fontFamily: "var(--mono)" }}>12 weeks ago</span>
        <span style={{ fontSize: 10, color: colorLatest, fontFamily: "var(--mono)", fontWeight: 700 }}>This week: 10,508</span>
      </div>
    </div>
  );
}
