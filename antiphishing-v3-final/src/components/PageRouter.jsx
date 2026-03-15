import GlobalDashboard   from "../pages/GlobalAdmin/GlobalDashboard";
import GlobalEmployees   from "../pages/GlobalAdmin/GlobalEmployees";
import GlobalAddDomain   from "../pages/GlobalAdmin/GlobalAddDomain";

import CompanyDashboard  from "../pages/CompanyAdmin/CompanyDashboard";
import CompanyEmployees  from "../pages/CompanyAdmin/CompanyEmployees";

import EmployeeDashboard from "../pages/Employee/EmployeeDashboard";

import QuarantineTable   from "./quarantine/QuarantineTable";
import CompanyTable      from "./companies/CompanyTable";
import { QUARANTINE_EMAILS } from "../data/mockData";

const ALL_Q     = QUARANTINE_EMAILS;
const COMPANY_Q = QUARANTINE_EMAILS.filter((e) => e.company === "TechCorp");

export default function PageRouter({ role, page }) {
  if (role === "global") {
    if (page === "dashboard")  return <GlobalDashboard />;
    if (page === "companies")  return (
      <div className="panel page-enter">
        <div className="panel-header">
          <span className="panel-title">🏢 All Company Domains</span>
        </div>
        <CompanyTable />
      </div>
    );
    if (page === "employees")  return <GlobalEmployees />;
    if (page === "quarantine") return <QuarantineTable emails={ALL_Q} showCompany />;
    if (page === "add")        return <GlobalAddDomain />;
  }

  if (role === "company") {
    if (page === "dashboard")  return <CompanyDashboard />;
    if (page === "quarantine") return <QuarantineTable emails={COMPANY_Q} showCompany={false} />;
    if (page === "employees")  return <CompanyEmployees />;
  }

  if (role === "employee") {
    return <EmployeeDashboard />;
  }

  return <div className="empty">Page not found</div>;
}
