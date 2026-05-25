import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

import { formatDate } from "../../utils/dateUtils.js";

export default function BookingSuccess({ booking }) {
  if (!booking) {
    return null;
  }

  return (
    <section className="booking-success">
      <div className="success-icon" aria-hidden="true">
        <CheckCircle2 size={42} />
      </div>

      <h1>Bokningen är skickad</h1>

      <p>
        Tack {booking.customerName}. Din bokning för{" "}
        <strong>{booking.serviceTitle}</strong> har registrerats.
      </p>

      <div className="success-card">
        <dl className="summary-list">
          <div>
            <dt>Bokningsnummer</dt>
            <dd>{booking.id}</dd>
          </div>

          <div>
            <dt>Datum</dt>
            <dd>{formatDate(booking.date)}</dd>
          </div>

          <div>
            <dt>Tid</dt>
            <dd>{booking.time}</dd>
          </div>

          <div>
            <dt>Adress</dt>
            <dd>{booking.address}</dd>
          </div>
        </dl>
      </div>

      <div className="success-actions">
        <Link className="btn btn-primary" to="/services">
          Boka en till tjänst
        </Link>

        <Link className="btn btn-secondary" to="/admin">
          Gå till admin
        </Link>
      </div>
    </section>
  );
}