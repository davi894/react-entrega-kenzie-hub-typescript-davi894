import instanceAxios from "../services/Axios/Axios";

import { useNavigate } from "react-router-dom";

import { createContext, useEffect, useState, SetStateAction, Dispatch } from "react";

import { iCadastro, iUserTechs, iLogin, iInfoUserLogin,iWorkUser } from "./interfaces/ContextUser";

import { toast } from "react-toastify";

export interface iInfoUser {
  children: React.ReactNode;
}

interface iRespLoginAxios {

}

interface iRespCadastroAxios {
  id: string,
	name: string,
	email: string,
	course_module: string,
	bio: string,
	contact: string,
	created_at: string,
	updated_at: string,
	avatar_url: string | null
}


interface iRespgGetProfileAxios {
    id: string,
    name: string,
    email: string,
    course_module: string,
    bio: string,
    contact: string,
    techs: iUserTechs[],
    works: iWorkUser[],
    created_at: string,
    updated_at: string,
    avatar_url: string | null
  }


export interface UserProviderData {
  setInfoUserLogin: Dispatch<SetStateAction<iInfoUserLogin>>,
  setRouter: Dispatch<SetStateAction<string>>,
  cadastro: (product: iCadastro) => void,
  login: (product: iLogin) => void,
  setUsertech: Dispatch<SetStateAction<iUserTechs[]>>,
  userTech: iUserTechs[],
  loading: boolean,
  getUserData: () => void,
  router: string,
  infoUserLogin: iInfoUserLogin,
}

export const DadosUser = createContext<UserProviderData>({} as UserProviderData);

function ContextDadosUser({ children }: iInfoUser) {
  const [infoUserLogin, setInfoUserLogin] = useState<iInfoUserLogin>({} as iInfoUserLogin);
  const [userTech, setUsertech] = useState<iUserTechs[]>([]);

  const [loading, setLoading] = useState(true);

  const [router, setRouter] = useState("");

  const navigate = useNavigate();

  const tokken = localStorage.getItem("tokken");

  async function getUserData() {
    if (tokken) {
      try {
        instanceAxios.defaults.headers.common["Authorization"] = `Bearer ${tokken}`;

        const respose = await instanceAxios.get<iRespgGetProfileAxios, any>("/profile");

        setUsertech(respose.data.techs);
        setInfoUserLogin(respose.data);
      } catch (error) {
        toast.error(`${error}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    getUserData();
  }, [tokken]);

  async function login(dateLogin: iLogin) {
    try {
      const respose = await instanceAxios.post<iInfoUserLogin, any>("/sessions", dateLogin);
      localStorage.setItem("tokken", respose.data.token);
      setInfoUserLogin(respose.data.user);
      setUsertech(respose.data.user.techs);
      toast.success("Login com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/dashboard")
    } catch (error) {
      toast.error(`${error}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      localStorage.setItem("tokken", "");
    }
  }

  async function cadastro(dateCadastro: iCadastro) {
    try {
      await instanceAxios.post<iRespCadastroAxios>("/users", dateCadastro);
      toast.success("Cadastro com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error(`${error}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/cadastro");
    }
  }

  return (
    <DadosUser.Provider
      value={{
        infoUserLogin,
        setInfoUserLogin,
        cadastro,
        login,
        userTech,
        loading,
        setUsertech,
        getUserData,
        router,
        setRouter,
      }}
    >
      {children}
    </DadosUser.Provider>
  );
}

export default ContextDadosUser;

