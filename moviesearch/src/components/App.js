import '../App.css';
import React from 'react';
import Nav from './Nav';
import Search from './Search';
import MovieList from './MovieList';
import axios from 'axios';
import Pagination from './Pagination';
import MovieInfo from './MovieInfo';


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
    this.apiKey = process.env.REACT_APP_API

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

  viewDetails = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id === id)

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;

    this.setState({
      currentMovie: newCurrentMovie
    })
  }

  closeMovieInfo = () => {
    this.setState({
      currentMovie: null
    })
  }

  render() {

    const numberPages = Math.floor(this.state.totalResults / 20);

  return (

    <div className="App">
      <Nav />
      {this.state.currentMovie == null ?
      <div>

        <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <MovieList viewDetails={this.viewDetails} movies={this.state.movies} />
      </div>
      :
      <MovieInfo currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo} />
      }
      {
        this.state.totalResults > 20 && this.state.currentMovie === null ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} />
          : ''
      }
    </div>

  );
  }
}

export default App;
