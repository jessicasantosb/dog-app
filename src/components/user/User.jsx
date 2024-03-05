import React from "react";
import styles from "./User.module.css";
import { UserContext } from "../../UserContext";
import { Navigate, Route, Routes } from "react-router-dom";
import UserHeader from "./UserHeader";
import Feed from "../feed/Feed";
import UserPost from "./PhotoPost";

function User() {
  const { login } = React.useContext(UserContext);

  return (
    <>
      {login ? (
        <section className={`${styles.user}  container`}>
          <UserHeader />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="postar" element={<UserPost />} />
          </Routes>
        </section>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default User;
