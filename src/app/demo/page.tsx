import styles from "./demo.module.scss";
import { Button } from "@/components/button/Button";

export default function Demo() {
  return (
    <div className={styles.page}>
      <section>
        <h1>DM SANS BOLD</h1>
        <h2>DM Sans Bold</h2>
        <h3>DM Sans Bold</h3>
        <h4>DM Sans Bold</h4>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nun.</p>
      </section>
      <section>
        <div className="color color--white"></div>
        <div className="color color--black"></div>
        <div className="color color--gray"></div>
        <div className="color color--gradient"></div>
      </section>
      <section>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button
          variant="primary"
          href="/features"
        >
          Primary Link
        </Button>
        <Button
          variant="secondary"
          href="/pricing"
        >
          Secondary Link
        </Button>
      </section>
      <section
        className="color--black"
        style={{ backgroundColor: "#000", padding: "1rem", margin: "1rem" }}
      >
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </section>
    </div>
  );
}
