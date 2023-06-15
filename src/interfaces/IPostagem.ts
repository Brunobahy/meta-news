export interface IPostagem {
    id:number,
    usuario: string;
    foto: string;
    tempo: {ano:number,mes:number,dia:number,hora:number};
    texto: string;
    imagem: string;
    curtido: boolean;
    curtidas: number;
}
