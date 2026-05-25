import { CalendarCheck, CheckCircle2, Clock, XCircle } from "lucide-react";

const statItems = [
  {
    key: "total",
    label: "Totalt",
    icon: CalendarCheck
  },
  {
    key: "new",
    label: "Nya",
    icon: Clock
  },
  {
    key: "confirmed",
    label: "Bekräftade",
    icon: CheckCircle2
  },
  {
    key: "cancelled",
    label: "Avbokade",
    icon: XCircle
  }
];

export default function DashboardStats({ stats }) {
  return (
    <section className="stats-grid" aria-label="Bokningsstatistik">
      {statItems.map((item) => {
        const Icon = item.icon;

        return (
          <article className="stat-card" key={item.key}>
            <div className="stat-icon" aria-hidden="true">
              <Icon size={22} />
            </div>

            <div>
              <p>{item.label}</p>
              <strong>{stats[item.key] ?? 0}</strong>
            </div>
          </article>
        );
      })}
    </section>
  );
}
