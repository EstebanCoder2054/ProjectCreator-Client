import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [usuario, setUsuario] = useState({
    email: "",
    password: ""
  });

  // extraer del usuario (form)
  const { email, password } = usuario;

  const onChange = e => {
    setUsuario({
      ...usuario, //crea una copia de lo que lleve el state
      [e.target.name]: e.target.value //y lo rellena
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log("se ha enviado la data correcta/", email, password);
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="ej: email@email.com"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar sesión"
            />
          </div>

          <Link to="/nueva-cuenta" className="enlace-cuenta">
            Obtener cuenta
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
