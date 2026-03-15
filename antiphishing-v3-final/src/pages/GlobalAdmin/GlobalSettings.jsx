import { Key, Globe, Settings, UserPlus, Pencil, Trash2, Save } from "lucide-react";
import { COMPANIES } from "../../data/mockData";

const ADMINS = [
  { name: "Global Admin", email: "superadmin@biotrack.io", last: "Today 10:24 AM" },
  { name: "Ops Admin",    email: "ops@biotrack.io",        last: "Yesterday 3:10 PM" },
];

export default function GlobalSettings() {
  return (
    <div className="page-enter" style={{ maxWidth: 760 }}>
      {/* Admin Credentials */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <Key size={16} style={{ color: "var(--primary)" }} />
          <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>Admin Credentials</div>
        </div>
        <div className="panel">
          {ADMINS.map((a, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 12, padding: "14px 20px",
              borderBottom: i < ADMINS.length - 1 ? "1px solid var(--border)" : "none",
            }}>
              <div className="avatar">{a.name[0]}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>{a.name}</div>
                <div style={{ fontSize: 11, color: "var(--text-3)", fontFamily: "var(--mono)" }}>{a.email} · Last login: {a.last}</div>
              </div>
              <span className="tag tag-blue">Global Admin</span>
              <button className="btn btn-ghost btn-sm"><Pencil size={12} /> Edit</button>
              <button className="btn btn-danger btn-sm"><Trash2 size={12} /></button>
            </div>
          ))}
          <div style={{ padding: "14px 20px" }}>
            <button className="btn btn-primary btn-sm"><UserPlus size={13} /> Add Admin User</button>
          </div>
        </div>
      </div>

      {/* Domain Management */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <Globe size={16} style={{ color: "var(--primary)" }} />
          <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>Domain Management</div>
        </div>
        <div className="panel">
          {COMPANIES.map((c, i) => (
            <div key={c.id} style={{
              display: "flex", alignItems: "center", gap: 12, padding: "14px 20px",
              borderBottom: i < COMPANIES.length - 1 ? "1px solid var(--border)" : "none",
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: "var(--primary-50)", border: "1px solid var(--primary-100)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--primary)",
              }}>
                <Globe size={17} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>{c.name}</div>
                <div style={{ fontSize: 11, color: "var(--text-3)", fontFamily: "var(--mono)" }}>{c.domain} · {c.employees} employees</div>
              </div>
              <span className={`tag ${c.status === "Active" ? "tag-green" : "tag-red"}`}>{c.status}</span>
              <button className="btn btn-ghost btn-sm"><Pencil size={12} /> Edit</button>
              <button className="btn btn-danger btn-sm"><Trash2 size={12} /></button>
            </div>
          ))}
        </div>
      </div>

      {/* System Settings */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <Settings size={16} style={{ color: "var(--primary)" }} />
          <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>System Settings</div>
        </div>
        <div className="panel">
          <div className="panel-body">
            <div className="form-grid">
              <div className="form-group">
                <label>QUARANTINE THRESHOLD</label>
                <select><option>Strict (catch more)</option><option>Balanced</option><option>Relaxed</option></select>
              </div>
              <div className="form-group">
                <label>AUTO-DELETE AFTER</label>
                <select><option>30 days</option><option>60 days</option><option>90 days</option><option>Never</option></select>
              </div>
              <div className="form-group full">
                <label>ALERT NOTIFICATION EMAIL</label>
                <input defaultValue="alerts@biotrack.io" />
              </div>
            </div>
            <button className="btn btn-primary" style={{ marginTop: 18 }}>
              <Save size={14} /> Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
