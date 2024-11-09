import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="flex justify-center gap-5 items-center">
                <Link to="/" >Home</Link>
                <Link to="/about">About</Link>
                <Link to="contact">Contact Us</Link>
                <Link to="/users">Users</Link>
            </nav>
        </div>
    );
};

export default Header;