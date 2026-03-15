import { useState } from "react";
import { Search, UserPlus, Users } from "lucide-react";
import EmployeeTable   from "../../components/employees/EmployeeTable";
import AddEmployeeForm from "../../components/employees/AddEmployeeForm";
import { EMPLOYEES }   from "../../data/mockData";

const MY = EMPLOYEES.filter((e) => e.company === "TechCorp");

export default function CompanyEmployees() {
  const [showAdd, setShowAdd] = useState(false);
  const [search,  setSearch]  = useState("");

  const filtered = MY.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="page-enter">
      <div style={{ display: "flex", gap: 12, marginBottom: 20, alignItems: "center" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          background: "white", border: "1px solid var(--border)",
          borderRadius: 10, padding: "0 14px", height: 40, flex: 1,
        }}>
          <Search size={14} style={{ color: "var(--text-4)" }} />
          <input
            style={{ border: "none", outline: "none", fontSize: 13, fontFamily: "var(--font)", width: "100%", color: "var(--text)" }}
            placeholder="Search employees…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={() => setShowAdd(!showAdd)}>
          <UserPlus size={14} /> Add Employee
        </button>
      </div>

      {showAdd && <AddEmployeeForm onClose={() => setShowAdd(false)} />}

      <div className="panel">
        <div className="panel-header">
          <span className="panel-title">
            <Users size={16} style={{ color: "var(--primary)" }} />
            TechCorp Employees
          </span>
          <span style={{ fontSize: 11, color: "var(--text-3)", fontFamily: "var(--mono)" }}>{filtered.length} members</span>
        </div>
        <EmployeeTable employees={filtered} showCompany={false} />
      </div>
    </div>
  );
}
