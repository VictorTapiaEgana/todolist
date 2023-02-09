import '../css/Tareas.css'
import Imagen from '../assets/delete.png'

function Tareas({id, Titulo,Descripcion}){

  const HandleClickEliminar = (id) =>{
    alert ('Borrar ' + id )
  }


    return(
        
          <div id={id}
               className="tarjeta"> 

            <h2  contenteditable="true" className="tituloTarjeta">{Titulo}</h2>
            <p contenteditable="true" className="descripcionTarjeta">{Descripcion}</p>
            
            <img
              id="BotonEliminar"
              src={Imagen}
              alt="Boton Agregar Tarea"
              onClick={HandleClickEliminar}
            />
      
          </div>
        
    )
}

export default Tareas ;

