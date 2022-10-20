import { Navigate, Outlet } from "react-router-dom";

function ProtecaoRotas() {
  const token = localStorage.getItem("tokken");

  if (token) return <Outlet />;

  return <Navigate to="/login" />;
}

export default ProtecaoRotas