import Feed from 'components/Feed'
import React from 'react'
import styles from './Home.module.css'

export default function Home() {
  return (
    <section className={styles.pagina}>
        <Feed />
    </section>
  )
}
