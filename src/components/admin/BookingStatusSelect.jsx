import { bookingStatuses } from "../../data/bookings.js";

export default function BookingStatusSelect({ value, onChange, bookingId }) {
  return (
    <label className="status-select-label">
      <span className="sr-only">Ändra status</span>

      <select
        className="status-select"
        value={value}
        onChange={(event) => onChange(bookingId, event.target.value)}
        aria-label="Ändra bokningsstatus"
      >
        {bookingStatuses.map((status) => (
          <option key={status.value} value={status.value}>
            {status.label}
          </option>
        ))}
      </select>
    </label>
  );
}