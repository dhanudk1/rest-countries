import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CountryDetails from "./pages/CountryDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/country-details/:countryName"
          element={<CountryDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
