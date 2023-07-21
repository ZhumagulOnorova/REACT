import React, { useReducer, useContext, useCallback } from 'react';
import { TodosContext } from './TodosContext';

const initialState={
    todos:[],
    editableTodo: null
}
const reducer=(state=initialState, action)=>{
    switch (action.type) {
        case 'CREATE': {
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        }
        case 'DELETE': {
            return {
                ...state,
                todos: state.todos.filter(todo => {
                    return todo.id !== action.payload
                })
            }
        }
        case 'SAVE':{
            return {
                ...state,
                editableTodo: action.payload
            }
        }
        case 'EDIT':{
            return {
                ...state,
                todos:state.todos.map(todo=>{
                    if(todo.id===action.payload.id){
                        return action.payload
                    } 
                    return todo
                })
            }
        }
        
        case 'COMPLETE':{
            return {
                ...state,
                todos:state.todos.map(todo=>
                    todo.id === action.payload
                        ? {...todo, isCompleted:!todo.isCompleted} 
                        : todo
                )
            }
        }
        default: return state
    }
}
export const useTodos =()=> useContext(TodosContext)
const TodosProvider = ({ children }) => {
    const [store, dispatch] = useReducer( reducer, initialState)


    const createTodo=useCallback((newTodo)=>{
        const createAction={
            type:'CREATE',
            payload:newTodo
        }
        dispatch(createAction)
    },[])

    const deleteTodo = useCallback((id)=>{
        const deleteAction={
            type:'DELETE',
            payload:id
        }
        dispatch(deleteAction)
    },[])
    const saveEditableTodo=useCallback((editableTodo)=>{
        const saveAction={
            type:'SAVE',
            payload:editableTodo
        }
        dispatch(saveAction)
    },[])
    const editTodo=useCallback((editedTodo)=>{
        const editAction={
            type:'EDIT',
            payload:editedTodo
        }
        dispatch(editAction)
    },[])
    const completeTodo=useCallback((id)=>{
        const completeAction={
            type:'COMPLETE',
            payload:id
        }
        dispatch(completeAction)
    },[])

    const defaultValue={
        createTodo,
        deleteTodo,
        saveEditableTodo,
        editTodo,
        completeTodo,
        editableTodo:store.editableTodo,
        todoList:store.todos
    }
    return (
    <TodosContext.Provider 
        value={defaultValue}
    >
        {children}
    </TodosContext.Provider>
    );
};

export default TodosProvider;