import { useRecoilState } from "recoil"
import { IPostagem } from "../../interfaces/IPostagem"
import { postagens } from "../atom"

export const useFavoritar = () => {

    const [postagem, setPostagem] = useRecoilState<IPostagem[]>(postagens)


    return (id: number) => {
        setPostagem(postagem.map((post: IPostagem) => {
            if (post.id === id) {
                let soma = 0
                if (post.curtido === false) {
                    soma = 1
                } else {
                    soma = -1
                }

                return { ...post, curtidas: post.curtidas + soma, curtido: !post.curtido }
            } else {
                return post
            }
        }))

    }

}