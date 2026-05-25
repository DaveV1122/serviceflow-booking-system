import Input from "../ui/Input.jsx";
import Select from "../ui/Select.jsx";

import { bookingStatuses } from "../../data/bookings.js";

export default function BookingFilters({ filters, onChange }) {
  const statusOptions = bookingStatuses.map((status) => ({
    value: status.value,
    label: status.label
  }));

  function updateFilter(event) {
    const { name, value } = event.target;

    onChange({
      ...filters,
      [name]: value
    });
  }

  return (
    <section className="booking-filters" aria-label="Filtrera bokningar">
      <Input
        id="search"
        name="search"
        label="Sök"
        value={filters.search}
        onChange={updateFilter}
        placeholder="Sök namn, tjänst, telefon eller adress"
      />

      <Select
        id="status"
        name="status"
        label="Status"
        value={filters.status}
        onChange={updateFilter}
        options={statusOptions}
        placeholder="Alla statusar"
      />
    </section>
  );
}