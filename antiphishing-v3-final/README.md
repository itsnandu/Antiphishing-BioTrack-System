# BioTrack Shield — Anti-Phishing Dashboard v2

Light blue/white themed React + Vite frontend with full login system.

---

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:5173
```

---

## Login Credentials (Demo)

| Role           | Email                        | Password     |
|----------------|------------------------------|--------------|
| Global Admin   | superadmin@biotrack.io       | admin123     |
| Company Admin  | rahul@techcorp.com           | company123   |
| Employee       | alice@techcorp.com           | alice123     |

---

## Folder Structure

```
antiphishing-dashboard/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                              # ReactDOM entry
    ├── App.jsx                               # Root: auth gate + layout shell
    │
    ├── auth/
    │   └── LoginPage.jsx                     # 3-role login with role selector cards
    │
    ├── data/
    │   └── mockData.js                       # Mock emails, companies, employees, nav config, demo creds
    │
    ├── hooks/
    │   ├── useAuth.js                        # Login / logout / session state
    │   └── useQuarantine.js                  # Released IDs + modal selection
    │
    ├── styles/
    │   ├── global.css                        # CSS variables (blue/white), reset, animations
    │   ├── auth.css                          # Login page styles
    │   └── components.css                    # All UI component styles
    │
    ├── components/
    │   ├── PageRouter.jsx                    # Maps role + page → page component
    │   │
    │   ├── layout/
    │   │   ├── Sidebar.jsx                   # Nav + role badge + logout button
    │   │   └── Topbar.jsx                    # Page title + user pill
    │   │
    │   ├── dashboard/
    │   │   ├── StatCard.jsx                  # KPI card with coloured icon wrap
    │   │   ├── MiniChart.jsx                 # Bar sparkline (email traffic)
    │   │   └── ThreatBar.jsx                 # Risk progress bar
    │   │
    │   ├── quarantine/
    │   │   ├── QuarantineTable.jsx           # Table with release/delete actions
    │   │   └── EmailPreviewModal.jsx         # Glassmorphic detail modal
    │   │
    │   ├── employees/
    │   │   ├── EmployeeTable.jsx             # Shared employee rows
    │   │   └── AddEmployeeForm.jsx           # Inline add form
    │   │
    │   └── companies/
    │       └── CompanyTable.jsx              # Company domains with risk bars
    │
    └── pages/
        ├── GlobalAdmin/
        │   ├── GlobalDashboard.jsx           # Stats + charts + company table
        │   ├── GlobalEmployees.jsx           # All employees (search + company filter)
        │   ├── GlobalAddDomain.jsx           # Register company & domain form
        │   └── GlobalSettings.jsx            # Admins + domains + system config
        │
        ├── CompanyAdmin/
        │   ├── CompanyDashboard.jsx          # Company stats + quarantine
        │   ├── CompanyEmployees.jsx          # Employee list + add form
        │   └── CompanySettings.jsx           # Profile + notifications + password
        │
        └── Employee/
            └── EmployeeDashboard.jsx         # Personal stats + quarantine + tips
```

---

## Features

### Login
- 3 clickable role cards (Global Admin, Company Admin, Employee)
- Auto-fills demo credentials on role select
- One-click demo fill buttons
- Validation with error display

### Global Admin
- Live stats: domains, employees, emails, quarantine count, detection rate, active threats
- 12-week email traffic sparkline chart
- Per-company risk breakdown bars
- Company domains table with risk meters and status
- All employees table with company filter + search
- Add company & domain registration form
- Settings: admin users, domain management, system config

### Company Admin
- Company-scoped stats (most targeted, safe rate, critical threats)
- Quarantine table filtered to own company
- Employee management with inline add form
- Profile, notification toggles, and password change

### Employee
- Personal welcome banner with quarantine count
- 3 personal KPI cards
- Own quarantined emails (click to preview, release, or delete)
- Security awareness tips

### Quarantine
- Click any row → email preview modal with phishing indicators
- Release or delete from modal or inline action buttons
