import React from "react";
import Sidebar from "../components/Sidebar";
import "./../styles/css/estadosRegioes.css";
import group1000004757 from "./group-1000004757.png";
import group1000004758 from "./group-1000004758.png";
import group1000004759 from "./group-1000004759.png";

export default function EstadosRegioes() {
  return (
    <div className="estados-page">
      <Sidebar />

      <main className="estados-main">
        <header className="estados-header">
          <h1>Estados e Regiões</h1>
        </header>

        <section className="estados-content">
          {/* Linha de cards pequenos */}
          <div className="cards-row">
            <div className="card small">
              <img src={group1000004757} alt="Grupo 1" />
              <p>Estados e Regiões</p>
            </div>
            <div className="card small">
              <img src={group1000004758} alt="Grupo 2" />
              <p>Problemas</p>
            </div>
            <div className="card small">
              <img src={group1000004759} alt="Grupo 3" />
              <p>Ábaco & Tecnologia</p>
            </div>
            <div className="card small">
              <p>Perfis dos Correspondentes</p>
            </div>
          </div>

          {/* Linha de cards grandes */}
          <div className="cards-row">
            <div className="card large">
              <p>Resumo Geral</p>
            </div>
            <div className="card large">
              <p>Problemas Detalhados</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
