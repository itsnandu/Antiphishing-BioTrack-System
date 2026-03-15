import { useState } from "react";
import { Search, Users } from "lucide-react";
import EmployeeTable             from "../../components/employees/EmployeeTable";
import { EMPLOYEES, COMPANIES } from "../../data/mockData";

export default function GlobalEmployees() {
  const [search,  setSearch]  = useState("");
  const [company, setCompany] = useState("All");

  const filtered = EMPLOYEES.filter((e) =>
    (company === "All" || e.company === company) &&
    (e.name.toLowerCase().includes(search.toLowerCase()) ||
     e.email.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="page-enter">
      <div style={{ display: "flex", gap: 12, marginBottom: 20, alignItems: "center", flexWrap: "wrap" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          background: "white", border: "1px solid var(--border)",
          borderRadius: 10, padding: "0 14px", height: 40, flex: 1, minWidth: 200,
        }}>
          <Search size={14} style={{ color: "var(--text-4)" }} />
          <input
            style={{ border: "none", outline: "none", fontSize: 13, fontFamily: "var(--font)", width: "100%", color: "var(--text)" }}
            placeholder="Search name or email…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          style={{ padding: "9px 13px", borderRadius: 10, border: "1px solid var(--border)", fontSize: 13, fontFamily: "var(--font)", color: "var(--text)", background: "white", height: 40 }}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        >
          <option value="All">All Companies</option>
          {COMPANIES.map((c) => <option key={c.id} value={c.name}>{c.name}</option>)}
        </select>
      </div>

      <div className="panel">
        <div className="panel-header">
          <span className="panel-title">
            <Users size={16} style={{ color: "var(--primary)" }} />
            All Employees
          </span>
          <span style={{ fontSize: 11, color: "var(--text-3)", fontFamily: "var(--mono)" }}>{filtered.length} results</span>
        </div>
        <EmployeeTable employees={filtered} showCompany />
      </div>
    </div>
  );
}
