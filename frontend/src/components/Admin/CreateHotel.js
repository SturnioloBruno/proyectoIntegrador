import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderProduct from "../Products/HeaderProduct";
import "../../styles/Admin/CreateHotel.css";
import Api from "../Helpers/Api";
import UploadImages from "./UploadImages";
import UploadAttributes from "./UploadAttributes";
import validateInput from "../Helpers/Util";

function CreateHotel() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState(null);
  const [cities, setCities] = useState(null);

  useEffect(() => {
    //Cargo categorías
    const getCategories = async () => {
      await fetch(Api + "categories/getList/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(function (respuesta) {
          return respuesta.json();
        })
        .then(function (categories) {
          setCategories(categories);
        });
    };
    getCategories();

    //Cargo ciudades
    const getCities = async () => {
      await fetch(Api + "cities/getList/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(function (respuesta) {
          return respuesta.json();
        })
        .then(function (cities) {
          setCities(cities);
        });
    };
    getCities();
  }, []);

  const handlerSubmitProduct = async (e) => {
    e.preventDefault();
    //input
    const inputs = {
      images: document
        .querySelector("#section_upload-images")
        .querySelectorAll("input"),
      policies: document
        .querySelector(".section__info-policies")
        .querySelectorAll("textarea"),
      attributes: document
        .querySelector(".section__info-attributes")
        .querySelectorAll("select"),
      description: document.querySelector(".label__description textarea"),
      coorY: document.querySelector(".label__longitude-info input"),
      city: document.querySelector("#city"),
      category: document.querySelector("#category"),
      coorX: document.querySelector(".label__latitude-info input"),
      address: document.querySelector(".label__address-info input"),
      name: document.querySelector(".label__name-info input"),
    };

    let bb_validate = true;
    let arrayAttributes = [];
    let arrayImages = [];
    let arrayPolicies = [];

    for (let input in inputs) {
      let ret = "";
      //SI ES ALGUNO DE ESTOS CASOS, RECORRO SUS NODOS HIJOS
      if (
        input === "attributes" ||
        input === "images" ||
        input === "policies"
      ) {
        inputs[input].forEach((item) => {
          ret = validateInput(
            input === "attributes" ? "NUMERIC" : "TEXT",
            item.value
          );
          if (ret !== "") {
            item.focus();
            item.classList.add("error");
            bb_validate = false;
          } else {
            item.classList.remove("error");
            if (input === "attributes") {
              arrayAttributes.push({ characteristic: {id:item.value}});
            }
            if (input === "images") {
                arrayImages.push({ nombre_url: item.value });
            }
            if (input === "policies") {
                let name = item.name;
                arrayPolicies.push({
                        policy: {
                            title: name,
                            desc: JSON.stringify(item.value.split("\n"))
                          }});
            }
          }
        });
        continue;
      }

      //VALIDAR CAMPOS INPUT
      ret = validateInput(
        input === "coorX" || input === "coorY" ? "NUMERIC" : "TEXT",
        inputs[input].value
      );
      if (ret !== "") {
        inputs[input].focus();
        inputs[input].classList.add("error");
        bb_validate = false;
      } else {
        inputs[input].classList.remove("error");
      }
    }

    if (!bb_validate) {
      return;
    }

    await fetch(Api + "products/insert", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address: inputs.address.value,
        name: inputs.name.value,
        punctuation: 0,
        stars: 3,
        descTitle: inputs.name.value,
        desc: inputs.description.value,
        x: inputs.coorX.value,
        y: inputs.coorY.value,
        score: "BUENO",
        category: { id: inputs.category.value },
        city: { id: inputs.city.value },
        images: arrayImages,
        characteristic: arrayAttributes,
        policy: arrayPolicies
      }),
    }).then((response) => {
        if(response.status === 201) navigate("/create-ok");
        if(response.status === 400) alert("Lamentablemente el producto no ha podido crearse. Por favor intente más tarde.");
    });
  };

  return (
    <main className="main__admin-create">
      <HeaderProduct name="Administración de productos" />
      <section className="section__admin-create">
        <h3>Crear propiedad</h3>
        <form method="POST" onSubmit={handlerSubmitProduct}>
          <section className="section__info-hotel">
            <label className="label__name-info">
              <span>Nombre de la propiedad</span>
              <input
                type="text"
                placeholder="Hotel Hermirage"
                name="hotel_name"
                required
              />
            </label>
            <label>
              <span>Categoría</span>
              <select
                name="category"
                id="category"
                className="select__option"
                required
              >
                {categories?.map((category, i) => {
                  return (
                    <option key={i} value={category.id}>
                      {category.title}
                    </option>
                  );
                })}
              </select>
            </label>
            <label className="label__address-info">
              <span>Dirección</span>
              <input
                type="text"
                placeholder="Av. Colón 1643"
                name="address"
                required
              />
            </label>
            <label>
              <span>Ciudad</span>
              <select
                name="city"
                id="city"
                className="select__option _city"
                required
              >
                {cities?.map((city, i) => {
                  return (
                    <option key={i} value={city.id}>
                      {city.cityName}
                    </option>
                  );
                })}
              </select>
            </label>
            <label className="label__latitude-info">
              <span>Latitud</span>
              <input
                type="text"
                placeholder="-59.1235862000"
                name="latitude"
                required
              />
            </label>
            <label className="label__longitude-info">
              <span>Longitud</span>
              <input
                type="text"
                placeholder="-34.5641632000"
                name="longitude"
                required
              />
            </label>
            <label className="label__description">
              <span>Descripción</span>
              <textarea
                name="description"
                placeholder="Escribir aquí"
                required
              ></textarea>
            </label>
          </section>
          <section className="section__info-attributes">
            <h3>Agregar atributos</h3>
            <UploadAttributes />
          </section>
          <section className="section__info-policies">
            <h3>Políticas del producto</h3>
            <ul>
              <li>
                <h4>Normas de la casa</h4>
                <h5>Descripción</h5>
                <textarea
                  name="Normas de la casa"
                  placeholder="Escribir aquí"
                  required
                ></textarea>
              </li>
              <li>
                <h4>Salud y seguridad</h4>
                <h5>Descripción</h5>
                <textarea
                  name="Salud y seguridad"
                  placeholder="Escribir aquí"
                  required
                ></textarea>
              </li>
              <li>
                <h4>Política de cancelación</h4>
                <h5>Descripción</h5>
                <textarea
                  name="Política de cancelación"
                  placeholder="Escribir aquí"
                  required
                ></textarea>
              </li>
            </ul>
          </section>
          <section
            className="section__upload-images"
            id="section_upload-images"
          >
            <h3>Cargar imágenes</h3>
            <UploadImages />
          </section>
          <button type="submit" className="btn button__solid-type">
            Crear
          </button>
        </form>
      </section>
    </main>
  );
}

export default CreateHotel;
