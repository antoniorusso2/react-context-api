import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <ul className="links">
            <li className="nav_link">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav_link">
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li className="nav_link">
              <NavLink to="/blog">Posts</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
