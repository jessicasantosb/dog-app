import React from 'react'
import styles from './Home.module.css'
import Feed from './feed/Feed'

function Home() {
  return (
    <section className={`${styles.home} container`}>
      <Feed />
    </section>
  )
}

export default Home
