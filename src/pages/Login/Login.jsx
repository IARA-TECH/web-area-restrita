import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import boneca from "../../images/boneca.jpeg";
import logo from "../../images/logo.jpeg";

import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailCorreto = "iaratech.oficial@gmail.com";
    const senhaCorreta = "123";

    if (email === emailCorreto && senha === senhaCorreta) {
      localStorage.setItem("autenticado", "true");
      window.location.href = "/home";
    } else {
      alert("❌ E-mail ou senha incorretos!");
    }
  };

  return (
    <main className="login-container">
      <div className="left-side">
        <img src={boneca} alt="Mascote IARA" className="mascote" />
      </div>

      <div className="right-side">
        <div className="login-box">
          <img src={logo} alt="Logo IARA" className="logo" />
          <h2>Bem-Vindo de Volta!</h2>

          <div className="inputs-box">
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="exemplo@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                placeholder="Senha123"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />

              <button type="submit">ENTRAR</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
