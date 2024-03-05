import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import ThemeToggleBtn from "./theme toggle/ThemeToggleBtn";
import { UserContext } from "../UserContext";

function Header() {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/">
          Logo
        </Link>
        <div className={styles.navLinks}>
          {data ? (
            <Link className={styles.login} to="/conta">
              {data.nome}
            </Link>
          ) : (
            <Link className={styles.login} to="/login">
              Login / criar
            </Link>
          )}

          <ThemeToggleBtn />
        </div>
      </nav>
    </header>
  );
}

export default Header;
