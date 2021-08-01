import { useLocation } from "react-router";
import Button from "./Button";

function Header({ title, onAdd, showForm }) {
    const location = useLocation();
    return (
        <header className="header d-flex justify-content-between align-items-center">
            <h1>{title}</h1>
            {location.pathname === "/" && (
                <Button
                    className={`btn btn-lg ${showForm && "btn-danger"}`}
                    text={showForm ? "Hide" : "Show"}
                    onClick={onAdd}
                />
            )}
        </header>
    );
}

Header.defaultProps = {
    title: "Header",
};

export default Header;
