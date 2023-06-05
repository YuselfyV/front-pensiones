import React, { useState } from "react";
import './App.css';
import Navigation  from "../consulta/consulta";
<header>
  <title>SOFTLIB Calculo Actuarial</title>
  <svg aria-label="Pensional">Pensional</svg>
</header>

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
    } else {
      alert("Nombre de usuario o contraseña incorrectos");
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  if (isLoggedIn) {
    return (
      <div>
       <Navigation />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="login-form">

    <h1>SOFTLIB Calculo Actuarial</h1>
      <h2>Iniciar sesión</h2>
      <label>
        Nombre de usuario:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        Contraseña:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <div class="olvido-contrasena">
                <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
            <br />
            <button type="submit" onclick="redirectToPage()">Iniciar sesión</button>

    </form>
  );
}
export default App;
