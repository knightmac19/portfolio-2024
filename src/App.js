import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";
import FunFacts from "./components/FunFacts";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div id="page-container">
      <div id="content-wrap">
        <Header>
          <Nav />
        </Header>
        <main>
          <About />
          <FunFacts />
          <Projects />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
