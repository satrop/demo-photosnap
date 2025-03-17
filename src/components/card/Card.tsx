import React, { ReactNode } from "react";
import styles from "./Card.module.scss";
import Typography from "../typography/Typography";

export interface CardProps {
  title: string;
  description?: string;
  image?: string;
  children?: ReactNode;
  variant?: "default" | "featured";
}

const Card = ({ title, description, image, children, variant = "default" }: CardProps) => {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      {image && (
        <div className={styles.imageContainer}>
          <img
            src={image}
            alt={title}
            className={styles.image}
          />
        </div>
      )}
      <div className={styles.content}>
        <Typography
          variant="h3"
          className={styles.title}
        >
          {title}
        </Typography>
        {description && (
          <Typography
            variant="p"
            className={styles.description}
          >
            {description}
          </Typography>
        )}
        {children && <div className={styles.children}>{children}</div>}
      </div>
    </div>
  );
};

export default Card;
