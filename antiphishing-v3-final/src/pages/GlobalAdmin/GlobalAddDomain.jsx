import { Building2, CheckCircle } from "lucide-react";

export default function GlobalAddDomain() {
  return (
    <div className="page-enter">
      <div className="panel" style={{ maxWidth: 680 }}>
        <div className="panel-header">
          <span className="panel-title">
            <Building2 size={16} style={{ color: "var(--primary)" }} />
            Register New Company &amp; Domain
          </span>
        </div>
        <div className="panel-body">
          <div className="form-grid">
            <div className="form-group"><label>COMPANY NAME</label><input placeholder="e.g. Acme Corporation" /></div>
            <div className="form-group"><label>PRIMARY DOMAIN</label><input placeholder="e.g. acme.com" /></div>
            <div className="form-group"><label>ADMIN FIRST NAME</label><input placeholder="John" /></div>
            <div className="form-group"><label>ADMIN LAST NAME</label><input placeholder="Doe" /></div>
            <div className="form-group full"><label>ADMIN EMAIL</label><input placeholder="admin@acme.com" /></div>
            <div className="form-group">
              <label>INDUSTRY</label>
              <select>
                <option>Technology</option><option>Finance</option><option>Healthcare</option>
                <option>Retail</option><option>Manufacturing</option><option>Other</option>
              </select>
            </div>
            <div className="form-group"><label>EMPLOYEE COUNT</label><input type="number" placeholder="e.g. 150" /></div>
            <div className="form-group full">
              <label>NOTES</label>
              <textarea rows={3} placeholder="Additional notes…" style={{ resize: "vertical" }} />
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
            <button className="btn btn-primary">
              <CheckCircle size={14} /> Register Company
            </button>
            <button className="btn btn-ghost">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}
