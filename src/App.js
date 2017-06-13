import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem'
//import TodoItem from './components/EmojidoItem'

class App extends Component {
  state = {
    items: [
      {
        id: '1',
        completed: false,
        description: 'Buy food'
      },
      {
        id: '2',
        completed: true,
        description: 'Invest in bitcoin'
      },
      {
        id: '3',
        completed: true,
        description: 'Win React'
      },
      {
        id: '4',
        completed: true,
        description: 'Ride the rollercoaster'
      },
      {
        id: '5',
        completed: false,
        description: 'Love JavaScript'
      }
    ]
  }

  // 1. User interaction
  // 2. Browser event
  // 3. Action handler
  // 4. Changes the state
  // 5. Rerenders our app
  // 6. Users see the updated user interface

  handleToggleCompleteItem = (idToChange) => {
    this.setState((prevState) => {
      // Update the correct item in the array
      const newItems = prevState.items.map((item) => {
        // Return updated item with matching id
        if (item.id === idToChange) {
          // Change it
          return {
            ...item, // Copy all key/values of original item
            completed: !item.completed // Set completed to new value
          }
        }
        else {
          return item
        }
      })

      return {
        // Hey update this.state.items to what’s in the items variable here
        items: newItems
      }
    })
    // this.setState(({ items }) => ({
    //   items: items.map((item) => (
    //     // Return updated item with matching id
    //     (item.id === idToChange) ? ({
    //       ...item, // Copy all key/values of original item
    //       completed: !item.completed // Set completed to new value
    //     }) : (
    //       item
    //     )
    //   ))
    // }))
  }

  handleChangeItemDescription = (idToChange, newDescription) => {
    this.setState((prevState) => {
      // Update the correct item in the array
      const newItems = prevState.items.map((item) => {
        // Return updated item with matching id
        if (item.id === idToChange) {
          // Change it
          return {
            ...item, // Copy all key/values of original item
            description: newDescription // Set completed to new value
          }
        }
        else {
          return item
        }
      })

      return {
        // Hey update this.state.items to what’s in the items variable here
        items: newItems
      }
    })
  }

  render() {
    const items = this.state.items
    const incompleteItems = items.filter((item) => {
      // completed == false
      return !item.completed
    })
    const completeItems = items.filter((item) => {
      // completed == true
      return item.completed
    })
    return (
      <main>
        <h1>Emojido</h1>
        <h2>Incomplete</h2>
        {
          incompleteItems.map((item) => {
            return (
              <TodoItem
                { ...item }
                onToggleComplete={
                  (event) => {
                    this.handleToggleCompleteItem(item.id)
                  }
                }
                onChangeDescription={
                  (event) => {
                    // My live <input> the user interacted with
                    const htmlInput = event.target
                    // Get the current value from the <input>
                    const newDescription = htmlInput.value
                    // Call our handler method, which updates the state
                    this.handleChangeItemDescription(item.id, newDescription)
                  }
                }
              />
            )
          })
        }
        <h2>Completed</h2>
        {
          completeItems.map((item) => {
            return (
              <TodoItem
                { ...item }
                onToggleComplete={
                  (event) => {
                    this.handleToggleCompleteItem(item.id)
                  }
                }
                onChangeDescription={
                  (event) => {
                    // My live <input> the user interacted with
                    const htmlInput = event.target
                    // Get the current value from the <input>
                    const newDescription = htmlInput.value
                    // Call our handler method, which updates the state
                    this.handleChangeItemDescription(item.id, newDescription)
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
