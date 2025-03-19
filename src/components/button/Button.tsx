import Link from "next/link";
import { ComponentProps, MouseEvent } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  "aria-label": string;
}

export const Button = ({ children, variant = "primary", href, onClick, className = "", "aria-label": ariaLabel, ...props }: ButtonProps) => {
  const buttonClasses = `${styles.button} ${styles[`button--${variant}`]} ${className}`.trim();

  const renderContent = () => (
    <>
      {children}
      {variant === "secondary" && <span className={styles.arrow} />}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        aria-label={ariaLabel}
      >
        {renderContent()}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      aria-label={ariaLabel}
      {...props}
    >
      {renderContent()}
    </button>
  );
};
