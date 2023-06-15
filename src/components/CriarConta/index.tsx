import React, { useState } from 'react'
import styles from './CriarConta.module.css'
import InputLogin from '../InputLogin'
import Botao from '../BotaoPadrao'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useRecoilState } from 'recoil'
import { registrarDados } from '../../states/atom'
import { useCriarLogin } from '../../states/hooks/useCriarLogin'

interface Props {
    fechar: () => void
}

export default function CriarConta({ fechar }: Props) {

    const criarConta = useCriarLogin()

    const [dadosValidar, setDadosValidar] = useRecoilState(registrarDados)

    const [erro, setErro] = useState({ numero: false, igual: false })

    function validaSenha(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (dadosValidar.senha !== dadosValidar.senhaConfirme || dadosValidar.senha.length < 5) {
            if (dadosValidar.senha !== dadosValidar.senhaConfirme) {
                setErro({ ...erro, igual: true })
            }
            if (dadosValidar.senha.length < 5) {
                setErro({ ...erro, numero: true })
            }
        } else {
            finalizar()
            return true
        }

    }

    function finalizar() {
        criarConta(dadosValidar)
        fechar()
    }

    return (
        <div className={styles.container}>

            <form id="registrar" className={styles.formulario} onSubmit={(event) => validaSenha(event)}>
                <AiOutlineCloseCircle onClick={fechar} className={styles.fechar} />
                <h3 className={styles.titulo}>Criar conta</h3>

                <InputLogin tipo='text' placeholder='Nome' valor={dadosValidar.nome} alterar={(event) => setDadosValidar({ ...dadosValidar, nome: event.target.value })} />
                <InputLogin tipo='email' placeholder='Email' valor={dadosValidar.email} alterar={(event) => setDadosValidar({ ...dadosValidar, email: event.target.value })} />
                <InputLogin tipo='password' placeholder='Senha' valor={dadosValidar.senha} alterar={(event) => setDadosValidar({ ...dadosValidar, senha: event.target.value })} />
                <InputLogin tipo='password' placeholder='Confirme a senha' alterar={(event) => setDadosValidar({ ...dadosValidar, senhaConfirme: event.target.value })} />
                {erro.igual && <span key='iguais' className={styles.erro}>as senhas não conferem</span>}
                {erro.numero && <span key='numero' className={styles.erro}>a senha deve conter pelo menos 5 digitos</span>}
                <Botao texto={'Registrar'} formulario={'registrar'} tipo={'submit'} />
            </form>


        </div>
    )
}
