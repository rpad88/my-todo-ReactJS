import React from 'react'

const Form = ({setInputText, inputText, todos, setTodos}) => {
    // Here I can write javascript code and function
    const inputTextHandler = (e) => {
        e.preventDefault()
        // console.log(e.target.value);
        setInputText(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        //retorna a lista de Todos's e acrescenta o último.
        setTodos([
            ...todos, 
            {
                text: inputText,
                id: Date.now(),
                completed: false
            }
        ])

        setInputText("")
    }

    return(
        <form >
            <input 
                type="text"
                placeholder="Insert your Todo"
                // important to receive input text value after clear
                value={inputText}
                onChange={inputTextHandler}
            />
            <button type="submit" onClick={submitHandler} hidden></button>
        </form>
    )
}

export default Form