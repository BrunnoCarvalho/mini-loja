import "./Button.css";

function Button({ children, variant = "solid", disabled, onClick  }) {
  return (
    <button className={`button ${variant}`} disabled={disabled} onClick = {onClick}>
      {children}
    </button>
  );
}

export default Button