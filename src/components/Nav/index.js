import { Link } from "react-router-dom";

const Nav = ({ currentPage }) => {
  const pages = ["Portfolio", "Contact", "Resume"];

  return (
    <nav className="dev-border nav">
      <ul>
        <li className={` ${currentPage === "/" && "active-link"}`} key="About">
          <Link to="/">About</Link>
        </li>
        {pages.map((Page) => (
          <li
            className={`${currentPage === `/${Page}` && "active-link"}`}
            key={Page}
          >
            <Link to={`/${Page}`}>{Page}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
