export function validateRequired(value, message = "Det här fältet är obligatoriskt.") {
  if (!value || String(value).trim() === "") {
    return message;
  }

  return "";
}

export function validateEmail(email) {
  if (!email || email.trim() === "") {
    return "E-post är obligatoriskt.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return "Ange en giltig e-postadress.";
  }

  return "";
}

export function validatePhone(phone) {
  if (!phone || phone.trim() === "") {
    return "Telefonnummer är obligatoriskt.";
  }

  const cleanedPhone = phone.replace(/\s/g, "");
  const phonePattern = /^[0-9+()-]{7,20}$/;

  if (!phonePattern.test(cleanedPhone)) {
    return "Ange ett giltigt telefonnummer.";
  }

  return "";
}

export function validateBookingForm(formData) {
  const errors = {
    serviceId: validateRequired(formData.serviceId, "Välj en tjänst."),
    customerName: validateRequired(formData.customerName, "Namn är obligatoriskt."),
    email: validateEmail(formData.email),
    phone: validatePhone(formData.phone),
    date: validateRequired(formData.date, "Välj ett datum."),
    time: validateRequired(formData.time, "Välj en tid."),
    address: validateRequired(formData.address, "Adress är obligatoriskt.")
  };

  return Object.fromEntries(
    Object.entries(errors).filter(([, value]) => value)
  );
}