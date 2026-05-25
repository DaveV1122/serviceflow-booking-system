export const initialBookings = [
  {
    id: "BK-1001",
    serviceId: "cleaning",
    serviceTitle: "Hemstädning",
    customerName: "Anna Karlsson",
    email: "anna.karlsson@example.com",
    phone: "0701234567",
    date: "2026-06-03",
    time: "08:30",
    address: "Storgatan 12, Malmö",
    message: "Önskar hjälp med veckostädning och badrum innan helgen.",
    status: "new",
    createdAt: "2026-05-20T09:15:00"
  },
  {
    id: "BK-1002",
    serviceId: "gardening",
    serviceTitle: "Trädgårdsskötsel",
    customerName: "Erik Nilsson",
    email: "erik.nilsson@example.com",
    phone: "0734567890",
    date: "2026-06-05",
    time: "13:30",
    address: "Villavägen 8, Lund",
    message: "Behöver gräsklippning, ogräsrensning och bortforsling av ris.",
    status: "confirmed",
    createdAt: "2026-05-21T14:30:00"
  },
  {
    id: "BK-1003",
    serviceId: "repair",
    serviceTitle: "Enklare reparationer",
    customerName: "Sara Andersson",
    email: "sara.andersson@example.com",
    phone: "0762223344",
    date: "2026-06-07",
    time: "09:00",
    address: "Parkvägen 4, Helsingborg",
    message: "Behöver hjälp med montering av hyllor.",
    status: "completed",
    createdAt: "2026-05-22T11:45:00"
  },
  {
    id: "BK-1004",
    serviceId: "moving-help",
    serviceTitle: "Flytthjälp",
    customerName: "Johan Berg",
    email: "johan.berg@example.com",
    phone: "0721182233",
    date: "2026-06-02",
    time: "14:00",
    address: "Södra Förstadsgatan 45, Malmö",
    message: "Behöver bärhjälp för mindre flytt från lägenhet till förråd.",
    status: "confirmed",
    createdAt: "2026-05-19T16:20:00"
  },
  {
    id: "BK-1005",
    serviceId: "repair",
    serviceTitle: "Enklare reparationer",
    customerName: "Lina Persson",
    email: "lina.persson@example.com",
    phone: "0739876543",
    date: "2026-06-02",
    time: "09:30",
    address: "Köpmansgatan 7, Trelleborg",
    message: "Montering av gardinskenor och justering av två innerdörrar.",
    status: "new",
    createdAt: "2026-05-23T08:05:00"
  },
  {
    id: "BK-1006",
    serviceId: "cleaning",
    serviceTitle: "Hemstädning",
    customerName: "Mikael Holm",
    email: "mikael.holm@example.com",
    phone: "0704455667",
    date: "2026-06-04",
    time: "11:00",
    address: "Norra Vallgatan 18, Malmö",
    message: "Flyttstädning av två rum och kök, nyckel finns hos portvakten.",
    status: "completed",
    createdAt: "2026-05-18T13:40:00"
  },
  {
    id: "BK-1007",
    serviceId: "gardening",
    serviceTitle: "Trädgårdsskötsel",
    customerName: "Karin Sjöberg",
    email: "karin.sjoberg@example.com",
    phone: "0763344556",
    date: "2026-06-04",
    time: "15:00",
    address: "Björkvägen 22, Lomma",
    message: "Klippning av häck och rensning kring garageuppfarten.",
    status: "cancelled",
    createdAt: "2026-05-17T10:10:00"
  },
  {
    id: "BK-1008",
    serviceId: "moving-help",
    serviceTitle: "Flytthjälp",
    customerName: "Oskar Lindgren",
    email: "oskar.lindgren@example.com",
    phone: "0709988776",
    date: "2026-06-06",
    time: "10:30",
    address: "Rådmansgatan 3, Malmö",
    message: "Bärhjälp för soffa, matbord och kartonger till tredje våningen.",
    status: "confirmed",
    createdAt: "2026-05-22T15:55:00"
  },
  {
    id: "BK-1009",
    serviceId: "cleaning",
    serviceTitle: "Hemstädning",
    customerName: "Fatima Hassan",
    email: "fatima.hassan@example.com",
    phone: "0732211445",
    date: "2026-06-01",
    time: "12:30",
    address: "Amiralsgatan 64, Malmö",
    message: "Städning av kök, hall och vardagsrum efter renovering.",
    status: "completed",
    createdAt: "2026-05-16T12:25:00"
  },
  {
    id: "BK-1010",
    serviceId: "repair",
    serviceTitle: "Enklare reparationer",
    customerName: "Peter Ekström",
    email: "peter.ekstrom@example.com",
    phone: "0767788990",
    date: "2026-06-06",
    time: "16:00",
    address: "Industrigatan 11, Lund",
    message: "Behöver hjälp med montering av väggfäste och enklare kabeldragning.",
    status: "new",
    createdAt: "2026-05-24T09:35:00"
  },
  {
    id: "BK-1011",
    serviceId: "gardening",
    serviceTitle: "Trädgårdsskötsel",
    customerName: "Maria Åkesson",
    email: "maria.akesson@example.com",
    phone: "0701122334",
    date: "2026-06-01",
    time: "08:00",
    address: "Ängsvägen 14, Staffanstorp",
    message: "Första vårstädningen av trädgården med fokus på rabatter.",
    status: "cancelled",
    createdAt: "2026-05-15T17:45:00"
  }
];

export const bookingStatuses = [
  {
    value: "new",
    label: "Ny"
  },
  {
    value: "confirmed",
    label: "Bekräftad"
  },
  {
    value: "completed",
    label: "Slutförd"
  },
  {
    value: "cancelled",
    label: "Avbokad"
  }
];
