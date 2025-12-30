import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <ul>
      <li>
        <Link className="active" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link href="/users">User</Link>
      </li>
      <li>
        <a href="/products">Products</a>
      </li>
    </ul>
  );
};

export default Header;
