import React from "react";
import styles from "./PhotoPost.module.css";
import Input from "../forms/Input";
import Button from "../forms/Button";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import { PHOTO_POST } from "../../Api";
import Error from "../interfaces/Error";
import { useNavigate } from "react-router-dom";

function UserPost() {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  function handleUserPostSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);
    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }
  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.userPost} animeleft`}>
      <form onSubmit={handleUserPostSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="text" name="idade" {...idade} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        ></input>
        {loading ? (
          <Button disabled>Adicionando...</Button>
        ) : (
          <Button>Adicionar</Button>
        )}
        <Error error={error} />
      </form>
      {img.preview && (
        <div
          className={styles.preview}
          style={{ backgroundImage: `url("${img.preview}")` }}
        ></div>
      )}
    </section>
  );
}

export default UserPost;
