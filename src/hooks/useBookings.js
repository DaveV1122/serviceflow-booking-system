import { useEffect, useMemo, useState } from "react";

import { initialBookings } from "../data/bookings.js";
import { services } from "../data/services.js";
import { doesBookingOverlap } from "../utils/calendarUtils.js";

const STORAGE_KEY = "serviceflow_bookings";

function loadBookings() {
  try {
    const savedBookings = localStorage.getItem(STORAGE_KEY);

    if (!savedBookings) {
      return initialBookings;
    }

    return JSON.parse(savedBookings);
  } catch {
    return initialBookings;
  }
}

function createBookingId() {
  return `BK-${Date.now().toString().slice(-6)}`;
}

function findService(serviceId) {
  return services.find((service) => service.id === serviceId);
}

export default function useBookings() {
  const [bookings, setBookings] = useState(loadBookings);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
  }, [bookings]);

  function hasBookingConflict(bookingData) {
    const newService = findService(bookingData.serviceId);

    return bookings.some((existingBooking) => {
      const existingService = findService(existingBooking.serviceId);

      return doesBookingOverlap(
        bookingData,
        existingBooking,
        newService,
        existingService
      );
    });
  }

  function addBooking(bookingData) {
    if (hasBookingConflict(bookingData)) {
      return {
        success: false,
        error:
          "Tiden är redan bokad eller ligger för nära en annan bokning. Välj en annan tid."
      };
    }

    const newBooking = {
      id: createBookingId(),
      ...bookingData,
      status: "new",
      createdAt: new Date().toISOString()
    };

    setBookings((currentBookings) => [newBooking, ...currentBookings]);

    return {
      success: true,
      booking: newBooking
    };
  }

  function updateBookingStatus(bookingId, status) {
    setBookings((currentBookings) =>
      currentBookings.map((booking) =>
        booking.id === bookingId ? { ...booking, status } : booking
      )
    );
  }

  const stats = useMemo(() => {
    return {
      total: bookings.length,
      new: bookings.filter((booking) => booking.status === "new").length,
      confirmed: bookings.filter((booking) => booking.status === "confirmed")
        .length,
      completed: bookings.filter((booking) => booking.status === "completed")
        .length,
      cancelled: bookings.filter((booking) => booking.status === "cancelled")
        .length
    };
  }, [bookings]);

  return {
    bookings,
    stats,
    addBooking,
    updateBookingStatus,
    hasBookingConflict
  };
}
