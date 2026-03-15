import { ShieldAlert, CheckCircle, Trash2, Eye } from "lucide-react";
import { useQuarantine }    from "../../hooks/useQuarantine";
import EmailPreviewModal    from "./EmailPreviewModal";
import { RISK_TAG }         from "../../data/mockData";

export default function QuarantineTable({ emails, showCompany = true }) {
  const { visible, selected, setSelected, release, deleteMail } = useQuarantine(emails);

  const riskStyle = {
    Critical: { bg: "var(--danger-muted)",  color: "var(--danger)" },
    High:     { bg: "var(--warn-muted)",    color: "var(--warn)" },
    Medium:   { bg: "var(--primary-100)",   color: "var(--primary)" },
    Low:      { bg: "var(--success-muted)", color: "var(--success)" },
  };

  return (
    <div>
      <EmailPreviewModal
        email={selected}
        onClose={() => setSelected(null)}
        onRelease={release}
        onDelete={deleteMail}
      />

      <div className="panel page-enter">
        <div className="panel-header">
          <span className="panel-title">
            <ShieldAlert size={16} style={{ color: "var(--danger)" }} />
            Quarantined Emails
            <span style={{
              background: "var(--danger-muted)", color: "var(--danger)",
              padding: "2px 8px", borderRadius: 20, fontSize: 11, fontFamily: "var(--mono)",
            }}>
              {visible.length}
            </span>
          </span>
          <span style={{ fontSize: 11, color: "var(--text-3)", fontFamily: "var(--mono)" }}>
            {visible.length} held
          </span>
        </div>

        <div className="table-wrap">
          {visible.length === 0 ? (
            <div className="empty">
              <CheckCircle size={40} style={{ color: "var(--success)", marginBottom: 12 }} />
              <div>All clear — no quarantined emails</div>
            </div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>FROM</th>
                  <th>TO</th>
                  {showCompany && <th>COMPANY</th>}
                  <th>SUBJECT</th>
                  <th>TIME</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {visible.map((e) => {
                  return (
                    <tr key={e.id} style={{ cursor: "pointer" }} onClick={() => setSelected(e)}>
                      <td style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--danger)", fontWeight: 600 }}>{e.from}</td>
                      <td style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--text-3)" }}>{e.to}</td>
                      {showCompany && <td><span className="tag tag-blue">{e.company}</span></td>}
                      <td style={{ fontWeight: 600, color: "var(--text)", maxWidth: 200, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{e.subject}</td>
                      <td style={{ fontSize: 11, color: "var(--text-3)", whiteSpace: "nowrap" }}>{e.time}</td>
                      <td onClick={(ev) => ev.stopPropagation()}>
                        <div style={{ display: "flex", gap: 6 }}>
                          <button className="btn btn-ghost btn-sm" onClick={() => setSelected(e)} title="Preview">
                            <Eye size={13} />
                          </button>
                          <button className="btn btn-success btn-sm" onClick={() => release(e.id)} title="Release">
                            <CheckCircle size={13} />
                          </button>
                          <button className="btn btn-danger btn-sm" onClick={() => deleteMail(e.id)} title="Delete">
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
