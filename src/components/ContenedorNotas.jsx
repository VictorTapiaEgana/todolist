import "../css/ContenedorNotas.css";
import AgregarTarea from "./AgregarTarea";
import { useState } from "react";
import Tareas from "./Tareas";

function ContenedorNotas() { 

  let editarTarea = false

  const [Tareass, setTareass] = useState([]);

  const agregarTareas = (tareas) => {
    Tareass.push(tareas);
    const array = [...Tareass];
    setTareass(array);
    console.log("Array Tareass", Tareass);
  };

  const HandleClickEliminar = (id) => {
    // const Borrar = id;
    const ArrayFiltrado = Tareass.filter((item) => item.id !== id);
    setTareass(ArrayFiltrado);
  };

  const HandleClickEditar = (id) => {
      console.log("edicion")
      editarTarea=true
      //buscar el componente segun su ID y modificar la propedad editable
      //*
      //-------------------<>--------------------
      const array =[...Tareass]
      setTareass(array)
     
    
    
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
            Editable={editarTarea}
          />
        ))}
      </div>

      <AgregarTarea agregarTareas={agregarTareas} />
    </>
  );
}

export default ContenedorNotas;
