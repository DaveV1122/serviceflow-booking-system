const WORK_DAY_START = "08:00";
const WORK_DAY_END = "17:00";
const SLOT_INTERVAL_MINUTES = 10;
const DEFAULT_SERVICE_DURATION_MINUTES = 60;
const DEFAULT_BUFFER_MINUTES = 10;

export function timeToMinutes(time) {
  if (!time) return 0;

  const [hours, minutes] = time.split(":").map(Number);

  return hours * 60 + minutes;
}

export function minutesToTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

export function generateTimeSlots() {
  const start = timeToMinutes(WORK_DAY_START);
  const end = timeToMinutes(WORK_DAY_END);

  const slots = [];

  for (let current = start; current < end; current += SLOT_INTERVAL_MINUTES) {
    slots.push(minutesToTime(current));
  }

  return slots;
}

export function getServiceDuration(service) {
  return service?.durationMinutes || DEFAULT_SERVICE_DURATION_MINUTES;
}

export function getServiceBuffer(service) {
  return service?.bufferMinutes || DEFAULT_BUFFER_MINUTES;
}

export function getBookingTimeRange(booking, service) {
  const startMinutes = timeToMinutes(booking.time);
  const durationMinutes = getServiceDuration(service);
  const bufferMinutes = getServiceBuffer(service);

  return {
    startMinutes,
    endMinutes: startMinutes + durationMinutes,
    bufferEndMinutes: startMinutes + durationMinutes + bufferMinutes
  };
}

export function doesBookingOverlap(
  newBooking,
  existingBooking,
  newService,
  existingService
) {
  if (newBooking.date !== existingBooking.date) {
    return false;
  }

  // Cancelled bookings stay visible in history but should not reserve time.
  if (existingBooking.status === "cancelled") {
    return false;
  }

  const newRange = getBookingTimeRange(newBooking, newService);
  const existingRange = getBookingTimeRange(existingBooking, existingService);
  const newStart = newRange.startMinutes;
  const newEndWithBuffer = newRange.bufferEndMinutes;
  const existingStart = existingRange.startMinutes;
  const existingEndWithBuffer = existingRange.bufferEndMinutes;

  // Buffers are part of the blocked range, so back-to-back bookings respect cleanup time.
  return (
    newStart < existingEndWithBuffer && newEndWithBuffer > existingStart
  );
}

export function getSlotState({
  slotTime,
  date,
  bookings,
  services,
  selectedService
}) {
  const slotMinutes = timeToMinutes(slotTime);

  const matchingBooking = bookings.find((booking) => {
    if (booking.date !== date || booking.status === "cancelled") {
      return false;
    }

    const service = services.find((item) => item.id === booking.serviceId);
    const range = getBookingTimeRange(booking, service);

    return slotMinutes >= range.startMinutes && slotMinutes < range.endMinutes;
  });

  if (matchingBooking) {
    return {
      type: "booked",
      booking: matchingBooking,
      label: "Bokad"
    };
  }

  const bufferBooking = bookings.find((booking) => {
    if (booking.date !== date || booking.status === "cancelled") {
      return false;
    }

    const service = services.find((item) => item.id === booking.serviceId);
    const range = getBookingTimeRange(booking, service);

    return (
      slotMinutes >= range.endMinutes && slotMinutes < range.bufferEndMinutes
    );
  });

  if (bufferBooking) {
    return {
      type: "buffer",
      booking: bufferBooking,
      label: "Buffert"
    };
  }

  if (selectedService) {
    const possibleBooking = {
      date,
      time: slotTime
    };

    const hasConflict = bookings.some((booking) => {
      const existingService = services.find(
        (item) => item.id === booking.serviceId
      );

      return doesBookingOverlap(
        possibleBooking,
        booking,
        selectedService,
        existingService
      );
    });

    if (hasConflict) {
      return {
        type: "unavailable",
        booking: null,
        label: "Ej tillgänglig"
      };
    }
  }

  return {
    type: "free",
    booking: null,
    label: "Ledig"
  };
}

export function getAvailableTimeOptions({
  date,
  bookings,
  services,
  selectedService
}) {
  if (!date || !selectedService) {
    return [];
  }

  return generateTimeSlots()
    .map((slotTime) => {
      const slotState = getSlotState({
        slotTime,
        date,
        bookings,
        services,
        selectedService
      });

      return {
        value: slotTime,
        label:
          slotState.type === "free"
            ? slotTime
            : `${slotTime} - ${slotState.label}`,
        disabled: slotState.type !== "free"
      };
    })
    .filter((option) => !option.disabled);
}
