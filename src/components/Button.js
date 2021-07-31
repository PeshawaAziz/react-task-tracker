function Button({ className, text, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  className: "btn",
  text: "Button",
};

export default Button;
