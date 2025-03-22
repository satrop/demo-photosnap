import Image from "next/image";
import "./FeatureCard.scss";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  width?: number;
  height?: number;
}

export default function FeatureCard({ icon, title, description, width = 72, height = 72 }: FeatureCardProps) {
  return (
    <div className="feature-card">
      <div className="feature-card__icon">
        <Image
          src={icon}
          alt=""
          width={width}
          height={height}
          aria-hidden="true"
        />
      </div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
    </div>
  );
}
