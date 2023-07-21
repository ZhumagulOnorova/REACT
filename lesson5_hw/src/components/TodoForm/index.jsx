import React, { useCallback, useEffect, useState } from 'react';
import { useTodos } from '../../context/todos/TodosProvider';

const initialValueState=''
const TodoForm = () => {
    const {createTodo, editableTodo, editTodo, saveEditableTodo}=useTodos()
    const [value, setValue] =useState(initialValueState)

    useEffect(()=>{
        if(editableTodo){
            setValue(editableTodo.title)
        }
    },[editableTodo])
    const handleChange= useCallback((event)=>{
        setValue(event.target.value)
    },[])

    const handleSubmit= (event)=>{

        event.preventDefault()
        
        if(editableTodo){
            const editedTodo={
                ...editableTodo,
                title:value
            }
            editTodo(editedTodo)
            saveEditableTodo(null)
        } else{
            const newTodo={
                title:value,
                id: Date.now(),
                isCompleted:false
            }
            createTodo(newTodo)
        }
        setValue(initialValueState)
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <input
                value={value}
                onChange={handleChange}
            />
            <button
                type='submit'
            > 
                { editableTodo ? 'Изменить' : 'Добавить' }
            </button>
        </form>
    );
};

export default TodoForm;