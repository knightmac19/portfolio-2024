import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Page from "./components/Page";
import { useLocation } from "react-router-dom";

const App = () => {
  const currentPage = useLocation().pathname;

  return (
    <div id="page-container">
      <div id="content-wrap">
        <Header>
          <Nav currentPage={currentPage} />
        </Header>
        <main>
          <Page currentPage={currentPage} />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
