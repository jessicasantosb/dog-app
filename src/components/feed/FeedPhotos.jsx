import React from "react";
import styles from "./FeedPhotos.module.css";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../hooks/useFetch";
import { PHOTOS_GET } from "../../Api";
import Error from "../interfaces/Error";
import Loading from "../interfaces/Loading";

function FeedPhotos({ page, user, setModalPhoto, setInfinite }) {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const fetchPhotos = async () => {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    };
    fetchPhotos();
  }, [user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  } else return null;
}

export default FeedPhotos;
