import React from "react";
import { useNavigate } from "react-router-dom";

const CountryCard = (props) => {
  const { country } = props;
  const navigate = useNavigate();

  return (
    <div
      className="card"
      style={{ height: "100%" }}
      onClick={() => navigate(`/country-details/${country.name}`)}
    >
      <img src={country.flag} className="card-img-top" alt="..." height="150" />
      <div className="card-body">
        <h4 className="card-title">{country.name}</h4>
        <p className="m-0">
          <strong>Population: </strong>
          {country.population}
        </p>
        <p className="m-0">
          <strong>Region: </strong>
          {country.region}
        </p>
        <p className="m-0">
          <strong>Capital: </strong>
          {country.capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
