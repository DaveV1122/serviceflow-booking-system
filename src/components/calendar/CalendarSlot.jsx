export default function CalendarSlot({ time, state, onSelect, isSelected }) {
  const isDisabled = state.type !== "free";
  const selectedText = isSelected ? ", vald tid" : "";

  return (
    <button
      type="button"
      className={`calendar-slot calendar-slot-${state.type} ${
        isSelected ? "calendar-slot-selected" : ""
      }`.trim()}
      onClick={() => {
        if (!isDisabled) {
          onSelect(time);
        }
      }}
      disabled={isDisabled}
      aria-label={`Tid ${time}, status ${state.label}${selectedText}`}
    >
      <span className="calendar-slot-time">{time}</span>
      <span className="calendar-slot-label">{state.label}</span>
    </button>
  );
}
