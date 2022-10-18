import { SectionModalStyled } from "./styled";

import { TechContext } from "../../context/TechContext.jsx";
import * as yup from "yup";
import { useContext } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { DadosUser } from "../../context/ContextDadosUser.jsx";

import { TechContextUserFunction } from "../../context/TechContext.jsx";

function ModalAdicionarTech({ children }) {

  const { adicionarTech, setModal } = TechContextUserFunction()

  const techCadastro = yup.object().shape({
    title: yup.string(),
    status: yup.string(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(techCadastro),
  });

  return (
    <SectionModalStyled>
      {children}
      <article>
        <div>
          <h2>Cadastrar Tecnologia</h2>
          <button onClick={() => setModal(false)}>X</button>
        </div>

        <form action="" onSubmit={handleSubmit(adicionarTech)}>
          <label htmlFor="tech">Nome</label>
          <input name="title" id="tech" type="text" {...register("title")} />

          <label htmlFor="nivel">Selecionar status</label>
          <select name="status" id="nivel" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="intermediário">intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button>Cadastrar Tecnologia</button>
        </form>
      </article>
    </SectionModalStyled>
  );
}

export default ModalAdicionarTech;
