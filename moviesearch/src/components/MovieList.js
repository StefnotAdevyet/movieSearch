import React from 'react';

const MovieList = (props) => {
return (

  <div className="container">
    <div className="row">
      <div className="col s12">
      <ul>
        {
          props.movies.map(movie => {
            return <li>{movie.title}</li>
          })

        }
      </ul>

      </div>
    </div>
  </div>

)
}

export default MovieList;