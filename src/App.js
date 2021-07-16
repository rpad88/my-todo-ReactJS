import React, { useState } from 'react'
import './App.css';

// Importing Components
import Form from './components/Form' 
import TodoList from './components/TodoList'

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])


  return (
    <div className="App">
      <h1>My Todo for Training</h1>
      <div className="form-input">
        <Form 
          setInputText={setInputText}
          inputText={inputText}
          todos={todos}
          setTodos={setTodos} 
        />

        {/* <p>{inputText}</p> */}

        <TodoList 
          todos={todos}
          setTodos={setTodos}
        />

        
      </div>
    </div>
  );
}

export default App;
