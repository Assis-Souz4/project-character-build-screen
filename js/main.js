//braços >>>> buscando as variaveis - começando com somar pq o input começa com zero
const somar = document.querySelector('#somar')
const subtrair = document.querySelector('#subtrair')
const braco = document.querySelector('#braco')

somar.addEventListener('click', (evento) => {
    braco.value = Number(braco.value) +1
})
subtrair.addEventListener('click', (evento) => {
    braco.value = Number(braco.value) -1
})