import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="d-flex flex-column align-items-center">
            <p>COPYRIGHT &copy; 2021</p>
            <Link to="/about">About</Link>
        </footer>
    );
}

export default Footer;
