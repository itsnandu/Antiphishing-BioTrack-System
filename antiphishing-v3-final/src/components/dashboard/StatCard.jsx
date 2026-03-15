import { TrendingUp, TrendingDown } from "lucide-react";

export default function StatCard({ icon, val, label, delta, deltaUp, color }) {
  return (
    <div className={`stat-card ${color} animate-fade-up`}>
      <div className="stat-icon-wrap">{icon}</div>
      <div className="stat-val">{val}</div>
      <div className="stat-label">{label}</div>
      {delta && (
        <div className={`stat-delta ${deltaUp ? "delta-up" : "delta-down"}`}>
          {deltaUp ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
          {delta}
        </div>
      )}
    </div>
  );
}
