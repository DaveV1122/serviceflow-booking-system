import { Fragment, useMemo } from "react";

import WeekCalendarEvent from "./WeekCalendarEvent.jsx";

const dayNames = ["Mån", "Tis", "Ons", "Tor", "Fre", "Lör", "Sön"];
const workingHours = Array.from({ length: 10 }, (_, index) => index + 8);

function parseDateInput(dateString) {
  if (!dateString) {
    return new Date();
  }

  const [year, month, day] = dateString.split("-").map(Number);

  return new Date(year, month - 1, day);
}

function formatDateInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function addDays(date, days) {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + days);

  return nextDate;
}

function getWeekStart(date) {
  const weekDay = date.getDay();
  const mondayOffset = weekDay === 0 ? -6 : 1 - weekDay;

  return addDays(date, mondayOffset);
}

function getBookingHour(booking) {
  return Number.parseInt(booking.time?.split(":")[0], 10);
}

function formatWeekRange(days) {
  const firstDay = days[0];
  const lastDay = days[days.length - 1];
  const formatter = new Intl.DateTimeFormat("sv-SE", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });

  return `${formatter.format(firstDay)} - ${formatter.format(lastDay)}`;
}

export default function WeekCalendar({ selectedDate, bookings, onDateChange }) {
  const todayValue = formatDateInputValue(new Date());
  const selectedDateValue = selectedDate || formatDateInputValue(new Date());
  const selectedDateObject = useMemo(
    () => parseDateInput(selectedDateValue),
    [selectedDateValue]
  );

  const weekDays = useMemo(() => {
    const weekStart = getWeekStart(selectedDateObject);

    return Array.from({ length: 7 }, (_, index) => addDays(weekStart, index));
  }, [selectedDateObject]);

  const bookingsByCell = useMemo(() => {
    return bookings.reduce((groupedBookings, booking) => {
      if (booking.status === "cancelled") {
        return groupedBookings;
      }

      const bookingHour = getBookingHour(booking);

      if (!Number.isInteger(bookingHour)) {
        return groupedBookings;
      }

      const cellKey = `${booking.date}-${bookingHour}`;

      return {
        ...groupedBookings,
        [cellKey]: [...(groupedBookings[cellKey] || []), booking]
      };
    }, {});
  }, [bookings]);

  function moveWeek(days) {
    onDateChange(formatDateInputValue(addDays(selectedDateObject, days)));
  }

  function goToToday() {
    onDateChange(todayValue);
  }

  return (
    <section className="week-calendar" aria-label="Veckokalender">
      <div className="week-calendar-toolbar">
        <div className="week-calendar-title">
          <span className="eyebrow">Schema</span>
          <h2>Veckans bokningar</h2>
          <p>{formatWeekRange(weekDays)}</p>
        </div>

        <div className="week-calendar-actions">
          <button
            type="button"
            className="calendar-nav-button calendar-today-button"
            onClick={goToToday}
          >
            Idag
          </button>

          <button
            type="button"
            className="calendar-nav-button calendar-icon-button"
            onClick={() => moveWeek(-7)}
            aria-label="Föregående vecka"
          >
            ‹
          </button>

          <label className="sr-only" htmlFor="weekCalendarDate">
            Välj datum
          </label>
          <input
            id="weekCalendarDate"
            type="date"
            className="calendar-date-input"
            value={selectedDateValue}
            onChange={(event) => onDateChange(event.target.value)}
          />

          <button
            type="button"
            className="calendar-nav-button calendar-icon-button"
            onClick={() => moveWeek(7)}
            aria-label="Nästa vecka"
          >
            ›
          </button>
        </div>
      </div>

      <div className="week-calendar-scroll">
        <div className="week-calendar-grid">
          <div className="week-calendar-corner" aria-hidden="true" />

          {weekDays.map((day, index) => {
            const dateValue = formatDateInputValue(day);
            const isSelected = dateValue === selectedDateValue;
            const isToday = dateValue === todayValue;

            return (
              <div
                key={dateValue}
                className={`week-calendar-day-header ${
                  isSelected ? "week-calendar-day-selected" : ""
                } ${
                  isToday ? "week-calendar-day-today" : ""
                }`.trim()}
              >
                <span>{dayNames[index]}</span>
                <strong>{day.getDate()}</strong>
              </div>
            );
          })}

          {workingHours.map((hour) => (
            <Fragment key={hour}>
              <div className="week-calendar-time">
                {String(hour).padStart(2, "0")}:00
              </div>

              {weekDays.map((day) => {
                const dateValue = formatDateInputValue(day);
                const cellBookings = bookingsByCell[`${dateValue}-${hour}`] || [];
                const isSelected = dateValue === selectedDateValue;

                return (
                  <div
                    key={`${dateValue}-${hour}`}
                    className={`week-calendar-cell ${
                      isSelected ? "week-calendar-cell-selected" : ""
                    }`.trim()}
                  >
                    {cellBookings.map((booking) => (
                      <WeekCalendarEvent key={booking.id} booking={booking} />
                    ))}
                  </div>
                );
              })}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
