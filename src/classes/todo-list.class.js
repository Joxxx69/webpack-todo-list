export class TodoList{
    #todos;
    constructor(){
        this.#todos = [];

    }
    nuevoTodo(todo){
        this.#todos.push(todo);
    }
    eliminarTodoOne(id){
        this.#todos=this.#todos.filter(todo => todo.getId != id);

    }
    marcarCompletado(id){
        this.#todos.find(todo =>{
            if(todo.getId === id) {todo.setCompletado = !todo.getCompletado};
        })
    }
    eliminarCompletados(){
        this.#todos=this.#todos.filter(todo => !todo.getCompletado);

    }
    get getTodoList(){
        return this.#todos;
    }
}