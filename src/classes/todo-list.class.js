import { todolist } from "..";
import { Todo } from "./todo.class";

export class TodoList{
    #todos;
    constructor(){
        this.cargarLocalStorage();
    }
    nuevoTodo(todo){
        this.#todos.push(Todo.fromJson(todo));
        this.guardarLocalStorage();
    }
    eliminarTodoOne(id){
        this.#todos=this.#todos.filter(todo =>todo.getId != id);
        this.guardarLocalStorage();

    }
    marcarCompletado(id){
         this.#todos.find(todo =>{
            if(todo.getId === id) {
                todo.setCompletado = !todo.getCompletado;
                this.guardarLocalStorage();
            };
        })
    }
    eliminarCompletados(){
        this.#todos=this.#todos.filter(todo => !todo.getCompletado);
        this.guardarLocalStorage();
    }
    guardarLocalStorage(){
        console.log('guardar 1',this.#todos)
        const arreglo=[...this.#todos];
        for (let i in arreglo) {
            if(arreglo[i] instanceof Todo){
                const {getTarea,getId,getCompletado,getCreado} = arreglo[i];
                arreglo[i]= {tarea:getTarea, id:getId, completado:getCompletado, creado:getCreado}; 
            }
        }
        console.log('guardar 2', arreglo)

        localStorage.setItem('#todos', JSON.stringify(arreglo))
    }
 
    cargarLocalStorage(){
        this.#todos = (localStorage.getItem('#todos'))?
                       JSON.parse(localStorage.getItem('#todos')):[];
        console.log('this 1',this.#todos); 
        
        this.#todos = this.#todos.map(todo=>Todo.fromJson(todo));
        console.log('this 2',this.#todos); 
        
    }
    get getTodoList(){
        return this.#todos;
    }
}