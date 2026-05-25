import { useMemo } from "react";

import { services } from "../../data/services.js";
import {
  generateTimeSlots,
  getSlotState
} from "../../utils/calendarUtils.js";

import CalendarBookingBlock from "./CalendarBookingBlock.jsx";
import CalendarSlot from "./CalendarSlot.jsx";

const slotLegendItems = [
  { type: "free", label: "Ledig" },
  { type: "booked", label: "Bokad" },
  { type: "buffer", label: "Buffert" },
  { type: "unavailable", label: "Ej tillgänglig" }
];

export default function DayCalendar({
  date,
  bookings,
  selectedService,
  selectedTime,
  onSelectTime,
  title = "Kalenderöversikt"
}) {
  const slots = useMemo(() => generateTimeSlots(), []);

  const visibleBookings = useMemo(() => {
    if (!date) return [];

    return bookings.filter(
      (booking) => booking.date === date && booking.status !== "cancelled"
    );
  }, [bookings, date]);

  return (
    <section className="day-calendar" aria-label="Dagkalender">
      <div className="day-calendar-header">
        <div>
          <span className="eyebrow">Schema</span>
          <h2>{title}</h2>
        </div>

        <p>{date || "Välj ett datum"}</p>
      </div>

      {visibleBookings.length > 0 && (
        <div className="calendar-bookings-list" aria-label="Bokningar denna dag">
          {visibleBookings.map((booking) => (
            <CalendarBookingBlock key={booking.id} booking={booking} />
          ))}
        </div>
      )}

      <div className="calendar-slot-legend" aria-label="Förklaring">
        {slotLegendItems.map((item) => (
          <span key={item.type} className="calendar-slot-legend-item">
            <span
              className={`calendar-slot-legend-dot calendar-slot-legend-${item.type}`}
              aria-hidden="true"
            />
            {item.label}
          </span>
        ))}
      </div>

      {!date ? (
        <div className="calendar-empty-state">
          <strong>Välj datum för att se tider</strong>
          <span>Lediga tider visas här när du har valt ett datum.</span>
        </div>
      ) : (
        <div className="calendar-grid">
          {slots.map((slotTime) => {
            const state = getSlotState({
              slotTime,
              date,
              bookings,
              services,
              selectedService
            });

            return (
              <CalendarSlot
                key={slotTime}
                time={slotTime}
                state={state}
                onSelect={onSelectTime}
                isSelected={selectedTime === slotTime}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
