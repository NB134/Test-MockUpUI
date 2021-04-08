function Button({ value, classes = "", type = "button", onClick }) {
  return (
    <input
      className={`btn ${classes}`}
      type={type}
      value={value}
      onClick={onClick}
    />
  );
}

export default Button;
