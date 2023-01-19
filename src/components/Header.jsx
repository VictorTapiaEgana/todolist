import "../css/Header.css";

function Header({ usuario, correo, foto, handleLogOut }) {
  return (
    <div className="headerUsuario">
      {/* <h3> { correo } </h3> */}
      <h1>
        {usuario}
        <br />
        <span>{correo} </span>
      </h1>
      <h2> Sticky Notes</h2>

       <div className="imglogout">
        <img src={foto} alt={`foto de ${usuario}`} />

        {Object.keys(usuario).length !== 0 && (
          <button className="logoutbtn" onClick={(e) => handleLogOut(e)}>
            Cerrar sesión
          </button>
        )}
      </div> 
    </div>
  );
}

export default Header;
