import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar.jsx";
import Dashboard from "../Dashboards/Dashboards.jsx";
import Expotech from "../Expotech/Expotech.jsx";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <Sidebar />

      <main className="home-content">
        <Routes>
          <Route path="/" element={<Navigate to="expotech" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="expotech" element={<Expotech />} />
        </Routes>
      </main>
    </div>
  );
}
