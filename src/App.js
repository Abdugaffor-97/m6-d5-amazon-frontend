import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
const { BrowserRouter, Route } = require("react-router-dom");

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact render={() => <Home />} />
      <Route path="/ProductList" exact render={() => <ProductList />} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
