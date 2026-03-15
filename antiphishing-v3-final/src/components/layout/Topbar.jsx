import { useState } from "react";
import { Search, Bell, LogOut, Menu } from "lucide-react";
import { PAGE_TITLES, ROLE_META } from "../../data/mockData";

export default function Topbar({ role, page, onLogout, onOpenSidebar }) {
  const [showMenu, setShowMenu] = useState(false);
  const meta = ROLE_META[role];

  return (
    <header className="topbar">

      {/* ── Hamburger — ONLY on mobile, inside topbar ── */}
      <button
        className="topbar-hamburger"
        onClick={onOpenSidebar}
        aria-label="Open navigation"
      >
        <Menu size={20} />
      </button>

      {/* ── Page title ── */}
      <div className="topbar-title-block">
        <div className="topbar-title">{PAGE_TITLES[page] ?? "Dashboard"}</div>
        <div className="topbar-sub">BioTrack Shield · Anti-Phishing Platform</div>
      </div>

      <div className="topbar-spacer" />

      {/* ── Search — hidden on mobile ── */}
      <div className="topbar-search">
        <Search size={13} strokeWidth={2.2} className="topbar-search-icon" />
        <input placeholder="Search threats, emails…" />
      </div>

      {/* ── Bell ── */}
      <div className="topbar-icon-btn" aria-label="Notifications">
        <Bell size={16} strokeWidth={2} />
        <div className="topbar-notif-dot" />
      </div>

      {/* ── User avatar + dropdown ── */}
      <div className="topbar-user-wrap">
        <div
          className="avatar-lg"
          onClick={() => setShowMenu(!showMenu)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setShowMenu(!showMenu)}
          aria-label="User menu"
        >
          {meta.initials}
        </div>

        {showMenu && (
          <>
            {/* Click-away overlay */}
            <div
              className="topbar-dropdown-overlay"
              onClick={() => setShowMenu(false)}
            />
            <div className="topbar-dropdown">
              <div className="topbar-dropdown-header">
                <div className="topbar-dropdown-name">{meta.user}</div>
                <div className="topbar-dropdown-email">{meta.email}</div>
              </div>
              <div
                className="topbar-dropdown-logout"
                onClick={() => { setShowMenu(false); onLogout?.(); }}
                role="button"
                tabIndex={0}
              >
                <LogOut size={14} />
                <span>Logout</span>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
