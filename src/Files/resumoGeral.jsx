import React from "react";
import Sidebar from "../components/Sidebar";
import "./../styles/css/resumoGeral.css";

export default function ResumoGeral() {
  const handleLogout = () => {
    localStorage.removeItem("autenticado");
    window.location.reload(); // volta para o login
  };

  return (
    <div className="resumo-page">
      <Sidebar />

      <main className="resumo-main">
        <header className="resumo-header">
          <h1>Resumo Geral</h1>
          <button onClick={handleLogout}>Sair</button>
        </header>

        <section className="resumo-content">
          {/* Linha de cards pequenos */}
          <div className="cards-row">
            <div className="card small">
              <p>Indicador 1</p>
            </div>
            <div className="card small">
              <p>Indicador 2</p>
            </div>
            <div className="card small">
              <p>Indicador 3</p>
            </div>
            <div className="card small">
              <p>Indicador 4</p>
            </div>
          </div>

          {/* Linha de cards grandes */}
          <div className="cards-row">
            <div className="card large">
              <p>Resumo Detalhado 1</p>
            </div>
            <div className="card large">
              <p>Resumo Detalhado 2</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
