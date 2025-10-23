import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="logo">iara</div>
      <nav className="menu">
        <Link className={location.pathname === "/resumo" ? "active" : ""} to="/resumo">
          🟦 Resumo Geral
        </Link>
        <Link className={location.pathname === "/estados" ? "active" : ""} to="/estados">
          📊 Estados & Regiões
        </Link>
        <Link className={location.pathname === "/problemas" ? "active" : ""} to="/problemas">
          ⚠️ Problemas
        </Link>
        <Link className={location.pathname === "/abaco" ? "active" : ""} to="/abaco">
          💡 Ábaco & Tecnologia
        </Link>
        <Link className={location.pathname === "/perfis" ? "active" : ""} to="/perfis">
          👤 Perfis dos Respondentes
        </Link>
      </nav>
    </aside>
  );
}
