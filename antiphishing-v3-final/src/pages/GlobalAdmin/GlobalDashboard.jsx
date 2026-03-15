import { BarChart2, Activity, Building2, Users, ShieldAlert, AlertTriangle } from "lucide-react";
import StatCard     from "../../components/dashboard/StatCard";
import MiniChart    from "../../components/dashboard/MiniChart";
import ThreatBar    from "../../components/dashboard/ThreatBar";
import CompanyTable from "../../components/companies/CompanyTable";
import { COMPANIES } from "../../data/mockData";

const CHART = [32, 48, 41, 67, 55, 79, 63, 88, 74, 92, 71, 85];

export default function GlobalDashboard() {
  return (
    <div className="page-enter">
      <div className="stats-grid">
        <StatCard icon={<Building2 size={20} />}    val="4"   label="Active Domains"  delta="+1 this month"   color="c-blue"  />
        <StatCard icon={<Users size={20} />}         val="488" label="Total Employees" delta="+24 this week"   color="c-blue"  />
        <StatCard icon={<ShieldAlert size={20} />}   val="79"  label="Quarantined"     delta="12 today" deltaUp color="c-red"   />
        <StatCard icon={<AlertTriangle size={20} />} val="2"   label="Active Threats"  delta="Needs review" deltaUp color="c-amber" />
      </div>

      <div className="dashboard-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }}>
        <div className="panel stagger-1 animate-fade-up">
          <div className="panel-header">
            <span className="panel-title">
              <BarChart2 size={15} style={{ color: "var(--primary)" }} />
              Email Traffic — 12 Weeks
            </span>
          </div>
          <div className="panel-body"><MiniChart values={CHART} /></div>
        </div>
        <div className="panel stagger-2 animate-fade-up">
          <div className="panel-header">
            <span className="panel-title">
              <Activity size={15} style={{ color: "var(--warn)" }} />
              Risk by Company
            </span>
          </div>
          <div className="panel-body">
            {COMPANIES.map((c) => <ThreatBar key={c.id} label={c.name} value={c.risk} />)}
          </div>
        </div>
      </div>

      <div className="panel stagger-3 animate-fade-up">
        <div className="panel-header">
          <span className="panel-title">
            <Building2 size={15} style={{ color: "var(--primary)" }} />
            Registered Company Domains
          </span>
          <span style={{ fontSize: 11, color: "var(--text-3)", fontFamily: "var(--mono)" }}>
            4 companies · 488 employees
          </span>
        </div>
        <CompanyTable />
      </div>
    </div>
  );
}
