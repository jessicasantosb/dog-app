import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../feed/Feed";
import Head from "../interfaces/Head";

function UserProfile() {
  const { user } = useParams();

  return (
    <section className='container' style={{marginTop: '7rem', marginBottom: 'var(--spacer-lg)'}} >
      <Head title={user} description='Página do usuário' />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
}

export default UserProfile;
