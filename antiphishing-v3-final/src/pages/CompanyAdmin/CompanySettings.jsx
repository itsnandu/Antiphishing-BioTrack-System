import { useState } from "react";
import { Building2, Bell, Key, Save } from "lucide-react";

const TOGGLES = [
  { label: "Email alerts for new quarantined emails", on: true },
  { label: "Weekly threat summary report",            on: true },
  { label: "Critical threat instant notifications",   on: false },
];

export default function CompanySettings() {
  const [toggles, setToggles] = useState(TOGGLES);
  const flip = (i) => setToggles((prev) => prev.map((t, idx) => idx === i ? { ...t, on: !t.on } : t));

  return (
    <div className="page-enter" style={{ maxWidth: 680 }}>
      {/* Company Profile */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <Building2 size={16} style={{ color: "var(--primary)" }} />
          <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>Company Profile</div>
        </div>
        <div className="panel">
          <div className="panel-body">
            <div className="form-grid">
              <div className="form-group"><label>COMPANY NAME</label><input defaultValue="TechCorp Solutions" /></div>
              <div className="form-group"><label>DOMAIN</label><input defaultValue="techcorp.com" /></div>
              <div className="form-group full"><label>ADMIN EMAIL</label><input defaultValue="rahul@techcorp.com" /></div>
            </div>
            <button className="btn btn-primary" style={{ marginTop: 18 }}><Save size={13} /> Save Changes</button>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <Bell size={16} style={{ color: "var(--primary)" }} />
          <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>Notification Preferences</div>
        </div>
        <div className="panel">
          <div className="panel-body">
            {toggles.map((t, i) => (
              <div key={i} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "12px 0", borderBottom: i < toggles.length - 1 ? "1px solid var(--border)" : "none",
              }}>
                <span style={{ fontSize: 13, color: "var(--text-2)" }}>{t.label}</span>
                <div
                  style={{
                    width: 44, height: 24, borderRadius: 12, cursor: "pointer", flexShrink: 0,
                    background: t.on ? "var(--primary)" : "var(--border2)",
                    position: "relative", transition: "background 0.2s",
                  }}
                  onClick={() => flip(i)}
                >
                  <div style={{
                    position: "absolute", top: 3, left: t.on ? 22 : 3,
                    width: 18, height: 18, borderRadius: "50%", background: "white",
                    transition: "left 0.2s", boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Password */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <Key size={16} style={{ color: "var(--primary)" }} />
          <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>Change Password</div>
        </div>
        <div className="panel">
          <div className="panel-body">
            <div className="form-grid">
              <div className="form-group full"><label>CURRENT PASSWORD</label><input type="password" placeholder="••••••••" /></div>
              <div className="form-group"><label>NEW PASSWORD</label><input type="password" placeholder="••••••••" /></div>
              <div className="form-group"><label>CONFIRM PASSWORD</label><input type="password" placeholder="••••••••" /></div>
            </div>
            <button className="btn btn-primary" style={{ marginTop: 18 }}><Save size={13} /> Update Password</button>
          </div>
        </div>
      </div>
    </div>
  );
}
