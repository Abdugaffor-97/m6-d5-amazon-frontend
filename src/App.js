import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
const { BrowserRouter, Route } = require("react-router-dom");

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact render={() => <Home />} />
      <Route path="/ProductList" exact component={ProductList} />
      <Route path="/details/:id" exact component={ProductDetails} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
