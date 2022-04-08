import {v4 as uuidv4} from 'uuid';
export class Todo{
    static fromJson({id,tarea,completado,creado}){
        const tempTodo = new Todo(tarea);
        tempTodo.setTarea =tarea;
        tempTodo.setId = id;
        tempTodo.setCompletado = completado;
        tempTodo.setCreado = creado;

        return tempTodo;
    }
    #tarea='';
    #id='';
    #completado='';
    #creado='';
    constructor(tarea){
        this.#tarea = tarea;
        this.#id = uuidv4();
        this.#completado = false;
        this.#creado = new Date();
    }

    get getTarea(){
        return this.#tarea;
    }
    get getCompletado(){
        return this.#completado;
    }
    get getCreado(){
        return this.#creado;
    }
    get getId(){
        return this.#id;
    }
    set setCompletado(completado){
        this.#completado = completado
    }
    set setTarea(tarea){
        this.#tarea = tarea;
    }
    set setId(id){
        this.#id = id
    }
    set setCreado(creado){
        this.#creado = creado;
    }
}
