import {Todo} from '../classes/index.class'
import { todolist } from '../index';

// Referencias en el HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulListaFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');


export const  crearTodoHtml =(todo)=>{

    const htmlTodo = (`
        <li class="${((todo.getCompletado)? 'completed':'')|| ((todo.completado)?'completed':'')}" data-id="${todo.getId || todo.id}">
            <div class="view">
                <input class="toggle" type="checkbox" ${((todo.getCompletado)?'checked':'')||(todo.completado)?'checked':''}>
                <label>${todo.getTarea || todo.tarea} </label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `);

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;

}

//Eventos

txtInput.addEventListener('keyup',(e)=>{
    if(e.code === 'Enter' && txtInput.value.length > 0){
        const nuevoTodo = new Todo(txtInput.value);
        const {getTarea,getId,getCompletado,getCreado} = nuevoTodo;
        todolist.nuevoTodo({tarea:getTarea, id:getId, completado:getCompletado, creado:getCreado});
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
    }
});

divTodoList.addEventListener('click',(e)=>{
    console.log(e.target.localName);
    const nombreElemento = e.target.localName;
    const todoElemento = e.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');
    if(nombreElemento.includes('input')){
        todolist.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    }else if(nombreElemento.includes('button')){
        todolist.eliminarTodoOne(todoId);
        divTodoList.removeChild(todoElemento);
    } 
    console.log(todolist)   
});

btnBorrar.addEventListener('click',()=>{
    todolist.eliminarCompletados();
    for(let i = divTodoList.children.length -1; i>=0; i--){
        const  elemento = divTodoList.children[i];

        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }

    }
})

ulListaFiltros.addEventListener('click',(e)=>{
    console.log(e.target.text);
    const filtro = e.target.text;
    if(!filtro){return;}

    anchorFiltros.forEach(elemento => elemento.classList.remove('selected'));
    e.target.classList.add('selected');

    console.log(e.target)

    for (const elemento of divTodoList.children) {
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');   
        switch (filtro) {
            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if(!completado){
                    elemento.classList.add('hidden');
                }
                break;
            default:
                break;
        }
        
        
    }


});












