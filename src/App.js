import React from 'react';
import Cardlist from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/search-box.component';


class App extends React.Component{

  constructor(){
    super();
    this.state={
      monsters : [
        
      ],
      searchField : ''

     };

  }
  handleChange = (e) =>  {
    this.setState( {searchField : e.target.value} )  ;

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {  return response.json();  } )
    .then( (arr) => { this.setState({monsters : arr}); });
    

  }
  
  render()
  {
    const {monsters, searchField}= this.state;
    const filteredmonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
          <h1>Monsters Rolodex</h1>
          
        <SearchBox  eventHandler = {this.handleChange} placeholder="search here" />

        <Cardlist monsters={filteredmonsters}> </Cardlist>
      </div>
    );
  }
}

export default App;
