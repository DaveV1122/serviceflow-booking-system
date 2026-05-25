import Badge from "../ui/Badge.jsx";

import { getStatusLabel, getStatusVariant } from "../../utils/statusUtils.js";

export default function WeekCalendarEvent({ booking }) {
  if (!booking) {
    return null;
  }

  return (
    <article className="week-calendar-event">
      <div className="week-calendar-event-main">
        <strong>{booking.serviceTitle}</strong>
        <span>{booking.customerName}</span>
        <time dateTime={`${booking.date}T${booking.time}`}>{booking.time}</time>
      </div>

      <Badge variant={getStatusVariant(booking.status)}>
        {getStatusLabel(booking.status)}
      </Badge>
    </article>
  );
}
