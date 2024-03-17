import { useState } from "react";

const Nav = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  const navUlDisplay = `${burgerOpen ? "flex" : "none"}`;

  const links = [
    { title: "About", href: "#about" },

    { title: "Fun Facts", href: "#facts" },

    { title: "Projects", href: "#projects" },

    { title: "Profile", href: "#profile" },
  ];

  return (
    <nav className=" nav">
      <ul className="desktop-nav">
        {links.map((link, idx) => (
          <li key={idx}>
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
      </ul>
      <ul style={{ display: navUlDisplay }}>
        {links.map((link, idx) => (
          <li key={idx}>
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
      </ul>
      <a href="#/" className="burger-menu" onClick={toggleBurger}>
        <i className="fas fa-lg fa-bars"></i>
      </a>
    </nav>
  );
};

export default Nav;
