import {
  LayoutDashboard, Building2, Users, ShieldAlert, PlusCircle,
  LogOut, ChevronLeft, ChevronRight, Shield, X
} from "lucide-react";
import { NAV_CONFIG, ROLE_META } from "../../data/mockData";

const ICON_MAP = {
  dashboard:  <LayoutDashboard size={18} />,
  companies:  <Building2 size={18} />,
  employees:  <Users size={18} />,
  quarantine: <ShieldAlert size={18} />,
  add:        <PlusCircle size={18} />,
};

export default function Sidebar({
  role, page, onNavigate, onLogout,
  sidebarOpen, setSidebarOpen,
  collapsed, setCollapsed,
}) {
  const navItems = NAV_CONFIG[role];
  const meta     = ROLE_META[role];

  return (
    <>
      {/* ── Mobile backdrop overlay ── */}
      {/*
        Rendered as a sibling OUTSIDE the sidebar so it truly
        covers the entire viewport including the main content.
        Only visible when sidebarOpen === true on mobile.
      */}
      <div
        className={`sidebar-backdrop${sidebarOpen ? " is-visible" : ""}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />

      {/* ── Sidebar ── */}
      <aside
        className={[
          "sidebar",
          collapsed  ? "collapsed"    : "",
          sidebarOpen ? "mobile-open" : "",
        ].filter(Boolean).join(" ")}
      >
        {/* Mobile close (X) button — only shown on mobile */}
        <button
          className="sidebar-mobile-close"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close menu"
        >
          <X size={16} />
        </button>

        {/* ── Logo ── */}
        <div className="sidebar-logo">
          <div className="logo-icon-wrap">
            <Shield size={20} />
          </div>
          <div className="logo-text-block">
            <div className="logo-name">BioTrack Shield</div>
            <div className="logo-sub">Anti-Phishing</div>
          </div>
        </div>

        {/* ── Role badge ── */}
        <div className={`role-badge role-${role}`}>
          {role === "global"   && (collapsed ? "GA"  : "Global Admin")}
          {role === "company"  && (collapsed ? "CA"  : "Company Admin")}
          {role === "employee" && (collapsed ? "EMP" : "Employee")}
        </div>

        {/* ── Nav items ── */}
        <nav className="nav">
          {navItems.map((item) => (
            <div key={item.key} className="nav-item-wrap">
              {item.section && !collapsed && (
                <div className="nav-section">{item.section}</div>
              )}
              <div
                className={`nav-item${page === item.key ? " active" : ""}`}
                onClick={() => onNavigate(item.key)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && onNavigate(item.key)}
              >
                <span className="nav-icon">{ICON_MAP[item.key]}</span>
                <span className="nav-label">{item.label}</span>
                {item.badge && <span className="nav-badge" />}
                {/* Tooltip shown only when desktop-collapsed */}
                {collapsed && (
                  <div className="nav-tooltip">{item.label}</div>
                )}
              </div>
            </div>
          ))}
        </nav>

        {/* ── Desktop collapse toggle (hidden on mobile) ── */}
        <div
          className="sidebar-collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
          {!collapsed && <span>Collapse</span>}
        </div>

        {/* ── Footer ── */}
        <div className="sidebar-footer">
          <div className="avatar">{meta.initials}</div>
          <div className="user-info">
            <div className="user-name">{meta.user}</div>
            <div className="user-role">{meta.label}</div>
          </div>
          <button
            className="logout-btn"
            title="Logout"
            onClick={onLogout}
            aria-label="Logout"
          >
            <LogOut size={14} />
          </button>
        </div>
      </aside>
    </>
  );
}
