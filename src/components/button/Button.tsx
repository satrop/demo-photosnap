import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: string;
  disabled?: boolean;
};

const Button = ({ children, disabled = false }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${disabled ? styles.disabled : ""}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
