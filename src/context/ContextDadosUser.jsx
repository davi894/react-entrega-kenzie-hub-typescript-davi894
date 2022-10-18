import instanceAxios from "../services/Axios/Axios.js";

import { useNavigate } from "react-router-dom";

import { createContext, useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useContext } from "react";

export const DadosUser = createContext({});

function ContextDadosUser({ children }) {
  const [infoUserLogin, setInfoUserLogin] = useState([]);

  const [loading, setLoading] = useState(true);

  const [userTech, setUsertech] = useState([]);

  const [router, setRouter] = useState("");

  const navigate = useNavigate();

  const tokken = localStorage.getItem("tokken");

  async function getUserData() {
    if (tokken) {
      try {
        instanceAxios.defaults.headers.authorization = `Bearer ${tokken}`;

        const respose = await instanceAxios.get("/profile");

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

  async function login(dateLogin) {
    try {
      const respose = await instanceAxios.post("/sessions", dateLogin);
      localStorage.setItem("tokken", respose.data.token);
      setInfoUserLogin(respose.data.user);
      setUsertech(respose.data.user.techs);
      toast.success("Login com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error(`${error}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      localStorage.setItem("tokken", "");
    }
  }

  async function cadastro(dateCadastro) {
    try {
      await instanceAxios.post("/users", dateCadastro);
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

export const ContexteDadosUserFunction = () => useContext(DadosUser);
