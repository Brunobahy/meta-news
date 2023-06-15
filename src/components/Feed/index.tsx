import React from 'react'
import Postagem from '../../components/Postagem';
import { useRecoilValue } from 'recoil';
import { postagens } from '../../states/atom';
import styles from './Feed.module.css'


export default function Feed() {
    const lista = useRecoilValue(postagens)

    return (
        <section className={styles.feed}>
            {lista.map((item, index) => (
                <Postagem key={index} {...item} />
            ))}
        </section>
    )
}
