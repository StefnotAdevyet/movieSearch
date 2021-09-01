import '../App.css';
import React from 'react';
import Nav from './Nav';
import Search from './Search';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: ''
    }
    this.apiKey = process.env.APP_API
  }

  handleSubmit = (e) => {

  }

  handleChange = (e) => {
    console.log(e.target.value)
  }

  render() {
  return (
    <div className="App">
      <Nav />
      <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>

    </div>
  );
  }
}

export default App;
