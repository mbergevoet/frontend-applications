import React, { Component } from 'react';
import './App.css';
import Header from "./layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { v4 as uuidv4 } from 'uuid';


class App extends Component{
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Vuilnis buiten zetten",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Avondeten met vriendin",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Overleg met de baas",
        completed: false
      },
    ]
  };

  // Toggle Todo Complete
  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render(){ 
    console.log(this.state.todos);
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={ this.state.todos } toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo}/>
        </div>
      </div>
    );
  }
  
  
}

export default App;
