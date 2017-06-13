import React, { Component } from 'react';
import './App.css';
//import TodoItem from './components/TodoItem'
import TodoItem from './components/EmojidoItem'

class App extends Component {
  state = {
    items: [
      {
        completed: false,
        description: 'Buy food'
      },
      {
        completed: true,
        description: 'Invest in bitcoin'
      }
    ]
  }

  // 1. User interaction
  // 2. Browser event
  // 3. Action handler
  // 4. Changes the state
  // 5. Rerenders our app
  // 6. Users see the updated user interface

  handleToggleCompleteItem = (index) => {
    this.setState((prevState) => {
      const newItems = prevState.items
      // Update the correct item in the array
      newItems[index].completed = !newItems[index].completed

      return {
        // Hey update this.state.items to what’s in the items variable here
        items: newItems
      }
    })
  }

  handleChangeItemDescription = (index, newDescription) => {
    this.setState((prevState) => {
      const newItems = prevState.items
      // Update the correct item in the array
      newItems[index].description = newDescription

      return {
        // Hey update this.state.items to what’s in the items variable here
        items: newItems
      }
    })
  }

  render() {
    const items = this.state.items
    return (
      <main>
        <h1>Emojido</h1>
        {
          items.map((item, itemIndex) => {
            return (
              <TodoItem
                { ...item }
                onToggleComplete={
                  (event) => {
                    this.handleToggleCompleteItem(itemIndex)
                  }
                }
                onChangeDescription={
                  (event) => {
                    // My live <input> the user interacted with
                    const htmlInput = event.target
                    // Get the current value from the <input>
                    const newDescription = htmlInput.value
                    // Call our handler method, which updates the state
                    this.handleChangeItemDescription(itemIndex, newDescription)
                  }
                }
              />
            )
          })
        }
      </main>
    );
  }
}

export default App;
