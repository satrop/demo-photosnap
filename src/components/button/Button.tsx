import Link from "next/link";
import { ComponentProps } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary";
  href?: string;
}

export const Button = ({ children, variant = "primary", href, className = "", ...props }: ButtonProps) => {
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
      >
        {renderContent()}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {renderContent()}
    </button>
  );
};
