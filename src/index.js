import '../src/style.css';
import { Todo, TodoList } from "./classes/index.class";
import { crearTodoHtml } from './js/componentes';

 export const todolist = new TodoList();


// todolist.getTodoList.forEach(todo => crearTodoHtml(todo));
todolist.getTodoList.forEach(crearTodoHtml); // solo funciona si solo se le pasa un argumento

console.log('lista: ',todolist)




// esto me crea la key y el value para mi localStorage
/* 
localStorage.setItem('mi-key','ABC12345');
sessionStorage.setItem('my-key','123');

setTimeout(() => {
localStorage.removeItem('mi-key');

}, 1500); */








