function verificaSeChutePossuiValorValido(chute) {
    const numero = +chute;

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
    }

    if (numeroDiferenteDoValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${MENOR_VALOR} e ${MAIOR_VALOR}</div>`;
    }

    if (acertou(numero)) {
        document.body.innerHTML = `
            <h2>Você acertou!!!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id='jogar-novamente' class='btn-jogar'>Jogar Novamente</button>
        `;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`;
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`;
    }
}

function acertou(numero) {
    return numero === numeroSecreto;
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroDiferenteDoValorPermitido(numero) {
    return (numero > MAIOR_VALOR || numero < MENOR_VALOR);
}

document.body.addEventListener('click', (e) => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})