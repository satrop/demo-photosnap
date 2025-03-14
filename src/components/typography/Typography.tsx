import React from "react";
import styles from "./Typography.module.scss";

export interface TypographyProps {
  variant: "h1" | "h2" | "h3" | "h4" | "p";
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Typography component that displays text in different styles
 */
export const Typography: React.FC<TypographyProps> = ({ variant, children, className = "", style }) => {
  const Element = variant;

  return (
    <Element
      className={`${styles[variant] || ""} ${className}`}
      style={style}
    >
      {children}
    </Element>
  );
};

export default Typography;
