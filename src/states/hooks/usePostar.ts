import { IPostagem } from "interfaces/IPostagem"
import { useRecoilState } from "recoil"
import { postagens } from "states/atom"
// import { v4 as uuidv4 } from 'uuid';

interface Props {
    texto: string,
    imagem: string,
    marca: string
}

export const usePostar = () => {

    const [listaPostagens, setListaPostagens] = useRecoilState(postagens)

    return (info: Props) => {

        setListaPostagens([...listaPostagens,
        {
            curtidas: 0,
            curtido: false,
            foto: '',
            id: listaPostagens.length,
            tempo: {
                ano: new Date().getFullYear(),
                dia: new Date().getDate(),
                hora: new Date().getHours(),
                mes: new Date().getMonth() + 1
            },
            texto: info.texto,
            usuario: '',
            imagem: info.imagem,
            marca: info.marca
        }
        ])

    }
}