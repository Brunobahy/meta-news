import React from 'react'
import styles from './Perfil.module.css'
import Banner from 'components/Banner'

export default function Perfil() {
    const cor = '123,100,050'
    return (
        <section className={styles.pagina}>
            <div className={styles.cabecalho} style={{background: `rgba(${cor})`}}>
                <Banner />
                <div className={styles.info}>
                    <img className={styles.foto} src="https://github.com/brunobahy.png" alt="" />
                    <div>
                        <h2 className={styles.nome}>Bruno Bahy</h2>
                        <p className={styles.email}>bruno@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className={styles.corpo} style={{background: `rgba(${cor}, 0.9)`}}>
            <p>teste</p>
            </div>
        </section>
    )
}
