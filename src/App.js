import "./App.css";

import Login from "./components/Login";
import Header from "./components/Header";
import ContenedorNotas from "./components/ContenedorNotas";
import { useState } from "react";





let Usuario = {};

function App() {
  const [login, setLogin] = useState(false);
 

  function User(Ususario) {
    Usuario = { ...Ususario };    
    setLogin(true);
  }
  //logOut
  function handleLogOut(e) {
    Usuario = {};
    setLogin(false);
  }

  return (
    <div className="App">     
     
     
      {!login && <Login User={User} />}
     

      {Object.keys(Usuario).length > 0 && (
        <>
          <Header
            usuario={Usuario.name}
            correo={Usuario.email}
            foto={Usuario.picture}
            handleLogOut={handleLogOut}
          />
          <ContenedorNotas />
        </>
      )}
      
      
      

    </div>
  );
}

export default App;
