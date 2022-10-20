
import { Dispatch, SetStateAction } from "react"

import { iUserTechs } from "./ContextUser"

export interface iCadastrarTech {
  title: string,
  status: string,
}

export interface UserTechProviderData {
  adicionarTech: (cadastrarTech: iCadastrarTech) => void,
  removerTech: (deletarTech: iUserTechs) => void,
  modal: boolean,
  setModal: Dispatch<SetStateAction<boolean>>,
}


