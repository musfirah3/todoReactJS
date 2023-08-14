import React from 'react'
import {FaEdit} from 'react-icons/fa'
import { MdDelete}  from 'react-icons/md'
export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
 
  return (
    <div className="Todo">
        <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
          
        <FaEdit onClick={() => editTodo(task.id)} />
        <MdDelete onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}