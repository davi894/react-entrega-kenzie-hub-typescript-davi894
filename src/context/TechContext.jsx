import instanceAxios from "../services/Axios/Axios.js";
import React, { useContext } from "react";

import { toast } from "react-toastify";

import { createContext, useState } from "react";

import { ContexteDadosUserFunction } from "./ContextDadosUser.jsx";

export const TechContext = createContext(() => {});

function TechContextUser({ children }) {
  const [modal, setModal] = useState(false);

  const { userTech, setUsertech, getUserData } = ContexteDadosUserFunction();

  async function adicionarTech(cadastrarTech) {
    try {
      const response = await instanceAxios.post("/users/techs", cadastrarTech);

      setUsertech([...userTech, response.data]);

      toast.success("Cadastro Tech com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast
        .error(`${error}`, {
          position: toast.POSITION.TOP_RIGHT,
        })
        .then((resp) => resp);
    }
  }

  async function removerTech(idTech) {
    try {
      const response = await instanceAxios.delete(`/users/techs/${idTech}`);
      if (response.status != 204) {
        return toast.error("Não possível deletar tech", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      getUserData();

      toast.success("Tech removida com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error(`${error}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  return (
    <TechContext.Provider
      value={{ adicionarTech, removerTech, modal, setModal }}
    >
      {children}
    </TechContext.Provider>
  );
}

export default TechContextUser;

export const TechContextUserFunction = () => useContext(TechContext);
