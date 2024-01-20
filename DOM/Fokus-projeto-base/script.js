const html = document.querySelector('html')
const focoBotao = document.querySelector('.app__card-button--foco')
const curtoBotao = document.querySelector('.app__card-button--curto')
const longoBotao = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')

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
}