import React, { Fragment } from "react";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import FormTarea from "../tareas/FormTarea";
import ListadoTareas from '../tareas/ListadoTareas';

const Proyectos = () => {
  return (
    <Fragment>
      <div className="contenedor-app">
        <Sidebar />
        <div className="seccion-principal">
          <Header />
          <main>
            <FormTarea />
            <div className="contenedor-tareas">
              <ListadoTareas />
            </div>
          </main>
        </div>
      </div>
    </Fragment>
  );
};

export default Proyectos;
