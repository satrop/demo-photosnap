import { Button } from "../button/Button";
import "./PriceCard.scss";

interface PriceCardProps {
  title: string;
  description: string;
  price: number;
  isYearly: boolean;
  popular?: boolean;
}

export default function PriceCard({ title, description, price, isYearly, popular }: PriceCardProps) {
  const monthlyPrice = price;
  const yearlyPrice = price * 12;
  const currentPrice = isYearly ? yearlyPrice : monthlyPrice;

  return (
    <div className={`price-card${popular ? " price-card--popular" : ""}`}>
      <div className="price-card__content">
        <h2 className="price-card__title">{title}</h2>
        <p className="price-card__description">{description}</p>
        <div className="price-card__price-container">
          <p className="price-card__price">${currentPrice.toFixed(2)}</p>
          <p className="price-card__period">per {isYearly ? "year" : "month"}</p>
        </div>
        <Button
          variant="primary"
          aria-label={`Pick ${title} plan`}
          className="price-card__button"
        >
          Pick Plan
        </Button>
      </div>
    </div>
  );
}
