
const botaoAddTarefa = document.querySelector('.app__button--add-task')
const formAddTarefa = document.querySelector('.app__form-add-task')
const textArea = document.querySelector('.app__form-textarea')

const tarefas = []

function criarElementoTarefa(tarefa) {
    const li = document.createElement('li') // criar um elemento
    li.classList.add('app__section-task-list-item')

    const svg = document.createElement('svg')
    svg.innerHTML = `
    <svg>
    <svg id="app__section-task-icon-status" width ="24" heigth ="24" viewBox = "0 0 24 24" fill = "none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
        <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E">
        </path>
    </svg>
</svg>
`

const paragrafo = document.createElement('p')
paragrafo.textContent = tarefa.descricaoTarefa

const botao = document.createElement('button')
const imagemBotao = document.createElement('img')

imagemBotao.setAttribute('src', 'imagens/edit.png')
botao.append(imagemBotao)
li.append(svg)
li.append(paragrafo)
li.append(botao)
}

botaoAddTarefa.addEventListener('click', () => {
    //toggle -> se tem a classe, tira, se não tem, adiciona
    formAddTarefa.classList.toggle('hidden')
})

formAddTarefa.addEventListener('submit', (evento) => {
    //impede o comportamento padrão(não recarrega a página quando algo é submetido no formulario)
    evento.preventDefault()
    const tarefa = {
        descricaoTarefa: textArea.value
    }
    tarefas.push(tarefa)
    // localStorage = armazenamento local (API que permite interagir com o servidor de armazenamento local criado)
    // localStorage só trabalha com strings
    // setItem('item colocado', valor do item)
    localStorage.setItem('tarefas', JSON.stringify(tarefas)) // API JSON (.stringify())que pega a lista passada como objeto, e transforma em string
})
