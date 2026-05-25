import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarCheck,
  ClipboardList,
  Smartphone
} from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">ServiceFlow</span>

            <h1>En enklare väg från kundförfrågan till bokad tjänst</h1>

            <p>
              ServiceFlow är ett responsivt bokningssystem för lokala
              tjänsteföretag. Kunden kan boka online och företaget kan hantera
              alla bokningar i en tydlig adminvy.
            </p>

            <div className="hero-actions">
              <Link className="btn btn-primary" to="/booking">
                Boka en tjänst
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link className="btn btn-secondary" to="/admin">
                Visa adminvy
              </Link>
            </div>
          </div>

          <div className="hero-card" aria-label="Exempel på bokningskort">
            <div className="hero-card-header">
              <span>Ny bokning</span>
              <strong>BK-2048</strong>
            </div>

            <div className="hero-card-body">
              <h2>Trädgårdsskötsel</h2>
              <p>Fredag 5 juni · 13:30</p>

              <div className="hero-card-status">
                <span>Bekräftad</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <span className="eyebrow">Problem och lösning</span>
          <h2>Byggt för små företag som fortfarande bokar manuellt</h2>
          <p>
            Många lokala företag tar emot bokningar via telefon, sms och e-post.
            Det fungerar, men det blir snabbt rörigt när flera kunder kontaktar
            företaget samtidigt.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <CalendarCheck size={30} aria-hidden="true" />
            <h3>Strukturerad bokning</h3>
            <p>
              Kunden väljer tjänst, datum, tid och kontaktuppgifter i ett tydligt
              flöde.
            </p>
          </article>

          <article className="feature-card">
            <ClipboardList size={30} aria-hidden="true" />
            <h3>Adminvy</h3>
            <p>
              Företaget kan se, filtrera och ändra status på bokningar utan att
              tappa kontrollen.
            </p>
          </article>

          <article className="feature-card">
            <Smartphone size={30} aria-hidden="true" />
            <h3>Responsiv design</h3>
            <p>
              Gränssnittet fungerar på både mobil, surfplatta och dator med
              fokus på enkel användning.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}