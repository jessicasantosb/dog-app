import React from "react";
import styles from "./Image.module.css";

function Image({ alt, ...props }) {
  const [skeleton, setSkeleton] = React.useState(true);

  const handleImgLoad = ({ target }) => {
    setSkeleton(false);
    target.style.opacity = 1;
  };

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img onLoad={handleImgLoad} className={styles.img} alt={alt} {...props} />
    </div>
  );
}

export default Image;
