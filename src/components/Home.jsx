import React from 'react'
import styles from './Home.module.css'
import Feed from './feed/Feed'
import Head from './interfaces/Head'

function Home() {
  return (
    <section className={`${styles.home} container`}>
      <Head title='Fotos' description='Feed de fotos do site Dogs' />
      <Feed />
    </section>
  )
}

export default Home
