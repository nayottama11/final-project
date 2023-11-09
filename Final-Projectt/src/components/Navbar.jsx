import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="" className="logo">
        Travel
      </a>
      <ul>
        <li>
          <a href="/user">User</a>
        </li>
        <li>
          <a href="/category">Category</a>
        </li>
        <li>
          <a href="/activity">Activity</a>
        </li>
        <li>
          <a href="/promo">Promo</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/register">Sign In</a>
        </li>
        <li>
          <a href="/login">Log In</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
