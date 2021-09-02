import React from 'react';

const Movie = (props) => {
  console.log(props)

  return (
    <li>{props.movie.title}</li>
  )

}

export default Movie