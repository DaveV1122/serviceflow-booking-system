# ServiceFlow Booking System

ServiceFlow är ett examensarbete byggt med React. Projektet visar hur ett responsivt bokningssystem kan förenkla bokningsflödet för lokala tjänsteföretag.

Applikationen innehåller en kundvy där användaren kan välja tjänst och skicka en bokningsförfrågan samt en adminvy där företaget kan hantera bokningar, filtrera listan och ändra status.

## Syfte

Syftet med projektet är att undersöka hur ett digitalt bokningssystem kan skapa ett tydligare och mer användarvänligt flöde för både kunder och företag.

Många mindre tjänsteföretag hanterar bokningar via telefon, sms eller e-post. Det kan leda till missade bokningar, otydlig kommunikation och mer administrativt arbete. ServiceFlow visar en frontend-lösning som samlar bokningsprocessen i ett enkelt webbgränssnitt.

## Funktioner

### Kundvy

- Startsida med presentation av problemet och lösningen
- Tjänstesida med exempel på lokala tjänster
- Bokningsformulär
- Val av tjänst, datum och tid
- Kontaktuppgifter och adress
- Formulärvalidering
- Bokningsbekräftelse

### Adminvy

- Dashboard med statistik
- Lista över bokningar
- Sökning och filtrering
- Statushantering
- Statusar:
  - Ny
  - Bekräftad
  - Slutförd
  - Avbokad

## Tekniker

- React
- Vite
- JavaScript
- React Router
- CSS
- LocalStorage
- Lucide React icons

## Projektstruktur

```text
serviceflow-booking-system/
├── public/
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── admin/
│   │   ├── booking/
│   │   ├── layout/
│   │   └── ui/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Installation

Klona projektet eller öppna projektmappen i terminalen.

```bash
npm install
```

Starta utvecklingsservern.

```bash
npm run dev
```

Bygg projektet för produktion.

```bash
npm run build
```

Förhandsgranska produktionsbygget.

```bash
npm run preview
```

## Sidor

| Sida | Beskrivning |
|---|---|
| `/` | Startsida |
| `/services` | Lista över tjänster |
| `/booking` | Bokningsformulär |
| `/admin` | Adminvy för bokningar |

## Datahantering

Projektet använder mockad data och LocalStorage istället för en riktig backend. Detta gör projektet lättare att testa och passar examensarbetets fokus på frontend, användarflöde och gränssnitt.

När en ny bokning skapas sparas den lokalt i webbläsaren. Adminvyn läser från samma lagring och kan visa samt uppdatera bokningsstatus.

## Avgränsningar

Projektet fokuserar på frontend och användarupplevelse. Följande funktioner ingår inte i första versionen:

- Betalning
- BankID
- SMS-verifiering
- Riktig kalenderintegration
- E-postutskick
- Backend och databas
- Inloggning för admin

Dessa funktioner kan beskrivas som framtida förbättringar i rapporten.

## Tillgänglighet och UX

Projektet använder:

- Semantisk HTML
- Tydliga labels i formulär
- Felmeddelanden vid validering
- Fokusmarkeringar
- Responsiv layout
- Tydliga färgkontraster
- Enkelt språk i gränssnittet

## Examensarbete

Detta projekt är skapat som ett examensarbete inom frontend webbutveckling.

Fokusområden:

- Responsiv frontendutveckling
- Komponentbaserad struktur
- Formulärhantering
- Validering
- State-hantering
- LocalStorage
- UX och tillgänglighet
- Analys av tekniska och designmässiga val

## Framtida förbättringar

Möjliga vidareutvecklingar:

- Backend med databas
- Admininloggning
- Kalenderintegration
- E-postbekräftelser
- SMS-påminnelser
- Betalningsfunktion
- Rollbaserad åtkomst
- Export av bokningar
- Mer avancerad statistik

## Författare

David Vakhayev

## Licens

Detta projekt är skapat för utbildningssyfte.
