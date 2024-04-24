import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '.todoReducer'


const init = () => {

    return JSON.parse (localStorage.getItem('todos')) || []; //si el valor de localstorage es nulo, estonces devuelve un arreglo vacio
}
export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [],init) //el arreglo vacio seria el initialstate

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos))
        }, [todos])//useefectsnipped y quito second

    const handleNewTodo = (todo) => {
        const action = {
          type: '[TODO Add Todo]',
          payload: todo 
                       }
dispatch(action)
        console.log({todo})
    }
    const handleDeleteTodo = (id) => {
        console.log({id})
dispatch({
          type: '[TODO Remove Todo]',
           payload: id 
                       

  });
}
    const handleToggleTodo = (id) => {
        
       dispatch({
       type: '[TODO Toggle Todo]',
       payload: id 
                       

     });

}


return {
    todosCount: todos.length,
pendingTodosCount: todos.filter(todo => !todo.done).length,
    todos, 
handleNewTodo,
handleDeleteTodo,
handleToggleTodo


}
}
