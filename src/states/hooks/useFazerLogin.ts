import { useRecoilValue } from "recoil"
import { dadosLogin } from "../atom"

export const useFazerLogin = () => {

    const registrado = JSON.parse(localStorage.getItem('login') || '{"email":"","senha":""}')

    const dados = useRecoilValue(dadosLogin)

    return () => {

        if (registrado.email === dados.email && registrado.senha === dados.senha) {
            return true
        } else {
            return false
        }

    }
}