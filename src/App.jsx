import "./App.css";
import Login from "./pages/login";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ProductsDetails from "./pages/products";
import GRNDetails from "./pages/grn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/productdetails" element={<ProductsDetails />} />
          <Route exact path="/grn" element={<GRNDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
