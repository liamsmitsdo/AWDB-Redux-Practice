import React, {Component} from 'react'

const Todo = function({task, removeTodo}) {
    return (
        <li>
            {task}
            <button onClick={removeTodo}>X</button>
        </li>
    )
}

export default Todo;