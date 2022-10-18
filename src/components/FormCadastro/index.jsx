import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import FormLogin from "../FormLogin/index.jsx";

import { Link, useNavigate } from "react-router-dom";

import { FormStyledCadastro, SectionStyledCadastro } from "./style.js";

import { validacaoCadastro } from "../../validations/cadastroUser.js";

import { ContexteDadosUserFunction } from "../../context/ContextDadosUser.jsx";

function FormCadastro() {
 
  const { cadastro } = ContexteDadosUserFunction();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validacaoCadastro),
  });
  const navigate = useNavigate();

  const onSubmitFunction = (data) => {
    cadastro(data);

    navigate("/login");
    reset();
  };

  return (
    <SectionStyledCadastro>
      <div>
        <h1>kenzie Hub</h1>
        <Link to={"/login"} element={<FormLogin />}>
          <div>Voltar</div>
        </Link>
      </div>
      <FormStyledCadastro onSubmit={handleSubmit(onSubmitFunction)}>
        <div>
          <h2>Crie sua conta</h2>
          <span>Rápido e grátis, vamos nessa!</span>
        </div>

        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          name="name"
          type="text"
          placeholder="Digite seu nome"
          {...register("name")}
        />
        <p> {errors.name?.message}</p>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Digite seu email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
        <label htmlFor="senha">Senha</label>
        <input
          id="senha"
          name="password"
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
        <label htmlFor="confirmarSenha">Confirmar senha</label>
        <input
          id="confirmarSenha"
          name="confirmPassword"
          type="password"
          placeholder="Digite novamente sua senha"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>
        <label htmlFor="bio">Bio</label>
        <input
          id="bio"
          name="bio"
          type="text"
          placeholder="Fale sobre você"
          {...register("bio")}
        />
        <p>{errors.bio?.message}</p>
        <label htmlFor="contato">Contato</label>
        <input
          id="contato"
          name="contact"
          type="text"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        <p>{errors.contact?.message}</p>

        <label htmlFor="selecionarModulo" placeholder="Selecionar módulo">
          Selecionar módulo
        </label>

        <select
          name="course_module"
          id="selecionarModulo"
          {...register("course_module")}
        >
          <option value="Primeiro Módulo">Primeiro Módulo</option>
          <option value="Segundo Módulo">Segundo Módulo</option>
          <option value="Terceiro Módulo">Terceiro Módulo</option>
          <option value="Quarto Módulo">Quarto Módulo</option>
          <option value="Quinto Módulo">Quinto Módulo</option>
          <option value="Sexto Módulo">Sexto Módulo</option>
        </select>
        <p>{errors.course_module?.message}</p>

        <button type="submit">Cadastrar</button>
      </FormStyledCadastro>
    </SectionStyledCadastro>
  );
}

export default FormCadastro;
