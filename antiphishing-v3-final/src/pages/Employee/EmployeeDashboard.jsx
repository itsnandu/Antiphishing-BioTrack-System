import { ShieldCheck, Link2, Paperclip, Building2, Zap } from "lucide-react";
import StatCard        from "../../components/dashboard/StatCard";
import QuarantineTable from "../../components/quarantine/QuarantineTable";
import { QUARANTINE_EMAILS } from "../../data/mockData";

const MY_EMAILS = QUARANTINE_EMAILS.filter((e) => e.to === "alice@techcorp.com");

const TIPS = [
  { icon: <Link2 size={20} />, tip: "Always hover over links before clicking — verify the destination URL in your status bar." },
  { icon: <Paperclip size={20} />, tip: "Never open attachments from unknown senders, even if they appear legitimate or urgent." },
  { icon: <Building2 size={20} />, tip: "Legitimate organisations never ask for passwords or payment info over email." },
  { icon: <Zap size={20} />, tip: "Artificial urgency and threats are a hallmark of phishing — slow down and verify." },
];

export default function EmployeeDashboard() {
  return (
    <div className="page-enter">
      {/* Welcome banner */}
      <div style={{
        background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
        borderRadius: 16, padding: "24px 28px", marginBottom: 24, color: "white",
        display: "flex", alignItems: "center", gap: 20,
        boxShadow: "0 4px 24px rgba(0,61,195,0.3)",
      }}>
        <div style={{
          width: 56, height: 56, borderRadius: "50%",
          background: "rgba(255,255,255,0.18)",
          border: "2px solid rgba(255,255,255,0.3)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 20, fontWeight: 800, flexShrink: 0,
        }}>AJ</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>Welcome back, Alice</div>
          <div style={{ fontSize: 12, opacity: 0.82, fontFamily: "var(--mono)" }}>
            alice@techcorp.com · TechCorp Solutions · Employee
          </div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontSize: 38, fontWeight: 800, lineHeight: 1 }}>{MY_EMAILS.length}</div>
          <div style={{ fontSize: 12, opacity: 0.82 }}>emails quarantined</div>
        </div>
      </div>

      <QuarantineTable emails={MY_EMAILS} showCompany={false} />

      {/* Tips */}
      <div className="panel" style={{ marginTop: 20 }}>
        <div className="panel-header">
          <span className="panel-title">
            <ShieldCheck size={16} style={{ color: "var(--success)" }} />
            Phishing Awareness Tips
          </span>
        </div>
        <div className="panel-body">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {TIPS.map((t, i) => (
              <div key={i} style={{
                display: "flex", gap: 12, padding: 14,
                background: "var(--primary-50)", borderRadius: 10,
                border: "1px solid var(--primary-100)",
              }}>
                <span style={{ color: "var(--primary)", flexShrink: 0, marginTop: 2 }}>{t.icon}</span>
                <span style={{ fontSize: 12, color: "var(--text-2)", lineHeight: 1.6 }}>{t.tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
