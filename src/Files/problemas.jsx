import React from "react";
import Sidebar from "../components/Sidebar";
import "./../styles/css/problemas.css"; // CSS similar ao resumoGeral.css
import group1000004758 from "./group-1000004758.png";
import group1000004759 from "./group-1000004759.png";

export default function Problemas() {
  return (
    <div className="problemas-page">
      <Sidebar />

      <main className="problemas-main">
        <header className="problemas-header">
          <h1>Problemas</h1>
        </header>

        <section className="problemas-content">
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
              <p>Ábaco & Tecnologia</p>
            </div>
            <div className="card small">
              <p>Perfis dos Correspondentes</p>
            </div>
          </div>

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
