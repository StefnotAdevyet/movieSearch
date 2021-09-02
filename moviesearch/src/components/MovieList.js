import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
  //console.log('props form mL: ', props.movies)
return (

  <div className="container">
    <div className="row">
      <div className="col s12">
      <ul>
        {
          props.movies.map((movie, i) => {
            return <Movie key={i} image={movie.poster_path} movie={movie} />
          })

        }
      </ul>

      </div>
    </div>
  </div>

)
}

export default MovieList;