import { useState } from "react";
import { Eye, EyeOff, Pencil, Trash2 } from "lucide-react";
import { COMPANIES } from "../../data/mockData";

const riskColor = (v) => v > 70 ? "var(--danger)" : v > 50 ? "var(--warn)" : "var(--success)";

export default function CompanyTable({ onManage, onRemove }) {
  const [showPass, setShowPass] = useState({});
  const togglePass = (id) => setShowPass((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>COMPANY</th>
            <th>DOMAIN</th>
            <th>EMPLOYEES</th>
            <th>QUARANTINED</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {COMPANIES.map((c) => (
            <tr key={c.id}>
              <td style={{ fontWeight: 700, color: "var(--text)" }}>{c.name}</td>
              <td>
                <div className="domain-pill">
                  <span className={c.status === "Active" ? "dot-green" : "dot-red"} />
                  {c.domain}
                </div>
              </td>
              <td style={{ fontFamily: "var(--mono)", fontWeight: 600 }}>{c.employees}</td>
              <td>
                <span className={`tag ${c.quarantined > 20 ? "tag-red" : "tag-amber"}`}>
                  {c.quarantined}
                </span>
              </td>
              <td style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--text-2)" }}>{c.email}</td>
              <td style={{ fontFamily: "var(--mono)", fontSize: 11 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span>{showPass[c.id] ? c.password : "••••••••"}</span>
                  <button
                    onClick={() => togglePass(c.id)}
                    style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-3)", display: "flex", alignItems: "center" }}
                    title={showPass[c.id] ? "Hide" : "Show"}
                  >
                    {showPass[c.id] ? <EyeOff size={13} /> : <Eye size={13} />}
                  </button>
                </div>
              </td>
              <td>
                <div style={{ display: "flex", gap: 6 }}>
                  <button className="btn btn-ghost btn-sm" onClick={() => onManage?.(c)}>
                    <Pencil size={12} /> Edit
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => onRemove?.(c.id)}>
                    <Trash2 size={12} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
