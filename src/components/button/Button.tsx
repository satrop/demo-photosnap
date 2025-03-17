import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({ children, disabled = false, onClick }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${disabled ? styles.disabled : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
