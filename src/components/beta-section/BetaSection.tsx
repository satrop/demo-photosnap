import { Button } from "../button/Button";
import "./BetaSection.scss";

export default function BetaSection() {
  return (
    <section className="beta-section background--black full-width">
      <div className="grid-container">
        <div className="container main-width">
          <h2>We're in beta. Get your invite today!</h2>
          <Button
            variant="secondary"
            aria-label="Get an invite to join the beta"
          >
            Get an invite
          </Button>
        </div>
      </div>
    </section>
  );
}
