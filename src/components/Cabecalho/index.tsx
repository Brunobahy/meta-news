import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineShareAlt } from 'react-icons/ai'
import { BiNews } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'
import styles from './Cabecalho.module.css'

export default function Cabecalho() {

    const [nome,setNome] = useState<string>('MN')

    const local = useLocation() 


    function mudaLogo(){
        if(nome == 'MN'){
            setNome('MetaNews')
        }else{
            setNome('MN')
        }
    }

    return (
        <header className={styles.cabecalho}>
            <Link to={'/'}className={styles.logo} onMouseEnter={() => mudaLogo()} onMouseLeave={() => mudaLogo()}><AiOutlineShareAlt />{nome}</Link>
            <nav>
                <ul className={styles.lista}>
                    <li className={local.pathname === '/'? styles.itemAcessado :styles.item}><Link className={styles.link} to={'/'}><AiOutlineHome className={styles.home} /></Link> </li>
                    <li className={local.pathname === '/Descubra'? styles.itemAcessado :styles.item}><Link className={styles.link} to={'/descubra'}><BiNews className={styles.descubra} /></Link> </li>
                    <li className={local.pathname === '/perfil'? styles.perfilAcessado :styles.item}><Link className={styles.link} to={'/perfil'}> <img className={styles.foto} src="https://github.com/brunobahy.png" alt="Foto do usuario" /></Link></li>
                </ul>
            </nav>


        </header>
    )
}
