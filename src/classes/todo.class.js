import {v4 as uuidv4} from 'uuid';
export class Todo{
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
}
