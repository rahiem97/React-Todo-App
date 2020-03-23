import React, {createRef, useState} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  //This.state has 2 objects 
  //currentTodo which is an empty string for the purpose
  //todo which is an array that 
  //createRef is used to make a reference to an item to modify your state
  constructor() {
    super()
    this.inputElement = createRef()
    this.state = {
      currentTodo: '',
      todos: []
    }
  }
  //Add an event to the array 
  addTodo = (e) => {
    //Prevent the default opporation from happening 
    e.preventDefault()
    //Create a copy of the array to work with 
    //Push the currentToDO this shouldnt be empty 
    let newTodoArray = this.state.todos.slice(0)
    newTodoArray.push(this.state.currentTodo)
    //update the todo Array with the new array newTodoArray
    this.setState({
      todos: newTodoArray
    })
    //Set the focus back to the text input field and clear the input field
    this.inputElement.current.focus()
    this.inputElement.current.value = ''
  }

  //update the todo string to hold the value of the string passed into it 
  onChangeTodo = (e) => {
    this.setState({
      currentTodo: e.target.value
    })
  }

  //This is a pretty complex line here but i feel we can break it down
  //Understand what slice() and concat() javascript functions are doing
  deleteTodo = (index) => {
    // create a new array and slice the current todos array fromthe first item to the last item passed into our index.
    // Concatinate that sliced array with another another sliced array at the index spot +1
    // Essentially when the delete todo is called with index 5 newTodoArray becomes array 0-4 + 6-(length of full todo list) omitting position 5
    let newTodoArray = this.state.todos.slice(0, index).concat(this.state.todos.slice(index + 1, this.state.todos.length))
    //Set the state to the new array.
    this.setState({
      todos: newTodoArray
    })
  }

  //Render the components with the webpage with JSX the component layered inside a div and header.
  //Our component div contains some inline styling
  //onSubmit attatched to our form tag runs our function on enter.
  //Inside our ordered list the map function is key to printing all of the items in todos
  render () {
    return (
      //JSX

        <header >
        <form onSubmit={this.addTodo}>
            <input ref={this.inputElement} type='text' onChange={this.onChangeTodo}></input>
            <button type="submit">Add New Item</button>
          </form>

          <div style={{display:'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <ol>
            {
              this.state.todos.map( (todo, index) => {
                return <li onClick={() => this.deleteTodo(index)}>{todo}</li>
              })
            }
            </ol>
          </div>
        </header>
  
    )
  }
}
//Remember to export our App Component
export default App;