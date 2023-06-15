import { atom } from "recoil";
import { IUsuario } from "../interfaces/IUsuario";
import { ILogin } from "../interfaces/ILogin";
import { IPostagem } from "../interfaces/IPostagem";
import { IComentario } from "interfaces/IComentario";


const painelDeRegistro = atom({
    key: 'painelDeRegistro',
    default: false,
});

const registrarDados = atom<IUsuario>({
    key: 'registarDados',
    default: {
        nome: '',
        email: '',
        senha: ''
    }
})

const dadosLogin = atom<ILogin>({
    key: 'dadosLogin',
    default: {
        email: '',
        senha: ''
    }
})

const postagens = atom<IPostagem[]>({
    key: 'Postagens',
    default: [{
        id: 0,
        usuario: 'Pruno Bahy',
        foto: 'http://github.com/brunobahy.png',
        tempo: {
            ano: 2023,
            mes: 5,
            dia: 10,
            hora: 6
        },
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et distinctio laboriosam maiores pariatur, dicta deleniti ut possimus eligendi, inventore aperiam illo odio officia architecto repellat necessitatibus, eaque tenetur nostrum.',
        imagem: 'https://picsum.photos/600/400',
        curtido: false,
        curtidas: 0
    },
    {
        id: 1,
        usuario: 'Bruno Bahy',
        foto: 'http://github.com/brunobahy.png',
        tempo: {
            ano: 2022,
            mes: 9,
            dia: 24,
            hora: 12
        },
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et distinctio laboriosam maiores pariatur, dicta deleniti ut possimus eligendi, inventore aperiam illo odio officia architecto repellat necessitatibus, eaque tenetur nostrum.',
        imagem: 'https://cataas.com/cat',
        curtido: false,
        curtidas: 0
    }]


})
export const comentarios = atom<IComentario[]>({
    key: 'comentarios',
    default: [{
        id: 0,
        foto: 'https://github.com/brunobahy.png',
        texto: 'gostei muito da imagem'
    }]
})

export { painelDeRegistro, dadosLogin, registrarDados, postagens }