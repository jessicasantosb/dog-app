import React from "react";
import Input from "../forms/Input";
import Button from "../forms/Button";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import { PASSWORD_LOST } from "../../Api";
import Error from "../interfaces/Error";
import Head from "../interfaces/Head";

function LoginPasswordLost() {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  const handleSendEmailSubmit = async (event) => {
    event.preventDefault();

    if (login.validate) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      await request(url, options);
    }
  };

  return (
    <section className="animeLeft">
      <Head title="Perdeu sua senha?" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "var(--color-success)" }}>{data}</p>
      ) : (
        <form onSubmit={handleSendEmailSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
}

export default LoginPasswordLost;
