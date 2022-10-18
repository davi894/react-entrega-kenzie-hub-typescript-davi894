import { Navigate, Outlet } from "react-router-dom";

function ProtecaoRotas() {
  const token = localStorage.getItem("tokken");

  if (!token) return <Navigate to="/login" />;

  return <Outlet />;
}

export default ProtecaoRotas