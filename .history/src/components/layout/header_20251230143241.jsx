import { Link, NavLink } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">
          Home
        </NavLink>
      </li>
      <li>
        <Link to="/users">User</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
    </ul>
  );
};

export default Header;
