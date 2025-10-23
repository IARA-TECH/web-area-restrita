import React from "react";
import Sidebar from "../components/Sidebar";
import "./../styles/css/abacoTecnologia.css";
import group1000004758 from "./group-1000004758.png";
import group1000004759 from "./group-1000004759.png";

export default function AbacoTecnologia() {
  return (
    <div className="abaco-page">
      <Sidebar />

      <main className="abaco-main">
        <header className="abaco-header">
          <h1>Ábaco & Tecnologia</h1>
        </header>

        <section className="abaco-content">
          {/* Linha de cards pequenos */}
          <div className="cards-row">
            <div className="card small">
              <img src={group1000004758} alt="Estados e Regiões" />
              <p>Estados e Regiões</p>
            </div>
            <div className="card small">
              <img src={group1000004759} alt="Problemas" />
              <p>Problemas</p>
            </div>
            <div className="card small">
              <p>Perfis dos Correspondentes</p>
            </div>
            <div className="card small">
              <p>Resumo Geral</p>
            </div>
          </div>

          {/* Linha de cards grandes */}
          <div className="cards-row">
            <div className="card large">
              <p>Uso do Ábaco & Tecnologia</p>
            </div>
            <div className="card large">
              <p>Indicadores Detalhados</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
