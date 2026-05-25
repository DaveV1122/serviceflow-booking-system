import { Link } from "react-router-dom";
import { Clock, Tag } from "lucide-react";

export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-card-image-wrap">
        <img
          src={service.image}
          alt={service.title}
          className="service-card-image"
        />
      </div>

      <div className="service-card-content">
        <div className="service-card-meta">
          <span>
            <Tag size={16} aria-hidden="true" />
            {service.category}
          </span>

          <span>
            <Clock size={16} aria-hidden="true" />
            {service.duration}
          </span>
        </div>

        <h3>{service.title}</h3>
        <p>{service.description}</p>

        <div className="service-card-footer">
          <strong>Från {service.priceFrom} kr</strong>

          <Link className="btn btn-primary" to={`/booking?service=${service.id}`}>
            Boka
          </Link>
        </div>
      </div>
    </article>
  );
}
