import ServiceCard from "../components/booking/ServiceCard.jsx";
import { services } from "../data/services.js";

export default function Services() {
  return (
    <section className="container section">
      <div className="section-heading">
        <span className="eyebrow">Tjänster</span>
        <h1>Välj en tjänst att boka</h1>
        <p>
          Här visas exempel på tjänster som ett lokalt serviceföretag kan erbjuda.
          Kunden kan välja en tjänst och gå vidare till bokningsflödet.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}