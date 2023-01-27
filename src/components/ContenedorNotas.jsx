import "../css/ContenedorNotas.css";
import AgregarTarea from "./AgregarTarea";
import { useState } from "react";
import Tareas from "./Tareas";
// import { v4 as uuidv4 } from "uuid";

function ContenedorNotas() {
  // const Key = uuidv4();

  let [Tareass, setTareas] = useState([]);

  const agregarTareas = (tareas) => {
    Tareass.unshift(tareas);
    setTareas(Tareass);
    console.log(Tareass);
  };

  return (
    <>
      <div className="contenedor">
        bla bla bla
        {Tareass.map((valor) => (
          <Tareas
            key={valor.id}
            titulo={valor.titulo}
            Descripcion={valor.Descripcion}
          />
        ))};
        ble ble ble
      </div>

      <AgregarTarea agregarTareas={agregarTareas} />
    </>
  );
}

export default ContenedorNotas;
