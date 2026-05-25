import { useMemo, useState } from "react";

import BookingFilters from "../components/admin/BookingFilters.jsx";
import BookingTable from "../components/admin/BookingTable.jsx";
import DashboardStats from "../components/admin/DashboardStats.jsx";
import WeekCalendar from "../components/calendar/WeekCalendar.jsx";
import useBookings from "../hooks/useBookings.js";

export default function AdminDashboard() {
  const { bookings, stats, updateBookingStatus } = useBookings();

  const [filters, setFilters] = useState({
    search: "",
    status: ""
  });

  const [selectedDate, setSelectedDate] = useState(() => {
    return new Date().toISOString().split("T")[0];
  });

  const filteredBookings = useMemo(() => {
    const searchTerm = filters.search.trim().toLowerCase();

    return bookings.filter((booking) => {
      const matchesStatus = filters.status
        ? booking.status === filters.status
        : true;

      const searchableText = [
        booking.id,
        booking.customerName,
        booking.serviceTitle,
        booking.phone,
        booking.email,
        booking.address
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchTerm
        ? searchableText.includes(searchTerm)
        : true;

      return matchesStatus && matchesSearch;
    });
  }, [bookings, filters]);

  return (
    <section className="container section">
      <div className="admin-header">
        <div className="section-heading left">
          <span className="eyebrow">Admin</span>
          <h1>Hantera bokningar</h1>
          <p>
            Här kan företaget se inkommande bokningar, filtrera listan, ändra
            status och se en kalenderöversikt över veckans bokningar.
          </p>
        </div>
      </div>

      <DashboardStats stats={stats} />

      <div className="admin-calendar-panel">
        <WeekCalendar
          selectedDate={selectedDate}
          bookings={bookings}
          onDateChange={setSelectedDate}
        />
      </div>

      <BookingFilters filters={filters} onChange={setFilters} />

      <BookingTable
        bookings={filteredBookings}
        onStatusChange={updateBookingStatus}
      />
    </section>
  );
}
