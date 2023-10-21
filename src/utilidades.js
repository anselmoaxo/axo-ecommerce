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

export function apagarDoLocalStorage(chave) {
  localStorage.removeItem(chave);
}

export function desenharProdutoCarrinhoSimples(
  idProduto,
  idContainerHtml,
  quantidadeProduto
) {
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho = document.getElementById(idContainerHtml);

  const elementoArticle = document.createElement("article"); //<article></article>
  const articleClasses = [
    "flex",
    "bg-stone-200",
    "rounded-lg",
    "p-1",
    "relative",
    "mb-2",
    "w-96",
  ];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }
  //<article class="flex bg-slate-100 rounded-lg p-1 relative"></article>

  const cartaoProdutoCarrinho = `
    <img
      src="./assets/img/${produto.nomeArquivoImagem}"
      alt="Carrinho: ${produto.nome}"
      class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">
        ${produto.nome}
      </p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$${produto.preco}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
        <p id='quantidade-${produto.id}' class='ml-2'>${quantidadeProduto}</p>
    </div>`;
  //<article class="flex bg-slate-100 rounded-lg p-1 relative">codigo do cartao do produto</article>

  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);
}
