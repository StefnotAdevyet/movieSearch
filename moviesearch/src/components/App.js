import '../App.css';
import React from 'react';
import Nav from './Nav';
import Search from './Search';
import MovieList from './MovieList';
import axios from 'axios';
import Pagination from './Pagination';


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
           movies: res.data.results,
           totalResults: res.data.total_results
          })
        }
          )

  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  nextPage = (pageNumber) => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
         .then((res) => {
           this.setState({
           movies: res.data.results,
           currentPage: pageNumber,
          })
        }
          )
  }

  render() {

    const numberPages = Math.floor(this.state.totalResults / 20);

  return (

    <div className="App">
      <Nav />
      <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      <MovieList movies={this.state.movies} />
      <Pagination />
    </div>

  );
  }
}

export default App;
