import React from "react";
import styles from "./PhotoCommentsForm.module.css";
import useFetch from "../../hooks/useFetch";
import SendIcon from "../../assets/send.svg?react";
import { COMMENT_POST } from "../../Api";
import Error from "../interfaces/Error";

function PhotoCommentsForm({ id, setComments, single }) {
  const [comment, setComment] = React.useState("");
  const { request, error } = useFetch();

  const handleCommentSubmit = async (event) => {
    event.preventDefault();

    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  };

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ""}`}
      onSubmit={handleCommentSubmit}
    >
      <label htmlFor="comment" className={styles.label}>
        {" "}
        Faça seu Comentário
      </label>
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />

      <button className={styles.button}>
        <SendIcon />
      </button>
      <Error error={error} />
    </form>
  );
}

export default PhotoCommentsForm;
