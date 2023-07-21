import React, { useCallback } from 'react';
import { useTodos } from '../../context/todos/TodosProvider';

const Todo = (props) => {
    const { deleteTodo,saveEditableTodo,editableTodo,completeTodo}=useTodos()
    const {
        title,
        isCompleted,
        id
    }=props
    const handleDelete = useCallback(()=>{
        deleteTodo(id)
    }, [deleteTodo, id])
   
    const handleEdit=useCallback(()=>{
        saveEditableTodo({
            isCompleted,
            title,
            id
        })
    }, [editableTodo])

    const handleComplete=useCallback(()=>{
        completeTodo(id)
    },[completeTodo, id])
    return (
        <li>
            <input
             onChange={handleComplete}
                type='checkbox'
                checked={isCompleted}
                defaultChecked={isCompleted}
               
            />
            <span>{title}</span>
            <div className='btn'>
                <button onClick={handleEdit}>Изменить</button>
                <button onClick={handleDelete}>Удалить</button>
            </div>
        </li>
    );
};

export default Todo;