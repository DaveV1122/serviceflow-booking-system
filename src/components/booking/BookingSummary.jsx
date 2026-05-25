import { getServiceById } from "../../data/services.js";
import { formatDate } from "../../utils/dateUtils.js";

export default function BookingSummary({ formData }) {
  const selectedService = getServiceById(formData.serviceId);

  return (
    <aside className="booking-summary" aria-label="Sammanfattning av bokning">
      <h2>Sammanfattning</h2>

      <dl className="summary-list">
        <div>
          <dt>Tjänst</dt>
          <dd>{selectedService ? selectedService.title : "Ingen vald"}</dd>
        </div>

        <div>
          <dt>Datum</dt>
          <dd>{formData.date ? formatDate(formData.date) : "Ej valt"}</dd>
        </div>

        <div>
          <dt>Tid</dt>
          <dd>{formData.time || "Ej valt"}</dd>
        </div>

        <div>
          <dt>Namn</dt>
          <dd>{formData.customerName || "Ej ifyllt"}</dd>
        </div>

        <div>
          <dt>Adress</dt>
          <dd>{formData.address || "Ej ifyllt"}</dd>
        </div>
      </dl>
    </aside>
  );
}
