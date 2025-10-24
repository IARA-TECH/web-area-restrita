import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx"
import './App.css';

export default function App() {
  const autenticado = localStorage.getItem("autenticado") === "true";

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={autenticado ? <Navigate to="/home" /> : <Login />} 
        />
        <Route 
          path="/home/*" 
          element={autenticado ? <Home /> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
}
