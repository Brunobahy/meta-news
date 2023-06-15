import { useRecoilState } from "recoil"
import { IComentario } from "../../interfaces/IComentario"
import { comentarios } from "../atom"


export const useComentar = () => {

    const [listaComentarios,setListaComentarios] = useRecoilState(comentarios)

    return (comentario: IComentario) => {
        setListaComentarios([...listaComentarios,comentario])
    }
}

 