
import React, { Component } from 'react'
import CardList from './component/Card-List/Card-List'
import { SearchBox } from './component/Search-Box/SearchBox'
import './App.css'
 class App extends Component {
  constructor(){
    super()
  this.state={
    monsters:[],
    searchField:''
  }
  } 
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(users=>this.setState({monsters:users}))
}
    render() {
      const {monsters,searchField}=this.state
      const filteredmonster=monsters.filter(monster=>(
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      ))
      console.log(this.state)
        return (
            <div className="App">
              <h1>Monster Rodelx</h1>
              <SearchBox placeholder="Search" HandleChange={(e)=>this.setState({searchField:e.target.value})}></SearchBox>
                <CardList monsters={filteredmonster}>
        
               </CardList>
            </div>
        )
    }
}
export default App;