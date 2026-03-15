import { X, CheckCircle, Trash2, Shield, AlertTriangle, Mail } from "lucide-react";

export default function EmailPreviewModal({ email, onClose, onRelease, onDelete }) {
  if (!email) return null;

  const riskColors = {
    Critical: { bg: "var(--danger-muted)",  color: "var(--danger)",  border: "var(--danger-muted)" },
    High:     { bg: "var(--warn-muted)",    color: "var(--warn)",    border: "var(--warn-muted)" },
    Medium:   { bg: "var(--primary-100)",   color: "var(--primary)", border: "var(--primary-100)" },
    Low:      { bg: "var(--success-muted)", color: "var(--success)", border: "var(--success-muted)" },
  };
  const rc = riskColors[email.risk] || riskColors.Medium;

  return (
    <div
      style={{
        position: "fixed", inset: 0, background: "rgba(13,27,69,0.45)", zIndex: 200,
        display: "flex", alignItems: "center", justifyContent: "center",
        backdropFilter: "blur(6px)", animation: "fadeIn .2s ease",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "white", border: "1px solid var(--border)", borderRadius: 20,
          padding: 28, width: 560, maxWidth: "94vw", maxHeight: "92vh",
          overflowY: "auto", boxShadow: "var(--shadow-xl)",
          animation: "fadeUp .25s cubic-bezier(0.22,1,0.36,1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 42, height: 42, borderRadius: 12,
              background: "var(--primary-50)", border: "1px solid var(--primary-100)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--primary)",
            }}>
              <Mail size={20} />
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 800, color: "var(--text)" }}>Email Preview</div>
              <div style={{ fontSize: 11, color: "var(--text-3)", fontFamily: "var(--mono)", marginTop: 2 }}>
                Quarantined · ID #{email.id} · {email.time}
              </div>
            </div>
          </div>
          <button
            style={{
              width: 32, height: 32, border: "1px solid var(--border)", borderRadius: 8,
              background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "var(--text-3)", transition: "var(--transition)",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--danger-light)"; e.currentTarget.style.color = "var(--danger)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--bg)"; e.currentTarget.style.color = "var(--text-3)"; }}
            onClick={onClose}
          >
            <X size={15} />
          </button>
        </div>

        {/* Risk badge */}
        <div style={{ marginBottom: 16 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 5,
            background: rc.bg, color: rc.color,
            padding: "5px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700,
            fontFamily: "var(--mono)",
          }}>
            <AlertTriangle size={12} />
            {email.risk} Risk
          </span>
        </div>

        {/* Email preview */}
        <div className="email-preview">
          <div className="email-from">FROM: <strong style={{ color: "var(--danger)" }}>{email.from}</strong></div>
          <div className="email-from">TO: {email.to}</div>
          <div className="email-subject">{email.subject}</div>
          <div className="email-body">{email.body}</div>
        </div>

        {/* Indicators */}
        <div style={{ margin: "14px 0 6px" }}>
          <div style={{ fontSize: 10, fontWeight: 700, fontFamily: "var(--mono)", letterSpacing: "0.10em", color: "var(--text-3)", textTransform: "uppercase", marginBottom: 8 }}>
            Threat Indicators
          </div>
          <div className="phish-indicators">
            {email.indicators.map((ind, i) => (
              <span key={i} className="tag tag-red">
                <AlertTriangle size={10} /> {ind}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: 10, marginTop: 22, borderTop: "1px solid var(--border)", paddingTop: 18 }}>
          <button className="btn btn-success" onClick={() => { onRelease(email.id); onClose(); }}>
            <CheckCircle size={15} /> Release Email
          </button>
          <button className="btn btn-danger" onClick={() => { onDelete(email.id); onClose(); }}>
            <Trash2 size={15} /> Delete Permanently
          </button>
          <button className="btn btn-ghost" style={{ marginLeft: "auto" }} onClick={onClose}>
            Keep Quarantined
          </button>
        </div>
      </div>
    </div>
  );
}
