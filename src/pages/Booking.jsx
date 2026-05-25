import BookingForm from "../components/booking/BookingForm.jsx";
import useBookings from "../hooks/useBookings.js";

export default function Booking() {
  const { bookings, addBooking } = useBookings();

  return (
    <section className="container section booking-page">
      <BookingForm bookings={bookings} onCreateBooking={addBooking} />
    </section>
  );
}
