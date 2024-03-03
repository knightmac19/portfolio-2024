import { Link } from "react-router-dom";

const Nav = ({ currentPage }) => {
  const pages = ["Portfolio", "Contact", "Resume"];
  console.log(currentPage);

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
          <li>
            <Link
              className={`${currentPage === `/${Page}` && "active-link"}`}
              key={Page}
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
