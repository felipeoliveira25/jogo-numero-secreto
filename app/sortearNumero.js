let menorValor = 2
let maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número Secreto:', numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor


const valorMenorInput = document.getElementById('input-numero-menor')
const valorMaiorInput = document.getElementById('input-numero-maior')
const botaoMudarParametro = document.getElementById('btn-mudar-parametro')
const formMudarParametro = document.getElementById('form-mudar-numero')
botaoMudarParametro.addEventListener('click', () => {
    if(formMudarParametro.classList.contains('hidden')){
        formMudarParametro.classList.remove('hidden');
        botaoMudarParametro.textContent = "Cancelar"
    }else{
        formMudarParametro.classList.add('hidden')
        botaoMudarParametro.textContent = "Mudar Parâmetros"
    } 
})

formMudarParametro.addEventListener('submit', (e)=> {
    e.preventDefault();
    elementoMaiorValor.innerHTML = valorMaiorInput.value
    elementoMenorValor.innerHTML = valorMenorInput.value
    menorValor = valorMenorInput.value
    maiorValor = valorMaiorInput.value
    formMudarParametro.classList.add('hidden')
        botaoMudarParametro.textContent = "Mudar Parâmetros"


})

