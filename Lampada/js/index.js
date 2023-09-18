//dom

const lampada = document.querySelector('#lampadApagada')
const btl = document.querySelector('#btLigar')
const btd = document.querySelector('#btDesligar')

//evento

btl.addEventListener('click',ligar)
btd.addEventListener('click',desligar)
lampada.addEventListener('click',quebrar)

//funções

function ligar(params) {

     lampada.src="imagens/acesa.gif"
}

function desligar(params){

    lampada.src="imagens/apagada.gif"
}

function quebrar(params){

    lampada.src="imagens/quebrada-removebg-preview.png"
}


