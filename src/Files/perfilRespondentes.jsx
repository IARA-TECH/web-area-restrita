import React from "react";
import Sidebar from "../components/Sidebar";
import "./../styles/css/perfilRespondentes.css";
import group1000004757 from "./group-1000004757.png";
import group1000004758 from "./group-1000004758.png";
import group1000004759 from "./group-1000004759.png";
import rectangle55 from "./rectangle-55.svg";
import rectangle66 from "./rectangle-66.svg";

export default function perfilRespondentes() {
  return (
    <div className="perfil-page">
      <Sidebar />

      <main className="perfil-main">
        <header className="perfil-header">
          <h1>Perfil dos Respondentes</h1>
        </header>

        <section className="perfil-content">
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
              <p>Perfil dos Correspondentes</p>
            </div>
          </div>

          {/* Linha de cards grandes */}
          <div className="cards-row">
            <div className="card large">
              <img src={rectangle55} alt="Indicador 1" />
              <p>Indicador 1</p>
            </div>
            <div className="card large">
              <img src={rectangle66} alt="Indicador 2" />
              <p>Indicador 2</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
