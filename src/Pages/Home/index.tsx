import Feed from 'components/Feed'
import React from 'react'
import styles from './Home.module.css'
import CriarPost from 'components/CriarPost'

export default function Home() {
  return (
    <section className={styles.pagina}>
      <CriarPost />
      <Feed />
    </section>
  )
}
