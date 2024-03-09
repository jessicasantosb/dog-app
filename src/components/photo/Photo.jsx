import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Photo.module.css";
import useFetch from "../../hooks/useFetch";
import { PHOTO_GET } from "../../Api";
import Error from "../interfaces/Error";
import Loading from "../interfaces/Loading";
import PhotoContent from "./PhotoContent";
import Head from "../interfaces/Head";

function Photo() {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container">
        <Head title={data.photo.title} />
        <PhotoContent single={true} data={data} />
      </section>
    );
}

export default Photo;
