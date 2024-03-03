const Header = (props) => {
  return (
    <header className="dev-border container">
      <h1 className="header-lg">Patrick Dunn</h1>
      {props.children}
    </header>
  );
};

export default Header;
