import instanceAxios from "../services/Axios/Axios";
import React, { useContext } from "react";

import { toast } from "react-toastify";

import { createContext, useState } from "react";

import { DadosUser } from "./ContextDadosUser";

import { iInfoUser } from "./ContextDadosUser";

import { UserTechProviderData } from "./interfaces/TechsUser";

import { iCadastrarTech } from "./interfaces/TechsUser";

import { iUserTechs } from "./interfaces/ContextUser";

export const TechContext = createContext<UserTechProviderData>({} as UserTechProviderData)

function TechContextUser({ children }: iInfoUser) {

  const [modal, setModal] = useState(false);

  const { userTech, setUsertech, getUserData } = useContext(DadosUser);

  async function adicionarTech(cadastrarTech: iCadastrarTech) {
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
    }
  }

  async function removerTech(deletarTech: iUserTechs) {
    try {
      const response = await instanceAxios.delete(`/users/techs/${deletarTech.id}`);
      if (response.status !== 204) {
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

