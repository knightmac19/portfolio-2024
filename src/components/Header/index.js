const Header = (props) => {
  return (
    <div className="header-wrapper">
      <header className="header-container">
        <div className="name-email">
          <h1>Patrick Dunn</h1>
          <div className="email-linkedin">
            <a
              href="https://www.linkedin.com/in/patrick-dunn-3a14249b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-lg fa-linkedin"></i>
            </a>
            <a href="mailto:pmdunn78@gmail.com">pmdunn78@gmail.com</a>
          </div>
        </div>

        {props.children}
      </header>
    </div>
  );
};

export default Header;
