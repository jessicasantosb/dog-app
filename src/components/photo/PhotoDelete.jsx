import React from "react";
import styles from "./PhotoDelete.module.css";
import { PHOTO_DELETE } from "../../Api";
import useFetch from "../../hooks/useFetch";

function PhotoDelete({ id }) {
  const { loading, request } = useFetch();

  const handleDeleteClick = async () => {
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  };

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
        Deletar
      </button>
      ) : (
        <button className={styles.delete} onClick={handleDeleteClick}>
          Deletar
        </button>
      )}
    </>
  );
}

export default PhotoDelete;
