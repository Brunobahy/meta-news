import React from 'react'
import styles from './BotaoPadrao.module.css'

interface Props {
    texto: string,
    cor?: string,
    click?: (event: React.MouseEvent<HTMLElement>) => void,
    desabilitar?: boolean,
    tipo?: string,
    formulario?: string
}

export default function Botao({ formulario,tipo ,desabilitar = false, texto, cor = 'tomato', click }: Props) {


    return (
        <button style={{ backgroundColor: cor }} form={formulario} disabled={desabilitar} className={styles.botao} onClick={click}>
            {texto}
        </button >
    )
}