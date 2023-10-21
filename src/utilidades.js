export const catalogo = [
  {
    id: "1",
    nome: "Blusa Cropped em Jeans Corsetado e Decote Coração",
    marca: "Renner",
    preco: 139.99,
    nomeArquivoImagem: "01.webp",
    feminino: true,
  },
  {
    id: "2",
    nome: "Vestido T-Shirt Básico Em Meia Malha Com Bolsinho Frontal Verde",
    marca: "Renner",
    preco: 89.99,
    nomeArquivoImagem: "02.webp",
    feminino: true,
  },

  {
    id: "3",
    nome: "Blazer Alongado em Linho Curve & Plus Size",
    marca: "Renner",
    preco: 339.99,
    nomeArquivoImagem: "03.webp",
    feminino: true,
  },

  {
    id: "4",
    nome: "vestido midi de tule floral manga bufante verde",
    marca: "C&A",
    preco: 179.99,
    nomeArquivoImagem: "04.webp",
    feminino: true,
  },
  {
    id: " 5",
    nome: "sapatilha bico quadrado mindset preto",
    marca: "C&A",
    preco: 129.99,
    nomeArquivoImagem: "05.webp",
    feminino: true,
  },
  {
    id: "6",
    nome: "Jaqueta Bomber com Bordado",
    marca: "Zara",
    preco: 479.0,
    nomeArquivoImagem: "06.jpg",
    feminino: false,
  },
  {
    id: " 7",
    nome: "Jaqueta Técnica com Capuz",
    marca: "Zara",
    preco: 59.99,
    nomeArquivoImagem: "07.jpg",
    feminino: false,
  },
  {
    id: "8",
    nome: "Camiseta ampla com gola redonda e manga curta.",
    marca: "Zara",
    preco: 199,
    nomeArquivoImagem: "08.jpg",
    feminino: false,
  },
  {
    id: " 9",
    nome: "Moleton com Capuz",
    marca: "Zara",
    preco: 269,
    nomeArquivoImagem: "09.jpg",
    feminino: false,
  },
  {
    id: "10",
    nome: "Blazer de Terno Com Textura",
    marca: "Zara",
    preco: 699.99,
    nomeArquivoImagem: "10.jpg",
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
