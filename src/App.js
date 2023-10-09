import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CountryDetails from "./pages/CountryDetails";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/country-details/:countryName"
          element={<CountryDetails />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
