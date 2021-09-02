import React from 'react';

const Movie = (props) => {
  console.log(props)

  return (
    <div className="col s12 m6 l3">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          {
            props.image == null ? <img src="https://via.placeholder.com/150" alt="card-image" style={{ width: "100%", height: 360 }} /> :
              <img src={`http://image.tmdb.org/t/p/w185/${props.image}`} alt="card-image" style={{ width: "100%", height: 360 }} />
          }
        </div>
        <div className="card-content">
        <p href="#">View Details</p>
        </div>
      </div>
    </div>
  )

}

export default Movie