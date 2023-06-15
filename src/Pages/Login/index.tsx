import React, { useState } from 'react'
import InputLogin from '../../components/InputLogin'
import styles from './Login.module.css'
import Botao from '../../components/BotaoPadrao'
import CriarConta from '../../components/CriarConta'
import { useRecoilState } from 'recoil'
import { dadosLogin, painelDeRegistro } from '../../states/atom'
import { useFazerLogin } from '../../states/hooks/useFazerLogin'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const navigate = useNavigate()
  const fazerLogin = useFazerLogin()
  const [abrirPainelDeRegistro, setAbrirPainelDeRegistro] = useRecoilState(painelDeRegistro)
  const [dados, setDados] = useRecoilState(dadosLogin)
  const [erro, setErro] = useState(false)

  function verificaLogin(){
    if(fazerLogin()){
      setErro(false)
      return navigate('/')
    }else{
      setErro(true)
    }
  }

  return (
    <section className={styles.pagina}>

      <div className={styles.info}>

        <h1 className={styles.titulo}>Meta News</h1>
        <p className={styles.texto}>Todas as novidades do Meta, uma plataforma para se atualizar</p>

      </div>

      <div className={styles.container}>

        <form action="login" className={styles.formulario} onSubmit={(event) => event.preventDefault()}>

          <InputLogin placeholder='Email' tipo='email' valor={dados.email} alterar={(event) => setDados({ ...dados, email: event.target.value })} />
          <InputLogin placeholder='Senha' tipo='password' valor={dados.senha} alterar={(event) => setDados({ ...dados, senha: event.target.value })} />
          {erro && <span className={styles.erro}>*Email ou Senha incorreto</span>}
          <Botao texto='Entrar' click={() => verificaLogin()} />

        </form>

        <hr style={{ width: '100%' }} />

        <Botao texto='Criar Conta' click={() => setAbrirPainelDeRegistro(true)} />

      </div>

      {abrirPainelDeRegistro && <CriarConta fechar={() => setAbrirPainelDeRegistro(false)} />}

    </section>
  )
}
