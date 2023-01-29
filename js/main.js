//braços >>>> buscando as variaveis para incremento e decremento - começando com somar pq o input começa com zero
const somar = document.querySelector("#somar");
const subtrair = document.querySelector("#subtrair");
const braco = document.querySelector("#braco");
//criando evento para somar atributos
somar.addEventListener("click", () => {manipulaDados('somar')});
//criando evento para subtrair atributos
subtrair.addEventListener("click", () => {manipulaDados('subtrair')});
//função para manupulação de dados dos atributos
function manipulaDados(operacao) {
  if (operacao === "somar") {
    braco.value = Number(braco.value) + 1;
  } else {
    braco.value = Number(braco.value) - 1;
  }
}
