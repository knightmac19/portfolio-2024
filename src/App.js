import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div id="page-container">
      <div id="content-wrap">
        <Header>
          <Nav />
        </Header>
        <main></main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
