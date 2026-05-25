export function getStatusLabel(status) {
  const labels = {
    new: "Ny",
    confirmed: "Bekräftad",
    completed: "Slutförd",
    cancelled: "Avbokad"
  };

  return labels[status] || "Okänd";
}

export function getStatusVariant(status) {
  const variants = {
    new: "warning",
    confirmed: "success",
    completed: "neutral",
    cancelled: "danger"
  };

  return variants[status] || "neutral";
}

export function sortBookingsByDate(bookings) {
  return [...bookings].sort((a, b) => {
    const firstDate = new Date(`${a.date}T${a.time}`);
    const secondDate = new Date(`${b.date}T${b.time}`);

    return firstDate - secondDate;
  });
}
