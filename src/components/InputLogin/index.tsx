import React from 'react'
import styles from './InputLogin.module.css'
interface Props {
    tipo: string,
    placeholder: string,
    valor?: string,
    alterar?: (event:any) =>void
}

export default function InputLogin({ tipo, placeholder, valor, alterar  }: Props) {
    return (
        <input type={tipo} className={styles.input} required placeholder={placeholder} value={valor} onChange={alterar}/>
    )
}
