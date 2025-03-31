import "./PriceToggle.scss";

interface PriceToggleProps {
  isYearly: boolean;
  onChange: (isYearly: boolean) => void;
}

export default function PriceToggle({ isYearly, onChange }: PriceToggleProps) {
  return (
    <div
      className="price-toggle"
      role="group"
      aria-label="Billing frequency"
    >
      <span
        className={`price-toggle__label${!isYearly ? " price-toggle__label--active" : ""}`}
        aria-hidden={isYearly}
      >
        Monthly
      </span>
      <button
        className={`price-toggle__switch${isYearly ? " price-toggle__switch--yearly" : ""}`}
        onClick={() => onChange(!isYearly)}
        aria-label="Toggle billing frequency"
        role="switch"
        aria-checked={isYearly}
      >
        <span className="visually-hidden">{isYearly ? "Switch to monthly billing" : "Switch to yearly billing"}</span>
        <span
          className="price-toggle__handle"
          aria-hidden="true"
        />
      </button>
      <span
        className={`price-toggle__label${isYearly ? " price-toggle__label--active" : ""}`}
        aria-hidden={!isYearly}
      >
        Yearly
      </span>
    </div>
  );
}
