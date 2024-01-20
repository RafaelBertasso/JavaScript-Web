/* Colocar a tag <script> sempre  no final do body */

// coloca todos os elementos dessa classe em uma lista
// document.querySelectorAll('.nomeClasse')

function tocarSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio)

    if (elemento && elemento.localName === 'audio') {
        elemento.play()
    }
    else {
        console.log('Elemento não existente ou seletor inválido')
    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla')

for (let count = 0; count < listaDeTeclas.length; count++) {
    const tecla = listaDeTeclas[count]
    const instrumento = tecla.classList[1]

    //template string
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocarSom(idAudio)
    }
    
    // quando uma tecla do teclado é apertada
    tecla.onkeydown = function(evento) {
        
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa')
        }
        
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa')
    }

}
