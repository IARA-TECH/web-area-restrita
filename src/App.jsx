import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Files/Login.jsx";
import ResumoGeral from "./Files/resumoGeral.jsx";

function App() {
  const autenticado = localStorage.getItem("autenticado") === "true";

  return (
    <Router>
      <Routes>
        {/* Página de login */}
        <Route path="/" element={autenticado ? <Navigate to="/resumo" /> : <Login />} />

        {/* Página de resumo, protegida */}
        <Route
          path="/resumo"
          element={autenticado ? <ResumoGeral /> : <Navigate to="/" />}
        />

        {/* Redireciona qualquer rota desconhecida */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
