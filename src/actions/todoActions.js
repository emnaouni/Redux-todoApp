import {ADD_TODO} from "./types"
import {REMOVE_TODO} from "./types"
import {CHANGE_TODO} from "./types"
export const addTodo=(newTodo)=>{
    return{
    type: ADD_TODO,
    payload : newTodo
    }
}
export const removeTodo=(id)=>{
    return{
    type: REMOVE_TODO,
    payload : id
    }
}
export const changeTodo=(id)=>{
    return{
    type: CHANGE_TODO,
    payload : id
    }
}