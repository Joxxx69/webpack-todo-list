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
}
