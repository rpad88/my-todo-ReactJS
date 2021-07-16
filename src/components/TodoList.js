import React from 'react'

const TodoList = ({todos, setTodos}) => {

    const toggleComplete = (id) => {
        const updatedTodos = [...todos].map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })

        setTodos(updatedTodos)
    }

    const listItems = todos.map(todo => {
            return <li 
                        className={todo.completed ? 'completed' : ''} 
                        key={todo.id}
                    >
                        <input 
                            type="checkbox" 
                            onChange={() => toggleComplete(todo.id)}
                            checked={todo.completed} 
                        />
                        {todo.text}
                    </li>
        })
    

    return(
        <div className="todos-list">
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default TodoList