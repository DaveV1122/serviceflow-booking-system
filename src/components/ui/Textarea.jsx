export default function Textarea({
  label,
  id,
  error,
  className = "",
  rows = 5,
  ...props
}) {
  return (
    <div className={`form-field ${className}`.trim()}>
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}

      <textarea
        id={id}
        rows={rows}
        className={`form-input form-textarea ${
          error ? "form-input-error" : ""
        }`}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />

      {error && (
        <p id={`${id}-error`} className="form-error">
          {error}
        </p>
      )}
    </div>
  );
}