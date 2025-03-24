import "./PriceToggle.scss";

interface PriceToggleProps {
  isYearly: boolean;
  onChange: (isYearly: boolean) => void;
}

export default function PriceToggle({ isYearly, onChange }: PriceToggleProps) {
  return (
    <div className="price-toggle">
      <span className={`price-toggle__label${!isYearly ? " price-toggle__label--active" : ""}`}>Monthly</span>
      <button
        className={`price-toggle__switch${isYearly ? " price-toggle__switch--yearly" : ""}`}
        onClick={() => onChange(!isYearly)}
        aria-label={`Switch to ${isYearly ? "monthly" : "yearly"} pricing`}
        role="switch"
        aria-checked={isYearly}
      >
        <span className="price-toggle__handle" />
      </button>
      <span className={`price-toggle__label${isYearly ? " price-toggle__label--active" : ""}`}>Yearly</span>
    </div>
  );
}
