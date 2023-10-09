import axios from "axios";
import React, { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import Loader from "../components/Loader";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [region, setRegion] = useState("");

  const getCountries = async () => {
    const response = await axios.get("https://restcountries.com/v2/all");
    setCountries(response.data);
    setFilteredCountries(response.data);
  };

  //mounting phase
  useEffect(() => {
    getCountries();
  }, []);

  //updating phase
  useEffect(() => {
    const copy = countries.filter((country) => {
      return country.name.toLowerCase().match(search.toLowerCase());
    });
    setFilteredCountries(copy);
  }, [search]);

  useEffect(() => {
    const copy = countries.filter((country) => {
      return country.region === region;
    });
    setFilteredCountries(copy);
  }, [region]);

  return countries.length > 0 ? (
    <div className="container">
      <div className="row row-gap-3 my-3">
        <div className="col-sm-12 col-md-6">
          <div className="input-group flex-nowrap w-100">
            <span className="input-group-text" id="addon-wrapping">
              <i className="fa fa-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search for a country..."
              aria-label="Username"
              aria-describedby="addon-wrapping"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <select
            className="form-select w-100"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="" disabled>
              Filter by Region
            </option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="row row-gap-3">
        {filteredCountries.map((country) => {
          return (
            <div className="col-sm-12 col-md-6 col-lg-3" key={country.nativeName}>
              <CountryCard country={country} />
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Home;
