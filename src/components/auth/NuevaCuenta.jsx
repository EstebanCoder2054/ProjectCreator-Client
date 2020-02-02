import React, { useState } from "react";
import { Link } from "react-router-dom";

const NuevaCuenta = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: ""
  });

  // extraer del usuario (form)
  const { nombre, email, password, confirmar } = usuario;

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
        <h1>Obtener una cuenta</h1>
        <form onSubmit={onSubmit}>
       

          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>

            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              placeholder="ej: Esteban"
              onChange={onChange}
            />
          </div>

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
            <label htmlFor="confirmar">Confirmar Password</label>

            <input
              type="password"
              id="confirmar"
              name="confirmar"
              value={confirmar}
              placeholder="Repite el Password"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Regístrate"
            />
          </div>

          <Link to="/" className="enlace-cuenta">
            ¿Ya tienes una cuenta? Inicia sesión
          </Link>
        </form>
      </div>
    </div>
  );
};

export default NuevaCuenta;
