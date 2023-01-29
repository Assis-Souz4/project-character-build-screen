//braços >>>> buscando as variaveis para incremento e decremento - começando com somar pq o input começa com zero
const somar = document.querySelector("#somar");
const subtrair = document.querySelector("#subtrair");
//variavel com todos os controles-ajuste
const controle = document.querySelectorAll('.controle-ajuste');

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
    })
})

//função para manupulação de dados dos atributos
function manipulaDados(operacao, controle) {
    const peca = controle.querySelector(".controle-contador");
  if (operacao === "-") {
    peca.value = Number(peca.value) - 1;
  } else {
    peca.value = Number(peca.value) + 1;
  }
}
