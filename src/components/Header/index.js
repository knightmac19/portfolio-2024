const Header = (props) => {
  return (
    <header>
      <h1>Patrick Dunn</h1>
      {props.children}
    </header>
  );
};

export default Header;
