import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.div} container`}>
        <Link className={styles.logo} to="/">
          Logo
        </Link>
        <Link className={styles.login} to="/login">
          Login / criar
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
