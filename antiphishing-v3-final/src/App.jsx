import { useState, useEffect } from "react";
import { useAuth }    from "./hooks/useAuth";
import LoginPage      from "./auth/LoginPage";
import Sidebar        from "./components/layout/Sidebar";
import Topbar         from "./components/layout/Topbar";
import PageRouter     from "./components/PageRouter";
import { NAV_CONFIG } from "./data/mockData";

import "./styles/global.css";
import "./styles/components.css";

export default function App() {
  const { session, login, logout } = useAuth();
  const [page, setPage]               = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);   // mobile drawer
  const [collapsed, setCollapsed]     = useState(false);   // desktop collapse

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add("sidebar-drawer-open");
    } else {
      document.body.classList.remove("sidebar-drawer-open");
    }
    return () => document.body.classList.remove("sidebar-drawer-open");
  }, [sidebarOpen]);

  if (!session) {
    return <LoginPage onLogin={login} />;
  }

  const { role } = session;
  const navKeys  = NAV_CONFIG[role].map((n) => n.key);
  const safePage = navKeys.includes(page) ? page : "dashboard";

  const handleNavigate = (newPage) => {
    if (navKeys.includes(newPage)) setPage(newPage);
    setSidebarOpen(false);
  };

  const handleLogout = () => {
    setPage("dashboard");
    setSidebarOpen(false);
    logout();
  };

  return (
    <div className="app">
      <Sidebar
        role={role}
        page={safePage}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      {/* .main always takes flex:1, never shrinks on mobile */}
      <div className="main">
        <Topbar
          role={role}
          page={safePage}
          onLogout={handleLogout}
          onOpenSidebar={() => setSidebarOpen(true)}
        />
        <div className="content">
          <PageRouter role={role} page={safePage} />
        </div>
      </div>
    </div>
  );
}
