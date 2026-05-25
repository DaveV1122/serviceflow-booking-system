export const services = [
  {
    id: "cleaning",
    title: "Hemstädning",
    category: "Städning",
    duration: "2 timmar",
    durationMinutes: 120,
    bufferMinutes: 10,
    priceFrom: 499,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
    description:
      "Professionell hemstädning för lägenheter och villor. Kunden kan boka en tid som passar och få en tydlig bekräftelse."
  },
  {
    id: "gardening",
    title: "Trädgårdsskötsel",
    category: "Utemiljö",
    duration: "3 timmar",
    durationMinutes: 180,
    bufferMinutes: 10,
    priceFrom: 699,
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80",
    description:
      "Gräsklippning, ogräsrensning och enklare underhåll av trädgård för privata kunder och mindre fastigheter."
  },
  {
    id: "repair",
    title: "Enklare reparationer",
    category: "Fastighetsservice",
    duration: "1 timme",
    durationMinutes: 60,
    bufferMinutes: 10,
    priceFrom: 599,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
    description:
      "Mindre reparationer i hemmet eller på fastigheten, till exempel montering, justeringar och enklare underhåll."
  },
  {
    id: "moving-help",
    title: "Flytthjälp",
    category: "Service",
    duration: "2 timmar",
    durationMinutes: 120,
    bufferMinutes: 10,
    priceFrom: 899,
    image:
      "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=900&q=80",
    description:
      "Hjälp med enklare flytt, bärhjälp och transportförberedelser för privatpersoner och mindre företag."
  }
];

export function getServiceById(serviceId) {
  return services.find((service) => service.id === serviceId);
}
