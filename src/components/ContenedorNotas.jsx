import "../css/ContenedorNotas.css";
import AgregarTarea from "./AgregarTarea";
import { useState } from "react";
import Tareas from "./Tareas";

function ContenedorNotas() {
  let editarTarea = false;  

  const [Tareass, setTareass] = useState([]);

  const agregarTareas = (tareas) => {
    Tareass.push(tareas);
    const array = [...Tareass];
    setTareass(array);
    // console.log("Array Tareass", Tareass);
  };

  const HandleClickEliminar = (id) => {    
    const ArrayFiltrado = Tareass.filter((item) => item.id !== id);
    setTareass(ArrayFiltrado);
  };

  const HandleClickEditar = (id) => {
    // 1° intento con useState, SE CAMBIA EL VALOR DEL ARREGLO 
    //                          PERO NO SE ACTUALIZAN LO COMPONENTES -_-
    // 
    // Tareass.map((items) => {
    //   if (items.id === id) items.editable = true;
    //   return null;
    // });
    //
    // const array = [...Tareass];
    // setTareass(array);
    // 
    //2° Segundo con DOM //FUNCIONA, PERO NO PUEDO ASIGNARLE
                         // EL EVENTO LOSTFOCUS                     '-_- 
    const DivTarjeta = document.getElementById(id);
    const H2 = DivTarjeta.querySelector('h2');
    const P1 = DivTarjeta.querySelector('p');

    H2.contentEditable = true;
    P1.contentEditable=true;
    
    H2.focus();

    //3° useEfect
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
