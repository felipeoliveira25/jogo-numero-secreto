const valorMenorInput = document.getElementById('input-numero-menor')
const valorMaiorInput = document.getElementById('input-numero-maior')
let menorValor = 1
let maiorValor = 1000
let numeroSecreto = gerarNumeroAleatorio(maiorValor)
const elementoMaiorValor = document.getElementById('maior-valor')
const elementoMenorValor = document.getElementById('menor-valor')
const botaoMudarParametro = document.getElementById('btn-mudar-parametro')
const formMudarParametro = document.getElementById('form-mudar-numero')

formMudarParametro.addEventListener('submit', (e)=> {
    e.preventDefault();
    elementoMaiorValor.innerHTML = valorMaiorInput.value
    elementoMenorValor.innerHTML = valorMenorInput.value
    menorValor = valorMenorInput.value
    maiorValor = valorMaiorInput.value
    formMudarParametro.classList.add('hidden')
    botaoMudarParametro.textContent = "Mudar Parâmetros";
    alert("Número sorteado!!!! Vamos jogar!")
    numeroSecreto = gerarNumeroAleatorio(maiorValor)
    console.log(numeroSecreto)
    
    
    
})






function gerarNumeroAleatorio(valor) {
    return parseInt(Math.random() * valor + 1)
}

console.log('Número Secreto:', numeroSecreto)









//mostrar ou tirar o form que muda os parâmetros

botaoMudarParametro.addEventListener('click', () => {
    if(formMudarParametro.classList.contains('hidden')){
        formMudarParametro.classList.remove('hidden');
        botaoMudarParametro.textContent = "Cancelar"
    }else{
        formMudarParametro.classList.add('hidden')
        botaoMudarParametro.textContent = "Mudar Parâmetros"
    } 
})
///////////////////////////////////////////////////////////////////////////////////
