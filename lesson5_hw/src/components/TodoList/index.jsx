import React from 'react';
import { useTodos } from '../../context/todos/TodosProvider';
import Todo from '../Todo'

const TodoList = () => {
    const {todoList}=useTodos()
    return todoList?.length ? (
       <ul>
        {todoList.map(todo=>(
            <Todo
                title={todo.title}
                isCompleted={todo.isCompleted}
                id={todo.id}
                key={todo.id}
            />
        ))}
       </ul>
    ) : (
        <div>Пусто, добавьте новые задачи</div>
    )
};

export default TodoList;