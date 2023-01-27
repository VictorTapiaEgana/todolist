import "../css/AgregarTarea.css";
import Imagen from "../assets/add.png";
import { v4 as uuidv4 } from "uuid";

function AgregarTarea( { agregarTareas }) {
  let Titulo ='';  
  let Descripcion ='';
  
  function HandleClickAgregar() {
    document.getElementById("DivModalAgregarTarea").style.visibility = "visible";
  }

  const handleAgregarTarea=()=> {
    
    let TareaX = {};
    TareaX ={
             id : uuidv4(),
             titulo : Titulo, 
             descripcion :Descripcion
            };
    agregarTareas(TareaX);
     document.getElementById("DivModalAgregarTarea").style.visibility = "hidden";
  }

  function cambioTitulo (e){
        Titulo= e.target.value;
  }
  function cambioDescripcion(e){
    Descripcion = e.target.value;
  }

  return (
    <>
      <div className="DivBotonAgregar">
        <img
          id="BotonAgregar"
          src={Imagen}
          alt="Boton Agregar Tarea"
          onClick={HandleClickAgregar}
        />
      </div>

      <div id="DivModalAgregarTarea">
        <h2 className="tituloH2">Agregar Nota</h2>
        <input type="text" id="tituloTarea" placeholder="Titulo de la Tarea" onChange={ cambioTitulo } />
        <input type="text" id="descripcionTarea" placeholder="descripcion" onChange={ cambioDescripcion }/>
        <input
          type="button"
          id="btnAgregar"
          value="Agregar"
          onClick={() => handleAgregarTarea()}
        />
      </div>
    </>
  );
}

export default AgregarTarea;
