import { useState } from "react";
import { UserCircle2, Pencil, Trash2, Eye, EyeOff } from "lucide-react";
import { EMPLOYEES } from "../../data/mockData";

export default function EmployeeTable({ employees = EMPLOYEES, showCompany = true, onEdit, onRemove }) {

  const [showPass, setShowPass] = useState({});

  const togglePass = (id) => {
    setShowPass((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>EMPLOYEE</th>
            <th>EMAIL</th>
            {showCompany && <th>COMPANY</th>}
            <th>PASSWORD</th>
            <th>QUARANTINED</th>
            <th>LAST EVENT</th>
            <th>ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((e) => (
            <tr key={e.id}>

              <td>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      background: "var(--primary-100)",
                      border: "1px solid var(--primary-200)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 11,
                      fontWeight: 700,
                      color: "var(--primary)",
                      flexShrink: 0
                    }}
                  >
                    {e.name.split(" ").map(n => n[0]).join("")}
                  </div>

                  <span style={{ fontWeight: 600, color: "var(--text)" }}>
                    {e.name}
                  </span>
                </div>
              </td>

              <td style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--text-3)" }}>
                {e.email}
              </td>

              {showCompany && (
                <td>
                  <span className="tag tag-blue">{e.company}</span>
                </td>
              )}

              {/* PASSWORD COLUMN */}
              <td style={{ fontFamily: "var(--mono)", fontSize: 11 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span>
                    {showPass[e.id] ? e.password : "••••••••"}
                  </span>

                  <button
                    onClick={() => togglePass(e.id)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "var(--text-3)",
                      display: "flex",
                      alignItems: "center"
                    }}
                    title={showPass[e.id] ? "Hide" : "Show"}
                  >
                    {showPass[e.id] ? <EyeOff size={13} /> : <Eye size={13} />}
                  </button>
                </div>
              </td>

              <td style={{ fontFamily: "var(--mono)", fontWeight: 600 }}>
                <span
                  className={`tag ${
                    e.quarantined > 10
                      ? "tag-red"
                      : e.quarantined > 5
                      ? "tag-amber"
                      : "tag-gray"
                  }`}
                >
                  {e.quarantined}
                </span>
              </td>

              <td style={{ fontSize: 12, color: "var(--text-3)" }}>
                {e.lastEvent}
              </td>

              <td>
                <div style={{ display: "flex", gap: 6 }}>
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => onEdit?.(e)}
                  >
                    <Pencil size={12} /> Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onRemove?.(e.id)}
                  >
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