import { useState } from "react";

export function useQuarantine(emails) {
  const [released, setReleased] = useState([]);
  const [selected, setSelected] = useState(null);

  const visible = emails.filter((e) => !released.includes(e.id));

  const release    = (id) => { setReleased((p) => [...p, id]); setSelected(null); };
  const deleteMail = (id) => { setReleased((p) => [...p, id]); setSelected(null); };

  return { visible, selected, setSelected, release, deleteMail };
}
