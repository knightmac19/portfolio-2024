import { Link } from "react-router-dom";

const Nav = ({ currentPage }) => {
  const pages = ["Portfolio", "Contact", "Resume"];

  return (
    <nav className=" nav">
      <ul>
        <li>
          <Link
            className={` ${currentPage === "/" && "active-link"}`}
            key="About"
            to="/"
          >
            About
          </Link>
        </li>
        {pages.map((Page) => (
          <li key={Page}>
            <Link
              className={`${currentPage === `/${Page}` && "active-link"}`}
              to={`/${Page}`}
            >
              {Page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
