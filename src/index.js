import '../src/style.css';
import { Todo, TodoList } from "./classes/index.class";
import { crearTodoHtml } from './js/componentes';

 export const todolist = new TodoList();

const tarea1 = new Todo('Aprender JavaScript');
const tarea2 = new Todo('Aprender react');

todolist.nuevoTodo(tarea1);
todolist.nuevoTodo(tarea2);

// console.log(todolist)

crearTodoHtml(tarea1);
crearTodoHtml(tarea2);











