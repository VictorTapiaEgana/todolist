import "../css/Login.css";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";

function Login({ User }) {
  let sexo = "male";
  //manejar el resultado del logIn
  function handleCallBackResponse(response) {
    var userObject = jwt_decode(response.credential);
    User(userObject);
  }
  // inicializar google account
  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        "223010066268-3g6qpfknnh2ua850k5e35ppkhdetm04o.apps.googleusercontent.com",
      callback: handleCallBackResponse,
    });

    //diseño del boton de logIn
    google.accounts.id.renderButton(document.getElementById("singInDiv"), {
      theme: "filled_blue",
      size: "large",
      text: "continue_with",
      shape: "circle",
    });
  });
  //genera numero para avatar al azar
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  //validaer Correo
  function ValidateEmail(input) {
   
    var validRegex = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );

    let res = validRegex.test(input);

    return res;
  }

  //boton click login usuario
  function handleClick() {
    //e.stopPropagation()
    let Pagina = "";

    Pagina = `http://xsgames.co/randomusers/assets/avatars/${sexo}/${getRandomInt(
      78
    )}.jpg`;

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("email").value;
    //validar datos    
    const esCorreo = ValidateEmail(correo);
  
    
    if (esCorreo) {
      document.getElementById("ErrorLabel").style.visibility = 'hidden';
    
      nombre === '' && (nombre ='A n O n I m O')

      const newUsuario = {
        name: nombre,
        email: correo,
        picture: Pagina,
      };

      User(newUsuario);
    } else {
      document.getElementById("email").value = "";
      document.getElementById("email").focus();
      document.getElementById("ErrorLabel").style.visibility = 'visible';
    }
  }
  // seleccion de sexo
  function handleonChange(e) {
    sexo = e.target.value;
  }
  return (
    <div className="loginContainer">
      <h1 className="ingrese">Ingrese con Google</h1>
      <div id="singInDiv"></div>
      <h1 className="ingrese">Ingrese como Usuario </h1>

      <div className="loginForm">
        <input id="nombre" type="name" placeholder="Nombre" autoComplete="on" />
        <input id="email" type="email" placeholder="Correo" autoComplete="on" />
        <label id="ErrorLabel">mail incorrecto</label>

        <div className="optionButtons">
          <input
            type="radio"
            name="sexo"
            value="male"
            onChange={handleonChange}
            checked="yes"
          />
          <label>Masculino</label>
          <br />
          <input
            type="radio"
            name="sexo"
            value="female"
            onChange={handleonChange}
          />
          <label>Femenino</label>
        </div>

        <button onClick={handleClick}>Entrar</button>
      </div>
    </div>
  );
}

export default Login;
