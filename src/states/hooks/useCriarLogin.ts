import { IUsuario } from "../../interfaces/IUsuario";


export const useCriarLogin = () => {

   
    return (dados: IUsuario) => {

        localStorage.setItem("login", JSON.stringify(dados))
    }

}