import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";

import iara from "../../assets/iara.svg";
import iarinha from "../../assets/iarinha.svg";
import ic_menu from "../../assets/ic_menu.svg";
import ic_dashboard from "../../assets/ic_dashboards.svg";
import ic_dashboard_active from "../../assets/ic_dashboards_active.svg";
import ic_feira from "../../assets/ic_feira.svg";
import ic_feira_active from "../../assets/ic_feira_active.svg";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("dashboard");
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleNavigate = (route) => {
    setActive(route);
    navigate(`/home/${route}`);
  };

  useEffect(() => {
    if (location.pathname.includes("expotech")) {
      setActive("feira");
    } else if (location.pathname.includes("dashboard")) {
      setActive("dashboard");
    }
  }, [location.pathname]);

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="top-section">
        {isOpen ? (
          <>
            <img src={iara} alt="Logo Iara" className="logo-sidebar" />
            <img
              src={ic_menu}
              alt="Fechar menu"
              className="toggle-btn"
              onClick={toggleSidebar}
            />
          </>
        ) : (
          <img
            src={ic_menu}
            alt="Abrir menu"
            className="toggle-btn center"
            onClick={toggleSidebar}
          />
        )}
      </div>

      <div className="content">
        <img src={iarinha} alt="Iarinha" className="iarinha" />

        <nav className="menu">
          <div
            className={`menu-item ${active === "feira" ? "active" : ""}`}
            onClick={() => handleNavigate("expotech")}
          >
            <img
              src={active === "feira" ? ic_feira_active : ic_feira}
              alt="Feira"
            />
            {isOpen && <span>ExpoTech</span>}
          </div>

          <div
            className={`menu-item ${active === "dashboard" ? "active" : ""}`}
            onClick={() => handleNavigate("dashboard")}
          >
            <img
              src={active === "dashboard" ? ic_dashboard_active : ic_dashboard}
              alt="Dashboard"
            />
            {isOpen && <span>Dashboards</span>}
          </div>
        </nav>
      </div>
    </aside>
  );
}
