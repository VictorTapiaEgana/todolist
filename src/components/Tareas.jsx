function Tareas({id, Titulo,Descripcion}){
    return(
        
          <div id={id}
               className="tarjeta"> 
            
            <h2 className="tituloTarjeta">{Titulo}</h2>
            <p className="descripcionTarjeta">{Descripcion}</p>
          </div>
        
    )
}

export default Tareas ;

