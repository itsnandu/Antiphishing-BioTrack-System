import { Building2, Users, ShieldAlert, Target } from "lucide-react";
import StatCard        from "../../components/dashboard/StatCard";
import QuarantineTable from "../../components/quarantine/QuarantineTable";
import { QUARANTINE_EMAILS } from "../../data/mockData";

const MY_EMAILS = QUARANTINE_EMAILS.filter((e) => e.company === "TechCorp");

export default function CompanyDashboard() {
  return (
    <div className="page-enter">
      {/* Welcome strip */}
      <div style={{
        background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
        borderRadius: 16, padding: "22px 26px", marginBottom: 24, color: "white",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        boxShadow: "0 4px 24px rgba(0,61,195,0.3)",
      }}>
        <div>
          <div style={{ fontSize: 19, fontWeight: 800, marginBottom: 4 }}>TechCorp Solutions</div>
          <div style={{ fontSize: 12, opacity: 0.82, fontFamily: "var(--mono)" }}>techcorp.com · Company Admin Dashboard</div>
        </div>
        <div style={{
          width: 56, height: 56, borderRadius: 14, background: "rgba(255,255,255,0.15)",
          border: "1.5px solid rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Building2 size={28} />
        </div>
      </div>

      <div className="stats-grid">
        <StatCard icon={<Users size={22} />}        val="142"    label="Total Employees"    color="c-blue"  />
        <StatCard icon={<ShieldAlert size={22} />}  val="23"     label="Quarantined Emails" color="c-red"   />
        <StatCard icon={<Target size={22} />}       val="Dave B" label="Most Targeted"      color="c-amber" />
      </div>

      <QuarantineTable emails={MY_EMAILS} showCompany={false} />
    </div>
  );
}
