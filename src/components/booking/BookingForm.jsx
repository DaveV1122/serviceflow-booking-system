import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { services, getServiceById } from "../../data/services.js";
import { getAvailableTimeOptions } from "../../utils/calendarUtils.js";
import { getTodayDateInputValue } from "../../utils/dateUtils.js";
import { validateBookingForm } from "../../utils/validators.js";

import DayCalendar from "../calendar/DayCalendar.jsx";
import Button from "../ui/Button.jsx";
import Input from "../ui/Input.jsx";
import Select from "../ui/Select.jsx";
import Textarea from "../ui/Textarea.jsx";
import BookingSummary from "./BookingSummary.jsx";
import BookingSuccess from "./BookingSuccess.jsx";

const initialFormData = {
  serviceId: "",
  customerName: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  address: "",
  message: ""
};

export default function BookingForm({ onCreateBooking, bookings = [] }) {
  const [searchParams] = useSearchParams();
  const selectedServiceId = searchParams.get("service");

  const [formData, setFormData] = useState({
    ...initialFormData,
    serviceId: selectedServiceId || ""
  });

  const [errors, setErrors] = useState({});
  const [createdBooking, setCreatedBooking] = useState(null);

  const selectedService = useMemo(() => {
    return getServiceById(formData.serviceId);
  }, [formData.serviceId]);

  const serviceOptions = useMemo(() => {
    return services.map((service) => ({
      value: service.id,
      label: service.title
    }));
  }, []);

  const timeOptions = useMemo(() => {
    return getAvailableTimeOptions({
      date: formData.date,
      bookings,
      services,
      selectedService
    });
  }, [bookings, formData.date, selectedService]);

  const timeHelperText = useMemo(() => {
    if (!selectedService) {
      return "Välj tjänst först.";
    }

    if (!formData.date) {
      return "Välj datum först.";
    }

    if (timeOptions.length === 0) {
      return "Inga lediga tider finns för valt datum.";
    }

    return "";
  }, [formData.date, selectedService, timeOptions.length]);

  function updateField(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
      ...(name === "serviceId" || name === "date" ? { time: "" } : {})
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
      ...(name === "serviceId" || name === "date" ? { time: "" } : {})
    }));
  }

  function selectCalendarTime(time) {
    setFormData((currentData) => ({
      ...currentData,
      time
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      time: ""
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateBookingForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const result = onCreateBooking({
      ...formData,
      serviceTitle: selectedService?.title || "Okänd tjänst"
    });

    if (!result.success) {
      setErrors({ time: result.error });
    } else {
      setCreatedBooking(result.booking);
      setFormData(initialFormData);
      setErrors({});
    }
  }

  if (createdBooking) {
    return <BookingSuccess booking={createdBooking} />;
  }

  return (
    <div className="booking-grid">
      <form className="booking-form" onSubmit={handleSubmit} noValidate>
        <div className="section-heading left">
          <span className="eyebrow">Boka tjänst</span>
          <h1>Skicka en bokningsförfrågan</h1>
          <p>
            Fyll i formuläret och välj en ledig tid. Bokade tider och 10
            minuters buffert visas i kalendern så att bokningen inte krockar.
          </p>
        </div>

        <Select
          id="serviceId"
          name="serviceId"
          label="Tjänst"
          value={formData.serviceId}
          onChange={updateField}
          options={serviceOptions}
          error={errors.serviceId}
        />

        <div className="form-grid">
          <Input
            id="customerName"
            name="customerName"
            label="Namn"
            value={formData.customerName}
            onChange={updateField}
            error={errors.customerName}
            placeholder="Ex. David Vakhayev"
          />

          <Input
            id="email"
            name="email"
            type="email"
            label="E-post"
            value={formData.email}
            onChange={updateField}
            error={errors.email}
            placeholder="namn@example.com"
          />
        </div>

        <div className="form-grid">
          <Input
            id="phone"
            name="phone"
            label="Telefon"
            value={formData.phone}
            onChange={updateField}
            error={errors.phone}
            placeholder="0701234567"
          />

          <Input
            id="date"
            name="date"
            type="date"
            label="Datum"
            min={getTodayDateInputValue()}
            value={formData.date}
            onChange={updateField}
            error={errors.date}
          />
        </div>

        <div className="form-grid">
          <div className="booking-time-field">
            <Select
              id="time"
              name="time"
              label="Tid"
              value={formData.time}
              onChange={updateField}
              options={timeOptions}
              error={errors.time}
            />

            {timeHelperText && !errors.time && (
              <p className="form-helper">{timeHelperText}</p>
            )}
          </div>

          <Input
            id="address"
            name="address"
            label="Adress"
            value={formData.address}
            onChange={updateField}
            error={errors.address}
            placeholder="Gata, stad"
          />
        </div>

        <Textarea
          id="message"
          name="message"
          label="Meddelande"
          value={formData.message}
          onChange={updateField}
          placeholder="Beskriv kort vad du behöver hjälp med."
        />

        <Button type="submit">Skicka bokning</Button>
      </form>

      <div className="booking-side-panel">
        <BookingSummary formData={formData} />
        <div className="booking-calendar-panel">
          <DayCalendar
            date={formData.date}
            bookings={bookings}
            selectedService={selectedService}
            selectedTime={formData.time}
            onSelectTime={selectCalendarTime}
            title="Lediga tider"
          />
        </div>
      </div>
    </div>
  );
}
