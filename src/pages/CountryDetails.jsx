import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";

const CountryDetails = () => {
  const params = useParams();
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();

  const getCountryDetails = async () => {
    const response = await axios.get(
      `https://restcountries.com/v2/name/${params.countryName}`
    );
    setDetails(response.data);
  };

  useEffect(() => {
    getCountryDetails();
    // eslint-disable-next-line
  }, []);

  return details.length > 0 ? (
    <div className="container">
      <div className="row my-5">
        <button
          className="btn btn-outline-dark"
          style={{ width: "100px" }}
          onClick={() => navigate(-1)}
        >
          <i className="fa fa-long-arrow-left me-2"></i>
          Back
        </button>
      </div>
      {details.map((detail) => {
        return (
          <div className="row my-4">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <img src={detail.flag} alt="#" height="260" />
            </div>
            <div
              className="col-xs-12 col-sm-12 col-md-12 col-lg-6"
              style={{ display: "inline-flex" }}
            >
              <div className="row">
                <div className="col-6">
                  <h5>
                    <strong>{detail.name}</strong>
                  </h5>
                  <p>
                    {" "}
                    <strong>Native Name: </strong>
                    {detail?.nativeName}
                  </p>
                  <p>
                    <strong>Population: </strong>
                    {detail?.population}
                  </p>
                  <p>
                    <strong>Region: </strong>
                    {detail?.region}
                  </p>
                  <p>
                    <strong>Sub Region: </strong>
                    {detail?.subregion}
                  </p>
                  <p>
                    <strong>Capital: </strong>
                    {detail?.capital}
                  </p>
                </div>
                <div className="col-6">
                  <p>
                    <strong>Top level Domain: </strong>
                    {detail?.topLevelDomain}
                  </p>
                  <p>
                    <strong>Currencies: </strong>
                    {detail.currencies?.map((currency) => currency.name)}
                  </p>
                  <p>
                    <strong>Languages: </strong>
                    {detail?.languages?.map((lang) => lang.name).join(", ")}
                  </p>
                </div>
                <div className="col-12">
                  <p>
                    <strong>Border Countries: </strong>
                    {detail.borders?.map((border) => {
                      return (
                        <button className="btn btn-outline-dark me-2">
                          {border}
                        </button>
                      );
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <Loader />
  );
};

export default CountryDetails;
