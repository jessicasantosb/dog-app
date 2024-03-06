import React from "react";
import styles from "./FeedModal.module.css";
import useFetch from "../../hooks/useFetch";
import { PHOTO_GET } from "../../Api";
import Error from "../interfaces/Error";
import Loading from "../interfaces/Loading";
import PhotoContent from "../photo/PhotoContent";

function FeedModal({ photo, setModalPhoto }) {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo]);

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget)
    setModalPhoto(null)
  };

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}

export default FeedModal;
