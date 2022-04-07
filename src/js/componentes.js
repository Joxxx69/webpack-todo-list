import {Todo} from '../classes/index.class'
import { todolist } from '../index';

// Referencias en el HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');


export const  crearTodoHtml =(todo)=>{

    const htmlTodo = (`
        <li class="${(todo.getCompletado)? 'completed':''}" data-id="${todo.getId}">
            <div class="view">
                <input class="toggle" type="checkbox" ${(todo.getCompletado)?'checked':''}>
                <label>${todo.getTarea} </label>
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
        console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);
        todolist.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
    }
});

divTodoList.addEventListener('click',(e)=>{
    console.log(e.target.localName);
    const nombreElemento = e.target.localName;
    const todoElemento = e.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    console.log('todo id: ', todoId)
    console.log('todo Elemento: ',todoElemento)

    if(nombreElemento.includes('input')){
        todolist.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    }else if(nombreElemento.includes('button')){
        todolist.eliminarTodoOne(todoId);
        divTodoList.removeChild(todoElemento);
    }    
});

btnBorrar.addEventListener('click',()=>{
    todolist.eliminarCompletados();
})














