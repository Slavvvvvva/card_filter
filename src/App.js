
import './App.css';
import React from 'react'
import CardList from './component/Card-list/card-list'
import SearchField from './component/SeachField/SearchField';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(responce => responce.json())
      .then(users => this.setState({ monsters: users }))
  }

  Filter = (e) => this.setState({ searchField: e.target.value})

  render() {

    const {monsters, searchField} = this.state
    const filterdMonsters = monsters.filter( (monster) => {
      return monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    })

    return (
      <div className="App">
        <h1>Monster Finder</h1>
        <SearchField Filter ={this.Filter} placeholder='Search monster'/>
        <CardList monsters = {filterdMonsters}/>
      </div>
    )
  }
}

export default App;
