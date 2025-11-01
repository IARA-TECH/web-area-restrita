import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";

export default function App() {

  const [autenticado, setAutenticado] = useState(
    localStorage.getItem("autenticado") === "true"
  );

  return (
    <Router>
      <Routes>
        <Route 
        path="/" 
        element={
                  autenticado ? (<Navigate to="/home" /> ) : 
                  (
                    <Login setAutenticado={setAutenticado} />
                  )
                } 
        />
        <Route path="/home/*" 
          element={autenticado ? <Home /> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
}