export function formatDate(dateString) {
  if (!dateString) return "-";

  return new Intl.DateTimeFormat("sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(dateString));
}

export function formatDateTime(dateTimeString) {
  if (!dateTimeString) return "-";

  return new Intl.DateTimeFormat("sv-SE", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(dateTimeString));
}

export function getTodayDateInputValue() {
  return new Date().toISOString().split("T")[0];
}
