import React from "react";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";
import Input from "../forms/Input";
import Button from "../forms/Button";
import useForm from "../../hooks/useForm";
import { UserContext } from "../../UserContext";
import Error from "../interfaces/Error";

function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form onSubmit={handleLoginSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button disabled >Carregando...</Button> : <Button>Entrar</Button>}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastroDiv}>
        <h2 className={styles.cadastroText}>Cadastre-se</h2>
        <p>Ainda não possui uma conta? Cadastre-se no site.</p>
        <Link to={"/login/criar"}>
          <Button>Cadastro</Button>
        </Link>
      </div>
    </section>
  );
}

export default LoginForm;
