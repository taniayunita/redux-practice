import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'


const TodoList = () => {
    const todos = useSelector((state) => {
        return state.tasks
    })
  return (
    <div>
        <ul>
            {todos.map((todo) => (
                <TodoItem id={todo.id} title={todo.name} completed={todo.status}/>
            ))}
        </ul>
        
    </div>
  )
}

export default TodoList