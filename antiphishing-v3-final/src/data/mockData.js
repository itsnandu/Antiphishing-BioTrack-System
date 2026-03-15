export const QUARANTINE_EMAILS = [
  {
    id: 1,
    from: "security@paypa1.com",
    to: "alice@techcorp.com",
    subject: "Urgent: Verify your account immediately",
    company: "TechCorp",
    time: "2h ago",
    risk: "Critical",
    indicators: ["Spoofed domain", "Urgency language", "Suspicious link"],
    body: "Dear Customer, Your account has been compromised. Click here to verify your identity within 24 hours or your account will be suspended.",
  },
  {
    id: 2,
    from: "hr-noreply@microsooft.net",
    to: "bob@financegroup.com",
    subject: "Your salary details have been updated",
    company: "FinanceGroup",
    time: "4h ago",
    risk: "High",
    indicators: ["Typosquat domain", "Credential harvesting"],
    body: "Hi Bob, Your monthly salary has been updated. Please login to verify the changes made to your payroll account.",
  },
  {
    id: 3,
    from: "admin@dropb0x.io",
    to: "carol@healthsys.com",
    subject: "Shared document: Q4 Report.pdf",
    company: "HealthSys",
    time: "6h ago",
    risk: "High",
    indicators: ["Fake cloud storage", "Malware attachment"],
    body: "Someone shared a document with you. Click to view: Q4_Financial_Report.pdf [1.2 MB]",
  },
  {
    id: 4,
    from: "ceo@techcorp-secure.org",
    to: "dave@techcorp.com",
    subject: "Wire transfer needed ASAP - CEO",
    company: "TechCorp",
    time: "8h ago",
    risk: "Critical",
    indicators: ["CEO impersonation", "Wire fraud", "Urgency"],
    body: "Dave, I need you to process a wire transfer of $45,000 to our new vendor. Keep this confidential. I'm in a meeting.",
  },
  {
    id: 5,
    from: "it-support@helpdeskk.com",
    to: "eve@financegroup.com",
    subject: "Your password expires in 1 hour",
    company: "FinanceGroup",
    time: "1d ago",
    risk: "Medium",
    indicators: ["Fake IT support", "Credential phishing"],
    body: "Your network password will expire in 60 minutes. To avoid losing access, reset your password immediately.",
  },
  {
    id: 6,
    from: "noreply@amazzon-prime.co",
    to: "frank@healthsys.com",
    subject: "Your Prime subscription: Action required",
    company: "HealthSys",
    time: "1d ago",
    risk: "Medium",
    indicators: ["Brand impersonation", "Lookalike domain"],
    body: "Your Amazon Prime membership could not be renewed. Update your payment information to continue enjoying Prime benefits.",
  },
];

export const COMPANIES = [
  { id: 1, name: "TechCorp Solutions",  domain: "techcorp.com",     email: "admin@techcorp.com",     password: "tech@1234",    employees: 142, quarantined: 23, status: "Active",    risk: 72 },
  { id: 2, name: "FinanceGroup Ltd",    domain: "financegroup.com", email: "admin@financegroup.com", password: "fin@1234",     employees: 89,  quarantined: 18, status: "Active",    risk: 85 },
  { id: 3, name: "HealthSys Inc",       domain: "healthsys.com",    email: "admin@healthsys.com",    password: "health@1234",  employees: 201, quarantined: 31, status: "Active",    risk: 61 },
  { id: 4, name: "RetailMax Co",        domain: "retailmax.co",     email: "admin@retailmax.co",     password: "retail@1234",  employees: 56,  quarantined: 7,  status: "Suspended", risk: 34 },
];

export const EMPLOYEES = [
  { id: 1, name: "Alice Johnson", email: "alice@techcorp.com",    company: "TechCorp",     password: "tech@1234", quarantined: 8,  lastEvent: "2h ago", risk: "High" },
  { id: 2, name: "Bob Smith",     email: "bob@financegroup.com",  company: "FinanceGroup", password: "fin@1234", quarantined: 12, lastEvent: "4h ago", risk: "Critical" },
  { id: 3, name: "Carol White",   email: "carol@healthsys.com",   company: "HealthSys",    password: "heal@1234", quarantined: 4,  lastEvent: "6h ago", risk: "Medium" },
  { id: 4, name: "Dave Brown",    email: "dave@techcorp.com",     company: "TechCorp",     password: "tech@1234", quarantined: 15, lastEvent: "8h ago", risk: "Critical" },
  { id: 5, name: "Eve Davis",     email: "eve@financegroup.com",  company: "FinanceGroup", password: "fin@1234", quarantined: 3,  lastEvent: "1d ago", risk: "Low" },
  { id: 6, name: "Frank Miller",  email: "frank@healthsys.com",   company: "HealthSys",    password: "heal@1234", quarantined: 6,  lastEvent: "1d ago", risk: "Medium" },
];

export const RISK_TAG = {
  Critical: "tag-red",
  High:     "tag-amber",
  Medium:   "tag-blue",
  Low:      "tag-green",
};

export const RISK_BAR_COLOR = {
  Critical: "#dc2626",
  High:     "#d97706",
  Medium:   "#3b82f6",
  Low:      "#16a34a",
};

export const NAV_CONFIG = {
  global: [
    { key: "dashboard",  label: "Dashboard" },
    { key: "companies",  label: "Companies",            section: "MANAGEMENT" },
    { key: "employees",  label: "All Employees" },
    { key: "quarantine", label: "Quarantine",           badge: true },
    { key: "add",        label: "Add Domain / Company", section: "ACTIONS" },
  ],
  company: [
    { key: "dashboard",  label: "Dashboard" },
    { key: "quarantine", label: "Quarantined Emails",   badge: true },
    { key: "employees",  label: "Employees",            section: "MANAGEMENT" },
  ],
  employee: [
    { key: "dashboard",  label: "My Dashboard" },
  ],
};

export const PAGE_TITLES = {
  dashboard:  "Dashboard",
  companies:  "Company Domains",
  employees:  "Employees",
  quarantine: "Quarantine Center",
  add:        "Add Company & Domain",
};

export const ROLE_META = {
  global:   { label: "Global Admin",   user: "Super Admin",   initials: "SA", email: "superadmin@biotrack.io" },
  company:  { label: "Company Admin",  user: "Rahul Mehra",   initials: "RM", email: "rahul@techcorp.com" },
  employee: { label: "Employee",       user: "Alice Johnson",  initials: "AJ", email: "alice@techcorp.com" },
};

export const DEMO_CREDENTIALS = {
  global:   { email: "superadmin@biotrack.io", password: "admin123" },
  company:  { email: "rahul@techcorp.com",     password: "company123" },
  employee: { email: "alice@techcorp.com",     password: "alice123" },
};
