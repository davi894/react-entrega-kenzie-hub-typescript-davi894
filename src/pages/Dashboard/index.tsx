import { Navigate, useNavigate } from "react-router-dom";
import SectionStyledError from "./style";

import { ReactComponent as SvgLixeira } from "../../assets/lixeiroSVG/Vector.svg";

import ModalAdicionarTech from "../../components/ModalAdicionarTech/index";

import { TechContext } from "../../context/TechContext";

import { DadosUser } from "../../context/ContextDadosUser";

import { useContext } from "react";

function Dashboard() {
  const { infoUserLogin, userTech } = useContext(DadosUser)

  const { removerTech, setModal, modal } = useContext(TechContext)

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
            <h2>Olá, {infoUserLogin?.name}!</h2>
            <p>{infoUserLogin?.course_module}</p>
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
                      <SvgLixeira onClick={() => removerTech(elem)} />
                    </div>
                  </li>
                );
              })}
            </ul>
          </article>
        </SectionStyledError>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default Dashboard;
