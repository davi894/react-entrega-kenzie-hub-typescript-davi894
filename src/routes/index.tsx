import { Route, Routes, Navigate } from "react-router-dom";

import FormLogin from "../components/FormLogin";

import FormCadastro from "../components/FormCadastro";

import Dashboard from "../pages/Dashboard";
import ProtecaoRotas from "../components/ProtecaoRotas";

function RoutesMain() {
  return (
    <Routes>
      <Route path="/login" element={<FormLogin />} />
      <Route path="/cadastro" element={<FormCadastro />} />
      <Route path="/" element={<ProtecaoRotas />} >
        <Route path="dashboard" element={<Dashboard />} />
      </Route>

      <Route
        path="*"
        element={<Navigate to="/login" />}
      />
    </Routes>
  );
}

export default RoutesMain;
