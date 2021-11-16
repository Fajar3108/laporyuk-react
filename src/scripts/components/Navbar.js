import "../../styles/components/navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaBell, FaHome, FaSignOutAlt, FaUser } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav>
            <Link to="/"><h1 className="text-white">Lapor<span className="text-primary">Yuk!</span></h1></Link>
            <ul className="nav-menu">
                <li title="Home" className="nav-link-circle"><NavLink to="/"><FaHome /></NavLink></li>
                <li title="Notifikasi" className="nav-link-circle"><NavLink to="/notification"><FaBell /></NavLink></li>
                <li title="Profile" className="nav-link-circle"><NavLink to="/profile"><FaUser /></NavLink></li>
                <li title="Keluar" className="nav-link-circle"><Link to="/login" className="text-danger"><FaSignOutAlt /></Link></li>
                <li><Link to="/login" className="btn btn-primary mr-10">Login</Link></li>
                <li><Link to="/register" className="btn btn-surface">Register</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;