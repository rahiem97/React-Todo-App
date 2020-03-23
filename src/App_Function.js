import React, {createRef, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const containerStyle = {
  display:'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlight: 'center',
  marginRight: '25px'
}


function App() {
  let ref = createRef()
  let [todos, updateTodos] = useState([])
  let [currentTodo, updateCurrentTodo] = useState('')
  let addTodo = (e) => {
    e.preventDefault()
    let newTodoArray = todos.slice(0)
    newTodoArray.push(currentTodo)
    updateTodos(newTodoArray)
    ref.current.focus()
    ref.current.value = ''
  }
  let onChangeTodo = (e) => {
    updateCurrentTodo(e.target.value)
  }
  let deleteTodo = (index) => {
    let newTodoArray = todos.slice(0, index).concat(todos.slice(index + 1, todos.length))
    updateTodos(newTodoArray)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
      <form onSubmit={addTodo}>
          <input ref={ref} type='text' onChange={onChangeTodo}></input>
          <button type="submit">+</button>
        </form>
        </div>
        <div style={containerStyle}>
          <ol>
          {
            todos.map( (todo, index) => {
              return <li onClick={() => deleteTodo(index)}>{todo}</li>
            })
          }
          </ol>
        </div>
      </header>
    </div>
  );
}
export default App;