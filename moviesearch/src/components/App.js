import '../App.css';
import React from 'react';
import Nav from './Nav';
import Search from './Search';
import MovieList from './MovieList';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: '',
      totalResults: 0,
      currentPage: 1,
      currentMovie: null
    }
    this.apiKey = 'b1a0a71e617a699ee81d319a065ed9ca'

  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
         .then((res) => {
           this.setState({
           movies: res.data.results
          })
        }
          )

  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
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
