const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const completa = document.querySelector('.list-tasks')

let lista = []

function addTarefa(){
    lista.push({
        tarefa: input.value,
        concluida: false
    })

    input.value= ''
    mostrar()
}

function mostrar(){

    let NovaLi = '' 
    lista.forEach((item, index) => {

        NovaLi = NovaLi + `

        <li class="task ${item.concluida && "done"}">
            <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluir(${index})">
             <p>${item.tarefa}</p>
            <img src="./img/trash.png" alt="tarefa-para-lixo" onclick="deletar(${index})">
        </li>

        `
        
    })

completa.innerHTML = NovaLi

localStorage.setItem('Lista', JSON.stribgfy(lista))
}

function concluir(index){
    lista[index].concluida =  !lista[index].concluida

    mostrar()
}

function deletar(index){
    lista.splice(index, 1)
    mostrar()
}

function recarrega(){
    const tarefaStorage = localStorage.getItem('Lista')

    if(tarefaStorage) {
        lista = JSON.parse(tarefaStorage)
    }
   
    mostrar()
}


button.addEventListener('click', addTarefa)