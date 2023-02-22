import "../css/Tareas.css";
import Imagen from "../assets/delete.png";
import editar from "../assets/edit.png"

function Tareas({ id, Titulo, Descripcion, HandleClickEliminar, HandleClickEditar, Editable }) { 

  return (
    <div id={id} className="tarjeta">

      <h2 contentEditable={Editable} 
          suppressContentEditableWarning="true" 
          className="tituloTarjeta">
        {Titulo}
      </h2>

      <p contentEditable={Editable} 
         suppressContentEditableWarning="true" 
         className="descripcionTarjeta">
        {Descripcion}
      </p>

      <img
        id="BotonEditar"
        src={editar}
        alt="Boton Editar Tarea"
        onClick={()=>HandleClickEditar(id)}
      />

      <img
        id="BotonEliminar"
        src={Imagen}
        alt="Boton Eliminar Tarea"
        onClick={() => HandleClickEliminar(id)}
      />
    </div>
  );
}

export default Tareas;