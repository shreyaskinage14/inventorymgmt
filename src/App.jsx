import "./App.css";
import Login from "./pages/login";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import MainRoute from "./routes/main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainRoute />}>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
