import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
const { BrowserRouter, Route } = require("react-router-dom");

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact render={() => <Home />} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
