import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import LogoIcon from "../assets/logo.svg?react";

function Footer() {
  return (
    <footer className={`${styles.footer} container`}>
        <Link className={styles.logo} to="/">
          <LogoIcon />
        </Link>
    </footer>
  );
}

export default Footer;
