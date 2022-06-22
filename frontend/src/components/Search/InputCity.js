import React from "react";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../Context/SearchContext";

const InputCity = ({ cities , handlerCity }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isActive, setActive] = useState(false);
  const inputLocality = document.getElementById("input__locality");
  const { cityCache, setCityCache } = useContext(SearchContext);

  const toggle = () => {
    setActive(!isActive);
    setCityCache(null); //cada ves que se hace click en el combo se limpia la ciudad que tenia guardada
  };

  useEffect(() => {
      
    if (cityCache) {
       if(inputLocality){
       inputLocality.value = cityCache.value;
       inputLocality.name = cityCache.name;
       }
    }
    }, [cityCache,inputLocality]);

  return (
    <>
      <input
        type="text"
        name="city"
        placeholder="¿A dónde vamos?"
        id="input__locality"
        autoComplete="off"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        onClick={toggle}
      />
      <ul className={isActive ? "ul__list-location show" : "ul__list-location"}>
        {cities
          ?.filter((city) => {
            let ret;
            if (searchTerm === "") {
              ret = city;
            } else if (
              city.cityName.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              ret = city;
            }
            return ret;
          })
          .slice(0, 4)
          .map((city) => {
            return (
              <li
                key={city.cityName + city.id}
                onClick={(e) => {
                  handlerCity(city.id)
                  inputLocality.name = `?city=${city.id}`;
                  inputLocality.value = city.cityName + ", " + city.country;
                  toggle();
                }}
              >
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div>
                    <span className="span__city-text">{city.cityName}</span>
                    <span className="span__country-text">{city.country}</span>
                  </div>
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default InputCity;
