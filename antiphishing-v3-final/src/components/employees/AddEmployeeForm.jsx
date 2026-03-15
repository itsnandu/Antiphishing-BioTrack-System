import { UserPlus, X } from "lucide-react";

export default function AddEmployeeForm({ onClose }) {
  return (
    <div className="panel" style={{ marginBottom: 20, maxWidth: 560 }}>
      <div className="panel-header">
        <span className="panel-title">
          <UserPlus size={16} style={{ color: "var(--primary)" }} />
          Add New Employee
        </span>
        <button className="btn btn-ghost btn-sm" onClick={onClose}><X size={13} /></button>
      </div>
      <div className="panel-body">
        <div className="form-grid">
          <div className="form-group"><label>FIRST NAME</label><input placeholder="First name" /></div>
          <div className="form-group"><label>LAST NAME</label><input placeholder="Last name" /></div>
          <div className="form-group full"><label>WORK EMAIL</label><input placeholder="employee@company.com" /></div>
          <div className="form-group">
            <label>DEPARTMENT</label>
            <select>
              <option>Engineering</option><option>Finance</option>
              <option>HR</option><option>Marketing</option><option>Operations</option>
            </select>
          </div>
          <div className="form-group"><label>ROLE / TITLE</label><input placeholder="e.g. Senior Engineer" /></div>
        </div>
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          <button className="btn btn-primary"><UserPlus size={13} /> Add Employee</button>
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
