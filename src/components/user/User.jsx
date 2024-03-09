import React from "react";
import styles from "./User.module.css";
import { UserContext } from "../../UserContext";
import { Navigate, Route, Routes } from "react-router-dom";
import UserHeader from "./UserHeader";
import Feed from "../feed/Feed";
import UserPost from "./UserPhotoPost";
import NotFound from "../NotFound";
import Head from "../interfaces/Head";

function User() {
  const { login, data } = React.useContext(UserContext);

  return (
    <>
      <Head title="Minha Conta" />
      {login ? (
        <section className={`${styles.user}  container`}>
          <UserHeader />
          <Routes>
            <Route path="/" element={<Feed user={data.id} />} />
            <Route path="postar" element={<UserPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </section>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default User;
