import React from "react";
import styles from "./UserHeader.module.css";
import { NavLink, useLocation } from "react-router-dom";
import useMedia from "../../hooks/useMedia";
import { UserContext } from "../../UserContext";
import GaleryIcon from "../../assets/galery.svg?react";
import AddIcon from "../../assets/add.svg?react";
import LogoutIcon from "../../assets/logout.svg?react";

function UserHeader() {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 700px)");
  const { pathname } = useLocation();

  React.useEffect(() => {
    pathname === "/conta/postar"
      ? setTitle("Poste seu Trabalho")
      : setTitle("Minha Conta");
  }, [location]);

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      <header className={styles.header}>
        <h1 className="title">{title}</h1>
        {mobile && (
          <button
            className={`${styles.mobileBtn} ${
              mobileMenu && styles.mobileBtnActive
            }`}
            aria-label="Menu"
            onClick={() => setMobileMenu(!mobileMenu)}
          ></button>
        )}
        <nav
          className={`${mobile ? styles.navMobile : styles.nav} ${
            mobileMenu && styles.navMobileActive
          }`}
        >
          <NavLink to="/conta" className={styles.navLink}>
            <GaleryIcon className={styles.navIcon} />
            {mobile && "Meus trabalhos"}
          </NavLink>
          <NavLink to="/conta/postar" className={styles.navLink}>
            <AddIcon className={styles.navIcon} />
            {mobile && "Adicionar novo trabalho"}
          </NavLink>
          <button onClick={userLogout} className={styles.navLink}>
            <LogoutIcon className={styles.navIcon} />
            {mobile && "Sair"}
          </button>
        </nav>
      </header>
    </>
  );
}

export default UserHeader;
