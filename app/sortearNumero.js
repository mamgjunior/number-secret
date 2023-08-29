const MENOR_VALOR = 1;
const MAIOR_VALOR = 1000;

const elementoMenorValor = document.querySelector('#manor-valor').innerHTML = MENOR_VALOR;
const elementoMaiorValor = document.querySelector('#maior-valor').innerHTML = MAIOR_VALOR;

const numeroSecreto = gerarNumeroAleatorio();
console.log('numero secreto: ', numeroSecreto);

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * (MAIOR_VALOR + 1));
}