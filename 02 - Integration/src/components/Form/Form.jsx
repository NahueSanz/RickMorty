import { useState } from "react";
import "./Form.css";
import { validarCampo } from "./validation";

const Forms = (props) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handlerFormChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: validarCampo(value, name) ? "" : `Su ${name} es invalido`,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.logIn(userData);
  };

  return (
    <div className="formulariodiv">
      <div className="contenedorImagen">
        <img
          className="formularioImagen"
          src="https://es.web.img3.acsta.net/pictures/18/10/31/17/34/2348073.jpg"
          alt=""
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="labelText" htmlFor="email">
            Email{" "}
          </label>
          <br />
          <input
            className="inputform"
            value={userData.email}
            type="text"
            placeholder="Ingrese su Email"
            name="email"
            onChange={handlerFormChange}
          ></input>
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div>
          <label className="labelText" htmlFor="password">
            Password{" "}
          </label>
          <br />
          <input
            className="inputform"
            value={userData.password}
            type="text"
            name="password"
            placeholder="Ingrese su contraseña"
            onChange={handlerFormChange}
          ></input>
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <button className="submitButton" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Forms;
