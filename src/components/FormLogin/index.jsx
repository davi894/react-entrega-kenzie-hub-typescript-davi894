import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";

import FormCadastro from "../FormCadastro/index.jsx";

import { FormStyledLogin, SectionStyledLogin } from "./style.js";

import { validacaoLogin } from "../../validations/loginUser.js";

import { ContexteDadosUserFunction } from "../../context/ContextDadosUser.jsx";

function FormLogin() {
 
  const { login } = ContexteDadosUserFunction()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validacaoLogin),
  });
  const navigate = useNavigate();

  const onSubmitFunction = (data) => {
    login(data);

    navigate("/dashboard");
    reset();
  };

  return (
    <SectionStyledLogin>
      <h1>kenzie Hub</h1>
      <FormStyledLogin onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Login</h2>

        <label htmlFor="email">Email</label>

        <input
          id="email"
          name="email"
          type="texte"
          placeholder="Digite seu email"
          {...register("email")}
        />
        <p> {errors.email?.message}</p>
        <label htmlFor="password">Senha</label>

        <input
          id="password"
          name="password"
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <p> {errors.password?.message}</p>
        <button type="submit">entrar</button>

        <div>
          <span>ainda não possui conta?</span>
          <Link to={"/cadastro"} element={<FormCadastro />}>
            <div>Cadastre-se</div>
          </Link>
        </div>
      </FormStyledLogin>
    </SectionStyledLogin>
  );
}

export default FormLogin;
