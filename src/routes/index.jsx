import { Route, Routes, Navigate } from "react-router-dom";

import FormLogin from "../components/FormLogin";

import FormCadastro from "../components/FormCadastro";

import ProtecaoRotas from "../components/ProtecaoRotas";

import Dashboard from "../pages/Dashboard";


function RoutesMain() {
  return (
      <Routes>
        <Route path="/login" element={<FormLogin />} />
        <Route path="/cadastro" element={<FormCadastro />} />

        {/* <Route path="" element={<ProtecaoRotas />}> */}
          <Route path="/dashboard" element={<Dashboard />} />
        {/* </Route> */}

        <Route
          path="*"
          element={<Navigate to="/login" element={<FormLogin />} />}
        />
      </Routes>
  );
}

export default RoutesMain;
