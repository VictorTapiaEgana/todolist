import "../css/ContenedorNotas.css";
import AgregarTarea from "./AgregarTarea";
import { useState } from "react";
import Tareas from "./Tareas";
// import { v4 as uuidv4 } from "uuid";

function ContenedorNotas() {
  // const Key = uuidv4();

  const [Tareass, setTareass] = useState([]);

  const agregarTareas = (tareas) => {
    Tareass.push(tareas);
    const array = [...Tareass];
    setTareass(array);
    console.log("Array Tareass", Tareass);
  };

  const HandleClickEliminar = (id) => {
    const Borrar = id;
    const ArrayFiltrado = Tareass.filter((item) => item.id !== Borrar);
    setTareass(ArrayFiltrado);
  };

  const HandleClickEditar = (id) => {
    alert ( id);
  };

  return (
    <>
      <div className="contenedor">
        {Tareass.map((valor) => (
          <Tareas
            key={valor.id}
            id={valor.id}
            Titulo={valor.titulo}
            Descripcion={valor.descripcion}
            HandleClickEliminar={HandleClickEliminar}
            HandleClickEditar={HandleClickEditar}
          />
        ))}
      </div>

      <AgregarTarea agregarTareas={agregarTareas} />
    </>
  );
}

export default ContenedorNotas;
