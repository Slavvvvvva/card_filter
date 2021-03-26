
import './App.css';
import React from 'react'
import CardList from './component/Card-list/card-list'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      monsters: []
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(responce => responce.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    return (
      <div className="App">
        <CardList monsters = {this.state.monsters}/>
      </div>
    )
  }
}

export default App;
