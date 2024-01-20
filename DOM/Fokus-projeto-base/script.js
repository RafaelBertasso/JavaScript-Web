const html = document.querySelector('html')
const focoBotao = document.querySelector('.app__card-button--foco')
const curtoBotao = document.querySelector('.app__card-button--curto')
const longoBotao = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')

// adiciona um evento que será acionado sempre que um evento especifico aconteca (nesse caso, o clique)
// elemento.addEventListener(evento, callback)
focoBotao.addEventListener('click', () => {
    //html.setAttribute('data-contexto', 'foco') // quando o evento da arrow function acontecer, será feita a substituicao no parametro 'data-contexto' do html, para 'foco'
    //banner.setAttribute('src', 'imagens/foco.png')
    alterarContexto('foco')
})

curtoBotao.addEventListener('click', () => {
    //html.setAttribute('data-contexto', 'descanso-curto')
    // para mudar a imagem, o conceito é o mesmo, só muda o primeiro parâmetro, que se torna 'src', e o segundo se torna o caminho da imagem que será colocada no lugar
    //banner.setAttribute('src', 'imagens/descanso-curto.png')
    alterarContexto('descanso-curto')
})

longoBotao.addEventListener('click', () => {
    //html.setAttribute('data-contexto', 'descanso-longo')
    //banner.setAttribute('src', 'imagens/descanso-longo.png')
    alterarContexto('descanso-longo')
})

function alterarContexto (contexto) {
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
        default:
            break;
    }
}
