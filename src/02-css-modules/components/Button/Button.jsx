import styles from "./Button.module.css";

function Button({ children, variant = "solid", disabled, onClick  }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} disabled={disabled} onClick = {onClick}>
      {children}
    </button>
  );
}

export default Button