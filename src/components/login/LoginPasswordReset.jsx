import React from "react";
import useForm from "../../hooks/useForm";
import Input from "../forms/Input";
import Button from "../forms/Button";
import { PASSWORD_RESET } from "../../Api";
import useFetch from "../../hooks/useFetch";
import Error from "../interfaces/Error";
import { useNavigate } from "react-router-dom";
import Head from "../interfaces/Head";

function LoginPasswordReset() {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  const handleResetPasswordSubmit = async (event) => {
    event.preventDefault();

    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  };

  return (
    <section className="animeLeft">
      <Head title='Resete a Senha' />
      <h1 className="title">Nova Senha</h1>
      <form onSubmit={handleResetPasswordSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disable>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
}

export default LoginPasswordReset;
