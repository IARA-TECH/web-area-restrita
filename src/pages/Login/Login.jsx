import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import boneca from "../../images/iara-esquerda.png";
import logo from "../../images/logo.jpeg";

import "../../styles/Login.css";

export default function Login({ setAutenticado }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      localStorage.setItem("autenticado", "true");
      setAutenticado(true);
    } catch (error) {
      console.error("Erro ao fazer login:", error.code, error.message);
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
          <img src={logo} alt="Logo IARA" className="logo-iara" />
          <h2>Bem-vindo de volta!</h2>

          <div className="inputs-box">
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Insira seu e-mail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                placeholder="Insira sua senha"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />

              <button type="submit" className="btn-login">ENTRAR</button>
              <button
                type="button"
                className="btn-back"
                onClick={() => navigate(-1)}
              >
                VOLTAR PARA PÁGINA INICIAL
              </button>            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
