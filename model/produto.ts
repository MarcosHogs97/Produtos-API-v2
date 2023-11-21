import sharp from 'sharp';

export default class Produto {
    protected id: number
    protected nome: string
    protected image: string
    protected valor: number
    protected descricao: string
    protected detalhes: string

    constructor(id: number, nome: string, caminhoDaImagem: string, valor: number, descricao: string, detalhes: string) {
        this.id = id;
        this.nome = nome;
        this.image = caminhoDaImagem;
        this.valor = valor;
        this.descricao = descricao;
        this.detalhes = detalhes;
    }
}