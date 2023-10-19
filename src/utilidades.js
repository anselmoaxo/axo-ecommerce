export const catalogo = [
  {
    id: "1",
    nome: "Cofre Preto",
    marca: "Eletronicos AXO",
    preco: 250,
    nomeArquivoImagem: "prod01.jpg",
    feminino: true,
  },
  {
    id: "2",
    nome: "teste 1",
    marca: "Eletronicos AXO",
    preco: 250,
    nomeArquivoImagem: "prod02.jpg",
    feminino: true,
  },

  {
    id: "3",
    nome: "teste 2",
    marca: "Eletronicos AXO",
    preco: 250,
    nomeArquivoImagem: "prod03.jpg",
    feminino: true,
  },

  {
    id: "4",
    nome: "teste 3",
    marca: "Eletronicos AXO",
    preco: 250,
    nomeArquivoImagem: "prod04.jpg",
    feminino: false,
  },
  {
    id: " 5",
    nome: "teste 4",
    marca: "Eletronicos AXO",
    preco: 250,
    nomeArquivoImagem: "prod05.jpg",
    feminino: false,
  },
  {
    id: "6",
    nome: "teste 5",
    marca: "Eletronicos AXO",
    preco: 250,
    nomeArquivoImagem: "prod06.jpg",
    feminino: false,
  },
];

export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}
