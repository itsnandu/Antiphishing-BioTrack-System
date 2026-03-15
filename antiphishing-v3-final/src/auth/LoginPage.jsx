import { useState } from "react";
import { Shield, Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle2 } from "lucide-react";
import { DEMO_CREDENTIALS } from "../data/mockData";
import "../styles/auth.css";

export default function LoginPage({ onLogin }) {
  const [email,        setEmail]        = useState("");
  const [password,     setPassword]     = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error,        setError]        = useState("");
  const [loading,      setLoading]      = useState(false);

  const detectRole = (email) => {
    const e = email.trim().toLowerCase();
    if (e === DEMO_CREDENTIALS.global.email.toLowerCase())   return "global";
    if (e === DEMO_CREDENTIALS.company.email.toLowerCase())  return "company";
    if (e === DEMO_CREDENTIALS.employee.email.toLowerCase()) return "employee";
    return null;
  };

  const handleSubmit = async () => {
    setError("");
    if (!email || !password) { setError("Please fill in all fields."); return; }
    const role = detectRole(email);
    if (!role) { setError("Email not recognised. Check your credentials."); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    const result = onLogin(role, email, password);
    if (result) { setError(result); setLoading(false); }
  };

  return (
    <div className="login-root">
      {/* ── Left panel ── */}
      <div className="login-left">
        <div className="login-left-logo">
          <div className="login-left-logo-icon">
            <Shield size={24} />
          </div>
          <span className="login-left-logo-name">BioTrack Shield</span>
        </div>

        <div className="login-left-body">
          <div className="login-left-headline">Welcome!</div>
          <div className="login-left-sub">
            Get a real intranet on top of your security environment with BioTrack Shield.
          </div>
          <div className="login-left-illustration">
            <div className="illustration-circle">
              <div className="illustration-inner">
                <Shield size={48} color="rgba(255,255,255,0.9)" />
                <div className="illustration-orbit orbit-1">
                  <Mail size={13} color="rgba(255,255,255,0.85)" />
                </div>
                <div className="illustration-orbit orbit-2">
                  <Lock size={13} color="rgba(255,255,255,0.85)" />
                </div>
                <div className="illustration-orbit orbit-3">
                  <AlertCircle size={13} color="rgba(255,255,255,0.85)" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="login-left-dots">
          <div className="dot dot-active" />
          <div className="dot" />
        </div>
      </div>

      {/* ── Right panel ── */}
      <div className="login-right">
        <div className="login-form-wrap">
          <h1 className="login-title">Log In</h1>
          <div className="login-subtitle">Access your security dashboard</div>

          {error && (
            <div className="login-banner login-banner-error">
              <AlertCircle size={15} />
              {error}
            </div>
          )}

          {/* Demo credentials */}
          <div className="login-demo-section">
            <div className="login-demo-title">Demo Credentials</div>
            <div className="login-demo-list">
              {[
                { role: "Global Admin",  email: DEMO_CREDENTIALS.global.email,   password: DEMO_CREDENTIALS.global.password },
                { role: "Company Admin", email: DEMO_CREDENTIALS.company.email,  password: DEMO_CREDENTIALS.company.password },
                { role: "Employee",      email: DEMO_CREDENTIALS.employee.email, password: DEMO_CREDENTIALS.employee.password },
              ].map((d) => (
                <div
                  key={d.role}
                  className="login-demo-item"
                  onClick={() => { setEmail(d.email); setPassword(d.password); setError(""); }}
                >
                  <div className="login-demo-role">{d.role}</div>
                  <div className="login-demo-creds">{d.email} · {d.password}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className="login-field-group">
            <label className="login-field-label">Email Address</label>
            <div className="login-input-wrap">
              <span className="login-input-icon"><Mail size={15} /></span>
              <input
                className="login-input"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              />
            </div>
          </div>

          {/* Password */}
          <div className="login-field-group">
            <label className="login-field-label">Password</label>
            <div className="login-input-wrap">
              <span className="login-input-icon"><Lock size={15} /></span>
              <input
                className="login-input"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              />
              <button
                className="login-eye-btn"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="login-meta-row">
            <label className="login-remember">
              <input type="checkbox" style={{ accentColor: "var(--primary)" }} />
              <span>Remember me</span>
            </label>
            <span className="login-forgot">Forgot Password?</span>
          </div>

          {/* Submit */}
          <button
            className="login-submit-btn"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>

          <div className="login-footer-text">
            © 2026 BioTrack Shield. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
