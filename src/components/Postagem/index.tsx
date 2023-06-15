import { useEffect, useState } from 'react'
import styles from './Postagem.module.css'
import { AiOutlineHeart, AiOutlineComment, AiFillHeart, AiFillCaretRight } from 'react-icons/ai'
import { FaShare } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { IPostagem } from '../../interfaces/IPostagem'
import { useFavoritar } from '../../states/hooks/useFavoritar'
import { IComentario } from 'interfaces/IComentario'
import { useComentar } from 'states/hooks/useComentar'
import { useRecoilValue } from 'recoil'
import { comentarios } from 'states/atom'

export default function Postagem({ id, usuario, foto, tempo, texto, imagem, curtido, curtidas }: IPostagem) {


    const [tempoFinal, setTempoFinal] = useState<string>('Agora mesmo')
    const [comentario, setComentario] = useState<IComentario>({ id: undefined, foto: '', texto: '' })

    const comentar = useComentar()
    const favoritar = useFavoritar()

    const listaComentarios = useRecoilValue(comentarios)

    let horaPostagem = new Date().getHours() - tempo.hora
    let anoPostagem = new Date().getFullYear() - tempo.ano
    let mesPostagem = (new Date().getMonth() + 1) - tempo.mes
    let diaPostagem = new Date().getDate() - tempo.dia

    if (mesPostagem < 0) {
        mesPostagem = 0
        anoPostagem += 1
    }
    if (diaPostagem < 0) {
        diaPostagem = 0
        mesPostagem += 1
    }
    if (horaPostagem < 0) {
        horaPostagem = 0
        diaPostagem += 1
    }


    useEffect(() => {
        if (anoPostagem + mesPostagem + diaPostagem + horaPostagem !== 0) {
            if (horaPostagem !== 0) {
                setTempoFinal(`Postado há ${horaPostagem} hora${horaPostagem === 1 ? '' : 's'}`)
            }
            if (diaPostagem !== 0) {
                setTempoFinal(`Postado há ${diaPostagem} dia${diaPostagem === 1 ? '' : 's'} e ${horaPostagem} hora${horaPostagem === 1 ? '' : 's'}`)
            }
            if (mesPostagem !== 0) {
                setTempoFinal(`Postado há ${mesPostagem} mes${mesPostagem === 1 ? '' : 'es'} ${diaPostagem} dia${diaPostagem === 1 ? '' : 's'} e ${horaPostagem} hora${horaPostagem === 1 ? '' : 's'} `)
            }
            if (anoPostagem !== 0) {
                setTempoFinal(`Postado há ${anoPostagem} ano${anoPostagem === 1 ? '' : 's'} ${mesPostagem} mes${mesPostagem === 1 ? '' : 'es'} ${diaPostagem} dia${diaPostagem === 1 ? '' : 's'} e ${horaPostagem} hora${horaPostagem === 1 ? '' : 's'}`)
            }
        }

    }, [new Date().getHours])


    function enviarComentario(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        comentar(comentario)
        setComentario({ id: undefined, foto: '', texto: '' })
    }

    return (
        <div>
            <div className={styles.postagem}>
                <div className={styles.postagem__cabecalho}>
                    {true
                        ? <img src={foto} alt="" className={styles.user} />
                        : <BsFillPersonFill className={styles.userIcon} />
                    }
                    <div>
                        <p className={styles.postagem__nome}>{usuario}</p>
                        <span className={styles.postagem__tempo}>{tempoFinal}</span>
                    </div>
                </div>
                <p className={styles.postagem__texto}>{texto}</p>
                <img src={imagem} alt="" className={styles.imagem} />
                <div className={styles.postagem__botoes}>
                    <div className={styles.botaoCurtidas}>
                        {curtido
                            ? <AiFillHeart onClick={() => favoritar(id)} className={styles.botao} />
                            : <AiOutlineHeart onClick={() => favoritar(id)} className={styles.botao} />
                        }
                        <span onClick={() => favoritar(id)}>{curtidas}</span>
                    </div>
                    <AiOutlineComment className={styles.botao} />
                    <FaShare className={styles.botao} />
                </div>
            </div>
            <div className={styles.lista__comentarios}>
                {listaComentarios.length > 0 && listaComentarios.map((comentario) => {
                    if (comentario.id === id) {
                        return (
                            <div className={styles.comentario}>
                                <img src={comentario.foto} alt="" className={styles.comentario__imagem} />
                                <p className={styles.comentario__texto}>{comentario.texto}</p>
                            </div>

                        )
                    } else {
                        return ''
                    }
                })}
                <form className={styles.comentario__container} onSubmit={(event) => enviarComentario(event)} >
                    <img src="https://github.com/brunobahy.png" alt="" className={styles.comentario__user} />
                    <div className={styles.container__input}>
                        <input type="text" className={styles.input} placeholder='Comentar...' value={comentario?.texto} onChange={(event) => setComentario({ texto: event.target.value, id: id, foto: foto })} />
                        <button className={styles.enviar}><AiFillCaretRight /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}
