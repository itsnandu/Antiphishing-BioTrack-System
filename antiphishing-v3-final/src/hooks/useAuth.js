import { useState } from "react";
import { DEMO_CREDENTIALS } from "../data/mockData";

export function useAuth() {
  const [session, setSession] = useState(null); // null = logged out

  /**
   * Attempt login.
   * @param {'global'|'company'|'employee'} role
   * @param {string} email
   * @param {string} password
   * @returns {string|null} error message or null on success
   */
  const login = (role, email, password) => {
    const creds = DEMO_CREDENTIALS[role];
    if (!creds) return "Invalid role";
    if (email.trim().toLowerCase() !== creds.email.toLowerCase()) return "Email not found for this role";
    if (password !== creds.password) return "Incorrect password";
    setSession({ role });
    return null;
  };

  const logout = () => setSession(null);

  return { session, login, logout };
}
