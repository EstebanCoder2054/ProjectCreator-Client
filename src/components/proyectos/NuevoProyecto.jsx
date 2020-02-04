import React, { Fragment, useState } from "react";

const NuevoProyecto = () => {
  const [proyecto, setProyecto] = useState({
    nombre: ""
  });

  const handleChange = e => {
    setProyecto({
      ...proyecto, //se toma una copia de lo que esté en proyecto
      [e.target.name]: e.target.value
    });
  };

  const onSubmitProyecto = e => {
    e.preventDefault();

    //validar el proyecto

    //agregar al state

    //reiniciar el form
  };

  //extrayendo los valores del state
  const { nombre } = proyecto;

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo proyecto
      </button>

      <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
        <input
          type="text"
          className="input-text"
          placeholder="Nombre del proyecto"
          name="nombre"
          value={nombre}
          onChange={handleChange}
        />

        <input
          type="submit"
          className="btn btn-primario btn-block"
          value="Agregar proyecto"
        />
      </form>
    </Fragment>
  );
};

export default NuevoProyecto;
