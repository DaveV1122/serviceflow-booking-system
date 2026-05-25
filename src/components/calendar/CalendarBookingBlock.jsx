import Badge from "../ui/Badge.jsx";

import { getStatusLabel, getStatusVariant } from "../../utils/statusUtils.js";

export default function CalendarBookingBlock({ booking }) {
  if (!booking) {
    return null;
  }

  return (
    <article className="calendar-booking-block">
      <div>
        <strong>{booking.serviceTitle}</strong>
        <span>{booking.customerName}</span>
      </div>

      <Badge variant={getStatusVariant(booking.status)}>
        {getStatusLabel(booking.status)}
      </Badge>
    </article>
  );
}