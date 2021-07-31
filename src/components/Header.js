import Button from "./Button";

function Header({ title }) {
  const onClick = () => {
    console.log("Hello!");
  };
  return (
    <header className="header d-flex justify-content-between align-items-center">
      <h1>{title}</h1>
      <Button className="btn btn-lg" text="Add" onClick={onClick} />
    </header>
  );
}

Header.defaultProps = {
  title: "Header",
};

export default Header;
