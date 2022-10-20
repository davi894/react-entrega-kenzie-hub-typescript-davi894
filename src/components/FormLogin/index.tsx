import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";

import { FormStyledLogin, SectionStyledLogin } from "./style";

import { validacaoLogin } from "../../validations/loginUser";

import { DadosUser } from "../../context/ContextDadosUser";
import { iLogin } from "../../context/interfaces/ContextUser";
import { useContext } from "react";


function FormLogin() {

  const { login } = useContext(DadosUser)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iLogin>({
    resolver: yupResolver(validacaoLogin),
  });
  const navigate = useNavigate();

  const onSubmitFunction = (data: any) => {
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
          type="text"
          placeholder="Digite seu email"
          {...register("email")}
        />
        <p> {errors.email?.message}</p>
        <label htmlFor="password">Senha</label>

        <input
          id="password"
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <p> {errors.password?.message}</p>
        <button type="submit">entrar</button>

        <div>
          <span>ainda não possui conta?</span>
          <Link to={"/cadastro"} >
            <div>Cadastre-se</div>
          </Link>
        </div>
      </FormStyledLogin>
    </SectionStyledLogin>
  );
}

export default FormLogin;
