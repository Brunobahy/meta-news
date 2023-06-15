import React from 'react'
import styles from './Perfil.module.css'
import Banner from 'components/Banner'

export default function Perfil() {
    return (
        <section className={styles.pagina}>
            <Banner />
            <div className={styles.info}>
                <img className={styles.foto} src="https://github.com/brunobahy.png" alt="" />
                <div>
                    <h2 className={styles.nome}>Bruno Bahy</h2>
                    <p className={styles.email}>bruno@gmail.com</p>
                </div>
            </div>
        </section>
    )
}
