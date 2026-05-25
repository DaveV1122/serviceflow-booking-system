import { CalendarX } from "lucide-react";

export default function EmptyState({
  title = "Inget hittades",
  message = "Det finns inget att visa just nu.",
  action
}) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon" aria-hidden="true">
        <CalendarX size={32} />
      </div>

      <h2>{title}</h2>
      <p>{message}</p>

      {action && <div className="empty-state-action">{action}</div>}
    </div>
  );
}