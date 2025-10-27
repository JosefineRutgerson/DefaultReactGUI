import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/user" ? "active" : ""}>
          <Link to="/User">User</Link>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
