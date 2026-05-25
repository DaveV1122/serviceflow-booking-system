import Badge from "../ui/Badge.jsx";
import EmptyState from "../ui/EmptyState.jsx";
import BookingStatusSelect from "./BookingStatusSelect.jsx";

import { formatDate } from "../../utils/dateUtils.js";
import { getStatusLabel, getStatusVariant } from "../../utils/statusUtils.js";

export default function BookingTable({ bookings, onStatusChange }) {
  if (bookings.length === 0) {
    return (
      <EmptyState
        title="Inga bokningar hittades"
        message="Ändra filtret eller skapa en ny bokning från kundvyn."
      />
    );
  }

  return (
    <div className="table-card">
      <table className="booking-table">
        <thead>
          <tr>
            <th>Bokning</th>
            <th>Kund</th>
            <th>Tjänst</th>
            <th>Datum</th>
            <th>Status</th>
            <th>Ändra</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>
                <strong>{booking.id}</strong>
                <span>{booking.address}</span>
              </td>

              <td>
                <strong>{booking.customerName}</strong>
                <span>{booking.phone}</span>
              </td>

              <td>
                <strong>{booking.serviceTitle}</strong>
                <span>{booking.email}</span>
              </td>

              <td>
                <strong>{formatDate(booking.date)}</strong>
                <span>{booking.time}</span>
              </td>

              <td>
                <Badge variant={getStatusVariant(booking.status)}>
                  {getStatusLabel(booking.status)}
                </Badge>
              </td>

              <td>
                <BookingStatusSelect
                  value={booking.status}
                  bookingId={booking.id}
                  onChange={onStatusChange}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}