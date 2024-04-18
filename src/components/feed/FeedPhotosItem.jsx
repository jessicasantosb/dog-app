import React from "react";
import styles from "./FeedPhotosItem.module.css";
import Image from "../interfaces/Image";

function FeedPhotosItem({ photo, setModalPhoto }) {
  const handlePhotoClick = () => {
    setModalPhoto(photo);
  };

  return (
    <li className={styles.photo} onClick={handlePhotoClick}>
      <div className={styles.img} >
        <Image src={photo.src} alt={photo.title} />
      </div>
      <span className={styles.visualization}>{photo.acessos}</span>
    </li>
  );
}

export default FeedPhotosItem;
