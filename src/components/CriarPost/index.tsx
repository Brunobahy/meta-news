import InputLogin from 'components/InputLogin'
import React, { useState } from 'react'
import styles from './CriarPost.module.css'
import { BiImageAdd } from 'react-icons/bi'
import { BsFillPeopleFill } from 'react-icons/bs'
import { AiFillCaretRight } from 'react-icons/ai'
import { ImCancelCircle } from 'react-icons/im'
import { usePostar } from 'states/hooks/usePostar'


export default function CriarPost() {

    const [teste, setTeste] = useState({ texto: '', imagem: '', marca: '' })
    const [aberto, setAberto] = useState('')

    const enviarPostagem = usePostar()

    function postar(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        enviarPostagem(teste)
    }

    function fechar(aba: string) {
        if (aba === 'marca') {
            setTeste({ ...teste, marca: '' })
            setAberto('')
        } else {
            setTeste({ ...teste, imagem: '' })
            setAberto('')
        }
    }


    return (
        <>
            <form className={styles.formulario} onSubmit={(event) => postar(event)}>
                <InputLogin tipo='text' valor={teste.texto} placeholder='Oque você esta pensando?' alterar={(event) => setTeste({ ...teste, texto: event.target.value })} />
                <ul className={styles.lista}>
                    <li className={styles.item} onClick={() => setAberto('imagem')} ><BiImageAdd /></li>
                    <li className={styles.item} onClick={() => setAberto('marca')} ><BsFillPeopleFill /></li>
                    <li className={styles.item}> <button><AiFillCaretRight /></button> </li>
                </ul>
            </form>

            {aberto
                ? aberto === 'imagem'
                    ? <span className={styles.container}>
                        <div className={styles.formulario__extra}>
                            <InputLogin placeholder='Insira o link aqui!' tipo='text' valor={teste.imagem} alterar={(event) => setTeste({ ...teste, imagem: event.target.value })} />
                            <button className={styles.botoes} onClick={() => fechar('imagem')}> <ImCancelCircle /> </button>
                            <button className={styles.botoes} onClick={() => setAberto('')}> <AiFillCaretRight /> </button>
                        </div>
                    </span>
                    : <span className={styles.container}>
                        <div className={styles.formulario__extra}>
                            <InputLogin placeholder='Marque a pessoa aqui!' tipo='text' valor={teste.marca} alterar={(event) => setTeste({ ...teste, marca: event.target.value })} />
                            <button className={styles.botoes} onClick={() => fechar('marca')}> <ImCancelCircle /> </button>
                            <button className={styles.botoes} onClick={() => setAberto('')}> <AiFillCaretRight /> </button>
                        </div>
                    </span>
                : ''
            }
        </>
    )
}
