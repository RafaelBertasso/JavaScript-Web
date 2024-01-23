const html = document.querySelector('html')
const focoBotao = document.querySelector('.app__card-button--foco')
const curtoBotao = document.querySelector('.app__card-button--curto')
const longoBotao = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const startPauseBotao = document.querySelector('#start-pause')
const iniciarOuPausarBotao = document.querySelector('#start-pause span')
const iniciarOuPausarBtIcone = document.querySelector(".app__card-primary-butto-icon")
const tempoNaTela = document.querySelector('#timer')

const musicaFocoInput = document.querySelector('#alternar-musica')
const musica = new Audio('sons/luna-rise-part-one.mp3') // ou readFile() "só será executado quando o arquivo for utilizado no projeto"
const audioPlay = new Audio('sons/play.wav')
const audioPausa = new Audio('sons/pause.mp3')
const audioTempoFinalizado = new Audio('sons/beep.mp3')

let tempoDecorridoEmSegundos = 1500
let intervaloId = null

musica.loop = true // a música entrará em loop

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play()
    }
    else {
        musica.pause()
    }
})

// adiciona um evento que será acionado sempre que um evento especifico aconteca (nesse caso, o clique)
// elemento.addEventListener(evento, callback)
focoBotao.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500
    //html.setAttribute('data-contexto', 'foco') // quando o evento da arrow function acontecer, será feita a substituicao no parametro 'data-contexto' do html, para 'foco'
    //banner.setAttribute('src', 'imagens/foco.png')
    alterarContexto('foco')
    //quando o botão for clicado, será adicionada a classe 'active'
    focoBotao.classList.add('active')
})

curtoBotao.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300
    //html.setAttribute('data-contexto', 'descanso-curto')
    // para mudar a imagem, o conceito é o mesmo, só muda o primeiro parâmetro, que se torna 'src', e o segundo se torna o caminho da imagem que será colocada no lugar
    //banner.setAttribute('src', 'imagens/descanso-curto.png')
    alterarContexto('descanso-curto')
    curtoBotao.classList.add('active')

})

longoBotao.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900
    //html.setAttribute('data-contexto', 'descanso-longo')
    //banner.setAttribute('src', 'imagens/descanso-longo.png')
    alterarContexto('descanso-longo')
    longoBotao.classList.add('active')
    
})

function alterarContexto (contexto) {
    mostrarTempo()
    // faz uma ação específica para todos os elementos que estão dentro da lista (botoes)
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            //innerHTML --> inserir textos, classes e tags e fazer listas
            titulo.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada? <br>
            <strong class="app__title-strong">Faça uma pausa curta </strong>`
            break;
        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície. <br> 
            <strong class="app__title-strong">Faça uma pausa longa </strong>`
            break;
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0) {
        audioTempoFinalizado.play()
        alert('Tempo Finalizado!')
        zerar()
        return
    }
    tempoDecorridoEmSegundos -= 1
    mostrarTempo()
}

startPauseBotao.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
    if (intervaloId) {
        audioPausa.play()
        zerar()
        return
    }
    audioPlay.play()
    //setInterval(metodo,tempo de execução (em segundos))
    //precisa ser criado um método de interromper a função para não ficar em um loop infinito
    intervaloId = setInterval(contagemRegressiva,1000)
    iniciarOuPausarBotao.textContent = "Pausar"
    iniciarOuPausarBtIcone.setAttribute('scr', 'imagens/pause.png')
}

function zerar() {
    clearInterval(intervaloId)
    iniciarOuPausarBotao.textContent = "Começar"
    iniciarOuPausarBtIcone.setAttribute('src', 'imagens/play_arrow.png')
    intervaloId = null
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute:'2-digit', second:'2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

mostrarTempo()
