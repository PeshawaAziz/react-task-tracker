import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <p>COPYRIGHT &copy; 2021</p>
            <Link to="/">Go Back</Link>
        </div>
    );
}

export default About;
