import { SectionModalStyled } from "./styled";

import { TechContext } from "../../context/TechContext";
import * as yup from "yup";
import { useContext } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { iCadastrarTech } from "../../context/interfaces/TechsUser";

function ModalAdicionarTech() {

  const { adicionarTech, setModal } = useContext(TechContext)

  const techCadastro = yup.object().shape({
    title: yup.string().required("Preencha o campo!"),
    status: yup.string().required("Selecione um valor!"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iCadastrarTech>({
    resolver: yupResolver(techCadastro),
  });

  return (
    <SectionModalStyled>
      <article>
        <div>
          <h2>Cadastrar Tecnologia</h2>
          <button onClick={() => setModal(false)}>X</button>
        </div>

        <form action="" onSubmit={handleSubmit(adicionarTech)}>
          <label htmlFor="tech">Nome</label>
          <input id="tech" type="text" {...register("title")} />
          <p>{errors.title?.message}</p>
          <label htmlFor="nivel">Selecionar status</label>
          <select id="nivel" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="intermediário">intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <p>{errors.status?.message}</p>
          <button>Cadastrar Tecnologia</button>
        </form>
      </article>
    </SectionModalStyled>
  );
}

export default ModalAdicionarTech;
