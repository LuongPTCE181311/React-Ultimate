import { NavLink } from "react-router-dom";
import 
const Header = () => {
  return (
    <ul className="hoidanit">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/users">User</NavLink>
      </li>
      <li>
        <NavLink to="/books">Books</NavLink>
      </li>
    </ul>
  );
};

export default Header;
