const INPUT_CEP = document.getElementById("cep");
const INPUT_LOGRADOURO = document.getElementById("endereco");
const INPUT_NUMERO = document.getElementById("numero");
const INPUT_BAIRRO = document.getElementById("bairro");
const INPUT_CIDADE = document.getElementById("cidade");
const INPUT_UF = document.getElementById("uf");
const FEEDBACK = document.getElementById("feedback");

function validarCEP(cep) {
  if (!/^\d{8}$/.test(cep)) {
    throw new Error("CEP inválido. Insira um CEP válido (8 dígitos).");
  }
}

function exibirMensagemCarregamento() {
  FEEDBACK.innerText = "Buscando informações...";
}

function limparCampos() {
  INPUT_LOGRADOURO.value = "";
  INPUT_CIDADE.value = "";
  INPUT_UF.value = "";
}

function preencherCamposComDados(json) {
  INPUT_LOGRADOURO.value = json.logradouro;
  INPUT_CIDADE.value = json.localidade;
  INPUT_BAIRRO.value = json.bairro;
  INPUT_UF.value = json.uf;
  INPUT_NUMERO.focus();
}

function exibirErroMensagem(error) {
  console.error(error);
  FEEDBACK.innerText = "CEP não encontrado ou ocorreu um erro na busca.";
}

INPUT_CEP.addEventListener("keypress", async (event) => {
  try {
    let cep = INPUT_CEP.value;
    validarCEP(cep);
    exibirMensagemCarregamento();

    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    if (!response.ok) {
      throw new Error("CEP não encontrado");
    }

    const json = await response.json();

    limparCampos();
    preencherCamposComDados(json);

    FEEDBACK.innerText = "";
  } catch (error) {
    FEEDBACK.innerText = error.message;
  }
});
