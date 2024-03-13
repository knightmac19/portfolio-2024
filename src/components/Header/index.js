const Header = (props) => {
  return (
    <div className="header-wrapper">
      <header className="header-container">
        <h1>Patrick Dunn</h1>
        {props.children}
      </header>
    </div>
  );
};

export default Header;
