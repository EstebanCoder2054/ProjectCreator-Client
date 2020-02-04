import React from "react";
import Proyecto from "./Proyecto";

const ListadoProyectos = () => {
  const proyectos = [
    { nombre: "BIMBAU" },
    { nombre: "Esteban CV" },
    { nombre: "Eseban Portfolio" }
  ];
  return (
    <ul className="listado-proyectos">
      {proyectos.map(proyecto => {
        return <Proyecto proyecto={proyecto} />;
      })}
    </ul>
  );
};

export default ListadoProyectos;
