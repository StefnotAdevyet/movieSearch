import React from 'react';

const MovieInfo = (props) => {
  return  (
    <div className="container">
      <div className="row" onClick={props.closeMovieInfo} style={{ cursor: "pointer", paddingTop: 50}}>
        <i className="fas fa-arrow-left"></i>
        <span style={{marginLeft: 10}}>Go back</span>
      </div>
      <div className="row">
        {
          props.currentMovie.poster_path == null ? <img src="https://via.placeholder.com/150" alt="card-image" style={{ width: "100%", height: 360 }} /> :
          <img src={`http://image.tmdb.org/t/p/w185/${props.currentMovie.poster_path}`} alt="card-image" style={{ width: "100%", height: 360 }} />
        }
      </div>
    </div>
  )
}

export default MovieInfo;