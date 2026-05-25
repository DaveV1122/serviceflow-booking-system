import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container section not-found-page">
      <span className="eyebrow">404</span>

      <h1>Sidan hittades inte</h1>

      <p>
        Sidan du försöker öppna finns inte. Gå tillbaka till startsidan eller
        välj en annan sida i menyn.
      </p>

      <Link className="btn btn-primary" to="/">
        <Home size={18} aria-hidden="true" />
        Till startsidan
      </Link>
    </section>
  );
}