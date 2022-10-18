import { Link, Navigate, useNavigate } from "react-router-dom";
import SectionStyledError from "./style.js";

import { ReactComponent as SvgLixeira } from "../../assets/lixeiroSVG/Vector.svg";

import ModalAdicionarTech from "../../components/ModalAdicionarTech/index.jsx";

import { TechContextUserFunction } from "../../context/TechContext.jsx";
import { ContexteDadosUserFunction } from "../../context/ContextDadosUser.jsx";

function Dashboard() {
  const { infoUserLogin, userTech } = ContexteDadosUserFunction();

  const { removerTech, setModal, modal } = TechContextUserFunction();

  const navigate = useNavigate();

  return (
    <>
      {infoUserLogin ? (
        <SectionStyledError>
          <header>
            <h1>Kenzie Hub</h1>
            <button
              onClick={() => {
                localStorage.removeItem("tokken");
                navigate("/login");
              }}
            >
              Sair
            </button>
          </header>
          <div>
            <h2>Olá, {infoUserLogin.name}!</h2>
            <p>{infoUserLogin.course_module}</p>
          </div>
          <article>
            <div>
              <h2>Tecnologias</h2>
              <button onClick={() => setModal(true)}>+</button>
            </div>
            {modal && <ModalAdicionarTech />}
            <ul>
              {userTech.map((elem) => {
                return (
                  <li key={elem.id}>
                    <h2>{elem.title}</h2>
                    <div>
                      <span>{elem.status}</span>
                      <SvgLixeira onClick={() => removerTech(elem.id)} />
                    </div>
                  </li>
                );
              })}
            </ul>
          </article>
        </SectionStyledError>
      ) : (
        <Navigate to="/login" replace="true" />
      )}
    </>
  );
}

export default Dashboard;
